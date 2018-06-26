'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionType = require('../config/actionType');

var apiReducer = function apiReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { products: [] };
  var action = arguments[1];

  switch (action.type) {
    case _actionType.SET_API_DATA:
      return Object.assign({}, state, { products: action.products });
    default:
      return state;
  }
};

exports.default = apiReducer;