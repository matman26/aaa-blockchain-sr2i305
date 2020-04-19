webpackHotUpdate(5,{

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _cryptoRandomString = __webpack_require__(564);

var _cryptoRandomString2 = _interopRequireDefault(_cryptoRandomString);

var _jsCookie = __webpack_require__(603);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _login = __webpack_require__(604);

var _login2 = _interopRequireDefault(_login);

var _we = __webpack_require__(507);

var _we2 = _interopRequireDefault(_we);

var _auth = __webpack_require__(1005);

var _semanticUiReact = __webpack_require__(515);

var _Layout = __webpack_require__(1301);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(794);

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
          lineNumber: 42
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', style: { height: '80vh' }, verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'blue', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Log-in to your account'), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmit, error: !!this.state.errorMess, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
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
          lineNumber: 51
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Something went wrong',
        content: this.state.errorMess,
        compact: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', fluid: true, size: 'large', type: 'submit', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Login'))))));
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwicmFuZG9tU3RyaW5nIiwiQ29va2llIiwibG9naW4iLCJ3ZWIzIiwic2lnblVwIiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJJbWFnZSIsIk1lc3NhZ2UiLCJTZWdtZW50IiwiTGF5b3V0IiwiUm91dGVyIiwiTGluayIsIkxvZ2luIiwic3RhdGUiLCJ1c2VybmFtZSIsImVycm9yTWVzcyIsInJvbGUiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2V0Iiwic2lnbmF0dXJlIiwicHVzaFJvdXRlIiwicmVzZXRTdGF0ZSIsImhlaWdodCIsIm1heFdpZHRoIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7QUFDckIsQUFBUyxBQUFRLEFBQU0sQUFBTSxBQUFRLEFBQU8sQUFBUzs7QUFDckQsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBUSxBQUFZOzs7Ozs7O0ksQUFFdEI7Ozs7Ozs7Ozs7Ozs7OzswTSxBQUNKO2dCQUFRLEFBQ0ksQUFDVjtpQkFGTSxBQUVLLEFBQ1g7WUFBTSxDQUhBLEFBR0MsQUFDUDtlLEFBSk0sQUFJRztBQUpILEFBQ04sYSxBQWNGOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDttQkFBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUNOO3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFLLFdBRm5CLEFBRVQsQUFBYyxBQUF3QjtnQ0FGN0I7dUJBR2Msa0JBQU8sTUFBQSxBQUFLLE1BQVosQUFBa0IsVUFIaEMsQUFHYyxBQUEyQjs7bUJBSHpDO2lDQUdGO0FBSEUsK0JBQUEsQUFHRixBQUNQOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxXQUFaLEFBQXNCLEFBQ3RCO29CQUFHLE9BQUEsQUFBTyxXQUFWLEFBQXFCLE1BQUssQUFDeEI7cUNBQUEsQUFBTyxJQUFQLEFBQVcsV0FBVyxPQUF0QixBQUE2QixBQUM3QjtpQ0FBQSxBQUFPLFVBQVAsQUFBaUIsQUFDbEI7QUFIRCx1QkFHSyxBQUNIO3dCQUFBLEFBQUssU0FBUyxFQUFDLFdBQWYsQUFBYyxBQUFZLEFBQzNCO0FBQ0Q7c0JBWFMsQUFXVCxBQUFLOzttQkFYSTttQkFBQTtnQ0FBQTs7QUFBQTtvQkFBQTtBOzs7Ozs7Ozs7O2lDQVJDLEFBQ1Y7V0FBQSxBQUFLO2tCQUFRLEFBQ0QsQUFDVjttQkFGVyxBQUVBLEFBQ1g7Y0FBTSxDQUhLLEFBR0osQUFDUDtpQkFKRixBQUFhLEFBSUYsQUFFWjtBQU5jLEFBQ1g7Ozs7NkJBbUJJO21CQUNOOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsdUNBQUssV0FBTixBQUFnQixVQUFTLE9BQU8sRUFBRSxRQUFsQyxBQUFnQyxBQUFVLFVBQVUsZUFBcEQsQUFBa0U7b0JBQWxFO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFPLEVBQUUsVUFBdEIsQUFBb0IsQUFBWTtvQkFBaEM7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMseUNBQU8sSUFBUixBQUFXLE1BQUssT0FBaEIsQUFBc0IsUUFBTyxXQUE3QixBQUF1QztvQkFBdkM7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFJQSwyQ0FBQSxBQUFDLHVDQUFLLE1BQU4sQUFBVyxTQUFRLFVBQVUsS0FBN0IsQUFBa0MsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBMUQsQUFBZ0U7b0JBQWhFO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDBDQUFRLFNBQVQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsc0JBQUQsQUFBTTtlQUFOLEFBRUU7Y0FGRixBQUVPLEFBQ0w7c0JBSEYsQUFHZSxBQUNiO3FCQUpGLEFBSWMsQUFDWjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFDLFVBQVUsTUFBQSxBQUFNLE9BRHZCLEFBQ1IsQUFBYyxBQUF3QjtBQU4xQzs7b0JBQUE7c0JBREYsQUFDRSxBQVNBO0FBVEE7QUFDRSwwQkFRRixBQUFDO2VBQUQsQUFFRTtnQkFGRixBQUVTLEFBQ1A7aUJBQVMsS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ3BCO2lCQUpGOztvQkFBQTtzQkFWRixBQVVFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsTUFBM0IsQUFBZ0MsU0FBUSxNQUF4QyxBQUE2QyxVQUFTLFNBQVMsS0FBQSxBQUFLLE1BQXBFLEFBQTBFO29CQUExRTtzQkFBQTtBQUFBO1NBekJaLEFBQ0UsQUFDRSxBQUNFLEFBS0UsQUFDRSxBQWdCRSxBQVNiOzs7OztBQUVILEEsQUFsRW9COztrQkFrRXBCLEFBQWUiLCJmaWxlIjoibG9naW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xhdXJhY2Vyb24vRG9jdW1lbnRzL0FBQV9ibG9ja2NoYWluL2FhYS1ibG9ja2NoYWluLXNyMmkzMDUvRXRoZXJldW0ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/pages/login.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/pages/login.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/login")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yZGY2YTUzYmZlNTI3NzQxZjQ1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanM/YTExMDljZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJhbmRvbVN0cmluZyBmcm9tICdjcnlwdG8tcmFuZG9tLXN0cmluZyc7XG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vZXRoZXJldW0vbG9naW4nO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2UzJ1xuaW1wb3J0IHtzaWduVXB9IGZyb20gJy4uL2xpYi9hdXRoJ1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBHcmlkLCBIZWFkZXIsIEltYWdlLCBNZXNzYWdlLCBTZWdtZW50IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHtSb3V0ZXIsIExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50e1xuICBzdGF0ZSA9IHtcbiAgICB1c2VybmFtZTogJycsXG4gICAgZXJyb3JNZXNzOiAnJyxcbiAgICByb2xlOiAtMSxcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9O1xuXG4gIHJlc2V0U3RhdGUoKXtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgZXJyb3JNZXNzOiAnJyxcbiAgICAgIHJvbGU6IC0xLFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9XG4gIH1cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlLGVycm9yTWVzczonJ30pO1xuICAgIGNvbnN0IHtyZXN1bHR9ID0gYXdhaXQgc2lnblVwKHRoaXMuc3RhdGUudXNlcm5hbWUsMSlcbiAgICBjb25zb2xlLmxvZyhcIlRva2VuOiBcIixyZXN1bHQpXG4gICAgaWYocmVzdWx0LnN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICBDb29raWUuc2V0KCdzZXNzaW9uJywgcmVzdWx0LnNpZ25hdHVyZSlcbiAgICAgIFJvdXRlci5wdXNoUm91dGUoJy8nKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzczogcmVzdWx0fSlcbiAgICB9XG4gICAgdGhpcy5yZXNldFN0YXRlKClcbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8R3JpZCB0ZXh0QWxpZ249J2NlbnRlcicgc3R5bGU9e3sgaGVpZ2h0OiAnODB2aCcgfX0gdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgbWF4V2lkdGg6IDQ1MCB9fT5cbiAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gyJyBjb2xvcj0nYmx1ZScgdGV4dEFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICB7LyogPEltYWdlIHNyYz0nL2xvZ28ucG5nJyAvPiBMb2ctaW4gdG8geW91ciBhY2NvdW50ICovfVxuICAgICAgICAgICAgICBMb2ctaW4gdG8geW91ciBhY2NvdW50XG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtIHNpemU9J2xhcmdlJyBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3N9PlxuICAgICAgICAgICAgICA8U2VnbWVudCBzdGFja2VkPlxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgaWNvbj0ndXNlcidcbiAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZSdcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBcbiAgICAgICAgICAgICAgICAgIGVycm9yIFxuICAgICAgICAgICAgICAgICAgaGVhZGVyPSdTb21ldGhpbmcgd2VudCB3cm9uZycgXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc30gXG4gICAgICAgICAgICAgICAgICBjb21wYWN0XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdibHVlJyBmbHVpZCBzaXplPSdsYXJnZScgdHlwZT0nc3VibWl0JyBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9naW5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9sb2dpbi5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFBQTs7QUFGQTtBQWNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBR0E7QUFDQTtBQUpBO0FBR0E7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBWkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBUEE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBTEE7Ozs7QUFtQkE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7O0FBQUE7QUFTQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFIQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQVNBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==