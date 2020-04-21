webpackHotUpdate(5,{

/***/ 1039:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(644);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _eosjs = __webpack_require__(1041);

var _eosjsJssig = __webpack_require__(1049);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var takeAction = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(action, datavalue) {
    var privateKey, signatureProvider, rcp, api, resp;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            privateKey = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3';
            signatureProvider = new _eosjsJssig.JsSignatureProvider([privateKey]);
            rcp = new _eosjs.JsonRpc('http://172.18.0.2:8888');
            api = new _eosjs.Api({
              rcp: rcp,
              signatureProvider: signatureProvider,
              textDecoder: new TextDecoder(),
              textEncoder: new TextEncoder()
            });
            _context.prev = 4;
            _context.next = 7;
            return rcp.get_table_rows({
              json: true, // Get the response as json
              code: 'eosio.token', // Contract that we target
              scope: 'aaa', // Account that owns the data
              table: 'users', // Table name
              limit: 10, // Maximum number of rows that we want to get
              reverse: false, // Optional: Get reversed data
              show_payer: false // Optional: Show ram payer
            });

          case 7:
            resp = _context.sent;

            console.log(resp);
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](4);

            console.error('\nCaught exception: ' + _context.t0);
            if (_context.t0 instanceof _eosjs.RpcError) console.log((0, _stringify2.default)(_context.t0.json, null, 2));

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 11]]);
  }));

  return function takeAction(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var eosApi = function () {
  function eosApi() {
    (0, _classCallCheck3.default)(this, eosApi);
  }

  (0, _createClass3.default)(eosApi, null, [{
    key: 'login',
    value: function login(username) {
      return new _promise2.default(function (resolve, reject) {
        takeAction("login", username).then(function () {
          resolve();
        }).catch(function (err) {
          reject();
        });
      });
    }
  }]);

  return eosApi;
}();

exports.default = eosApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9lb3NBUEkuanMiXSwibmFtZXMiOlsiYWN0aW9uIiwiZGF0YXZhbHVlIiwicHJpdmF0ZUtleSIsInNpZ25hdHVyZVByb3ZpZGVyIiwiSnNTaWduYXR1cmVQcm92aWRlciIsInJjcCIsIkpzb25ScGMiLCJhcGkiLCJBcGkiLCJ0ZXh0RGVjb2RlciIsIlRleHREZWNvZGVyIiwidGV4dEVuY29kZXIiLCJUZXh0RW5jb2RlciIsImdldF90YWJsZV9yb3dzIiwianNvbiIsImNvZGUiLCJzY29wZSIsInRhYmxlIiwibGltaXQiLCJyZXZlcnNlIiwic2hvd19wYXllciIsInJlc3AiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJScGNFcnJvciIsInRha2VBY3Rpb24iLCJlb3NBcGkiLCJ1c2VybmFtZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0aGVuIiwiY2F0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBSyxBQUFTOztBQUN2QixBQUFTOzs7OztzRkFFVCxpQkFBQSxBQUEwQixRQUExQixBQUFrQyxXQUFsQztpREFBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUNRO0FBRFIseUJBQUEsQUFDcUIsQUFDYjtBQUZSLGdDQUU0QixBQUFJLG9DQUFvQixDQUZwRCxBQUU0QixBQUF3QixBQUFDLEFBQzdDO0FBSFIsa0JBR2MsQUFBSSxtQkFIbEIsQUFHYyxBQUFZLEFBQ2xCO0FBSlI7bUJBSXNCLEFBRWxCO2lDQUZrQixBQUdsQjsyQkFBYSxJQUhLLEFBR0wsQUFBSSxBQUNqQjsyQkFBYSxJQVJqQixBQUljLEFBQVEsQUFJTCxBQUFJO0FBSkMsQUFDbEIsYUFEVSxBQUFJOzRCQUpsQjs0QkFBQTt1QkFXdUIsQUFBSTtvQkFBZSxBQUM5QixNQUFtQixBQUN6QjtvQkFGb0MsQUFFOUIsZUFBbUIsQUFDekI7cUJBSG9DLEFBRzdCLE9BQWUsQUFDdEI7cUJBSm9DLEFBSTdCLFNBQWUsQUFDdEI7cUJBTG9DLEFBSzdCLElBQWtCLEFBQ3pCO3VCQU5vQyxBQU0zQixPQUFlLEFBQ3hCOzBCQVBvQyxBQU94QixNQWxCbEIsQUFXdUIsQUFBbUIsQUFPZDtBQVBjLEFBQ3BDLGFBRGlCOztlQUFiO0FBWFYsNEJBb0JJOztvQkFBQSxBQUFRLElBcEJaLEFBb0JJLEFBQVk7NEJBcEJoQjtBQUFBOztlQUFBOzRCQUFBOzRDQXNCSTs7b0JBQUEsQUFBUSxNQUFNLGtDQUFkLEFBQ0E7Z0JBQUksU0FBSixBQUFpQiwrQkFDZixRQUFBLEFBQVEsSUFBSSx5QkFBZSxZQUFmLEFBQWlCLE1BQWpCLEFBQXVCLE1BeEJ6QyxBQXdCTSxBQUFZLEFBQTZCOztlQXhCL0M7ZUFBQTs0QkFBQTs7QUFBQTsyQkFBQTtBOztrQixBQUFlOzs7OztJLEFBb0RUOzs7Ozs7OzBCLEFBQ1MsVUFBUyxBQUNwQjttQ0FBbUIsVUFBQSxBQUFDLFNBQUQsQUFBUyxRQUFXLEFBQ3JDO21CQUFBLEFBQVcsU0FBWCxBQUFtQixVQUFuQixBQUNDLEtBQUssWUFBSSxBQUNSO0FBQ0Q7QUFIRCxXQUFBLEFBSUMsTUFBTSxlQUFPLEFBQ1o7QUFDRDtBQU5ELEFBT0Q7QUFSRCxBQUFPLEFBU1IsT0FUUTs7Ozs7QUFZWDs7a0JBQUEsQUFBZSIsImZpbGUiOiJlb3NBUEkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xhdXJhY2Vyb24vRG9jdW1lbnRzL0FBQV9ibG9ja2NoYWluL2FhYS1ibG9ja2NoYWluLXNyMmkzMDUvRXRoZXJldW0ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/lib/eosAPI.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/lauraceron/Documents/AAA_blockchain/aaa-blockchain-sr2i305/Ethereum/lib/eosAPI.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iOWFjOGQ4ZjgzMTdkN2UzNDFhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2Vvc0FQSS5qcz83NWU5MzYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwaSwgSnNvblJwYywgUnBjRXJyb3IgfSBmcm9tICdlb3Nqcyc7XG5pbXBvcnQgeyBKc1NpZ25hdHVyZVByb3ZpZGVyIH0gZnJvbSAnZW9zanMvZGlzdC9lb3Nqcy1qc3NpZyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHRha2VBY3Rpb24oYWN0aW9uLCBkYXRhdmFsdWUpe1xuICBjb25zdCBwcml2YXRlS2V5ID0gJzVLUXdyUGJ3ZEw2UGhYdWp4VzM3RlNTUVoxSml3c1NUNGNxUXpEZXlYdFA3OXprdkZEMydcbiAgY29uc3Qgc2lnbmF0dXJlUHJvdmlkZXIgPSBuZXcgSnNTaWduYXR1cmVQcm92aWRlcihbcHJpdmF0ZUtleV0pO1xuICBjb25zdCByY3AgPSBuZXcgSnNvblJwYygnaHR0cDovLzE3Mi4xOC4wLjI6ODg4OCcpO1xuICBjb25zdCBhcGkgPSBuZXcgQXBpKHtcbiAgICByY3AsXG4gICAgc2lnbmF0dXJlUHJvdmlkZXIsIFxuICAgIHRleHREZWNvZGVyOiBuZXcgVGV4dERlY29kZXIoKSwgXG4gICAgdGV4dEVuY29kZXI6IG5ldyBUZXh0RW5jb2RlcigpXG4gIH0pXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IHJjcC5nZXRfdGFibGVfcm93cyh7XG4gICAgICBqc29uOiB0cnVlLCAgICAgICAgICAgICAgLy8gR2V0IHRoZSByZXNwb25zZSBhcyBqc29uXG4gICAgICBjb2RlOiAnZW9zaW8udG9rZW4nLCAgICAgLy8gQ29udHJhY3QgdGhhdCB3ZSB0YXJnZXRcbiAgICAgIHNjb3BlOiAnYWFhJywgICAgICAgICAvLyBBY2NvdW50IHRoYXQgb3ducyB0aGUgZGF0YVxuICAgICAgdGFibGU6ICd1c2VycycsICAgICAgIC8vIFRhYmxlIG5hbWVcbiAgICAgIGxpbWl0OiAxMCwgICAgICAgICAgICAgICAvLyBNYXhpbXVtIG51bWJlciBvZiByb3dzIHRoYXQgd2Ugd2FudCB0byBnZXRcbiAgICAgIHJldmVyc2U6IGZhbHNlLCAgICAgICAgIC8vIE9wdGlvbmFsOiBHZXQgcmV2ZXJzZWQgZGF0YVxuICAgICAgc2hvd19wYXllcjogZmFsc2UgICAgIC8vIE9wdGlvbmFsOiBTaG93IHJhbSBwYXllclxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3ApXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdcXG5DYXVnaHQgZXhjZXB0aW9uOiAnICsgZSk7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBScGNFcnJvcilcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGUuanNvbiwgbnVsbCwgMikpO1xuICB9XG4gIFxuXG4gIFxuICAvLyB0cnkge1xuICAvLyAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS50cmFuc2FjdCh7XG4gIC8vICAgICBhY3Rpb25zOiBbe1xuICAvLyAgICAgICBhY2NvdW50OiAnYWFhJyxcbiAgLy8gICAgICAgbmFtZTogYWN0aW9uLFxuICAvLyAgICAgICBhdXRob3JpemF0aW9uOiBbe1xuICAvLyAgICAgICAgIGFjdG9yOiAnbGF1cmEnLFxuICAvLyAgICAgICAgIHBlcm1pc3Npb246ICdhY3RpdmUnLFxuICAvLyAgICAgICB9XSxcbiAgLy8gICAgICAgZGF0YTogZGF0YXZhbHVlLFxuICAvLyAgICAgfV1cbiAgLy8gICB9LCB7XG4gIC8vICAgICBibG9ja3NCZWhpbmQ6IDMsXG4gIC8vICAgICBleHBpcmVTZWNvbmRzOiAzMCxcbiAgLy8gICB9KTtcbiAgLy8gICBjb25zb2xlLmRpcihyZXN1bHQpO1xuICAvLyB9IGNhdGNoIChlKSB7XG4gIC8vICAgY29uc29sZS5sb2coJ1xcbkNhdWdodCBleGNlcHRpb246ICcgKyBlKTtcbiAgLy8gICAvLyBpZiAoZSBpbnN0YW5jZW9mIFJwY0Vycm9yKVxuICAvLyAgIC8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZS5qc29uLCBudWxsLCAyKSk7IFxuICAvLyB9XG59XG5cbmNsYXNzIGVvc0FwaXtcbiAgc3RhdGljIGxvZ2luKHVzZXJuYW1lKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PiB7XG4gICAgICB0YWtlQWN0aW9uKFwibG9naW5cIix1c2VybmFtZSlcbiAgICAgIC50aGVuKCgpPT57XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVvc0FwaVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9lb3NBUEkuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBTEE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBRkE7QUFYQTtBQUNBO0FBbUJBO0FBcEJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFzQkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQXhCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBc0RBO0FBQUE7QUFDQTtBQUdBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTtBQURBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=