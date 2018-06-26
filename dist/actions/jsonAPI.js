'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionType = require('../config/actionType');

var _api = require('./api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsonAPIActionCreator = {
  getJsonAPI: function getJsonAPI() {
    return function (dispatch, getState) {
      return _api2.default.getJsonAPI().then(function (res) {
        dispatch({
          type: _actionType.SET_API_DATA,
          products: res
        });
      });
    };
  }
};
exports.default = jsonAPIActionCreator;