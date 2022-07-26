const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const sliderImageSchema = new mongoose.Schema(
  {
    images: {
        type: Array,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SliderImage", sliderImageSchema);
