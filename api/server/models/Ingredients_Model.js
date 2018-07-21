/**
 * Module dependencies
 */
const Mongoose = require("mongoose"),
  Types = Mongoose.Schema.Types

/**
 * Ingredients Schema
 */
const modelName = "Ingredients";

var IngredientsItems = new Mongoose.Schema({
  item:{
      type: Types.String
  },
  price:{
      type: Types.Number
  }
});


const IngredientsSchema = new Mongoose.Schema(
  {
    ingredientsType: {
      type: Types.String,
      unique: true,
      required: true
    },
    items: {
      type: [IngredientsItems]
    },
    sortOrder:{
      type: Types.Number
    },
    min:{
      type: Types.Number
    },
    max:{
      type: Types.Number
    }
  },
  { timestamps: true }
);


module.exports = Mongoose.model("Ingredients", IngredientsSchema);
