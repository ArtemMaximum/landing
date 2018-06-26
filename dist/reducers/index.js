'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _hello = require('./hello');

var _hello2 = _interopRequireDefault(_hello);

var _jsonAPI = require('./jsonAPI');

var _jsonAPI2 = _interopRequireDefault(_jsonAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  jsonAPI: _jsonAPI2.default,
  hello: _hello2.default
});

exports.default = reducer;