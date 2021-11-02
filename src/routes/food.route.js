"use strict";

const express = require("express");
const { Food } = require("../models/index");
const foodRouter = express.Router();

// RESTful Route Delectation
foodRouter.get("/food", getFood);
foodRouter.get("/food/:id", getOneFood);
foodRouter.post("/food", creatFood);
foodRouter.put("/food/:id", updateFood);
foodRouter.delete("/food/:id", deleteFood);

async function getFood(req, res) {
  const allFood = await Food.findAll();
  res.status(200).json(allFood);
}

async function getOneFood(req, res) {
  const id = parseInt(req.params.id); // we parse the ID in case it was a string
  const item = await Food.findOne({
    where: {
      id: id,
    },
  });
  res.status(200).json(item);
}

async function creatFood(req, res) {
  const obj = req.body;
  let item = await Food.create(obj);
  res.status(201).json(item);
}

async function updateFood(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let foundFood = await Food.findOne({ where: { id: id } });
  const updatedFood = await foundFood.update(obj);
  res.status(201).json(updatedFood);
}

async function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  const deletedFood = await Food.destroy({ where: { id: id } });
  res.status(204).json(deletedFood);
}

module.exports = foodRouter;
