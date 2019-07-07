import mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 20,
    host: "ergastdb",
    port: "3306",
    user: "root",
    password: "f1",
    database: "ergastdb"
});

function getMySQLConnection() {
    return pool;
}

export default {
    getMySQLConnection: function () {
        return getMySQLConnection();
    },
    defaultLimit: function () {
        return 30;
    }
}