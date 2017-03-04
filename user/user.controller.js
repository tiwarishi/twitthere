var mongoose = require('mongoose');
var User = require('./user.model');


exports.getUser = function (req, res){
	console.log("Dummyname is " + req.headers['dummyname']);

	User.find(function(err, data){
			if(err){
				return res.json({'message':err});
			}
			return res.send({'response':data});
	});
}

exports.addUser = function (req, res){
	console.log("methos called");

	var user = new User();
	user.name=req.body.name;
	user.emailId = req.body.emailId;
	user.password = req.body.password;
	console.log(user.toString());
	user.save(function(err){
			if(err){
				return res.json({'message':err});
			}
			return res.json({'response':"User successfully saved into the database."});
	});
}
