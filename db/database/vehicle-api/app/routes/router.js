const express = require("express");
const router = express.Router();

router.use("/vehicles", require("./api/vehicleRoutes"));

//add more api routes here

module.exports = router;