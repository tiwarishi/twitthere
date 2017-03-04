var express = require('express');
var app =  express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var confData = require('./config');

mongoose.connect(confData.db);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

require('./user/user.route')(app,express);
require('./chat/chat.route')(app,express);

app.get('/', function (req,res) {
	res.json({"message":"Get methos is found."});
});
app.post('/', function (req,res) {
	res.json({"message":"Get methos is found."});
});

app.listen(confData.port,function(){
	console.log("Server is running on " + confData.port);
});