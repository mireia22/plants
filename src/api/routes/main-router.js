const express = require("express");
const { plantRouter } = require("./plant-routes");

const mainRouter = express.Router();
mainRouter.use("/plants", plantRouter);
module.exports = { mainRouter };
