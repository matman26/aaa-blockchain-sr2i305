webpackHotUpdate(5,{

/***/ 794:
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

var _we = __webpack_require__(563);

var _we2 = _interopRequireDefault(_we);

var _login = __webpack_require__(999);

var _login2 = _interopRequireDefault(_login);

var _semanticUiReact = __webpack_require__(514);

var _Layout = __webpack_require__(1297);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/pages/profile.js?entry';


var user = {
  'false': 'Provider',
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
          lineNumber: 42
        }
      }, this.renderCards(), _react2.default.createElement(_semanticUiReact.Container, { className: 'login', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { as: 'grid', verticalAlign: 'middle', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: '/static/eosio.png', wrapped: true, ui: false, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, this.props.username), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('span', { className: 'date', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, this.props.role)), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, this.props.address)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), '22 Friends')))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2ZpbGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ3ZWIzIiwibG9naW4iLCJDYXJkIiwiSWNvbiIsIkltYWdlIiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJNZXNzYWdlIiwiU2VnbWVudCIsIkNvbnRhaW5lciIsIkxheW91dCIsInVzZXIiLCJQcm9maWxlIiwicHJvcHMiLCJ1c2VybmFtZSIsInJvbGUiLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyIsInJlbmRlckNhcmRzIiwibWF4V2lkdGgiLCJtZXRob2RzIiwicHJvZmlsZSIsInF1ZXJ5IiwiY2FsbCIsIlN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVMsQUFBSyxBQUFLLEFBQU0sQUFBUSxBQUFNLEFBQU0sQUFBUSxBQUFTLEFBQVM7O0FBQ3ZFLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBR25CLElBQU07V0FBTSxBQUNELEFBQ1Q7VUFGRixBQUFZLEFBRUY7O0FBRkUsQUFDVjs7SSxBQUtJOzs7Ozs7Ozs7OztrQ0FnQlM7bUJBS1AsS0FMTyxBQUtGO1VBTEUsQUFFVCxrQkFGUyxBQUVUO1VBRlMsQUFHVCxjQUhTLEFBR1Q7VUFIUyxBQUlULGlCQUpTLEFBSVQsQUFFRjs7Y0FBQSxBQUFRLElBQUksS0FBWixBQUFpQixBQUNsQjs7Ozs2QkFFTyxBQUNOOzZCQUVFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0c7QUFESDtBQUFBLE9BQUEsT0FBQSxBQUNHLEFBQUssQUFDTiwrQkFBQSxBQUFDLDRDQUFVLFdBQVgsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxBQUFDLHVDQUFLLElBQU4sQUFBUyxRQUFPLGVBQWhCLEFBQThCLFVBQVMsV0FBdkMsQUFBaUQ7b0JBQWpEO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFPLEVBQUUsVUFBdEIsQUFBb0IsQUFBWSxPQUFPLFVBQXZDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHdDQUFNLEtBQVAsQUFBVyxxQkFBb0IsU0FBL0IsTUFBdUMsSUFBdkMsQUFBMkM7b0JBQTNDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUFjO0FBQWQ7QUFBQSxjQUFjLEFBQUssTUFEckIsQUFDRSxBQUF5QixBQUN6QiwyQkFBQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsVUFBTSxXQUFOLEFBQWdCO29CQUFoQjtzQkFBQSxBQUF3QjtBQUF4QjtjQUF3QixBQUFLLE1BSGpDLEFBRUUsQUFDRSxBQUFtQyxBQUVyQyx3QkFBQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQVJaLEFBRUUsQUFLRSxBQUNjLEFBR2hCLDJCQUFDLGNBQUQsc0JBQUEsQUFBTSxXQUFRLE9BQWQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQURGLEFBQ0U7QUFBQTtVQXBCZCxBQUVFLEFBRUUsQUFDQSxBQUNFLEFBQ0UsQUFXRSxBQUNFLEFBV2I7Ozs7OzJHLEFBdkQ0Qjs7Ozs7Ozs7dUJBRUgsZ0JBQUEsQUFBTSxRQUFOLEFBQWMsUUFBUSxNQUFBLEFBQU0sTUFBNUIsQUFBa0MsUyxBQUFsQyxBQUEyQzs7bUJBQTNEO0E7OzRCQUVNLFFBREwsQUFDSyxBQUFRLEFBQ2xCO3dCQUFNLEtBQUssT0FBTyxRQUZiLEFBRUMsQUFBSyxBQUFPLEFBQVEsQUFDMUI7MkJBQVMsTUFBQSxBQUFNLE0sQUFIVixBQUdnQjtBQUhoQixBQUNMOzs7O2dEQUtKOzt3QkFBQSxBQUFRLElBQVIsQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEaEIsQSxBQTFEc0I7O2tCQTBEdEIsQUFBZSIsImZpbGUiOiJwcm9maWxlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sYXVyYWNlcm9uL0RvY3VtZW50cy9BQUFfYmxvY2tjaGFpbi9hYWEtYmxvY2tjaGFpbi1zcjJpMzA1L0V0aGVyZXVtIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/pages/profile.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/pages/profile.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/profile")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wOGIxMWNhZWZlYTg0NDBjNzgyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZmlsZS5qcz9mMDNmOTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZTMnXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vZXRoZXJldW0vbG9naW4nO1xuaW1wb3J0IHsgQ2FyZCxJY29uLEltYWdlLEJ1dHRvbiwgRm9ybSwgR3JpZCwgSGVhZGVyLCBNZXNzYWdlLCBTZWdtZW50LCBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cblxuY29uc3QgdXNlciA9e1xuICAnZmFsc2UnOiAnUHJvdmlkZXInLFxuICAndHJ1ZSc6ICdCZWxvdmVkIFVzZXInXG5cbn1cblxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IGxvZ2luLm1ldGhvZHMucHJvZmlsZShwcm9wcy5xdWVyeS5hZGRyZXNzKS5jYWxsKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1c2VybmFtZTogcHJvZmlsZVswXSwgXG4gICAgICAgIHJvbGU6IHVzZXJbU3RyaW5nKHByb2ZpbGVbMV0pXSxcbiAgICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzc1xuICAgICAgfTtcbiAgfWNhdGNoKGUpe1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIixlKVxuICB9XG4gICAgfVxuICAgIFxuICBcblxuICByZW5kZXJDYXJkcygpe1xuICAgIGNvbnN0e1xuICAgICAgdXNlcm5hbWUsXG4gICAgICByb2xlLFxuICAgICAgYWRkcmVzc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcblxuICAgICAgPExheW91dD5cbiAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJsb2dpblwiPlxuICAgICAgICA8R3JpZCBhcz0nZ3JpZCcgdmVydGljYWxBbGlnbj0nbWlkZGxlJyB0ZXh0QWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IG1heFdpZHRoOiA0NTAgfX0gaW52ZXJ0ZWQgPlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9zdGF0aWMvZW9zaW8ucG5nJyB3cmFwcGVkIHVpPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+e3RoaXMucHJvcHMudXNlcm5hbWV9PC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkYXRlJz57dGhpcy5wcm9wcy5yb2xlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0NhcmQuTWV0YT5cbiAgICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3VzZXInIC8+XG4gICAgICAgICAgICAgICAgICAyMiBGcmllbmRzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZD4gIFxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3Byb2ZpbGUuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7Ozs7Ozs7Ozs7OztBQW9CQTtBQUtBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFVQTs7Ozs7Ozs7Ozs7OztBQXJEQTtBQUNBO0FBREE7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7OztBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9