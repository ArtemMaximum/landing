'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HelloWorld = require('./containers/HelloWorld');

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _PreloadHelloWorld = require('./containers/PreloadHelloWorld');

var _PreloadHelloWorld2 = _interopRequireDefault(_PreloadHelloWorld);

var _JsonAPI = require('./containers/JsonAPI');

var _JsonAPI2 = _interopRequireDefault(_JsonAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchConfig = [{
  path: '/api',
  component: _JsonAPI2.default,
  initState: _JsonAPI2.default.initState
}, {
  path: '/preload',
  component: _PreloadHelloWorld2.default,
  initState: _PreloadHelloWorld2.default.initState
}, {
  path: '/',
  component: _HelloWorld2.default,
  initState: _HelloWorld2.default.initState,
  exact: false
}];

exports.default = matchConfig;