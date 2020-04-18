webpackHotUpdate(5,{

/***/ 795:
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

var _cryptoRandomString = __webpack_require__(796);

var _cryptoRandomString2 = _interopRequireDefault(_cryptoRandomString);

var _login = __webpack_require__(874);

var _login2 = _interopRequireDefault(_login);

var _we = __webpack_require__(601);

var _we2 = _interopRequireDefault(_we);

var _semanticUiReact = __webpack_require__(514);

var _Layout = __webpack_require__(1299);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(791);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zZjQ0NGE0ZDZhMTdhMmM3ZDU1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanM/NzVkNjc2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmFuZG9tU3RyaW5nIGZyb20gJ2NyeXB0by1yYW5kb20tc3RyaW5nJ1xuXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vZXRoZXJldW0vbG9naW4nO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2UzJ1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBHcmlkLCBIZWFkZXIsIEltYWdlLCBNZXNzYWdlLCBTZWdtZW50IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHtSb3V0ZXIsIExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50e1xuICBzdGF0ZSA9IHtcbiAgICB1c2VybmFtZTogJycsXG4gICAgZXJyb3JNZXNzOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9O1xuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT57XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWUsZXJyb3JNZXNzOicnfSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGNvbnN0IHNlY3JldCA9IHJhbmRvbVN0cmluZyh7bGVuZ3RoOiAxNSwgdHlwZTonYmFzZTY0J30pXG4gICAgICB2YXIgaGFzaCA9IHdlYjMudXRpbHMuc2hhMyhzZWNyZXQpXG4gICAgICB2YXIgc2lnbmF0dXJlID0gYXdhaXQgd2ViMy5ldGgucGVyc29uYWwuc2lnbihoYXNoLCBhY2NvdW50c1swXSlcbiAgICAgIGNvbnNvbGUubG9nKFwic2lnbmF0dXJlXCIsc2lnbmF0dXJlKVxuICAgICAgY29uc29sZS5sb2coXCJoYXNoXCIsaGFzaClcbiAgICAgIHZhciBhbnMgPSBcIlwiO1xuICAgICAgXG4gICAgICB0cnl7XG4gICAgICAgIGFucyA9IGF3YWl0IGxvZ2luLm1ldGhvZHMuc2lnbkluKGhhc2gsc2lnbmF0dXJlLCB0aGlzLnN0YXRlLnVzZXJuYW1lLDEpLnNlbmQoe1xuICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICAgIH0pICBcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzczogZXJyb3IubWVzc2FnZX0pO1xuICAgICAgfVxuICAgIFxuICAgICAgaWYoYW5zLnN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2Vzc2lvbicsIHNpZ25hdHVyZSlcbiAgICAgICAgY29uc29sZS5sb2coYW5zKTtcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzczogXCJBdXRoZW50aWNhdGlvbiBoYXMgZmFpbGVkXCJ9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzOiBlcnJvci5tZXNzYWdlfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEdyaWQgdGV4dEFsaWduPSdjZW50ZXInIHN0eWxlPXt7IGhlaWdodDogJzgwdmgnIH19IHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IG1heFdpZHRoOiA0NTAgfX0+XG4gICAgICAgICAgICA8SGVhZGVyIGFzPSdoMicgY29sb3I9J2JsdWUnIHRleHRBbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9Jy9sb2dvLnBuZycgLz4gTG9nLWluIHRvIHlvdXIgYWNjb3VudCAqL31cbiAgICAgICAgICAgICAgTG9nLWluIHRvIHlvdXIgYWNjb3VudFxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICA8Rm9ybSBzaXplPSdsYXJnZScgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzfT5cbiAgICAgICAgICAgICAgPFNlZ21lbnQgc3RhY2tlZD5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgIGljb249J3VzZXInXG4gICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPE1lc3NhZ2UgXG4gICAgICAgICAgICAgICAgICBlcnJvciBcbiAgICAgICAgICAgICAgICAgIGhlYWRlcj0nU29tZXRoaW5nIHdlbnQgd3JvbmcnIFxuICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3N9IFxuICAgICAgICAgICAgICAgICAgY29tcGFjdFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0nYmx1ZScgZmx1aWQgc2l6ZT0nbGFyZ2UnIHR5cGU9J3N1Ym1pdCcgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIHsvKiA8TWVzc2FnZT5cbiAgICAgICAgICAgICAgTmV3IHRvIHVzPyA8YSBocmVmPScjJz57dGhpcy5wcm9wcy5hZGRyZXNzfTwvYT5cbiAgICAgICAgICAgIDwvTWVzc2FnZT4gKi99XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBMb2dpblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2xvZ2luLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOztBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBQ0E7QUFPQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQWJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWlCQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUF6QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBNEJBO0FBQ0E7QUFEQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQWdDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFOQTs7QUFBQTtBQVNBO0FBVEE7QUFDQTtBQVVBO0FBQ0E7QUFBQTtBQUhBOztBQUFBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBWUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9