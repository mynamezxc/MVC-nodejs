///////////////////////////////////////
//   Create website running port 80
//
var express = require('express');
var app = express();
app.listen(3001);

////////////////////////////
//  Include controller
//
let home = require('./controllers/home');

/////////////////////////////////////////////////////////
//  Body parse to get POST params FOR HOME CONTROLLER
//
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 


////////////////////////////////////////////
//   Set view engine and public folder
//
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "./views");

///////////////////////////////////////
//   Route redirect to controllers
//
app.get('/', home.__constructer);
app.post('/login', home.__login);
