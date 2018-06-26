'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _jsonAPI = require('../actions/jsonAPI');

var _jsonAPI2 = _interopRequireDefault(_jsonAPI);

var _JsonAPI = require('../components/JsonAPI');

var _JsonAPI2 = _interopRequireDefault(_JsonAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    products: state.jsonAPI.products
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchData: function fetchData() {
      dispatch(_jsonAPI2.default.getJsonAPI());
    }
  };
};

var jsonAPIContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_JsonAPI2.default);

jsonAPIContainer.initState = function (store, req, res) {
  return function (dispatch, getState) {
    return new Promise(function (resolve, reject) {
      resolve();
    });
  };
};

exports.default = jsonAPIContainer;