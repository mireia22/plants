const Plant = require("../models/plant-model");

const getAllPlants = async (req, res, next) => {
  try {
    const allPlants = await Plant.find();
    return res.status(200).json(allPlants);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getPlantById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plant = await Plant.findById(id);
    return res.status(200).json(plant);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const postPlant = async (req, res, next) => {
  try {
    const newPlant = new Plant(req.body);
    const savedPlant = await newPlant.save();
    return res.status(201).json({ message: "Posted", savedPlant });
    console.log("saved plant", savedPlant);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const editPlant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plant = await Plant.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(plant);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deletePlantById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plant = await Plant.findByIdAndDelete(id);
    return res.status(200).json({ message: "Plant deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllPlants,
  getPlantById,
  postPlant,
  editPlant,
  deletePlantById,
};
