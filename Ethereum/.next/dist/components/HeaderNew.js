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

var _jsxFileName = '/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/components/HeaderNew.js';


var HeaderNew = function (_Component) {
  (0, _inherits3.default)(HeaderNew, _Component);

  function HeaderNew() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, HeaderNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HeaderNew.__proto__ || (0, _getPrototypeOf2.default)(HeaderNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeItem: 'home' }, _this.handleItemClick = function (e, _ref2) {
      var name = _ref2.name;
      return _this.setState({ activeItem: name });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(HeaderNew, [{
    key: 'render',
    value: function render() {
      var activeItem = this.state.activeItem;

      return _react2.default.createElement(_semanticUiReact.Container, { as: 'nav', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: 'h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_routes.Link, { route: '/home', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, ' AAA with Blockchain ', _react2.default.createElement(_semanticUiReact.Icon, { name: 'ethereum', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })))), _react2.default.createElement(_semanticUiReact.Menu, { borderless: true, compact: true, inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_routes.Link, { route: '/home', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Home')), _react2.default.createElement(_routes.Link, { route: '/login', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Login')), _react2.default.createElement(_routes.Link, { route: 'https://github.com/matman26/aaa-blockchain-sr2i305', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('a', { className: 'item', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'Code'))));
    }
  }]);

  return HeaderNew;
}(_react.Component);

exports.default = HeaderNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyTmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsIklucHV0IiwiU2VnbWVudCIsIkNvbnRhaW5lciIsIkhlYWRlciIsIkljb24iLCJMaW5rIiwiSGVhZGVyTmV3Iiwic3RhdGUiLCJhY3RpdmVJdGVtIiwiaGFuZGxlSXRlbUNsaWNrIiwiZSIsIm5hbWUiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFLLEFBQU0sQUFBUSxBQUFVLEFBQU87O0FBQzdDLEFBQVMsQUFBWTs7Ozs7OztJLEFBR2Y7Ozs7Ozs7Ozs7Ozs7O2tOLEFBQ0osUUFBUSxFQUFFLFksQUFBRixBQUFjLGdCLEFBRXRCLGtCQUFrQixVQUFBLEFBQUMsVUFBRDtVQUFBLEFBQU0sYUFBTixBQUFNO2FBQVcsTUFBQSxBQUFLLFNBQVMsRUFBRSxZQUFqQyxBQUFpQixBQUFjLEFBQWM7QTs7Ozs7NkJBRXREO1VBQUEsQUFDQyxhQUFlLEtBRGhCLEFBQ3FCLE1BRHJCLEFBQ0MsQUFDUjs7NkJBQ0UsQUFBQyw0Q0FBVSxJQUFYLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLElBQWpCLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUF3Qix5Q0FBQSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFIOUIsQUFDRSxBQUNFLEFBQ0UsQUFBd0IsQUFHNUI7QUFINEI7NkJBRzVCLEFBQUMsdUNBQUssWUFBTixNQUFpQixTQUFqQixNQUF5QixVQUF6QjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7b0JBQWI7c0JBQUE7QUFBQTtTQUZKLEFBQ0UsQUFDRSxBQUVGLDBCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO29CQUFiO3NCQUFBO0FBQUE7U0FMSixBQUlFLEFBQ0UsQUFFRiwyQkFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYSxRQUFPLFFBQXBCLEFBQTJCO29CQUEzQjtzQkFBQTtBQUFBO1NBZlIsQUFDRSxBQU1FLEFBT0UsQUFDRSxBQUtUOzs7OztBLEFBM0JxQixBQTZCeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVyTmV3LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sYXVyYWNlcm9uL0RvY3VtZW50cy9BQUFfYmxvY2tjaGFpbi9hYWEtYmxvY2tjaGFpbi1zcjJpMzA1L0V0aGVyZXVtIn0=