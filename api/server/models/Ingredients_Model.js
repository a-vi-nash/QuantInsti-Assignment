/**
 * Module dependencies
 */
const Mongoose = require("mongoose"),
  path = require("path"),
  Types = Mongoose.Schema.Types

/**
 * Ingredients Schema
 */
const modelName = "Ingredients";

const IngredientsSchema = new Mongoose.Schema(
  {
    IngredientsName: {
      type: Types.String,
      unique: true,
      required: true,
    },
    icon: {
      type: Types.String
    },
    sortOrder:{
      type: Types.Number
    }
  },
  { timestamps: true }
);


module.exports = Mongoose.model("Ingredients", IngredientsSchema);
