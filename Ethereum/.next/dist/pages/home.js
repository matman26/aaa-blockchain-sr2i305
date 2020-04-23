"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/pages/home.js?entry";


var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function () {
      return _routes.Router.pushRoute('/login');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { className: "content", __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: "h1", __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "AAA using Blockchain ", _react2.default.createElement(_semanticUiReact.Icon, { name: "ethereum", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "Authentication, Authorization and Accounting refers to a security framework for mediating network and application access. This is an implementation of the AAA framework using the Ethereum Blockchain."), _react2.default.createElement(_semanticUiReact.Button, {
        size: "huge",
        color: "teal",
        inverted: true,
        onClick: this.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, " See it in action! ")));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hvbWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJCdXR0b24iLCJJY29uIiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiTWVudSIsIlNlZ21lbnQiLCJMaW5rIiwiUm91dGVyIiwiSG9tZSIsIm9uQ2xpY2siLCJwdXNoUm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVEsQUFBTSxBQUFXLEFBQVEsQUFBTTs7QUFDaEQsQUFBUyxBQUFNLEFBQWM7Ozs7Ozs7SSxBQUd2Qjs7Ozs7Ozs7Ozs7Ozs7d00sQUFFSixVQUFVLFlBQUE7YUFBTSxlQUFBLEFBQU8sVUFBYixBQUFNLEFBQWlCO0E7Ozs7OzZCQUN4QixBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyw0Q0FBVSxXQUFYLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLElBQWpCLEFBQW9CO29CQUFwQjtzQkFBQTtBQUFBO1NBQ3FCLHlDQUFBLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUZ2QixBQUNFLEFBQ3FCLEFBRXJCO0FBRnFCOzJCQUVyQixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FKRixBQUlFLEFBTUEsNE5BQUEsQUFBQztjQUFELEFBQ0ssQUFDTDtlQUZBLEFBRU0sQUFDTjtrQkFIQSxBQUlBO2lCQUFTLEtBSlQsQUFJYzs7b0JBSmQ7c0JBQUE7QUFBQTtBQUNBLFNBYk4sQUFDRSxBQUNFLEFBVUUsQUFVUDs7Ozs7QSxBQTFCZ0IsQUE2Qm5COztrQkFBQSxBQUFlIiwiZmlsZSI6ImhvbWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xhdXJhY2Vyb24vRG9jdW1lbnRzL0FBQV9ibG9ja2NoYWluL2FhYS1ibG9ja2NoYWluLXNyMmkzMDUvRXRoZXJldW0ifQ==