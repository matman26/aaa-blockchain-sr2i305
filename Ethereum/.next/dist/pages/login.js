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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _we = require('../ethereum/we3');

var _we2 = _interopRequireDefault(_we);

var _login = require('../ethereum/login');

var _login2 = _interopRequireDefault(_login);

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
        var _this$state, username, role, _ref3, result, profile;

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

                if (!(result.status === true)) {
                  _context.next = 18;
                  break;
                }

                _jsCookie2.default.set('session', result.signature);
                _routes.Router.pushRoute('/profile/' + result.addr);
                _context.next = 13;
                return _login2.default.methods.profile(result.addr).call();

              case 13:
                profile = _context.sent;

                console.log(profile);

                _this.setState({ loading: false, errorMess: '' });
                _context.next = 19;
                break;

              case 18:
                _this.setState({ errorMess: result });

              case 19:
                _this.resetState();

              case 20:
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
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { className: 'login', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { as: 'grid', verticalAlign: 'middle', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('video', { width: '400px', height: '200px', margin: 'auto', src: 'https://ethereum.org/ethereum-hero-dark.mp4', playsInline: true, autoPlay: true, loop: true, muted: true, className: 'logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Log-in to your account')), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmitEth, error: !!this.state.errorMess, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { as: 'form', stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, {
        fluid: true,
        label: 'Username',
        icon: 'user',
        iconPosition: 'left',
        placeholder: 'Username',
        value: this.state.username,
        onChange: function onChange(event) {
          return _this3.setState({ username: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
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
          lineNumber: 80
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Something went wrong',
        content: this.state.errorMess,
        compact: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, { verticalAlign: 'middle', textAlign: 'center', relaxed: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'teal',
        inverted: true,
        fluid: true,
        size: 'large',
        type: 'submit',
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'Login')))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29va2llIiwic2lnblVwIiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJNZXNzYWdlIiwiU2VnbWVudCIsIkNvbnRhaW5lciIsIkxheW91dCIsIlJvdXRlciIsIkxpbmsiLCJ3ZWIzIiwibG9naW4iLCJvcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwiTG9naW4iLCJzdGF0ZSIsInVzZXJuYW1lIiwiZXJyb3JNZXNzIiwicm9sZSIsImxvYWRpbmciLCJvblN1Ym1pdEV0aCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzZXQiLCJzaWduYXR1cmUiLCJwdXNoUm91dGUiLCJhZGRyIiwibWV0aG9kcyIsInByb2ZpbGUiLCJjYWxsIiwicmVzZXRTdGF0ZSIsIm1heFdpZHRoIiwidGFyZ2V0IiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUSxBQUFhOztBQUNyQixBQUFTLEFBQVEsQUFBTSxBQUFNLEFBQVEsQUFBUyxBQUFTOztBQUN2RCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFRLEFBQVk7O0FBRTVCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVc7Ozs7Ozs7OztBQUVsQixJQUFNLFVBQVUsQ0FDZCxFQUFFLEtBQUYsQUFBTyxLQUFLLE1BQVosQUFBa0IsUUFBUSxPQURaLEFBQ2QsQUFBaUMsS0FDakMsRUFBRSxLQUFGLEFBQU8sS0FBSyxNQUFaLEFBQWtCLFlBQVksT0FGaEMsQUFBZ0IsQUFFZCxBQUFxQzs7SSxBQUdqQzs7Ozs7Ozs7Ozs7Ozs7OzBNLEFBQ0o7Z0JBQVEsQUFDSSxBQUNWO2lCQUZNLEFBRUssQUFDWDtZQUFNLENBSEEsQUFH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