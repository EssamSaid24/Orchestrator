const mysql = require('mysql2');
var promisePool;
    try {
        let pool = mysql.createPool({
            host:"localhost",
            user:"root",
            password:"root",
            database:"rpa"
        });
        promisePool = pool.promise();
    } catch (err) {
        console.log("Failed to connect to MySQL", err);
    }

module.exports = {
    pool: promisePool
}