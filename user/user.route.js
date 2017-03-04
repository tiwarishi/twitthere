
var user_controller = require("./user.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
        res.setHeader('Access-Control-Allow-Methods', 'X-Requested-With,Content-Type,Authorization');
        next();
    });
    
    app.get("/api/getUser", user_controller.getUser);
    app.post("/api/addUser", user_controller.addUser);
}