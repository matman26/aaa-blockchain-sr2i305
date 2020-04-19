webpackHotUpdate(6,{

/***/ 1314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = undefined;

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _cryptoRandomString = __webpack_require__(1315);

var _cryptoRandomString2 = _interopRequireDefault(_cryptoRandomString);

var _login = __webpack_require__(1316);

var _login2 = _interopRequireDefault(_login);

var _we = __webpack_require__(796);

var _we2 = _interopRequireDefault(_we);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var signature = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var accounts, secret, hash, sign;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _we2.default.eth.getAccounts();

          case 2:
            accounts = _context.sent;
            secret = (0, _cryptoRandomString2.default)({ length: 15, type: 'base64' });
            hash = _we2.default.utils.sha3(secret);
            _context.next = 7;
            return _we2.default.eth.personal.sign(hash, accounts[0]);

          case 7:
            sign = _context.sent;
            return _context.abrupt('return', { hash: hash, sign: sign });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function signature() {
    return _ref.apply(this, arguments);
  };
}();

var signUp = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(username, role) {
    var _ref3, hash, sign, accounts, result;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return signature();

          case 2:
            _ref3 = _context2.sent;
            hash = _ref3.hash;
            sign = _ref3.sign;
            _context2.next = 7;
            return _we2.default.eth.getAccounts();

          case 7:
            accounts = _context2.sent;
            result = "";
            _context2.prev = 9;
            _context2.next = 12;
            return _login2.default.methods.signIn(hash, sign, username, role).send({
              from: accounts[0]
            });

          case 12:
            result = _context2.sent;

            result['signature'] = sign;
            _context2.next = 20;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2['catch'](9);

            console.log(_context2.t0);
            result = "Authentication has failed";

          case 20:
            return _context2.abrupt('return', { result: result });

          case 21:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[9, 16]]);
  }));

  return function signUp(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signUp = signUp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9hdXRoLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2VjcmV0IiwicmFuZG9tU3RyaW5nIiwibGVuZ3RoIiwidHlwZSIsImhhc2giLCJ1dGlscyIsInNoYTMiLCJwZXJzb25hbCIsInNpZ24iLCJzaWduYXR1cmUiLCJ1c2VybmFtZSIsInJvbGUiLCJyZXN1bHQiLCJsb2dpbiIsIm1ldGhvZHMiLCJzaWduSW4iLCJzZW5kIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJzaWduVXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFVLEFBeUJqQjs7Ozs7OztzRkF2QkEsbUJBQUE7Z0NBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFBQTs0QkFBQTttQkFDeUIsYUFBQSxBQUFLLElBRDlCLEFBQ3lCLEFBQVM7O2VBQTFCO0FBRFIsZ0NBRVE7QUFGUixxQkFFaUIsa0NBQWEsRUFBQyxRQUFELEFBQVMsSUFBSSxNQUYzQyxBQUVpQixBQUFhLEFBQWtCLEFBQzFDO0FBSE4sbUJBR2EsYUFBQSxBQUFLLE1BQUwsQUFBVyxLQUh4QixBQUdhLEFBQWdCOzRCQUg3QjttQkFJbUIsYUFBQSxBQUFLLElBQUwsQUFBUyxTQUFULEFBQWtCLEtBQWxCLEFBQXVCLE1BQU0sU0FKaEQsQUFJbUIsQUFBNkIsQUFBUzs7ZUFBbkQ7QUFKTiw0QkFBQTs2Q0FLUyxFQUFDLE1BQUQsTUFBTSxNQUxmLEFBS1M7O2VBTFQ7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBOztrQixBQUFlOzs7Ozs7dUZBUWYsa0JBQUEsQUFBc0IsVUFBdEIsQUFBK0IsTUFBL0I7cUNBQUE7O29FQUFBO2dCQUFBOzJDQUFBO2VBQUE7NkJBQUE7bUJBQUEsQUFDMkI7O2VBRDNCOzhCQUNRO0FBRFIseUJBQUEsQUFDUSxBQUFLO0FBRGIseUJBQUEsQUFDYTs2QkFEYjttQkFFeUIsYUFBQSxBQUFLLElBRjlCLEFBRXlCLEFBQVM7O2VBQTFCO0FBRlIsaUNBR007QUFITixxQkFBQSxBQUdlOzZCQUhmOzZCQUFBO21DQUttQixBQUFNLFFBQU4sQUFBYyxPQUFkLEFBQXFCLE1BQXJCLEFBQTBCLE1BQTFCLEFBQStCLFVBQS9CLEFBQXdDLE1BQXhDLEFBQThDO29CQUNyRCxTQU5aLEFBS21CLEFBQW1ELEFBQzFELEFBQVM7QUFEaUQsQUFDaEUsYUFEYTs7ZUFBZjtBQUxKLCtCQVFJOzttQkFBQSxBQUFPLGVBUlgsQUFRSSxBQUFzQjs2QkFSMUI7QUFBQTs7ZUFBQTs2QkFBQTs4Q0FVSTs7b0JBQUEsQUFBUSxjQUNSO3FCQVhKLEFBV0ksQUFBUzs7ZUFYYjs4Q0FhUyxFQUFDLFFBYlYsQUFhUzs7ZUFiVDtlQUFBOzZCQUFBOztBQUFBOzRCQUFBO0E7O2tCLEFBQWU7Ozs7O1FBZWYsQUFBUyIsImZpbGUiOiJhdXRoLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sYXVyYWNlcm9uL0RvY3VtZW50cy9BQUFfYmxvY2tjaGFpbi9hYWEtYmxvY2tjaGFpbi1zcjJpMzA1L0V0aGVyZXVtIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/lib/auth.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/lib/auth.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5hODUxNzE2ZDM1NDUwNDVlM2FlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2F1dGguanM/N2ZhNmE4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmFuZG9tU3RyaW5nIGZyb20gJ2NyeXB0by1yYW5kb20tc3RyaW5nJztcbmltcG9ydCBsb2dpbiBmcm9tICcuLi9ldGhlcmV1bS9sb2dpbic7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZTMnXG5cbmFzeW5jIGZ1bmN0aW9uIHNpZ25hdHVyZSgpe1xuICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gIGNvbnN0IHNlY3JldCA9IHJhbmRvbVN0cmluZyh7bGVuZ3RoOiAxNSwgdHlwZTonYmFzZTY0J30pXG4gIHZhciBoYXNoID0gd2ViMy51dGlscy5zaGEzKHNlY3JldClcbiAgdmFyIHNpZ24gPSBhd2FpdCB3ZWIzLmV0aC5wZXJzb25hbC5zaWduKGhhc2gsIGFjY291bnRzWzBdKVxuICByZXR1cm4ge2hhc2gsc2lnbn1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2lnblVwKHVzZXJuYW1lLHJvbGUpe1xuICBjb25zdHtoYXNoLHNpZ259ID0gYXdhaXQgc2lnbmF0dXJlKClcbiAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICB2YXIgcmVzdWx0ID0gXCJcIlxuICB0cnkge1xuICAgIHJlc3VsdCA9IGF3YWl0IGxvZ2luLm1ldGhvZHMuc2lnbkluKGhhc2gsc2lnbix1c2VybmFtZSxyb2xlKS5zZW5kKHtcbiAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgfSlcbiAgICByZXN1bHRbJ3NpZ25hdHVyZSddID0gc2lnblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXN1bHQgPSBcIkF1dGhlbnRpY2F0aW9uIGhhcyBmYWlsZWRcIlxuICB9XG4gIHJldHVybiB7cmVzdWx0fVxufVxuZXhwb3J0IHsgc2lnblVwIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2F1dGguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQXlCQTtBQUNBOzs7Ozs7QUF4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBS0E7QUFDQTtBQU5BO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7QUFRQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFMQTtBQUNBO0FBT0E7QUFSQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBVUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQVpBO0FBYUE7QUFDQTtBQWRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7OztBQWVBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=