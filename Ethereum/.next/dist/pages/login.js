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
                return _login2.default.methods.recover(hash, signature).call();

              case 17:
                ans = _context.sent;

                console.log(ans);

                _context.next = 24;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context['catch'](14);

                console.log(_context.t0);

              case 24:

                if (ans.toLowerCase() === accounts[0].toLowerCase()) {
                  localStorage.setItem('session', signature);
                  _routes.Router.pushRoute('/');
                }

                _context.next = 30;
                break;

              case 27:
                _context.prev = 27;
                _context.t1 = _context['catch'](2);

                _this.setState({ errorMess: _context.t1.message });

              case 30:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 27], [14, 21]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Login, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', style: { height: '80vh' }, verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'blue', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Log-in to your account'), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmit, error: !!this.state.errorMess, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, { fluid: true, icon: 'user', iconPosition: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Something went wrong',
        content: this.state.errorMess,
        compact: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', fluid: true, size: 'large', type: 'submit', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Login'))))));
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwicmFuZG9tU3RyaW5nIiwibG9naW4iLCJ3ZWIzIiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJJbWFnZSIsIk1lc3NhZ2UiLCJTZWdtZW50IiwiTGF5b3V0IiwiUm91dGVyIiwiTGluayIsIkxvZ2luIiwic3RhdGUiLCJlcnJvck1lc3MiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2VjcmV0IiwibGVuZ3RoIiwidHlwZSIsImhhc2giLCJ1dGlscyIsInNoYTMiLCJwZXJzb25hbCIsInNpZ24iLCJzaWduYXR1cmUiLCJjb25zb2xlIiwibG9nIiwiYW5zIiwibWV0aG9kcyIsInJlY292ZXIiLCJjYWxsIiwidG9Mb3dlckNhc2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImhlaWdodCIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFFUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBUSxBQUFNLEFBQU0sQUFBUSxBQUFPLEFBQVM7O0FBQ3JELEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQVEsQUFBWTs7Ozs7OztJLEFBRXRCOzs7Ozs7Ozs7Ozs7Ozs7ME0sQUFDSjtpQkFBUSxBQUNLLEFBQ1g7ZSxBQUZNLEFBRUc7QUFGSCxBQUNOLGEsQUFHRjsyRkFBVyxpQkFBQSxBQUFPLE9BQVA7K0NBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUNOO3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFLLFdBRm5CLEFBRVQsQUFBYyxBQUF3QjtnQ0FGN0I7Z0NBQUE7dUJBSWdCLGFBQUEsQUFBSyxJQUpyQixBQUlnQixBQUFTOzttQkFBMUI7QUFKQyxvQ0FLRDtBQUxDLHlCQUtRLGtDQUFhLEVBQUMsUUFBRCxBQUFTLElBQUksTUFMbEMsQUFLUSxBQUFhLEFBQWtCLEFBQzFDO0FBTkcsdUJBTUksYUFBQSxBQUFLLE1BQUwsQUFBVyxLQU5mLEFBTUksQUFBZ0I7Z0NBTnBCO3VCQU9lLGFBQUEsQUFBSyxJQUFMLEFBQVMsU0FBVCxBQUFrQixLQUFsQixBQUF1QixNQUFNLFNBUDVDLEFBT2UsQUFBNkIsQUFBUzs7bUJBQXhEO0FBUEcscUNBUVA7O3dCQUFBLEFBQVEsSUFBUixBQUFZLGFBQVosQUFBd0IsQUFDeEI7d0JBQUEsQUFBUSxJQUFSLEFBQVksUUFBWixBQUFtQixBQUNmO0FBVkcsc0JBQUEsQUFVRztnQ0FWSDtnQ0FBQTt1QkFhTyxnQkFBQSxBQUFNLFFBQU4sQUFBYyxRQUFkLEFBQXNCLE1BQXRCLEFBQTJCLFdBYmxDLEFBYU8sQUFBc0M7O21CQUFsRDtBQWJLLCtCQWNMOzt3QkFBQSxBQUFRLElBZEgsQUFjTCxBQUFZOztnQ0FkUDtBQUFBOzttQkFBQTtnQ0FBQTtnREFpQkw7O3dCQUFBLEFBQVEsYUFqQkg7O21CQW9CUDs7b0JBQUcsSUFBQSxBQUFJLGtCQUFrQixTQUFBLEFBQVMsR0FBbEMsQUFBeUIsQUFBWSxlQUFlLEFBQ2xEOytCQUFBLEFBQWEsUUFBYixBQUFxQixXQUFyQixBQUFnQyxBQUNoQztpQ0FBQSxBQUFPLFVBQVAsQUFBaUIsQUFDbEI7QUF2Qk07O2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dEQTBCUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsV0FBVyxZQTFCbkIsQUEwQlAsQUFBYyxBQUFrQjs7bUJBMUJ6QjttQkFBQTtnQ0FBQTs7QUFBQTsyQ0FBQTtBOzs7Ozs7Ozs7OzZCQStCSCxBQUNOOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyx1Q0FBSyxXQUFOLEFBQWdCLFVBQVMsT0FBTyxFQUFFLFFBQWxDLEFBQWdDLEFBQVUsVUFBVSxlQUFwRCxBQUFrRTtvQkFBbEU7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQU8sRUFBRSxVQUF0QixBQUFvQixBQUFZO29CQUFoQztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxPQUFoQixBQUFzQixRQUFPLFdBQTdCLEFBQXVDO29CQUF2QztzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUlBLDJDQUFBLEFBQUMsdUNBQUssTUFBTixBQUFXLFNBQVEsVUFBVSxLQUE3QixBQUFrQyxVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUExRCxBQUFnRTtvQkFBaEU7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMENBQVEsU0FBVDtvQkFBQTtzQkFBQSxBQUNFO0FBREY7dUNBQ0UsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixNQUFrQixNQUFsQixBQUF1QixRQUFPLGNBQTlCLEFBQTJDO29CQUEzQztzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDO2VBQUQsQUFFRTtnQkFGRixBQUVTLEFBQ1A7aUJBQVMsS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ3BCO2lCQUpGOztvQkFBQTtzQkFGRixBQUVFLEFBYUE7QUFiQTtBQUNFLDBCQVlGLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsTUFBM0IsQUFBZ0MsU0FBUSxNQUF4QyxBQUE2QyxVQUFTLFNBQVMsS0FBQSxBQUFLLE1BQXBFLEFBQTBFO29CQUExRTtzQkFBQTtBQUFBO1NBeEJaLEFBQ0UsQUFDRSxBQUNFLEFBS0UsQUFDRSxBQWVFLEFBWWI7Ozs7O0FBRUgsQSxBQTNFb0I7O2tCQTJFcEIsQUFBZSIsImZpbGUiOiJsb2dpbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGF1cmFjZXJvbi9Eb2N1bWVudHMvQUFBX2Jsb2NrY2hhaW4vYWFhLWJsb2NrY2hhaW4tc3IyaTMwNS9FdGhlcmV1bSJ9