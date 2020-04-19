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

var _jsCookie = __webpack_require__(796);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _auth = __webpack_require__(797);

var _semanticUiReact = __webpack_require__(514);

var _Layout = __webpack_require__(1301);

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
          lineNumber: 39
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { style: { height: '80vh' }, verticalAlign: 'middle', columns: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, floated: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('video', { width: '450px', height: '150px', margin: 'auto', src: 'https://d33wubrfki0l68.cloudfront.net/392e4f97600667731f325389608f9d81e23d949e/5e764/ethereum-hero-light.mp4', playsInline: true, autoPlay: true, loop: true, muted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'blue', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Log-in to your account')), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmit, error: !!this.state.errorMess, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
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
          lineNumber: 50
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Something went wrong',
        content: this.state.errorMess,
        compact: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', fluid: true, size: 'large', type: 'submit', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Login')))), _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, floated: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { centered: true, size: 'small', src: '/static/eosio.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'blue', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Log-in to your account')), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
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
          lineNumber: 78
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', fluid: true, size: 'large', type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Login'))))));
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29va2llIiwic2lnblVwIiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJJbWFnZSIsIk1lc3NhZ2UiLCJTZWdtZW50IiwiTGF5b3V0IiwiUm91dGVyIiwiTGluayIsIkxvZ2luIiwic3RhdGUiLCJ1c2VybmFtZSIsImVycm9yTWVzcyIsInJvbGUiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2V0Iiwic2lnbmF0dXJlIiwicHVzaFJvdXRlIiwicmVzZXRTdGF0ZSIsImhlaWdodCIsIm1heFdpZHRoIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQVEsQUFBYTs7QUFDckIsQUFBUyxBQUFRLEFBQU0sQUFBTSxBQUFRLEFBQU8sQUFBUzs7QUFDckQsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBUSxBQUFZOzs7Ozs7O0ksQUFFdEI7Ozs7Ozs7Ozs7Ozs7OzswTSxBQUNKO2dCQUFRLEFBQ0ksQUFDVjtpQkFGTSxBQUVLLEFBQ1g7WUFBTSxDQUhBLEFBR0MsQUFDUDtlLEFBSk0sQUFJRztBQUpILEFBQ04sYSxBQWNGOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDttQkFBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUNOO3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFLLFdBRm5CLEFBRVQsQUFBYyxBQUF3QjtnQ0FGN0I7dUJBR2Msa0JBQU8sTUFBQSxBQUFLLE1BQVosQUFBa0IsVUFIaEMsQUFHYyxBQUEyQjs7bUJBSHpDO2lDQUdGO0FBSEUsK0JBQUEsQUFHRixB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REY7eUJBQ0csY0FBRCx3QkFBQSxBQUFROztvQkFBUjtzQkFBQTtBQUFBO0FBQUEsU0FISixBQUVFLEFBQ0UsQUFFRiw0Q0FBQSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBUSxTQUFUO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLHNCQUFELEFBQU07ZUFBTixBQUVFO2NBRkYsQUFFTyxBQUNMO3NCQUhGLEFBR2UsQUFDYjtxQkFKRixBQUljLEFBQ1o7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFVLE1BQUEsQUFBTSxPQUR2QixBQUNSLEFBQWMsQUFBd0I7QUFOMUM7O29CQUFBO3NCQURGLEFBQ0UsQUFlQTtBQWZBO0FBQ0UsMEJBY0YsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQixNQUEyQixNQUEzQixBQUFnQyxTQUFRLE1BQXhDLEFBQTZDO29CQUE3QztzQkFBQTtBQUFBO1NBdkRaLEFBQ0UsQUFDRSxBQStCRSxBQUtFLEFBQ0UsQUFnQkUsQUFTYjs7Ozs7QUFFSCxBLEFBaEdvQjs7a0JBZ0dwQixBQUFlIiwiZmlsZSI6ImxvZ2luLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sYXVyYWNlcm9uL0RvY3VtZW50cy9BQUFfYmxvY2tjaGFpbi9hYWEtYmxvY2tjaGFpbi1zcjJpMzA1L0V0aGVyZXVtIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lNDg4NDVkNmRlZmJmYWNhYzMzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanM/OGQ2YzM2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHtzaWduVXB9IGZyb20gJy4uL2xpYi9hdXRoJ1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBHcmlkLCBIZWFkZXIsIEltYWdlLCBNZXNzYWdlLCBTZWdtZW50IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHtSb3V0ZXIsIExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50e1xuICBzdGF0ZSA9IHtcbiAgICB1c2VybmFtZTogJycsXG4gICAgZXJyb3JNZXNzOiAnJyxcbiAgICByb2xlOiAtMSxcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9O1xuXG4gIHJlc2V0U3RhdGUoKXtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgZXJyb3JNZXNzOiAnJyxcbiAgICAgIHJvbGU6IC0xLFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9XG4gIH1cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlLGVycm9yTWVzczonJ30pO1xuICAgIGNvbnN0IHtyZXN1bHR9ID0gYXdhaXQgc2lnblVwKHRoaXMuc3RhdGUudXNlcm5hbWUsMSlcbiAgICBjb25zb2xlLmxvZyhcIlRva2VuOiBcIixyZXN1bHQpXG4gICAgaWYocmVzdWx0LnN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICBDb29raWUuc2V0KCdzZXNzaW9uJywgcmVzdWx0LnNpZ25hdHVyZSlcbiAgICAgIFJvdXRlci5wdXNoUm91dGUoJy8nKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzczogcmVzdWx0fSlcbiAgICB9XG4gICAgdGhpcy5yZXNldFN0YXRlKClcbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8R3JpZCBzdHlsZT17eyBoZWlnaHQ6ICc4MHZoJyB9fSB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnIGNvbHVtbnM9J2VxdWFsJz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgbWF4V2lkdGg6IDQ1MCB9fSBmbG9hdGVkPSdsZWZ0Jz5cbiAgICAgICAgICAgIDx2aWRlbyB3aWR0aD0nNDUwcHgnIGhlaWdodD0nMTUwcHgnIG1hcmdpbj0nYXV0bycgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8zOTJlNGY5NzYwMDY2NzczMWYzMjUzODk2MDhmOWQ4MWUyM2Q5NDllLzVlNzY0L2V0aGVyZXVtLWhlcm8tbGlnaHQubXA0XCIgcGxheXNJbmxpbmUgYXV0b1BsYXkgbG9vcCBtdXRlZD5cbiAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICA8SGVhZGVyIGFzPSdoMicgY29sb3I9J2JsdWUnIHRleHRBbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgIDxIZWFkZXIuQ29udGVudD5Mb2ctaW4gdG8geW91ciBhY2NvdW50PC9IZWFkZXIuQ29udGVudD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtIHNpemU9J2xhcmdlJyBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3N9PlxuICAgICAgICAgICAgICA8U2VnbWVudCBzdGFja2VkPlxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgaWNvbj0ndXNlcidcbiAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZSdcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBcbiAgICAgICAgICAgICAgICAgIGVycm9yIFxuICAgICAgICAgICAgICAgICAgaGVhZGVyPSdTb21ldGhpbmcgd2VudCB3cm9uZycgXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc30gXG4gICAgICAgICAgICAgICAgICBjb21wYWN0XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdibHVlJyBmbHVpZCBzaXplPSdsYXJnZScgdHlwZT0nc3VibWl0JyBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IG1heFdpZHRoOiA0NTAgfSB9IGZsb2F0ZWQ9J3JpZ2h0Jz5cbiAgICAgICAgICA8SW1hZ2UgY2VudGVyZWQgc2l6ZT0nc21hbGwnIHNyYz1cIi9zdGF0aWMvZW9zaW8ucG5nXCIgLz5cbiAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gyJyBjb2xvcj0nYmx1ZScgdGV4dEFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICA8SGVhZGVyLkNvbnRlbnQ+TG9nLWluIHRvIHlvdXIgYWNjb3VudDwvSGVhZGVyLkNvbnRlbnQ+XG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtIHNpemU9J2xhcmdlJz5cbiAgICAgICAgICAgICAgPFNlZ21lbnQgc3RhY2tlZD5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgIGljb249J3VzZXInXG4gICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249J2xlZnQnXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIDxNZXNzYWdlIFxuICAgICAgICAgICAgICAgICAgZXJyb3IgXG4gICAgICAgICAgICAgICAgICBoZWFkZXI9J1NvbWV0aGluZyB3ZW50IHdyb25nJyBcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzfSBcbiAgICAgICAgICAgICAgICAgIGNvbXBhY3RcbiAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdibHVlJyBmbHVpZCBzaXplPSdsYXJnZScgdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvbG9naW4uanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQUE7O0FBRkE7QUFjQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQUdBO0FBQ0E7QUFKQTtBQUdBO0FBSEE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQVpBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVBBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUxBOzs7O0FBbUJBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7O0FBQUE7QUFTQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFIQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU5BOztBQUFBO0FBZUE7QUFmQTtBQUNBO0FBY0E7QUFBQTtBQUFBO0FBU0E7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9