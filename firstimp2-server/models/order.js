const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },
        count: Number,
        color: String,
      },
    ],
    paymentIntent: {
     
    },
    orderStatus: {
      type: String,
      default: "Not Processed",
      enum: [
        "Not Processed",
        "Processing",
        "Dispatched",
        "Delivered",
        "Cancelled",
      ],
    },
    shippingInfo: {},
    // shippingInfo: {
    //   address: {
    //     type: String,
    //     required: true,
    //   },
    //   city: {
    //     type: String,
    //     required: true,
    //   },

    //   state: {
    //     type: String,
    //     required: true,
    //   },

    //   country: {
    //     type: String,
    //     required: true,
    //   },
    //   pinCode: {
    //     type: Number,
    //     required: true,
    //   },
    //   phoneNo: {
    //     type: Number,
    //     required: true,
    //   },
    // },

    orderedBy: { type: ObjectId, ref: "User" },
    userEmail: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
