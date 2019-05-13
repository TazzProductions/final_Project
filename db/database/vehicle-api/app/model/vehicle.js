class Vehicle {
    constructor(id, PName, seatNum, mpg, tachometer, luggageCap, transmission, engine, horsepower, BName, img, Pabout, PCabout, price) {
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
        this.img = img;
        this.Pabout = Pabout;
        this.PCabout = PCabout;
        this.price = price;
    }
}

module.exports = Vehicle;