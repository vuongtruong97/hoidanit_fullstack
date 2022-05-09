"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configViewEngine;

var _express = _interopRequireDefault(require("express"));

function configViewEngine(app) {
  app.use(_express["default"]["static"]('./src/public'));
  app.set('view engine', 'ejs');
  app.set('views', 'src/views');
}