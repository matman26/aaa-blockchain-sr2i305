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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlTGF5b3V0RWZmZWN0IiwicmFuZG9tU3RyaW5nIiwibG9naW4iLCJ3ZWIzIiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJJbWFnZSIsIk1lc3NhZ2UiLCJTZWdtZW50IiwiTGF5b3V0IiwiUm91dGVyIiwiTGluayIsIkxvZ2luIiwic3RhdGUiLCJ1c2VybmFtZSIsImVycm9yTWVzcyIsInJvbGUiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2VjcmV0IiwibGVuZ3RoIiwidHlwZSIsImhhc2giLCJ1dGlscyIsInNoYTMiLCJwZXJzb25hbCIsInNpZ24iLCJzaWduYXR1cmUiLCJjb25zb2xlIiwibG9nIiwiYW5zIiwibWV0aG9kcyIsInNpZ25JbiIsInNlbmQiLCJmcm9tIiwicHJvZmlsZSIsImNhbGwiLCJzdGF0dXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVzZXRTdGF0ZSIsImhlaWdodCIsIm1heFdpZHRoIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVMsQUFBVzs7OztBQUMzQixBQUFPOzs7O0FBRVAsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVEsQUFBTSxBQUFNLEFBQVEsQUFBTyxBQUFTOztBQUNyRCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFRLEFBQVk7Ozs7Ozs7SSxBQUV0Qjs7Ozs7Ozs7Ozs7Ozs7OzBNLEFBQ0o7Z0JBQVEsQUFDSSxBQUNWO2lCQUZNLEFBRUssQUFDWDtZQUFNLENBSEEsQUFHQyxBQUNQO2UsQUFKTSxBQUlHO0FBSkgsQUFDTixhLEFBY0Y7MkZBQVcsaUJB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QywwQ0FBUSxTQUFUO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLHNCQUFELEFBQU07ZUFBTixBQUVFO2NBRkYsQUFFTyxBQUNMO3NCQUhGLEFBR2UsQUFDYjtxQkFKRixBQUljLEFBQ1o7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFVLE1BQUEsQUFBTSxPQUR2QixBQUNSLEFBQWMsQUFBd0I7QUFOMUM7O29CQUFBO3NCQURGLEFBQ0UsQUFTQTtBQVRBO0FBQ0UsMEJBUUYsQUFBQztlQUFELEFBRUU7Z0JBRkYsQUFFUyxBQUNQO2lCQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQixBQUNwQjtpQkFKRjs7b0JBQUE7c0JBVkYsQUFVRSxBQU1BO0FBTkE7QUFDRSwwQkFLRixBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLE1BQTNCLEFBQWdDLFNBQVEsTUFBeEMsQUFBNkMsVUFBUyxTQUFTLEtBQUEsQUFBSyxNQUFwRSxBQUEwRTtvQkFBMUU7c0JBQUE7QUFBQTtTQXpCWixBQUNFLEFBQ0UsQUFDRSxBQUtFLEFBQ0UsQUFnQkUsQUFTYjs7Ozs7QUFFSCxBLEFBckZvQjs7a0JBcUZwQixBQUFlIiwiZmlsZSI6ImxvZ2luLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sYXVyYWNlcm9uL0RvY3VtZW50cy9BQUFfYmxvY2tjaGFpbi9hYWEtYmxvY2tjaGFpbi1zcjJpMzA1L0V0aGVyZXVtIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xMjZmYzFiYjM2ZGNmOTlkMzM4My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanM/ZDk3Yjk3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmFuZG9tU3RyaW5nIGZyb20gJ2NyeXB0by1yYW5kb20tc3RyaW5nJ1xuXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vZXRoZXJldW0vbG9naW4nO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2UzJ1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBHcmlkLCBIZWFkZXIsIEltYWdlLCBNZXNzYWdlLCBTZWdtZW50IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHtSb3V0ZXIsIExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50e1xuICBzdGF0ZSA9IHtcbiAgICB1c2VybmFtZTogJycsXG4gICAgZXJyb3JNZXNzOiAnJyxcbiAgICByb2xlOiAtMSxcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9O1xuXG4gIHJlc2V0U3RhdGUoKXtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgZXJyb3JNZXNzOiAnJyxcbiAgICAgIHJvbGU6IC0xLFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9XG4gIH1cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlLGVycm9yTWVzczonJ30pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICBjb25zdCBzZWNyZXQgPSByYW5kb21TdHJpbmcoe2xlbmd0aDogMTUsIHR5cGU6J2Jhc2U2NCd9KVxuICAgICAgdmFyIGhhc2ggPSB3ZWIzLnV0aWxzLnNoYTMoc2VjcmV0KVxuICAgICAgdmFyIHNpZ25hdHVyZSA9IGF3YWl0IHdlYjMuZXRoLnBlcnNvbmFsLnNpZ24oaGFzaCwgYWNjb3VudHNbMF0pXG4gICAgICBjb25zb2xlLmxvZyhcInNpZ25hdHVyZVwiLHNpZ25hdHVyZSlcbiAgICAgIGNvbnNvbGUubG9nKFwiaGFzaFwiLGhhc2gpXG4gICAgICB2YXIgYW5zID0gXCJcIjtcbiAgICAgIGFucyA9IGF3YWl0IGxvZ2luLm1ldGhvZHMuc2lnbkluKGhhc2gsc2lnbmF0dXJlLCB0aGlzLnN0YXRlLnVzZXJuYW1lLDEpLnNlbmQoe1xuICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgfSkgXG4gICAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgbG9naW4ubWV0aG9kcy5wcm9maWxlKGFjY291bnRzWzBdKS5jYWxsKClcbiAgICAgIHRoaXMuc3RhdGUudXNlcm5hbWUgPSBwcm9maWxlWzBdXG4gICAgICB0aGlzLnN0YXRlLnJvbGUgPSBwcm9maWxlWzFdXG4gICAgICBjb25zb2xlLmxvZyhcIlByb2ZpbGVcIixwcm9maWxlKTtcbiAgICAgIGlmKGFucy5zdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Nlc3Npb24nLCBzaWduYXR1cmUpXG4gICAgICAgIC8vIFJvdXRlci5wdXNoUm91dGUoJy8nKTtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvck1lc3M6IFwiQXV0aGVudGljYXRpb24gaGFzIGZhaWxlZFwifSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2UsZXJyb3JNZXNzOicnfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzczogXCJOb3QgdXNlcm5hbWUgcHJvdmlkZWRcIn0pO1xuXG4gICAgfVxuICAgIHRoaXMucmVzZXRTdGF0ZSgpXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEdyaWQgdGV4dEFsaWduPSdjZW50ZXInIHN0eWxlPXt7IGhlaWdodDogJzgwdmgnIH19IHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IG1heFdpZHRoOiA0NTAgfX0+XG4gICAgICAgICAgICA8SGVhZGVyIGFzPSdoMicgY29sb3I9J2JsdWUnIHRleHRBbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9Jy9sb2dvLnBuZycgLz4gTG9nLWluIHRvIHlvdXIgYWNjb3VudCAqL31cbiAgICAgICAgICAgICAgTG9nLWluIHRvIHlvdXIgYWNjb3VudFxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICA8Rm9ybSBzaXplPSdsYXJnZScgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzfT5cbiAgICAgICAgICAgICAgPFNlZ21lbnQgc3RhY2tlZD5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgIGljb249J3VzZXInXG4gICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPE1lc3NhZ2UgXG4gICAgICAgICAgICAgICAgICBlcnJvciBcbiAgICAgICAgICAgICAgICAgIGhlYWRlcj0nU29tZXRoaW5nIHdlbnQgd3JvbmcnIFxuICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3N9IFxuICAgICAgICAgICAgICAgICAgY29tcGFjdFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0nYmx1ZScgZmx1aWQgc2l6ZT0nbGFyZ2UnIHR5cGU9J3N1Ym1pdCcgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvbG9naW4uanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFBQTs7QUFGQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFQQTtBQUNBO0FBT0E7QUFDQTtBQVRBO0FBQUE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBWEE7QUFBQTtBQWNBO0FBQ0E7QUFEQTtBQWRBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBR0E7QUFDQTtBQURBO0FBekJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUEyQkE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUEvQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBUEE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBTEE7Ozs7QUFzQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7O0FBQUE7QUFTQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFIQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQVNBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==