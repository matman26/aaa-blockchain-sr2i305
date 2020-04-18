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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _we = require('../../../ethereum/we3');

var _we2 = _interopRequireDefault(_we);

var _routes = require('../../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/lauraceron/Documents/Telecom/3 ANNEE/BlockchainTraining/kickstart/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
  (0, _inherits3.default)(RequestNew, _Component);

  function RequestNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      description: '',
      recipient: '',
      errorMess: '',
      loading: false
    }, _this.onSumit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, _this$state, description, value, recipient, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMess: '' });

                campaign = (0, _campaign2.default)(_this.props.address);
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;
                _context.prev = 4;
                _context.next = 7;
                return _we2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return campaign.methods.createRequest(description, _we2.default.utils.toWei(value, 'ether'), recipient).send({
                  from: accounts[0]
                });

              case 10:
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMess: _context.t0.message });

              case 15:
                _this.setState({ loading: false });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, ' Back'))), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Create request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSumit, error: !!this.state.errorMess, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Description'), _react2.default.createElement(_semanticUiReact.Input
      // label ='WEI' 
      // position='right' 

      // label ='' 
      // position='right' 
      , { placeholder: 'What is going to be requested ',
        value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Value'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'Ether',
        position: 'right',
        placeholder: 'How much does it cost?',
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: 'To whom is the money gonna be sent',
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Something went wrong',
        content: this.state.errorMess,
        compact: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, type: 'submit', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, 'Create')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt('return', { address: address });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJlcnJvck1lc3MiLCJsb2FkaW5nIiwib25TdW1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsInRhcmdldCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYTs7Ozs7OztJLEFBR2hCOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFNSjthQUFRLEFBQ0MsQUFDUDttQkFGTSxBQUVNLEFBQ1o7aUJBSE0sQUFHSyxBQUNYO2lCQUpNLEFBSUssQUFDWDtlLEFBTE0sQUFLRztBQUxILEFBQ04sYSxBQU1GOzJGQUFVLGlCQUFBLEFBQU8sT0FBUDtrRUFBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1I7c0JBQUEsQUFBTSxBQUNOO3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFLLFdBQTVCLEFBQWMsQUFBd0IsQUFFaEM7O0FBSkUsMkJBSVMsd0JBQVMsTUFBQSxBQUFLLE1BSnZCLEFBSVMsQUFBb0I7OEJBQ0ksTUFMakMsQUFLc0MsT0FMdEMsQUFLRCwwQkFMQyxBQUtELGFBTEMsQUFLWSxvQkFMWixBQUtZLE9BTFosQUFLbUIsd0JBTG5CLEFBS21CO2dDQUxuQjtnQ0FBQTt1QkFRaUIsYUFBQSxBQUFLLElBUnRCLEFBUWlCLEFBQVM7O21CQUExQjtBQVJBLG9DQUFBO2dDQUFBO2dDQVNBLEFBQVMsUUFBVCxBQUNMLGNBREssQUFDUyxhQUFhLGFBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixPQUR2QyxBQUNzQixBQUF1QixVQUQ3QyxBQUNzRCxXQUR0RCxBQUVMO3dCQUNPLFNBWkYsQUFTQSxBQUVBLEFBQ0UsQUFBUztBQURYLEFBQ0osaUJBSEk7O21CQVRBO2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dEQWdCTjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsV0FBVyxZQWhCcEIsQUFnQk4sQUFBYyxBQUFrQjs7bUJBRS9CO3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBbEJWLEFBa0JMLEFBQWMsQUFBUzs7bUJBbEJsQjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQXFCRjttQkFDTjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBSE4sQUFDRSxBQUNFLEFBQ0UsQUFHSiw0QkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FORixBQU1FLEFBQ0EsbUNBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFNBQVMsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFBQSxBQUVFO0FBRkY7eUJBRUcsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsZ0NBQUMsQUFDRDtBQUNBO0FBRkE7O0FBMEJBO0FBRkE7VUFyQkEsYUFIQSxBQUdZLEFBQ1o7ZUFBUyxLQUFBLEFBQUssTUFKZCxBQUlvQixBQUNwQjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFDLGFBQWEsTUFBQSxBQUFNLE9BRDFCLEFBQ1IsQUFBYyxBQUEyQjtBQU4zQzs7b0JBQUE7c0JBSkosQUFFRSxBQUVFLEFBVUY7QUFWRTsyQkFVRCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwwQkFBQSxBQUFDO2VBQUQsQUFDTyxBQUNQO2tCQUZBLEFBRVMsQUFDVDtxQkFIQSxBQUdZLEFBQ1o7ZUFBUyxLQUFBLEFBQUssTUFKZCxBQUlvQixBQUNwQjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sTUFBQSxBQUFNLE9BRHBCLEFBQ1IsQUFBYyxBQUFxQjtBQU5yQzs7b0JBQUE7c0JBaEJKLEFBY0UsQUFFRSxBQVVGO0FBVkU7QUFDQSwyQkFTRCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw4QkFBQyxBQUNELHdDQUVBLGFBSEEsQUFHWSxBQUNaO2VBQVMsS0FBQSxBQUFLLE1BSmQsQUFJb0IsQUFDcEI7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBQyxXQUFXLE1BQUEsQUFBTSxPQUR4QixBQUNSLEFBQWMsQUFBeUI7QUFOekM7O29CQUFBO3NCQTVCSixBQTBCRSxBQUVFLEFBVUY7QUFWRTsyQkFVRixBQUFDO2VBQUQsQUFFRTtnQkFGRixBQUVTLEFBQ1A7aUJBQVMsS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ3BCO2lCQUpGOztvQkFBQTtzQkF0Q0YsQUFzQ0UsQUFNQTtBQU5BO0FBQ0UsMEJBS0YsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLE1BQWhCLEFBQXFCLFVBQVMsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQUFBO0FBQUE7U0FwRE4sQUFDRSxBQU9FLEFBNENFLEFBTVA7Ozs7OzZHLEFBNUY0Qjs7Ozs7bUJBQ3BCO0EsMEJBQVcsTSxBQUFNLE0sQUFBakI7a0RBQ0EsRUFBRSxTLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQUhjLEFBK0Z6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xhdXJhY2Vyb24vRG9jdW1lbnRzL1RlbGVjb20vMyBBTk5FRS9CbG9ja2NoYWluVHJhaW5pbmcva2lja3N0YXJ0In0=