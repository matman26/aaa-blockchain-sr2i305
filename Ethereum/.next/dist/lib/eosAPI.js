'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _eosjs = require('eosjs');

var _eosjsJssig = require('eosjs/dist/eosjs-jssig');

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