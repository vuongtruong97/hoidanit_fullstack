"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _SiteController = _interopRequireDefault(require("../controllers/SiteController.js"));

var siteRouter = _express["default"].Router();

siteRouter.get('/get-api', function (req, res, next) {
  res.send('okay');
});
siteRouter.get('/', _SiteController["default"].getHomePage);
var _default = siteRouter;
exports["default"] = _default;