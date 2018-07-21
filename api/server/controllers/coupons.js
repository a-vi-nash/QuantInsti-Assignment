"use strict";
const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  Coupons = require("../models/Coupons_Model"),
  schema = require("../controllers/schema");

/**
 * get the discount data for the coupon code
 */
router.get(
    "/:couponCode",
    global.expressJoi.joiValidate(schema.CouponGET),
    (req, res) => {
      let couponCode = req.params.couponCode;
  
      return Coupons.findOne({
        couponCode:couponCode
      })
        .then(data => {
          if (!data) {
            return res
              .status(global.config.default_not_found_http_code)
              .json({
                responseCode: global.config.default_not_found_http_code,
                responseDesc: global.config.default_not_found_message
              })
              .send();
          }
          return res.json(data).send();
        })
        .catch(error => {
          throw error;
        });
    }
  );

  module.exports = router;