"use strict";
const express = require("express"),
    router = express.Router(),
    mongoose = require("mongoose"),
    Order = require("../models/Order_Model"),
    schema = require("../controllers/schema");

/**
 * save the order data
 */
router.post(
    "/",
    global.expressJoi.joiValidate(schema.OrderPOST),
    (req, res) => {
        let orderData = req.body;
        let order = new Order(saveData);

        //save order
        return order.save().then(
            result => {
                return res
                .status(default_success_http_code)
                .json({
                    responseCode: global.config.default_success_http_code,
                    responseDesc: global.config.default_success_message,
                    message:result
                  })
                .send();
            })
            .catch(error => {
                throw error;
            });


    }
);


module.exports = router;