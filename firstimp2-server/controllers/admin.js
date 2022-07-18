const Order = require("../models/order");
const slugify = require("slugify");
const SliderImage = require("../models/sliderImage");

exports.orders = async (req, res) => {
  let allOrders = await Order.find({})
    .sort("createdAt")
    .populate("products.product")
    .exec();

  res.json(allOrders);
};

exports.orderStatus = async (req, res) => {
  const { orderId, orderStatus } = req.body;

  let updated = await Order.findByIdAndUpdate(
    orderId,
    { orderStatus },
    { new: true }
  ).exec();

  res.json(updated);
};



// exports.uploadSliderImage = async (req, res) => {
//   try {
//     console.log(req.body);
//     res.json(await new sliderImg(req.body).save());
//   } catch (err) {
//     console.log(err);
//     // res.status(400).send("Create Product Failed");
//     res.status(400).json({
//       err: err.message,
//     });
//   }
// };

// exports.uploadSliderImage = async (req, res) => {
//   let SliderImage = await SliderImg.update(
   
//     { SliderImage: req.body.sliderImages }
//   ).exec();

//   if (SliderImage) {
//     res.json({ ok: true });
//   }
// };

exports.uploadSliderImage = async (req, res) => {
  const { name } = req.body;
  try {
    const updated = await SliderImage.updateOne(
      
      { name },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("image upload update failed");
  }
};