const express = require("express");
const {
  getAllPlants,
  getPlantById,
  postPlant,
  editPlant,
  deletePlantById,
} = require("../controllers/plant-controllers");

const plantRouter = express.Router();
plantRouter.get("/", getAllPlants);
plantRouter.get("/:id", getPlantById);
plantRouter.post("/", postPlant);
plantRouter.put("/:id", editPlant);
plantRouter.delete("/:id", deletePlantById);

module.exports = { plantRouter };
