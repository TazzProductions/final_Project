const express = require("express");
const router = express.Router();

// controller here
const VehicleController = require("../../controller/vehicleController");
const vehicleController = new VehicleController();

// student routes
router.get("/", function (req, res) {
    vehicleController.findAll(res);
    // res.send([{hello:"world"}]);
});

router.get("/brands/:brand", function (req, res) {
    vehicleController.findAllBrandsSingle(req, res);
    // res.send([{hello:"world"}]);
});

router.get("/brands", function (req, res) {
    vehicleController.findAllBrands(res);
    // res.send([{hello:"world"}]);
});

router.get("/SPP", function (req, res) {
    vehicleController.findAllSPP(res);
    // res.send([{hello:"world"}]);
});

router.get("/:VId", function (req, res) {
    vehicleController.findById(req, res);
    // res.send('GET')
    // res.send([{
    //     hello: "world"
    // }]);
});

module.exports = router;