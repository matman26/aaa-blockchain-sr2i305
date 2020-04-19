'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _cryptoRandomString = require('crypto-random-string');

var _cryptoRandomString2 = _interopRequireDefault(_cryptoRandomString);

var _login = require('../ethereum/login');

var _login2 = _interopRequireDefault(_login);

var _we = require('../ethereum/we3');

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