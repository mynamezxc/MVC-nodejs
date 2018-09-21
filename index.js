///////////////////////////////////////
//   Create website running port 80
//
var express = require('express');
var app = express();
app.listen(80);

////////////////////////////
//  Include controller
//
let home = require('./controllers/home');

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
