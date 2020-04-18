'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _we = require('./we3');

var _we2 = _interopRequireDefault(_we);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _we2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXFCLEFBQXJCLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBWSxBQUN6QjtTQUFPLElBQUksYUFBSyxBQUFMLElBQVMsQUFBYixTQUNMLEtBQUssQUFBTCxNQUFXLG1CQUFTLEFBQXBCLEFBREssWUFDMkIsQUFEM0IsQUFBUCxBQUVEO0FBSEQiLCJmaWxlIjoiY2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xhdXJhY2Vyb24vRG9jdW1lbnRzL1RlbGVjb20vMyBBTk5FRS9CbG9ja2NoYWluVHJhaW5pbmcva2lja3N0YXJ0In0=