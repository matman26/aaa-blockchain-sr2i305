'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _we = require('./we3');

var _we2 = _interopRequireDefault(_we);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

var _variables = require('./variables.json');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _we2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), _variables2.default.factory_addr);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImZhY3RvcnlBZGRyIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImZhY3RvcnlfYWRkciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTRCLEFBQTVCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXdCLEFBQXhCOzs7Ozs7QUFFQSxJQUFNLFdBQVksSUFBSSxhQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2hCLEtBQUssQUFBTCxNQUFXLDBCQUFnQixBQUEzQixBQURnQixZQUVoQixvQkFBWSxBQUZJLEFBQWxCLEFBS0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGF1cmFjZXJvbi9Eb2N1bWVudHMvVGVsZWNvbS8zIEFOTkVFL0Jsb2NrY2hhaW5UcmFpbmluZy9raWNrc3RhcnQifQ==