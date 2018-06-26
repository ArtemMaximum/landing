'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Hello = require('./Hello.css');

var _Hello2 = _interopRequireDefault(_Hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hello = function Hello(_ref) {
  var onClick = _ref.onClick,
      message = _ref.message;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      { className: (0, _classnames2.default)(_Hello2.default['title']) },
      message
    ),
    _react2.default.createElement(
      'button',
      { onClick: onClick },
      'Click'
    )
  );
};

Hello.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  message: _propTypes2.default.string.isRequired
};

exports.default = Hello;