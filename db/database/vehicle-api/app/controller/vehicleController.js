const VehicleDao = require("../dao/vehicleDao");
const ControllerCommon = require("./common/controllerCommon");
// const Student = require("../model/student");

class VehicleController {

    constructor() {
        this.vehicleDao = new VehicleDao();
        this.common = new ControllerCommon();
    }

    findAll(res) {
        this.vehicleDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    findAllBrandsSingle(req,res) {
        let brand = req.params.brand;
        this.vehicleDao.findAllBrandsSingle(brand)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    findAllBrands(res) {
        this.vehicleDao.findAllBrands()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    findAllSPP(res) {
        this.vehicleDao.findAllSPP()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    findById(req, res) {
        let VId = req.params.VId;
        this.vehicleDao.findById(VId)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

}

module.exports = VehicleController;