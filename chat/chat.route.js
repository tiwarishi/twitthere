 
var chat_controller = require('./chat.controller');

 module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
        res.setHeader('Access-Control-Allow-Methods', 'X-Requested-With,Content-Type,Authorization');
        next();
    });


    
    app.post("/api/getMessage", chat_controller.getMessages);
    app.post("/api/sendMessage", chat_controller.sendMessage);
}