"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _morgan = _interopRequireDefault(require("morgan"));

var _viewEngine = _interopRequireDefault(require("./config/viewEngine.js"));

var _routes = _interopRequireDefault(require("./routes/routes.js"));

var _connectDb = _interopRequireDefault(require("./config/connect.db.js"));

var app = (0, _express["default"])(); //define port server

var port = _dotenv["default"].config().parsed.PORT || 1997; //middleware log request
// app.use(morgan('combined'));

app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
(0, _viewEngine["default"])(app); // view engine config

(0, _routes["default"])(app); // route config

(0, _connectDb["default"])(); // about page

app.get('/about', function (req, res) {
  res.render('pages/about');
});
app.listen(port, function () {
  console.log("Server is running on http://localhost:".concat(port));
});