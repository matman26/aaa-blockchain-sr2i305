'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  // Browser and metamaks
  window.ethereum.enable();
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // Server or n
  var provider = new _web2.default.providers.WebsocketProvider(
  // 'https://rinkeby.infura.io/v3/1918d37b1aa04dde9832c6a1fc8a18c3'
  'wss://rinkeby.infura.io/ws/v3/1918d37b1aa04dde9832c6a1fc8a18c3');

  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlMy5qcyJdLCJuYW1lcyI6WyJXZWIzIiwid2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwiZW5hYmxlIiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWJzb2NrZXRQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxBQUFQLFNBQWdCLEFBQXJELGFBQWtFLEFBQ2hFO0FBQ0E7U0FBTyxBQUFQLFNBQWdCLEFBQWhCLEFBQ0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNEO0FBSkQsT0FJSyxBQUNIO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsQUFDZjtBQUNBO0FBRmUsQUFBakIsQUFLQTs7U0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0Q7QUFHRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZTMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xhdXJhY2Vyb24vRG9jdW1lbnRzL1RlbGVjb20vMyBBTk5FRS9CbG9ja2NoYWluVHJhaW5pbmcva2lja3N0YXJ0In0=