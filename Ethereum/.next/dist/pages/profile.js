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

var _we = require('../ethereum/we3');

var _we2 = _interopRequireDefault(_we);

var _login = require('../ethereum/login');

var _login2 = _interopRequireDefault(_login);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/pages/profile.js?entry';


var user = {
  'false': 'Almighty Provider',
  'true': 'Beloved User'

};

var Profile = function (_Component) {
  (0, _inherits3.default)(Profile, _Component);

  function Profile() {
    (0, _classCallCheck3.default)(this, Profile);

    return (0, _possibleConstructorReturn3.default)(this, (Profile.__proto__ || (0, _getPrototypeOf2.default)(Profile)).apply(this, arguments));
  }

  (0, _createClass3.default)(Profile, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          username = _props.username,
          role = _props.role,
          address = _props.address;

      console.log(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, this.renderCards(), _react2.default.createElement(_semanticUiReact.Container, { className: 'login', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { as: 'grid', verticalAlign: 'middle', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Card, { color: 'teal', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: '/static/jenny.png', wrapped: true, ui: false, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.props.username), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement('span', { className: 'date', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, this.props.role)), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'at',
        size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), 'Address: ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), this.props.address)))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var profile;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _login2.default.methods.profile(props.query.address).call();

              case 3:
                profile = _context.sent;
                return _context.abrupt('return', {
                  username: profile[0],
                  role: user[String(profile[1])],
                  address: props.query.address
                });

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);

                console.log("error", _context.t0);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Profile;
}(_react.Component);

exports.default = Profile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ3ZWIzIiwibG9naW4iLCJDYXJkIiwiSWNvbiIsIkltYWdlIiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJNZXNzYWdlIiwiU2VnbWVudCIsIkNvbnRhaW5lciIsIkxheW91dCIsInVzZXIiLCJQcm9maWxlIiwicHJvcHMiLCJ1c2VybmFtZSIsInJvbGUiLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyIsInJlbmRlckNhcmRzIiwibWF4V2lkdGgiLCJtZXRob2RzIiwicHJvZmlsZSIsInF1ZXJ5IiwiY2FsbCIsIlN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVMsQUFBSyxBQUFLLEFBQU0sQUFBUSxBQUFNLEFBQU0sQUFBUSxBQUFTLEFBQVM7O0FBQ3ZFLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBR25CLElBQU07V0FBTSxBQUNELEFBQ1Q7VUFGRixBQUFZLEFBRUY7O0FBRkUsQUFDVjs7SSxBQUtJOzs7Ozs7Ozs7OztrQ0FjUzttQkFLUCxLQUxPLEFBS0Y7VUFMRSxBQUVULGtCQUZTLEFBRVQ7VUFGUyxBQUdULGNBSFMsQUFHVDtVQUhTLEFBSVQsaUJBSlMsQUFJVCxBQUVGOztjQUFBLEFBQVEsSUFBSSxLQUFaLEFBQWlCLEFBQ2xCOzs7OzZCQUNPLEFBQ047NkJBRUUsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxPQUFBLEFBQ0csQUFBSyxBQUNOLCtCQUFBLEFBQUMsNENBQVUsV0FBWCxBQUFxQjtvQkFBckI7c0JBQUEsQUFDQTtBQURBO3lCQUNBLEFBQUMsdUNBQUssSUFBTixBQUFTLFFBQU8sZUFBaEIsQUFBOEIsVUFBUyxXQUF2QyxBQUFpRDtvQkFBakQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQU8sRUFBRSxVQUF0QixBQUFvQixBQUFZLE9BQU8sVUFBdkM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHdDQUFNLEtBQVAsQUFBVyxxQkFBb0IsU0FBL0IsTUFBdUMsSUFBdkMsQUFBMkM7b0JBQTNDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUFjO0FBQWQ7QUFBQSxjQUFjLEFBQUssTUFEckIsQUFDRSxBQUF5QixBQUN6QiwyQkFBQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO29CQUFoQjtzQkFBQSxBQUF3QjtBQUF4QjtjQUF3QixBQUFLLE1BSmpDLEFBRUUsQUFFRSxBQUFtQyxBQUVyQyx3QkFBQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXLEFBQ1g7Y0FEQSxBQUNLO29CQURMO3NCQURGLEFBQ0U7QUFBQTtVQUdTOztvQkFBQTtzQkFKWCxBQUlXLEFBRVI7QUFGUTtBQUFBLGVBRVIsQUFBSyxNQXJCcEIsQUFFRSxBQUVFLEFBQ0EsQUFDRSxBQUNFLEFBRUUsQUFNRSxBQU1jLEFBZ0IzQjs7Ozs7MkcsQUEzRDRCOzs7Ozs7Ozt1QkFFSCxnQkFBQSxBQUFNLFFBQU4sQUFBYyxRQUFRLE1BQUEsQUFBTSxNQUE1QixBQUFrQyxTLEFBQWxDLEFBQTJDOzttQkFBM0Q7QTs7NEJBRU0sUUFETCxBQUNLLEFBQVEsQUFDbEI7d0JBQU0sS0FBSyxPQUFPLFFBRmIsQUFFQyxBQUFLLEFBQU8sQUFBUSxBQUMxQjsyQkFBUyxNQUFBLEFBQU0sTSxBQUhWLEFBR2dCO0FBSGhCLEFBQ0w7Ozs7Z0RBS0Y7O3dCQUFBLEFBQVEsSUFBUixBQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RsQixBLEFBOURzQjs7a0JBOER0QixBQUFlIiwiZmlsZSI6InByb2ZpbGUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xhdXJhY2Vyb24vRG9jdW1lbnRzL0FBQV9ibG9ja2NoYWluL2FhYS1ibG9ja2NoYWluLXNyMmkzMDUvRXRoZXJldW0ifQ==