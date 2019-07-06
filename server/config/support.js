'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (server) {
  server.post('/support', function (req, res) {
    _superagent2.default.post('https://quran.zendesk.com/api/v2/tickets.json').send({ ticket: req.body }).auth('mmahalwy@gmail.com/token', 'aGGdpbEgkcKgpGscrqq8QU6z8wsdrlrTCKWHMJoz').end(function (err, _ref) {
      var body = _ref.body;

      res.send(body || err);
    });
  });
};