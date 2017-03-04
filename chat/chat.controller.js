var mongoose = require('mongoose');
var Chat = require('./chat.model');


exports.getMessages = function (req, res){

	Chat.find({'from':req.headers['name'], 'to': req.body.to},function(err, data){
			if(err){
				return res.json({'message':err});
			}
			return res.send({'response':data});
	});
}

exports.sendMessage = function (req, res){
	
	var chat = new Chat();
	chat.from = req.headers['name'];
	chat.to = req.body.to;
	chat.message = req.body.message;

	chat.save(function(err){
			if(err){
				return res.json({'message':err});
			}
			return res.json({'response':"Message successfully send."});
	});
}
