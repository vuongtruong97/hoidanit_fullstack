"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var SiteController = /*#__PURE__*/function () {
  function SiteController() {
    (0, _classCallCheck2["default"])(this, SiteController);
  }

  (0, _createClass2["default"])(SiteController, [{
    key: "getHomePage",
    value: // [GET] /
    function getHomePage(req, res, next) {
      res.render('pages/home');
    }
  }]);
  return SiteController;
}();

var _default = new SiteController();

exports["default"] = _default;