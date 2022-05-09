"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initWebRoutes;

var _sitesRouter = _interopRequireDefault(require("./sitesRouter.js"));

function initWebRoutes(app) {
  app.use('/req/:sdd', function (req, res) {
    res.send(req.path);
  });
  app.use('/', _sitesRouter["default"]);
}