class Vehicle {
    constructor(id, PName, seatNum, mpg, tachometer, luggageCap, transmission, engine, horsepower, BName) {
        this.id = id;
        this.PName = PName;
        this.seatNum = seatNum;
        this.mpg = mpg;
        this.tachometer = tachometer;
        this.luggageCap = luggageCap;
        this.transmission = transmission;
        this.engine = engine;
        this.horsepower = horsepower;
        this.BName = BName;
    }
}

module.exports = Vehicle;