const Vehicle = require('../model/vehicle');
const Brand = require('../model/vehicleBrand');
const SPP = require('../model/vehicleSPP');


// Change data table above (math all fields in the data with the push statement lower in the code)
const daoCommon = require('./common/daoCommon');

class VehicleDao {
    constructor() {
        this.common = new daoCommon();
    }

    findAll() {
        let sqlRequest = "SELECT * FROM products";
        return this.common.findAll(sqlRequest).then(rows => {
            let vehicles = [];
            for (const row of rows) {
                vehicles.push(new Vehicle(
                    row.id,
                    row.PName,
                    row.seatNum,
                    row.mpg,
                    row.tachometer,
                    row.luggageCap,
                    row.transmission,
                    row.engine,
                    row.horsepower,
                    row.BName,
                    row.img,
                    row.Pabout,
                    row.PCabout,
                    row.price
                ));
            }
            return vehicles;
        });
    }

    findAllBrandsSingle(brand) {
        let sqlRequest = "SELECT * FROM brands WHERE BName = '" + brand + "'";
        return this.common.findAll(sqlRequest).then(rows => {
            let brands = [];
            for (const row of rows) {
                brands.push(new Brand(
                    row.id,
                    row.PName,
                    row.BName,
                    row.img,
                    row.brandSlug,
                    row.singleStyle
                ));
            }
            return brands;
        });
    }

    findAllBrands() {
        let sqlRequest = "SELECT * FROM brands";
        return this.common.findAll(sqlRequest).then(rows => {
            let brands = [];
            for (const row of rows) {
                brands.push(new Brand(
                    row.id,
                    row.PName,
                    row.BName,
                    row.img,
                    row.brandSlug,
                    row.singleStyle
                ));
            }
            return brands;
        });
    }

    findAllSPP() {
        let sqlRequest = "SELECT * FROM single_product_page";
        return this.common.findAll(sqlRequest).then(rows => {
            let singularProduct = [];
            for (const row of rows) {
                singularProduct.push(new SPP(
                    row.id,
                    row.PName,
                    row.img,
                    row.product_about
                ));
            }
            return singularProduct;
        });
    }

    findById(VId) {
        let sqlRequest = "SELECT * FROM products WHERE id=" + VId;

        return this.common.findAll(sqlRequest).then(rows => {
            let vehicles = [];
            for (const row of rows) {
                vehicles.push(new Vehicle(
                    row.id,
                    row.PName,
                    row.seatNum,
                    row.mpg,
                    row.tachometer,
                    row.luggageCap,
                    row.transmission,
                    row.engine,
                    row.horsepower,
                    row.BName
                ));
            }
            return vehicles;
        });
    }
}

module.exports = VehicleDao;