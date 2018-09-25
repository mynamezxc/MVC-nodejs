//////////////////////////////////
//   Create connection to mysql
//
var mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "voyager"
});

/////////////////////////////
//   Libraries and Models
//
var md5 = require('md5');

////////////////////////////
//   Export functions
//

exports.getInfo = function(username, callback) {
    let sql = `SELECT * FROM users WHERE name ='${username}' limit 0,1`;
    con.query(sql, function(err, result) {
        con.on('error', function(err) {
            console.log("[mysql error]",err);
            callback(err);
        });
        callback(result);
    });
};

exports.update = function(key, name, password) {
    
}

exports.name = "Nguyen";