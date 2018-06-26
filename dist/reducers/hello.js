'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionType = require('../config/actionType');

var helloWorld = function helloWorld() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { message: 'Hello' };
  var action = arguments[1];

  switch (action.type) {
    case _actionType.HELLO_WORLD:
      return Object.assign({}, state, { message: 'Hello, World!' });
    case _actionType.SET_MESSAGE:
      return Object.assign({}, state, { message: action.message });
    default:
      return state;
  }
};

exports.default = helloWorld;