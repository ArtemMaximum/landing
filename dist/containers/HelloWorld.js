'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Hello = require('./../components/Hello');

var _Hello2 = _interopRequireDefault(_Hello);

var _hello = require('../actions/hello');

var _hello2 = _interopRequireDefault(_hello);

var _global = require('../styles/global.css');

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    message: state.hello.message
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: function onClick() {
      dispatch(_hello2.default.helloWorld());
    }
  };
};

var hello = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Hello2.default);

hello.initState = function (store, req, res) {
  return function (dispatch, getState) {
    return new Promise(function (resolve, reject) {
      resolve();
    });
  };
};

exports.default = hello;