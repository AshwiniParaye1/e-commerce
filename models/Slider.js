const mongoose = require("mongoose");

const SliderSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    bg: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Slider", SliderSchema);
