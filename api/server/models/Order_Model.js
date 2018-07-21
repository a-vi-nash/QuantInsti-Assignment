/**
 * Module dependencies
 */
const Mongoose = require("mongoose"),
  Types = Mongoose.Schema.Types

/**
 * Order Schema
 */
const modelName = "Order";

var Address = new Mongoose.Schema({
    addressLine1:{
        type: Types.String
    },
    addressLine2:{
        type: Types.String
    },
    city:{
        type: Types.String
    },
    zipCode:{
        type: Types.String
    }
  });

var PizzaIngredients = new Mongoose.Schema({
    type:{
        type: Types.String
    },
    items:[Types.String]
});

var OrderDetails = new Mongoose.Schema({
    details:{
        type: [PizzaIngredients],
        required:true
    },
    totalPrice:{
        type: Types.Number
    },
    couponApplied:{
        type: Types.String
    },
    finalPrice:{
        type: Types.Number
    }

});

const OrderSchema = new Mongoose.Schema(
    {
      name: {
        type: Types.String,
        required: true
      },
      address:{
        type: Address,
        required: true
      },
      phoneNo:{
        type: Types.String,
        required: true
      },
      orderDetails:{
          type: OrderDetails,
          required: true
      }
    },
    { timestamps: true }
  );
  
  
  module.exports = Mongoose.model("Order", OrderSchema);