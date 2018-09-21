/////////////////////////////////////////////
//   Create a server socket in port 3000
//
var express = require('express');
var app = express();
var server = app.listen(3000);
var http = require('http');
var io = require('socket.io').listen(server);


///////////////////////////////////////
//  Body parse to get POST params
//
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 

/////////////////////////////////////////////////////
//  Include models and libraries for controller
//
var userModel = require('.././models/user');
var md5 = require('md5');

//////////////////////////////
//  Exports function
//
exports.__constructer = function (req, res) {
    var namespace = io.of('/namespace');
    namespace.on('connection', function(socket) {
        console.log(socket.id);
    });
    res.render('login');
    res.end();
}

exports.__login = function (req, res) {
    if(req.body.username !== undefined) {

    } 
}
