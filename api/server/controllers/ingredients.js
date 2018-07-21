"use strict";
const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  Ingredients = require("../models/Ingredients_Model");

/**
 * Fetch all the Pizza Ingredients
 */
router.get(
  "/",
  (req, res) => {
    Ingredients.find()
      .sort({ sortOrder: 1 })
      .then(Ingredients => {
        if (!Ingredients.length) {
          return res
            .status(global.config.default_not_found_http_code)
            .json({
              responseCode: global.config.default_not_found_http_code,
              responseDesc: global.config.default_not_found_message
            })
            .send();
        }

        return res
            .status(global.config.default_success_http_code)
            .send(Ingredients);
      })
      .catch(error => {
        throw error;
      });
  }
);

module.exports = router;
