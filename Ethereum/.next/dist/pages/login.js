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
      }, _react2.default.createElement('video', { width: '400px', height: '200px', margin: 'auto', src: 'https://ethereum.org/ethereum-hero-dark.mp4', playsInline: true, autoPlay: true, loop: true, muted: true, className: 'logo', __source: {
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
      }, 'Log-in to your account')), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmitEth, error: !!this.state.errorMess, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { as: 'form', stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
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
          lineNumber: 74
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Something went wrong',
        content: this.state.errorMess,
        compact: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, { verticalAlign: 'middle', textAlign: 'center', relaxed: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'teal',
        inverted: true,
        fluid: true,
        size: 'large',
        type: 'submit',
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29va2llIiwic2lnblVwIiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJNZXNzYWdlIiwiU2VnbWVudCIsIkNvbnRhaW5lciIsIkxheW91dCIsIlJvdXRlciIsIkxpbmsiLCJvcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwiTG9naW4iLCJzdGF0ZSIsInVzZXJuYW1lIiwiZXJyb3JNZXNzIiwicm9sZSIsImxvYWRpbmciLCJvblN1Ym1pdEV0aCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzZXQiLCJzaWduYXR1cmUiLCJwdXNoUm91dGUiLCJyZXNldFN0YXRlIiwibWF4V2lkdGgiLCJ0YXJnZXQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFRLEFBQWE7O0FBQ3JCLEFBQVMsQUFBUSxBQUFNLEFBQU0sQUFBUSxBQUFTLEFBQVM7O0FBQ3ZELEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQVEsQUFBWTs7Ozs7OztBQUU1QixJQUFNLFVBQVUsQ0FDZCxFQUFFLEtBQUYsQUFBTyxLQUFLLE1BQVosQUFBa0IsUUFBUSxPQURaLEFBQ2QsQUFBaUMsS0FDakMsRUFBRSxLQUFGLEFBQU8sS0FBSyxNQUFaLEFBQWtCLFlBQVksT0FGaEMsQUFBZ0IsQUFFZCxBQUFxQzs7SSxBQUdqQzs7Ozs7Ozs7Ozs7Ozs7OzBNLEFBQ0o7Z0JBQVEsQUFDSSxBQUNWO2lCQUZNLEFBRUssQUFDWDtZQUFNLENBSEEsQUFHQyxBQUNQO2UsQUFKTSxBQUlHO0FBSkgsQUFDTixhLEFBZUY7MkZBQWMsaUJBQUEsQUFBTyxPQUFQO2dEQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFD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QUEsQUFBTSxjQUFOLEFBQU07aUJBQVksT0FBQSxBQUFLLFNBQVMsRUFBRSxNQUFsQyxBQUFrQixBQUFjLEFBQVE7QUFMcEQ7O29CQUFBO3NCQVpGLEFBWUUsQUFPQTtBQVBBO0FBQ0UsMEJBTUYsQUFBQztlQUFELEFBRUU7Z0JBRkYsQUFFUyxBQUNQO2lCQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQixBQUNwQjtpQkFKRjs7b0JBQUE7c0JBbkJGLEFBbUJFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLEFBQUMsdUNBQUssZUFBTixBQUFvQixVQUFTLFdBQTdCLEFBQXVDLFVBQVMsU0FBaEQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxBQUNaO2tCQURGLEFBRUU7ZUFGRixBQUdFO2NBSEYsQUFHTyxBQUNMO2NBSkYsQUFJTyxBQUNMO2lCQUFTLEtBQUEsQUFBSyxNQUxoQixBQUtzQjs7b0JBTHRCO3NCQUFBO0FBQUE7U0ExQ2hCLEFBQ0UsQUFDRSxBQUNBLEFBQ0UsQUFVRSxBQUNFLEFBeUJFLEFBQ0UsQUFDRSxBQW1CakI7Ozs7O0FBRUgsQSxBQWpHb0I7O2tCQWlHcEIsQUFBZTs7QUFHZjtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBQyxBQTJCeUIiLCJmaWxlIjoibG9naW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xhdXJhY2Vyb24vRG9jdW1lbnRzL0FBQV9ibG9ja2NoYWluL2FhYS1ibG9ja2NoYWluLXNyMmkzMDUvRXRoZXJldW0ifQ==