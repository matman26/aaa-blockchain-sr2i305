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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zMjAxYWM2ZjExMDM0MDc3Y2ZhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZmlsZS5qcz9mYmVkYzFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZTMnXG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vZXRoZXJldW0vbG9naW4nO1xuaW1wb3J0IHsgQ2FyZCxJY29uLEltYWdlLEJ1dHRvbiwgRm9ybSwgR3JpZCwgSGVhZGVyLCBNZXNzYWdlLCBTZWdtZW50LCBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cblxuY29uc3QgdXNlciA9e1xuICAnZmFsc2UnOiAnQWxtaWdodHkgUHJvdmlkZXInLFxuICAndHJ1ZSc6ICdCZWxvdmVkIFVzZXInXG5cbn1cblxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IGxvZ2luLm1ldGhvZHMucHJvZmlsZShwcm9wcy5xdWVyeS5hZGRyZXNzKS5jYWxsKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1c2VybmFtZTogcHJvZmlsZVswXSwgXG4gICAgICAgIHJvbGU6IHVzZXJbU3RyaW5nKHByb2ZpbGVbMV0pXSxcbiAgICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzc1xuICAgICAgfTtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsZSlcbiAgICB9XG4gIH1cbiAgICBcbiAgcmVuZGVyQ2FyZHMoKXtcbiAgICBjb25zdHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgcm9sZSxcbiAgICAgIGFkZHJlc3NcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuXG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7dGhpcy5yZW5kZXJDYXJkcygpfVxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImxvZ2luXCI+XG4gICAgICAgIDxHcmlkIGFzPSdncmlkJyB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnIHRleHRBbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgbWF4V2lkdGg6IDQ1MCB9fSBpbnZlcnRlZCA+XG4gICAgICAgICAgICA8Q2FyZCBjb2xvcj0ndGVhbCc+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9zdGF0aWMvamVubnkucG5nJyB3cmFwcGVkIHVpPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+e3RoaXMucHJvcHMudXNlcm5hbWV9PC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ndXNlcicgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGF0ZSc+e3RoaXMucHJvcHMucm9sZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdhdCdcbiAgICAgICAgICAgICAgICAgIHNpemU9J2xhcmdlJz5cbiAgICAgICAgICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgICAgICAgICAgIEFkZHJlc3M6IDxici8+XG5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICB7LyogPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3VzZXInIC8+XG4gICAgICAgICAgICAgICAgICAyMiBGcmllbmRzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD4gKi99XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQ+ICBcbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9wcm9maWxlLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFrQkE7QUFLQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQURBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBRUE7QUFGQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBdkNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTs7O0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=