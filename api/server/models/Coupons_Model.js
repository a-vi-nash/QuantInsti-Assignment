/**
 * Module dependencies
 */
const Mongoose = require("mongoose"),
  Types = Mongoose.Schema.Types

/**
 * Coupons Schema
 */
const modelName = "Coupons";

const CouponsSchema = new Mongoose.Schema(
    {
      couponCode: {
        type: Types.String,
        unique: true,
        required: true
      },
      discount: {
        type: Types.Number,
        required: true
      }
    },
    { timestamps: true }
  );
  
  
  module.exports = Mongoose.model("Coupons", CouponsSchema);