'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _cryptoRandomString = require('crypto-random-string');

var _cryptoRandomString2 = _interopRequireDefault(_cryptoRandomString);

var _login = require('../ethereum/login');

var _login2 = _interopRequireDefault(_login);

var _we = require('../ethereum/we3');

var _we2 = _interopRequireDefault(_we);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/pages/login.js?entry';


var Login = function (_Component) {
  (0, _inherits3.default)(Login, _Component);

  function Login() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      username: '',
      errorMess: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, secret, hash, signature, ans;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMess: '' });
                _context.prev = 2;
                _context.next = 5;
                return _we2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                secret = (0, _cryptoRandomString2.default)({ length: 15, type: 'base64' });
                hash = _we2.default.utils.sha3(secret);
                _context.next = 10;
                return _we2.default.eth.personal.sign(hash, accounts[0]);

              case 10:
                signature = _context.sent;

                console.log("signature", signature);
                console.log("hash", hash);
                ans = "";
                _context.prev = 14;
                _context.next = 17;
                return _login2.default.methods.signIn(hash, signature, _this.state.username, 1).send({
                  from: accounts[0]
                });

              case 17:
                ans = _context.sent;
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context['catch'](14);

                _this.setState({ errorMess: _context.t0.message });

              case 23:

                if (ans.status === true) {
                  localStorage.setItem('session', signature);
                  console.log(ans);
                  _routes.Router.pushRoute('/');
                } else {
                  _this.setState({ errorMess: "Authentication has failed" });
                }
                _context.next = 29;
                break;

              case 26:
                _context.prev = 26;
                _context.t1 = _context['catch'](2);

                _this.setState({ errorMess: _context.t1.message });

              case 29:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 26], [14, 20]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Login, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', style: { height: '80vh' }, verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'blue', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Log-in to your account'), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmit, error: !!this.state.errorMess, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, {
        fluid: true,
        icon: 'user',
        iconPosition: 'left',
        placeholder: 'Username',
        onChange: function onChange(event) {
          return _this3.setState({ username: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Something went wrong',
        content: this.state.errorMess,
        compact: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', fluid: true, size: 'large', type: 'submit', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Login'))))));
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlTGF5b3V0RWZmZWN0IiwicmFuZG9tU3RyaW5nIiwibG9naW4iLCJ3ZWIzIiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJJbWFnZSIsIk1lc3NhZ2UiLCJTZWdtZW50IiwiTGF5b3V0IiwiUm91dGVyIiwiTGluayIsIkxvZ2luIiwic3RhdGUiLCJ1c2VybmFtZSIsImVycm9yTWVzcyIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJzZWNyZXQiLCJsZW5ndGgiLCJ0eXBlIiwiaGFzaCIsInV0aWxzIiwic2hhMyIsInBlcnNvbmFsIiwic2lnbiIsInNpZ25hdHVyZSIsImNvbnNvbGUiLCJsb2ciLCJhbnMiLCJtZXRob2RzIiwic2lnbkluIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwic3RhdHVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2hSb3V0ZSIsImhlaWdodCIsIm1heFdpZHRoIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVMsQUFBVzs7OztBQUMzQixBQUFPOzs7O0FBRVAsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVEsQUFBTSxBQUFNLEFBQVEsQUFBTyxBQUFTOztBQUNyRCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFRLEFBQVk7Ozs7Ozs7SSxBQUV0Qjs7Ozs7Ozs7Ozs7Ozs7OzBNLEFBQ0o7Z0JBQVEsQUFDSSxBQUNWO2lCQUZNLEFBRUssQUFDWDtlLEFBSE0sQUFHRztBQUhILEFBQ04sYSxBQUlGOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDsrQ0FBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBQ047c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE1BQUssV0FGbkIsQUFFVCxBQUFjLEFBQXdCO2dDQUY3QjtnQ0FBQTt1QkFJZ0IsYUFBQSxBQUFLLElBSnJCLEFBSWdCLEFBQVM7O21CQUExQjtBQUpDLG9DQUtEO0FBTEMseUJBS1Esa0NBQWEsRUFBQyxRQUFELEFBQVMsSUFBSSxNQUxsQyxBQUtRLEFBQWEsQUFBa0IsQUFDMUM7QUFORyx1QkFNSSxhQUFBLEFBQUssTUFBTCxBQUFXLEtBTmYsQUFNSSxBQUFnQjtnQ0FOcEI7dUJBT2UsYUFBQSxBQUFLLElBQUwsQUFBUyxTQUFULEFBQWtCLEtBQWxCLEFBQXVCLE1BQU0sU0FQNUMsQUFPZSxBQUE2QixBQUFTOzttQkFBeEQ7QUFQRyxxQ0FRUDs7d0JBQUEsQUFBUSxJQUFSLEFBQVksYUFBWixBQUF3QixBQUN4Qjt3QkFBQSxBQUFRLElBQVIsQUFBWSxRQUFaLEFBQW1CLEFBQ2Y7QUFWRyxzQkFBQSxBQVVHO2dDQVZIO2dDQUFBO3VDQWFPLEFBQU0sUUFBTixBQUFjLE9BQWQsQUFBcUIsTUFBckIsQUFBMEIsV0FBVyxNQUFBLEFBQUssTUFBMUMsQUFBZ0QsVUFBaEQsQUFBeUQsR0FBekQsQUFBNEQ7d0JBQ2hFLFNBZEgsQUFhTyxBQUFpRSxBQUNyRSxBQUFTO0FBRDRELEFBQzNFLGlCQURVOzttQkFBWjtBQWJLLCtCQUFBO2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dEQWlCTDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsV0FBVyxZQWpCckIsQUFpQkwsQUFBYyxBQUFrQjs7bUJBR2xDOztvQkFBRyxJQUFBLEFBQUksV0FBUCxBQUFrQixNQUFNLEFBQ3RCOytCQUFBLEFBQWEsUUFBYixBQUFxQixXQUFyQixBQUFnQyxBQUNoQzswQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO2lDQUFBLEFBQU8sVUFBUCxBQUFpQixBQUNsQjtBQUpELHVCQUlLLEFBQ0g7d0JBQUEsQUFBSyxTQUFTLEVBQUMsV0FBZixBQUFjLEFBQVksQUFDM0I7QUExQk07Z0NBQUE7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBNEJQOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxXQUFXLFlBNUJuQixBQTRCUCxBQUFjLEFBQWtCOzttQkE1QnpCO21CQUFBO2dDQUFBOztBQUFBOzJDQUFBO0E7Ozs7Ozs7Ozs7NkJBZ0NIO21CQUNOOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsdUNBQUssV0FBTixBQUFnQixVQUFTLE9BQU8sRUFBRSxRQUFsQyxBQUFnQyxBQUFVLFVBQVUsZUFBcEQsQUFBa0U7b0JBQWxFO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFPLEVBQUUsVUFBdEIsQUFBb0IsQUFBWTtvQkFBaEM7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMseUNBQU8sSUFBUixBQUFXLE1BQUssT0FBaEIsQUFBc0IsUUFBTyxXQUE3QixBQUF1QztvQkFBdkM7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFJQSwyQ0FBQSxBQUFDLHVDQUFLLE1BQU4sQUFBVyxTQUFRLFVBQVUsS0FBN0IsQUFBa0MsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBMUQsQUFBZ0U7b0JBQWhFO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDBDQUFRLFNBQVQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsc0JBQUQsQUFBTTtlQUFOLEFBRUU7Y0FGRixBQUVPLEFBQ0w7c0JBSEYsQUFHZSxBQUNiO3FCQUpGLEFBSWMsQUFDWjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFDLFVBQVUsTUFBQSxBQUFNLE9BRHZCLEFBQ1IsQUFBYyxBQUF3QjtBQU4xQzs7b0JBQUE7c0JBREYsQUFDRSxBQVNBO0FBVEE7QUFDRSwwQkFRRixBQUFDO2VBQUQsQUFFRTtnQkFGRixBQUVTLEFBQ1A7aUJBQVMsS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ3BCO2lCQUpGOztvQkFBQTtzQkFWRixBQVVFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsTUFBM0IsQUFBZ0MsU0FBUSxNQUF4QyxBQUE2QyxVQUFTLFNBQVMsS0FBQSxBQUFLLE1BQXBFLEFBQTBFO29CQUExRTtzQkFBQTtBQUFBO1NBekJaLEFBQ0UsQUFDRSxBQUNFLEFBS0UsQUFDRSxBQWdCRSxBQVliOzs7OztBLEFBNUVpQixBQThFcEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibG9naW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xhdXJhY2Vyb24vRG9jdW1lbnRzL0FBQV9ibG9ja2NoYWluL2FhYS1ibG9ja2NoYWluLXNyMmkzMDUvRXRoZXJldW0ifQ==