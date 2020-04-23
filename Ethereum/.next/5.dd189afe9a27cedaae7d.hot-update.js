webpackHotUpdate(5,{

/***/ 827:
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

var _jsCookie = __webpack_require__(828);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _auth = __webpack_require__(829);

var _semanticUiReact = __webpack_require__(528);

var _Layout = __webpack_require__(1371);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(823);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/pages/login.js?entry';


var options = [{ key: 'u', text: 'User', value: 1 }, { key: 'p', text: 'Provider', value: 0 }];

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
        var _this$state, username, role, _ref3, result;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMess: '' });
                _this$state = _this.state, username = _this$state.username, role = _this$state.role;
                _context.next = 5;
                return (0, _auth.signUp)(username, role);

              case 5:
                _ref3 = _context.sent;
                result = _ref3.result;

                console.log("Token: ", result);
                if (result.status === true) {
                  _jsCookie2.default.set('session', result.signature);
                  _routes.Router.pushRoute('/');
                  _this.setState({ loading: false, errorMess: '' });
                } else {
                  _this.setState({ errorMess: result });
                }
                _this.resetState();

              case 10:
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
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { className: 'login', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { as: 'grid', verticalAlign: 'middle', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('video', { width: '450px', height: '150px', margin: 'auto', src: 'https://ethereum.org/ethereum-hero-dark.mp4', playsInline: true, autoPlay: true, loop: true, muted: true, className: 'logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Log-in to your account')), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmitEth, error: !!this.state.errorMess, inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, {
        fluid: true,
        icon: 'user',
        iconPosition: 'left',
        placeholder: 'Username',
        value: this.state.username,
        onChange: function onChange(event) {
          return _this3.setState({ username: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Select, {
        fluid: true,
        label: 'Role',
        options: options,
        value: this.state.role,
        onChange: function onChange(e, _ref4) {
          var value = _ref4.value;
          return _this3.setState({ role: value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Something went wrong',
        content: this.state.errorMess,
        compact: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', fluid: true, size: 'large', type: 'submit', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Login')))))));
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;

// onSubmitEOS = async (event) =>{
//   event.preventDefault();
//   this.setState({loading:true,errorMess:''});
//   console.log("Acaaaa");
//   const data = {
//     user: this.state.username
//   }
//   return eosApi.login(data)
//   console.log("Despues promesa");
// }


{/*<Grid.Column style={{ maxWidth: 450 } } floated='right'>
          <Image centered size='small' src="/static/eosio.png" />
            <Header as='h2' color='blue' textAlign='center'>
              <Header.Content>Log-in to your account</Header.Content>
            </Header>
            <Form size='large' onSubmit={this.onSubmitEOS} error={!!this.state.errorMess}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  onChange={event => 
                    this.setState({username: event.target.value})
                  }
                />
                <Message 
                  error 
                  header='Something went wrong' 
                  content={this.state.errorMess} 
                  compact
                />
                <Button color='blue' fluid size='large' type='submit'>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column> */}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29va2llIiwic2lnblVwIiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJNZXNzYWdlIiwiU2VnbWVudCIsIkNvbnRhaW5lciIsIkxheW91dCIsIlJvdXRlciIsIkxpbmsiLCJvcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwiTG9naW4iLCJzdGF0ZSIsInVzZXJuYW1lIiwiZXJyb3JNZXNzIiwicm9sZSIsImxvYWRpbmciLCJvblN1Ym1pdEV0aCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzZXQiLCJzaWduYXR1cmUiLCJwdXNoUm91dGUiLCJyZXNldFN0YXRlIiwibWF4V2lkdGgiLCJ0YXJnZXQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFRLEFBQWE7O0FBQ3JCLEFBQVMsQUFBUSxBQUFNLEFBQU0sQUFBUSxBQUFTLEFBQVM7O0FBQ3ZELEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQVEsQUFBWTs7Ozs7OztBQUU1QixJQUFNLFVBQVUsQ0FDZCxFQUFFLEtBQUYsQUFBTyxLQUFLLE1BQVosQUFBa0IsUUFBUSxPQURaLEFBQ2QsQUFBaUMsS0FDakMsRUFBRSxLQUFGLEFBQU8sS0FBSyxNQUFaLEFBQWtCLFlBQVksT0FGaEMsQUFBZ0IsQUFFZCxBQUFxQzs7SSxBQUdqQzs7Ozs7Ozs7Ozs7Ozs7OzBNLEFBQ0o7Z0JBQVEsQUFDSSxBQUNWO2lCQUZNLEFBRUssQUFDWDtZQUFNLENBSEEsQUFHQyxBQUNQO2UsQUFKTSxBQUlHO0FBSkgsQUFDTixhLEFBZUY7MkZBQWMsaUJBQUEsQUFBTyxPQUFQO2dEQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFD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QUFOLEFBQU07aUJBQVksT0FBQSxBQUFLLFNBQVMsRUFBRSxNQUFsQyxBQUFrQixBQUFjLEFBQVE7QUFMcEQ7O29CQUFBO3NCQVhGLEFBV0UsQUFPQTtBQVBBO0FBQ0UsMEJBTUYsQUFBQztlQUFELEFBRUU7Z0JBRkYsQUFFUyxBQUNQO2lCQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQixBQUNwQjtpQkFKRjs7b0JBQUE7c0JBbEJGLEFBa0JFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsTUFBM0IsQUFBZ0MsU0FBUSxNQUF4QyxBQUE2QyxVQUFTLFNBQVMsS0FBQSxBQUFLLE1BQXBFLEFBQTBFO29CQUExRTtzQkFBQTtBQUFBO1NBdkNaLEFBQ0UsQUFDRSxBQUNBLEFBQ0UsQUFVRSxBQUNFLEFBd0JFLEFBV2I7Ozs7O0FBRUgsQSxBQXRGb0I7O2tCQXNGcEIsQUFBZTs7QUFHZjtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBQyxBQTJCeUIiLCJmaWxlIjoibG9naW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xhdXJhY2Vyb24vRG9jdW1lbnRzL0FBQV9ibG9ja2NoYWluL2FhYS1ibG9ja2NoYWluLXNyMmkzMDUvRXRoZXJldW0ifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kZDE4OWFmZTlhMjdjZWRhYWU3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanM/ZjI1N2Y2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHtzaWduVXB9IGZyb20gJy4uL2xpYi9hdXRoJ1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBHcmlkLCBIZWFkZXIsIE1lc3NhZ2UsIFNlZ21lbnQsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7Um91dGVyLCBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJ1xuXG5jb25zdCBvcHRpb25zID0gW1xuICB7IGtleTogJ3UnLCB0ZXh0OiAnVXNlcicsIHZhbHVlOiAxIH0sXG4gIHsga2V5OiAncCcsIHRleHQ6ICdQcm92aWRlcicsIHZhbHVlOiAwIH1cbl07XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50e1xuICBzdGF0ZSA9IHtcbiAgICB1c2VybmFtZTogJycsXG4gICAgZXJyb3JNZXNzOiAnJyxcbiAgICByb2xlOiAtMSxcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9O1xuXG4gIHJlc2V0U3RhdGUoKXtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgZXJyb3JNZXNzOiAnJyxcbiAgICAgIHJvbGU6IC0xLFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdEV0aCA9IGFzeW5jIChldmVudCkgPT57XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWUsZXJyb3JNZXNzOicnfSk7XG4gICAgY29uc3Qge3VzZXJuYW1lLHJvbGV9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHtyZXN1bHR9ID0gYXdhaXQgc2lnblVwKHVzZXJuYW1lLHJvbGUpXG4gICAgY29uc29sZS5sb2coXCJUb2tlbjogXCIscmVzdWx0KVxuICAgIGlmKHJlc3VsdC5zdGF0dXMgPT09IHRydWUpe1xuICAgICAgQ29va2llLnNldCgnc2Vzc2lvbicsIHJlc3VsdC5zaWduYXR1cmUpXG4gICAgICBSb3V0ZXIucHVzaFJvdXRlKCcvJyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlLGVycm9yTWVzczonJ30pO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzOiByZXN1bHR9KVxuICAgIH1cbiAgICB0aGlzLnJlc2V0U3RhdGUoKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJsb2dpblwiPlxuICAgICAgICA8R3JpZCBhcz0nZ3JpZCcgdmVydGljYWxBbGlnbj0nbWlkZGxlJyB0ZXh0QWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IG1heFdpZHRoOiA0NTAgfX0gaW52ZXJ0ZWQgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx2aWRlbyB3aWR0aD0nNDUwcHgnIGhlaWdodD0nMTUwcHgnIG1hcmdpbj0nYXV0bycgc3JjPVwiaHR0cHM6Ly9ldGhlcmV1bS5vcmcvZXRoZXJldW0taGVyby1kYXJrLm1wNFwiIHBsYXlzSW5saW5lIGF1dG9QbGF5IGxvb3AgbXV0ZWQgY2xhc3NOYW1lPSdsb2dvJz5cbiAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEhlYWRlciBhcz0naDInIHRleHRBbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgIDxIZWFkZXIuQ29udGVudD5Mb2ctaW4gdG8geW91ciBhY2NvdW50PC9IZWFkZXIuQ29udGVudD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtIHNpemU9J2xhcmdlJyBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdEV0aH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3N9IGludmVydGVkPlxuICAgICAgICAgICAgICA8U2VnbWVudCBzdGFja2VkIGludmVydGVkPlxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgaWNvbj0ndXNlcidcbiAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZSdcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3RoaXMuc3RhdGUudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZvcm0uU2VsZWN0XG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9J1JvbGUnXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7dGhpcy5zdGF0ZS5yb2xlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB7IHZhbHVlIH0pID0+IHRoaXMuc2V0U3RhdGUoeyByb2xlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIFxuICAgICAgICAgICAgICAgICAgZXJyb3IgXG4gICAgICAgICAgICAgICAgICBoZWFkZXI9J1NvbWV0aGluZyB3ZW50IHdyb25nJyBcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzfSBcbiAgICAgICAgICAgICAgICAgIGNvbXBhY3RcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J2JsdWUnIGZsdWlkIHNpemU9J2xhcmdlJyB0eXBlPSdzdWJtaXQnIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XG4gICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgXG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG5cblxuLy8gb25TdWJtaXRFT1MgPSBhc3luYyAoZXZlbnQpID0+e1xuICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlLGVycm9yTWVzczonJ30pO1xuICAvLyAgIGNvbnNvbGUubG9nKFwiQWNhYWFhXCIpO1xuICAvLyAgIGNvbnN0IGRhdGEgPSB7XG4gIC8vICAgICB1c2VyOiB0aGlzLnN0YXRlLnVzZXJuYW1lXG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBlb3NBcGkubG9naW4oZGF0YSlcbiAgLy8gICBjb25zb2xlLmxvZyhcIkRlc3B1ZXMgcHJvbWVzYVwiKTtcbiAgLy8gfVxuXG5cbiAgey8qPEdyaWQuQ29sdW1uIHN0eWxlPXt7IG1heFdpZHRoOiA0NTAgfSB9IGZsb2F0ZWQ9J3JpZ2h0Jz5cbiAgICAgICAgICA8SW1hZ2UgY2VudGVyZWQgc2l6ZT0nc21hbGwnIHNyYz1cIi9zdGF0aWMvZW9zaW8ucG5nXCIgLz5cbiAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gyJyBjb2xvcj0nYmx1ZScgdGV4dEFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICA8SGVhZGVyLkNvbnRlbnQ+TG9nLWluIHRvIHlvdXIgYWNjb3VudDwvSGVhZGVyLkNvbnRlbnQ+XG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtIHNpemU9J2xhcmdlJyBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdEVPU30gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3N9PlxuICAgICAgICAgICAgICA8U2VnbWVudCBzdGFja2VkPlxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgaWNvbj0ndXNlcidcbiAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZSdcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBcbiAgICAgICAgICAgICAgICAgIGVycm9yIFxuICAgICAgICAgICAgICAgICAgaGVhZGVyPSdTb21ldGhpbmcgd2VudCB3cm9uZycgXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc30gXG4gICAgICAgICAgICAgICAgICBjb21wYWN0XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdibHVlJyBmbHVpZCBzaXplPSdsYXJnZScgdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPiAqL31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9sb2dpbi5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQUE7O0FBRkE7QUFlQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQUxBO0FBSUE7QUFKQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUFBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFSQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFMQTs7OztBQXVCQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFQQTs7QUFBQTtBQVVBO0FBVkE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7O0FBQUE7QUFPQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFIQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQVdBOzs7Ozs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=