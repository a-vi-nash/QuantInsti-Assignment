"use strict";
const express = require("express"),
    router = express.Router(),
    mongoose = require("mongoose"),
    Orders = require("../models/Orders_Model"),
    schema = require("../controllers/schema");

/**
 * save the order data
 */
router.post(
    "/",
    global.expressJoi.joiValidate(schema.OrderPOST),
    (req, res) => {
        let orderData = req.body;
        let order = new Orders(orderData);
        //save order
        return order.save().then(
            result => {
                console.log(result)
                return res
                .status(global.config.default_success_http_code)
                .json({
                    responseCode: global.config.default_success_http_code,
                    responseDesc: global.config.default_success_message,
                    result:result
                  })
                .send();
            })
            .catch(error => {
                throw error;
            });


    }
);


module.exports = router;