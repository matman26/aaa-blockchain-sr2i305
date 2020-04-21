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

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _auth = require('../lib/auth');

var _eosAPI = require('../lib/eosAPI');

var _eosAPI2 = _interopRequireDefault(_eosAPI);

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
    }, _this.onSubmitEth = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var _ref3, result;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMess: '' });
                _context.next = 4;
                return (0, _auth.signUp)(_this.state.username, 1);

              case 4:
                _ref3 = _context.sent;
                result = _ref3.result;

                console.log("Token: ", result);
                if (result.status === true) {
                  _jsCookie2.default.set('session', result.signature);
                  _routes.Router.pushRoute('/');
                } else {
                  _this.setState({ errorMess: result });
                }
                _this.resetState();

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onSubmitEOS = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMess: '' });
                console.log("Acaaaa");
                return _context2.abrupt('return', _eosAPI2.default.login(_this.state.username));

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
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
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { style: { height: '80vh' }, verticalAlign: 'middle', columns: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, floated: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('video', { width: '450px', height: '150px', margin: 'auto', src: 'https://d33wubrfki0l68.cloudfront.net/392e4f97600667731f325389608f9d81e23d949e/5e764/ethereum-hero-light.mp4', playsInline: true, autoPlay: true, loop: true, muted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'blue', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Log-in to your account')), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmitEth, error: !!this.state.errorMess, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
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
          lineNumber: 60
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Something went wrong',
        content: this.state.errorMess,
        compact: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', fluid: true, size: 'large', type: 'submit', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Login')))), _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, floated: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { centered: true, size: 'small', src: '/static/eosio.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'blue', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'Log-in to your account')), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmitEOS, error: !!this.state.errorMess, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
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
          lineNumber: 88
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Something went wrong',
        content: this.state.errorMess,
        compact: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', fluid: true, size: 'large', type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, 'Login'))))));
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29va2llIiwic2lnblVwIiwiZW9zQXBpIiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJJbWFnZSIsIk1lc3NhZ2UiLCJTZWdtZW50IiwiTGF5b3V0IiwiUm91dGVyIiwiTGluayIsIkxvZ2luIiwic3RhdGUiLCJ1c2VybmFtZSIsImVycm9yTWVzcyIsInJvbGUiLCJsb2FkaW5nIiwib25TdWJtaXRFdGgiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2V0Iiwic2lnbmF0dXJlIiwicHVzaFJvdXRlIiwicmVzZXRTdGF0ZSIsIm9uU3VibWl0RU9TIiwibG9naW4iLCJoZWlnaHQiLCJtYXhXaWR0aCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFRLEFBQWE7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVEsQUFBTSxBQUFNLEFBQVEsQUFBTyxBQUFTOztBQUNyRCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFRLEFBQVk7Ozs7Ozs7SSxBQUV0Qjs7Ozs7Ozs7Ozs7Ozs7OzBNLEFBQ0o7Z0JBQVEsQUFDSSxBQUNWO2lCQUZNLEFBRUssQUFDWDtZQUFNLENBSEEsQUFHQyxBQUNQO2UsQUFKTSxBQUlHO0FBSkgsQUFDTixhLEFBY0Y7MkZBQWMsaUJBQUEsQUFBTyxPQUFQO21CQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFDWjtzQkFBQSxBQUFNLEFBQ047c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE1BQUssV0FGaEIsQUFFWixBQUFjLEFBQXdCO2dDQUYxQjt1QkFHVyxrQkFBTyxNQUFBLEFBQUssTUFBWixB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QTtTQXpCUixBQUNFLEFBT0UsQUFDRSxBQWdCRSxBQU1OLDZCQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQU8sRUFBRSxVQUF0QixBQUFvQixBQUFZLE9BQVEsU0FBeEMsQUFBZ0Q7b0JBQWhEO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxBQUFDLHdDQUFNLFVBQVAsTUFBZ0IsTUFBaEIsQUFBcUIsU0FBUSxLQUE3QixBQUFpQztvQkFBakM7c0JBREEsQUFDQSxBQUNFO0FBREY7MEJBQ0UsQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxPQUFoQixBQUFzQixRQUFPLFdBQTdCLEFBQXVDO29CQUF2QztzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCx3QkFBQSxBQUFROztvQkFBUjtzQkFBQTtBQUFBO0FBQUEsU0FISixBQUVFLEFBQ0UsQUFFRiw0Q0FBQSxBQUFDLHVDQUFLLE1BQU4sQUFBVyxTQUFRLFVBQVUsS0FBN0IsQUFBa0MsYUFBYSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0QsQUFBbUU7b0JBQW5FO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDBDQUFRLFNBQVQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsc0JBQUQsQUFBTTtlQUFOLEFBRUU7Y0FGRixBQUVPLEFBQ0w7c0JBSEYsQUFHZSxBQUNiO3FCQUpGLEFBSWMsQUFDWjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFDLFVBQVUsTUFBQSxBQUFNLE9BRHZCLEFBQ1IsQUFBYyxBQUF3QjtBQU4xQzs7b0JBQUE7c0JBREYsQUFDRSxBQVNBO0FBVEE7QUFDRSwwQkFRRixBQUFDO2VBQUQsQUFFRTtnQkFGRixBQUVTLEFBQ1A7aUJBQVMsS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ3BCO2lCQUpGOztvQkFBQTtzQkFWRixBQVVFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsTUFBM0IsQUFBZ0MsU0FBUSxNQUF4QyxBQUE2QztvQkFBN0M7c0JBQUE7QUFBQTtTQXZEWixBQUNFLEFBQ0UsQUErQkUsQUFLRSxBQUNFLEFBZ0JFLEFBU2I7Ozs7O0FBRUgsQSxBQXpHb0I7O2tCQXlHcEIsQUFBZSIsImZpbGUiOiJsb2dpbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGF1cmFjZXJvbi9Eb2N1bWVudHMvQUFBX2Jsb2NrY2hhaW4vYWFhLWJsb2NrY2hhaW4tc3IyaTMwNS9FdGhlcmV1bSJ9