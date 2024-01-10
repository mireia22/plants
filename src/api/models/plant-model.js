const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    color: { type: String },
    height: { type: Number },
    plantingDate: { type: Date },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Plant = mongoose.model("plant", plantSchema, "plant");

module.exports = Plant;
