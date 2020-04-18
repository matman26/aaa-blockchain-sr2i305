'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _we = require('./we3');

var _we2 = _interopRequireDefault(_we);

var _Login = require('./build/Login.json');

var _Login2 = _interopRequireDefault(_Login);

var _variables = require('./variables.json');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _we2.default.eth.Contract(JSON.parse(_Login2.default.interface), _variables2.default.login_addr);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2xvZ2luLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJMb2dpbiIsImxvZ2luQWRkciIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJsb2dpbl9hZGRyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBa0IsQUFBbEI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBc0IsQUFBdEI7Ozs7OztBQUVBLElBQU0sV0FBWSxJQUFJLGFBQUssQUFBTCxJQUFTLEFBQWIsU0FDaEIsS0FBSyxBQUFMLE1BQVcsZ0JBQU0sQUFBakIsQUFEZ0IsWUFFaEIsb0JBQVUsQUFGTSxBQUFsQixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sYXVyYWNlcm9uL0RvY3VtZW50cy9BQUFfYmxvY2tjaGFpbi9hYWEtYmxvY2tjaGFpbi1zcjJpMzA1L0V0aGVyZXVtIn0=