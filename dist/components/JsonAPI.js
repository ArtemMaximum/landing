'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JsonAPI = function (_React$Component) {
  _inherits(JsonAPI, _React$Component);

  function JsonAPI() {
    _classCallCheck(this, JsonAPI);

    return _possibleConstructorReturn(this, (JsonAPI.__proto__ || Object.getPrototypeOf(JsonAPI)).apply(this, arguments));
  }

  _createClass(JsonAPI, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchData();
    }
  }, {
    key: 'render',
    value: function render() {
      var products = this.props.products;

      var _renderli = products.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(
            'h2',
            null,
            item.id,
            _react2.default.createElement(
              'small',
              null,
              ' ',
              item.title
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            item.body
          )
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          ' Response '
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://jsonplaceholder.typicode.com/posts' },
          ' https://jsonplaceholder.typicode.com/posts '
        ),
        _react2.default.createElement(
          'div',
          null,
          _renderli
        )
      );
    }
  }]);

  return JsonAPI;
}(_react2.default.Component);

JsonAPI.propTypes = {
  fetchData: _propTypes2.default.func.isRequired,
  products: _propTypes2.default.array.isRequired
};

exports.default = JsonAPI;