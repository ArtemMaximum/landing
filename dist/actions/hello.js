'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionType = require('../config/actionType');

var helloActionCreator = {
  helloWorld: function helloWorld() {
    return function (dispatch, getState) {
      return dispatch({
        type: _actionType.HELLO_WORLD
      });
    };
  },
  setMessage: function setMessage(_message) {
    return function (dispatch, getState) {
      return dispatch({
        type: _actionType.SET_MESSAGE,
        message: _message
      });
    };
  }
};
exports.default = helloActionCreator;