"use strict";
const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  Ingredients = require("../models/Ingredients_Model"),
  schema = require("./schema");


router.get(
  "/",
  //global.expressJoi.joiValidate(schema.IngredientsGET),
  (req, res) => {
    let page = req.query.page;
    Ingredients.find()
      .sort({ sortOrder: 1 })
      .then(Ingredientss => {
        if (!Ingredientss.length) {
          return res
            .status(404)
            .json({
              responseCode: 404,
              responseDesc: global.config.default_not_found_message
            })
            .send();
        }

        return IngredientsPage.findOne().then(pageData => {
          pageData = JSON.parse(JSON.stringify(pageData));
          Object.assign(pageData || {}, { Ingredientss });
          return res
            .status(200)
            .json(pageData)
            .send();
        });
      })
      .catch(error => {
        return res
          .status(500)
          .json({ error })
          .send();
      });
  }
);


router.get(
  "/:_id",
  //global.expressJoi.joiValidate(schema.IngredientsGETbyId),
  (req, res) => {
    let _id = req.params._id;

    return Ingredients.findOne({
      _id
    })
      .then(data => {
        if (!data) {
          return res
            .status(404)
            .json({
              responseCode: 404,
              responseDesc: global.config.default_not_found_message
            })
            .send();
        }
        return res.json(data).send();
      })
      .catch(error => {
        return res
          .status(500)
          .json({ error })
          .send();
      });
  }
);


router.post(
  "/",
  //global.expressJoi.joiValidate(schema.IngredientsPOST),
  (req, res) => {
    let _id = req.params._id;
    let saveData = {};

    if (req.body.IngredientsName) {
      saveData.IngredientsName = req.body.IngredientsName;
    }
    let order = 0;
    //find the maxinum sort number
    Ingredients.find({}, "sortOrder")
      .sort({ sortOrder: -1 })
      .limit(1)
      .then(data => {
        if (data.length) {
          order = data[0].sortOrder != undefined ? data[0].sortOrder + 1 : 0;
        }
        saveData.sortOrder = order;

        let Ingredients = new Ingredients(saveData);

        //save Ingredients
        return Ingredients.save().then(
          IngredientsData => {
            if (!IngredientsData) {
              return res
                .status(400)
                .json({
                  responseCode: 400,
                  responseDesc: global.config.default_not_found_message
                })
                .send();
            }
            return res.status(200).send(IngredientsData);
          },
          reason => {
            return res
              .status(404)
              .json({
                responseCode: 404,
                responseDesc: global.config.default_error_message,
                reason: reason
              })
              .send();
          }
        );
      })
      .catch(error => {
        return res
          .status(500)
          .json({ error })
          .send();
      });
  }
);

module.exports = router;
