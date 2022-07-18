const Product = require("../models/product");
const User = require("../models/user");
const Cart = require("../models/cart");
const Coupon = require("../models/coupon");
const Razorpay = require("razorpay");
const uniqueId = require("uniqid");

var instance = new Razorpay({
    key_id: 'rzp_test_LSBeoAbLfmucLN',
    key_secret: 'CSTuv6ZNpmu554oRiXPKoyEk',
  });

exports.createPaymentsIntegs = async (req, res) => {
    const { couponApplied } = req.body;
    console.log(couponApplied);
  
    //cart total
    let user = await User.findOne({ email: req.user.email }).exec();
  
    const { cartTotal, totalAfterDiscount } = await Cart.findOne({
      orderedBy: user._id,
    }).exec();
  
    // console.log("CART total ==> ", totalAfterDiscount);
  
    let finalAmount = 0;
  
    if (couponApplied && totalAfterDiscount) {
      finalAmount = (totalAfterDiscount * 100)
    } else {
      finalAmount = (cartTotal * 100)
    }
  
    //discount total whether coupon applied
  
    //payments intent by applying order amount and currency
  
    await instance.orders.create({
      amount: finalAmount,
      currency: "INR",
      receipt:uniqueId()
    },
    function(err, order){
        if (err){
            return res.status(500).json({
                error:err
            })
        }
        res.json({order,cartTotal,
            totalAfterDiscount,
            payable: finalAmount})
    }
    );
  
    // res.send({
    //   clientSecret: createPaymentIntent.client_secret,
    //   cartTotal,
    //   totalAfterDiscount,
    //   payable: finalAmount
    // });
  };
 
  