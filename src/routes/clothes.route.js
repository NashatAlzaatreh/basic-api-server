"use strict";

const express = require("express");
const { Clothes } = require("../models/index");
const clothesRouter = express.Router();

// RESTful Route Delectation
clothesRouter.get("/clothes", getClothes);
clothesRouter.get("/clothes/:id", getOneClothes);
clothesRouter.post("/clothes", creatClothes);
clothesRouter.put("/clothes/:id", updateClothes);
clothesRouter.delete("/clothes/:id", deleteClothes);

async function getClothes(req, res) {
  const allClothes = await Clothes.findAll();
  res.status(200).json(allClothes);
}

async function getOneClothes(req, res) {
  const id = parseInt(req.params.id); // we parse the ID in case it was a string
  const item = await Clothes.findOne({
    where: {
      id: id,
    },
  });
  res.status(200).json(item);
}

async function creatClothes(req, res) {
  const obj = req.body;
  let item = await Clothes.create(obj);
  res.status(201).json(item);
}

async function updateClothes(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let foundClothes = await Clothes.findOne({ where: { id: id } });
  const updatedClothes = await foundClothes.update(obj);
  res.status(201).json(updatedClothes);
}

async function deleteClothes(req, res) {
  const id = parseInt(req.params.id);
  const deletedClothes = await Clothes.destroy({ where: { id: id } });
  res.status(204).json(deletedClothes);
}

module.exports = clothesRouter;
