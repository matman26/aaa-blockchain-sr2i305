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

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _eosjs = require('eosjs');

var _eosjsJssig = require('eosjs/dist/eosjs-jssig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var takeAction = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(action, datavalue) {
    var privateKey, signatureProvider, rpc, api;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            privateKey = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3';
            signatureProvider = new _eosjsJssig.JsSignatureProvider([privateKey]);
            rpc = new _eosjs.JsonRpc('http://127.0.0.1:8888');
            api = new _eosjs.Api({
              rpc: rpc,
              signatureProvider: signatureProvider });

            fetch("http://192.168.0.100:8888", {
              "method": "POST",
              "headers": {
                "content-type": "application/json",
                "accept": "application/json",
                "access-control-request-headers": "Content-Type, Authorization",
                "access-control-allow-origin": "*",
                "access-control-allow-headers": "Origin, Content-Type, X-Auth-Token"

              }
            }).then(function (response) {
              return response.json();
            }).then(function (response) {
              console.log(response);
            }).catch(function (err) {
              console.log(err);
            });
          // try {
          //   const result = await api.transact({
          //     actions: [{
          //       account: 'aaa',
          //       name: 'login',
          //       authorization: [{
          //         actor: 'matheus',
          //         permission: 'active',
          //       }]

          //     }],
          //     data: datavalue
          //   }, {
          //     blocksBehind: 3,
          //     expireSeconds: 30,
          //   });
          //   console.dir(result);
          // } catch (e) {
          //   console.log('\nCaught exception: ' + e);
          //   // if (e instanceof RpcError)
          //   //   console.log(JSON.stringify(e.json, null, 2)); 
          // }

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
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
    value: function login(_ref2) {
      var user = _ref2.user;

      return new _promise2.default(function (resolve, reject) {
        takeAction("login", { user: user }).then(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9lb3NBUEkuanMiXSwibmFtZXMiOlsiYWN0aW9uIiwiZGF0YXZhbHVlIiwicHJpdmF0ZUtleSIsInNpZ25hdHVyZVByb3ZpZGVyIiwiSnNTaWduYXR1cmVQcm92aWRlciIsInJwYyIsIkpzb25ScGMiLCJhcGkiLCJBcGkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJ0YWtlQWN0aW9uIiwiUnBjRXJyb3IiLCJlb3NBcGkiLCJ1c2VyIiwicmVzb2x2ZSIsInJlamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQUssQUFBUzs7QUFDdkIsQUFBUzs7Ozs7c0ZBRVQsaUJBQUEsQUFBMEIsUUFBMUIsQUFBa0MsV0FBbEM7NENBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFDUTtBQURSLHlCQUFBLEFBQ3FCLEFBQ2I7QUFGUixnQ0FFNEIsQUFBSSxvQ0FBb0IsQ0FGcEQsQUFFNEIsQUFBd0IsQUFBQyxBQUM3QztBQUhSLGtCQUdjLEFBQUksbUJBSGxCLEFBR2MsQUFBWSxBQUNsQjtBQUpSLGtCQUljLEFBQUk7bUJBQUksQUFFbEIsR0FGa0IsQUFDbEI7aUNBTEosQUFJYyxBQUFRLEFBSWxCOztrQkFBQSxBQUFNO3dCQUE2QixBQUN2QixBQUNWOztnQ0FBVyxBQUNPLEFBQ2hCOzBCQUZTLEFBRUMsQUFDVjtrREFIUyxBQUd5QixBQUNsQzsrQ0FKUyxBQUlzQixBQUMvQjtnREFQSixBQUFtQyxBQUV0QixBQUt1Qjs7QUFMdkIsQUFDVDtBQUgrQixBQUNqQyxlQURGLEFBV0MsS0FBSyxvQkFBQTtxQkFBWSxTQUFaLEFBQVksQUFBUztBQVgzQixlQUFBLEFBWUMsS0FBSyxvQkFBWSxBQUNoQjtzQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNiO0FBZEQsZUFBQSxBQWVDLE1BQU0sZUFBTyxBQUNaO3NCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2I7QUFqQkQsQUFrQkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9DRjs7ZUFBQTtlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0E7O2tCLEFBQWU7Ozs7O0ksQUFrRFQ7Ozs7Ozs7aUNBQ2dCO1VBQU4sQUFBTSxhQUFOLEFBQU0sQUFDbEI7O21DQUFtQixVQUFBLEFBQUMsU0FBRCxBQUFTLFFBQVcsQUFDckM7bUJBQUEsQUFBVyxTQUFRLEVBQUMsTUFBcEIsQUFBbUIsQUFBTyxRQUExQixBQUNDLEtBQUssWUFBSSxBQUNSO0FBQ0Q7QUFIRCxXQUFBLEFBSUMsTUFBTSxlQUFPLEFBQ1o7QUFDRDtBQU5ELEFBT0Q7QUFSRCxBQUFPLEFBU1IsT0FUUTs7Ozs7QUFZWDs7a0JBQUEsQUFBZSIsImZpbGUiOiJlb3NBUEkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xhdXJhY2Vyb24vRG9jdW1lbnRzL0FBQV9ibG9ja2NoYWluL2FhYS1ibG9ja2NoYWluLXNyMmkzMDUvRXRoZXJldW0ifQ==