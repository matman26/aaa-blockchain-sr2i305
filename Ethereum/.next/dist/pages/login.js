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
      role: -1,
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, secret, hash, signature, ans, profile;
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
                _context.next = 16;
                return _login2.default.methods.signIn(hash, signature, _this.state.username, 1).send({
                  from: accounts[0]
                });

              case 16:
                ans = _context.sent;
                _context.next = 19;
                return _login2.default.methods.profile(accounts[0]).call();

              case 19:
                profile = _context.sent;

                _this.state.username = profile[0];
                _this.state.role = profile[1];
                console.log("Profile", profile);
                if (ans.status === true) {
                  localStorage.setItem('session', signature);
                  // Router.pushRoute('/');
                } else {
                  _this.setState({ errorMess: "Authentication has failed" });
                }

                _this.setState({ loading: false, errorMess: '' });
                _context.next = 30;
                break;

              case 27:
                _context.prev = 27;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMess: "Not username provided" });

              case 30:
                _this.resetState();

              case 31:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 27]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Login, [{
    key: 'resetState',
    value: function resetState() {
      this.state = {
        username: '',
        errorMess: '',
        role: -1,
        loading: false
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', style: { height: '80vh' }, verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'blue', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Log-in to your account'), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmit, error: !!this.state.errorMess, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
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
          lineNumber: 69
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Something went wrong',
        content: this.state.errorMess,
        compact: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', fluid: true, size: 'large', type: 'submit', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'Login'))))));
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlTGF5b3V0RWZmZWN0IiwicmFuZG9tU3RyaW5nIiwibG9naW4iLCJ3ZWIzIiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJJbWFnZSIsIk1lc3NhZ2UiLCJTZWdtZW50IiwiTGF5b3V0IiwiUm91dGVyIiwiTGluayIsIkxvZ2luIiwic3RhdGUiLCJ1c2VybmFtZSIsImVycm9yTWVzcyIsInJvbGUiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2VjcmV0IiwibGVuZ3RoIiwidHlwZSIsImhhc2giLCJ1dGlscyIsInNoYTMiLCJwZXJzb25hbCIsInNpZ24iLCJzaWduYXR1cmUiLCJjb25zb2xlIiwibG9nIiwiYW5zIiwibWV0aG9kcyIsInNpZ25JbiIsInNlbmQiLCJmcm9tIiwicHJvZmlsZSIsImNhbGwiLCJzdGF0dXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVzZXRTdGF0ZSIsImhlaWdodCIsIm1heFdpZHRoIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVMsQUFBVzs7OztBQUMzQixBQUFPOzs7O0FBRVAsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVEsQUFBTSxBQUFNLEFBQVEsQUFBTyxBQUFTOztBQUNyRCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFRLEFBQVk7Ozs7Ozs7SSxBQUV0Qjs7Ozs7Ozs7Ozs7Ozs7OzBNLEFBQ0o7Z0JBQVEsQUFDSSxBQUNWO2lCQUZNLEFBRUssQUFDWDtZQUFNLENBSEEsQUFHQyxBQUNQO2UsQUFKTSxBQUlHO0FBSkgsQUFDTixhLEFBY0Y7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO29EQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFDTjtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVMsTUFBSyxXQUZuQixBQUVULEFBQWMsQUFBd0I7Z0NBRjdCO2dDQUFBO3VCQUlnQixhQUFBLEFBQUssSUFKckIsQUFJZ0IsQUFBUzs7bUJBQTFCO0FBSkMsb0NBS0Q7QUFMQyx5QkFLUSxrQ0FBYSxFQUFDLFFBQUQsQUFBUyxJQUFJLE1BTGxDLEFBS1EsQUFBYSxBQUFrQixBQUMxQztBQU5HLHVCQU1JLGFBQUEsQUFBSyxNQUFMLEFBQVcsS0FOZixBQU1JLEFBQWdCO2dDQU5wQjt1QkFPZSxhQUFBLEFBQUssSUFBTCxBQUFTLFNBQVQsQUFBa0IsS0FBbEIsQUFBdUIsTUFBTSxTQVA1QyxBQU9lLEFBQTZCLEFBQVM7O21CQUF4RDtBQVBHLHFDQVFQOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxhQUFaLEFBQXdCLEFBQ3hCO3dCQUFBLEFBQVEsSUFBUixBQUFZLFFBQVosQUFBbUIsQUFDZjtBQVZHLHNCQUFBLEFBVUc7Z0NBVkg7dUNBV0ssQUFBTSxRQUFOLEFBQWMsT0FBZCxBQUFxQixNQUFyQixBQUEwQixXQUFXLE1BQUEsQUFBSyxNQUExQyxBQUFnRCxVQUFoRCxBQUF5RCxHQUF6RCxBQUE0RDt3QkFDaEUsU0FaRCxBQVdLLEFBQWlFLEFBQ3JFLEFBQVM7QUFENEQsQUFDM0UsaUJBRFU7O21CQUFaO0FBWE8sK0JBQUE7Z0NBQUE7dUJBY2UsZ0JBQUEsQUFBTSxRQUFOLEFBQWMsUUFBUSxTQUF0QixBQUFzQixBQUFTLElBZDlDLEFBY2UsQUFBbUM7O21CQUFuRDtBQWRDLG1DQWVQOztzQkFBQSxBQUFLLE1BQUwsQUFBVyxXQUFXLFFBQXRCLEFBQXNCLEFBQVEsQUFDOUI7c0JBQUEsQUFBSyxNQUFMLEFBQVcsT0FBTyxRQUFsQixBQUFrQixBQUFRLEFBQzFCO3dCQUFBLEFBQVEsSUFBUixBQUFZLFdBQVosQUFBc0IsQUFDdEI7b0JBQUcsSUFBQSxBQUFJLFdBQVAsQUFBa0IsTUFBTSxBQUN0QjsrQkFBQSxBQUFhLFFBQWIsQUFBcUIsV0FBckIsQUFBZ0MsQUFDaEM7QUFDRDtBQUhELHVCQUdLLEFBQ0g7d0JBQUEsQUFBSyxTQUFTLEVBQUMsV0FBZixBQUFjLEFBQVksQUFDM0I7QUFFRDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE9BQU0sV0F6QnRCLEFBeUJQLEFBQWMsQUFBeUI7Z0NBekJoQztBQUFBOzttQkFBQTtnQ0FBQTtnREEyQlA7O3NCQUFBLEFBQUssU0FBUyxFQUFDLFdBM0JSLEFBMkJQLEFBQWMsQUFBWTs7bUJBRzVCO3NCQTlCUyxBQThCVCxBQUFLOzttQkE5Qkk7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7OztpQ0FSQyxBQUNWO1dBQUEsQUFBSztrQkFBUSxBQUNELEFBQ1Y7bUJBRlcsQUFFQSxBQUNYO2NBQU0sQ0FISyxBQUdKLEFBQ1A7aUJBSkYsQUFBYSxBQUlGLEFBRVo7QUFOYyxBQUNYOzs7OzZCQXNDSTttQkFDTjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLHVDQUFLLFdBQU4sQUFBZ0IsVUFBUyxPQUFPLEVBQUUsUUFBbEMsQUFBZ0MsQUFBVSxVQUFVLGVBQXBELEFBQWtFO29CQUFsRTtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBTyxFQUFFLFVBQXRCLEFBQW9CLEFBQVk7b0JBQWhDO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLElBQVIsQUFBVyxNQUFLLE9BQWhCLEFBQXNCLFFBQU8sV0FBN0IsQUFBdUM7b0JBQXZDO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBSUEsMkNBQUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVcsU0FBUSxVQUFVLEtBQTdCLEFBQWtDLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTFELEFBQWdFO29CQUFoRTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBUSxTQUFUO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLHNCQUFELEFBQU07ZUFBTixBQUVFO2NBRkYsQUFFTyxBQUNMO3NCQUhGLEFBR2UsQUFDYjtxQkFKRixBQUljLEFBQ1o7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFVLE1BQUEsQUFBTSxPQUR2QixBQUNSLEFBQWMsQUFBd0I7QUFOMUM7O29CQUFBO3NCQURGLEFBQ0UsQUFTQTtBQVRBO0FBQ0UsMEJBUUYsQUFBQztlQUFELEFBRUU7Z0JBRkYsQUFFUyxBQUNQO2lCQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQixBQUNwQjtpQkFKRjs7b0JBQUE7c0JBVkYsQUFVRSxBQU1BO0FBTkE7QUFDRSwwQkFLRixBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLE1BQTNCLEFBQWdDLFNBQVEsTUFBeEMsQUFBNkMsVUFBUyxTQUFTLEtBQUEsQUFBSyxNQUFwRSxBQUEwRTtvQkFBMUU7c0JBQUE7QUFBQTtTQXpCWixBQUNFLEFBQ0UsQUFDRSxBQUtFLEFBQ0UsQUFnQkUsQUFTYjs7Ozs7QUFFSCxBLEFBckZvQjs7a0JBcUZwQixBQUFlIiwiZmlsZSI6ImxvZ2luLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sYXVyYWNlcm9uL0RvY3VtZW50cy9BQUFfYmxvY2tjaGFpbi9hYWEtYmxvY2tjaGFpbi1zcjJpMzA1L0V0aGVyZXVtIn0=