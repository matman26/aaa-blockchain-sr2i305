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

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

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
// try {
//   const accounts = await web3.eth.getAccounts();
//   const secret = randomString({length: 15, type:'base64'})
//   var hash = web3.utils.sha3(secret)
//   var signature = await web3.eth.personal.sign(hash, accounts[0])
//   console.log("signature",signature)
//   console.log("hash",hash)
//   var ans = "";
//   ans = await login.methods.signIn(hash,signature, this.state.username,1).send({
//     from: accounts[0]
//   }) 
//   const profile = await login.methods.profile(accounts[0]).call()
//   this.state.username = profile[0]
//   this.state.role = profile[1]
//   console.log("Profile",profile);
//   if(ans.status === true) {
//     Cookie.set('session', signature)
//     Router.pushRoute('/');
//   }else{
//     this.setState({errorMess: "Authentication has failed"});
//   }

//   this.setState({loading:false,errorMess:''});
// } catch (error) {
//   this.setState({errorMess: "Not username provided"});

// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9hdXRoLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2VjcmV0IiwicmFuZG9tU3RyaW5nIiwibGVuZ3RoIiwidHlwZSIsImhhc2giLCJ1dGlscyIsInNoYTMiLCJwZXJzb25hbCIsInNpZ24iLCJzaWduYXR1cmUiLCJ1c2VybmFtZSIsInJvbGUiLCJyZXN1bHQiLCJsb2dpbiIsIm1ldGhvZHMiLCJzaWduSW4iLCJzZW5kIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJzaWduVXAiLCJDb29raWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVSxBQXlCakI7Ozs7Ozs7c0ZBdkJBLG1CQUFBO2dDQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQUE7NEJBQUE7bUJBQ3lCLGFBQUEsQUFBSyxJQUQ5QixBQUN5QixBQUFTOztlQUExQjtBQURSLGdDQUVRO0FBRlIscUJBRWlCLGtDQUFhLEVBQUMsUUFBRCxBQUFTLElBQUksTUFGM0MsQUFFaUIsQUFBYSxBQUFrQixBQUMxQztBQUhOLG1CQUdhLGFBQUEsQUFBSyxNQUFMLEFBQVcsS0FIeEIsQUFHYSxBQUFnQjs0QkFIN0I7bUJBSW1CLGFBQUEsQUFBSyxJQUFMLEFBQVMsU0FBVCxBQUFrQixLQUFsQixBQUF1QixNQUFNLFNBSmhELEFBSW1CLEFBQTZCLEFBQVM7O2VBQW5EO0FBSk4sNEJBQUE7NkNBS1MsRUFBQyxNQUFELE1BQU0sTUFMZixBQUtTOztlQUxUO2VBQUE7NEJBQUE7O0FBQUE7Z0JBQUE7QTs7a0IsQUFBZTs7Ozs7O3VGQVFmLGtCQUFBLEFBQXNCLFVBQXRCLEFBQStCLE1BQS9CO3FDQUFBOztvRUFBQTtnQkFBQTsyQ0FBQTtlQUFBOzZCQUFBO21CQUFBLEFBQzJCOztlQUQzQjs4QkFDUTtBQURSLHlCQUFBLEFBQ1EsQUFBSztBQURiLHlCQUFBLEFBQ2E7NkJBRGI7bUJBRXlCLGFBQUEsQUFBSyxJQUY5QixBQUV5QixBQUFTOztlQUExQjtBQUZSLGlDQUdNO0FBSE4scUJBQUEsQUFHZTs2QkFIZjs2QkFBQTttQ0FLbUIsQUFBTSxRQUFOLEFBQWMsT0FBZCxBQUFxQixNQUFyQixBQUEwQixNQUExQixBQUErQixVQUEvQixBQUF3QyxNQUF4QyxBQUE4QztvQkFDckQsU0FOWixBQUttQixBQUFtRCxBQUMxRCxBQUFTO0FBRGlELEFBQ2hFLGFBRGE7O2VBQWY7QUFMSiwrQkFRSTs7bUJBQUEsQUFBTyxlQVJYLEFBUUksQUFBc0I7NkJBUjFCO0FBQUE7O2VBQUE7NkJBQUE7OENBVUk7O29CQUFBLEFBQVEsY0FDUjtxQkFYSixBQVdJLEFBQVM7O2VBWGI7OENBYVMsRUFBQyxRQWJWLEFBYVM7O2VBYlQ7ZUFBQTs2QkFBQTs7QUFBQTs0QkFBQTtBOztrQixBQUFlOzs7OztRQWVmLEFBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImF1dGguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xhdXJhY2Vyb24vRG9jdW1lbnRzL0FBQV9ibG9ja2NoYWluL2FhYS1ibG9ja2NoYWluLXNyMmkzMDUvRXRoZXJldW0ifQ==