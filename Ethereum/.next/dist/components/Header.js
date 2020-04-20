'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/components/Header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeItem: 'home' }, _this.handleItemClick = function (e, _ref2) {
      var name = _ref2.name;
      return _this.setState({ activeItem: name });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var activeItem = this.state.activeItem;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_semanticUiReact.Menu, { pointing: true, style: { marginTop: '2em' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'AAA with Blockchain')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_routes.Link, { route: '/login', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Login')))));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsIklucHV0IiwiU2VnbWVudCIsIkxpbmsiLCJIZWFkZXIiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJlIiwibmFtZSIsInNldFN0YXRlIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQUssQUFBTTs7QUFDcEIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFHZjs7Ozs7Ozs7Ozs7Ozs7NE0sQUFDSixRQUFRLEVBQUUsWSxBQUFGLEFBQWMsZ0IsQUFFdEIsa0JBQWtCLFVBQUEsQUFBQyxVQUFEO1VBQUEsQUFBTSxhQUFOLEFBQU07YUFBVyxNQUFBLEFBQUssU0FBUyxFQUFFLFlBQWpDLEFBQWlCLEFBQWMsQUFBYztBOzs7Ozs2QkFFdEQ7VUFBQSxBQUNDLGFBQWUsS0FEaEIsQUFDcUIsTUFEckIsQUFDQyxBQUNSOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQW1CSTtBQW5CSjtBQUFBLE9BQUEsa0JBbUJJLEFBQUMsdUNBQUssVUFBTixNQUFlLE9BQU8sRUFBQyxXQUF2QixBQUFzQixBQUFZO29CQUFsQztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7b0JBQWI7c0JBQUE7QUFBQTtTQUZKLEFBQ0UsQUFDRSxBQUVGLHlDQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBMUJWLEFBQ0UsQUFtQkksQUFJRSxBQUNBLEFBQ0UsQUFNWDs7Ozs7QUFFSCxBLEFBekNxQjs7a0JBeUNyQixBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGF1cmFjZXJvbi9Eb2N1bWVudHMvQUFBX2Jsb2NrY2hhaW4vYWFhLWJsb2NrY2hhaW4tc3IyaTMwNS9FdGhlcmV1bSJ9