let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/vehicles.db');

let init = function () {

    db.run("CREATE TABLE if not exists products (" +
        "id INTEGER PRIMARY KEY," +
        " PName TEXT," +
        " seatNum INTEGER," +
        " mpg TEXT," +
        " tachometer TEXT," +
        " luggageCap INTEGER," +
        " transmission TEXT," +
        " engine TEXT," +
        " horsepower INTEGER" +
        ")");
};

module.exports = {
    init: init,
    db: db
};