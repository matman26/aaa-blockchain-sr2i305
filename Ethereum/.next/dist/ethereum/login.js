'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _we = require('./we3');

var _we2 = _interopRequireDefault(_we);

var _UserManagement = require('./build/UserManagement.json');

var _UserManagement2 = _interopRequireDefault(_UserManagement);

var _variables = require('./variables.json');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _we2.default.eth.Contract(JSON.parse(_UserManagement2.default.interface), _variables2.default.login_addr);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2xvZ2luLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJVc2VybWdtIiwibG9naW5BZGRyIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImxvZ2luX2FkZHIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFvQixBQUFwQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFzQixBQUF0Qjs7Ozs7O0FBRUEsSUFBTSxXQUFZLElBQUksYUFBSyxBQUFMLElBQVMsQUFBYixTQUNoQixLQUFLLEFBQUwsTUFBVyx5QkFBUSxBQUFuQixBQURnQixZQUVoQixvQkFBVSxBQUZNLEFBQWxCLEFBS0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xhdXJhY2Vyb24vRG9jdW1lbnRzL0FBQV9ibG9ja2NoYWluL2FhYS1ibG9ja2NoYWluLXNyMmkzMDUvRXRoZXJldW0ifQ==