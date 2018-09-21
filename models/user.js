var md5 = require('md5');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "voyager"
});

exports.getInfo = function(username) {
    let sql = `SELECT * FROM users WHERE name ='${username}' limit 0,1`;
    con.query(sql, function(err, result){
        return result;
    });
};

exports.update = function(key, name, password) {
    
}

exports.name = "Nguyen";