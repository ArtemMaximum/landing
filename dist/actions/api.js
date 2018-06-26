'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionCreator = {
  getJsonAPI: function getJsonAPI(_username) {
    return (0, _isomorphicFetch2.default)('https://jsonplaceholder.typicode.com/posts').then(function (response) {
      return response.json();
    });
  }
};

exports.default = actionCreator;