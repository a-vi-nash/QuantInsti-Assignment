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

var Address = new Mongoose.Schema({
  billingAddress: {
    type: AddressDetails,
    required: true
  },
  serviceAddress: {
    type: AddressDetails,
    required: true
  },
  isActive: {
    type: Types.Boolean,
    default: true
  },
  customerNo: {
    type: Types.String
  },
  customerGuid: {
    type: Types.String
  },
  isBillingAddressSameAsServiceAddress: {
    type: Types.Boolean,
    default: false
  }
},
  { timestamps: true });

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
    },
    address: [Address],
  },
  { timestamps: true }
);


module.exports = Mongoose.model("Ingredients", IngredientsSchema);
