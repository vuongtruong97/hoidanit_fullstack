"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configDataBase;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var mode = process.env.NODE_ENV || 'development';

var config = require(__dirname + '/../config/config.json')[mode];

function configDataBase() {
  return _configDataBase.apply(this, arguments);
}

function _configDataBase() {
  _configDataBase = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var sequelize;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              sequelize = new _sequelize["default"]('database', 'root', 'null', {
                host: '127.0.0.1',
                dialect: 'mysql'
              }); // await sequelize.authenticate();

              console.log(config);
              console.log(process.env.NODE_ENV); // console.log(process.env[config.use_env_variable][env]);
            } catch (error) {
              console.error('Unable to connect to the database:', error);
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _configDataBase.apply(this, arguments);
}