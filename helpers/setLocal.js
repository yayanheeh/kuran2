'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var currentLocal = void 0;
  var expireDate = new Date();
  expireDate.setYear(expireDate.getFullYear() + 1);
  var availableLocals = (0, _keys2.default)(_config2.default.locales);

  if (req && req.query.local) {
    currentLocal = req.query.local;
  } else {
    // eslint-disable-line
    currentLocal = _reactCookie2.default.load('currentLocale');
  }

  if (availableLocals.indexOf(currentLocal) === -1) {
    currentLocal = _config2.default.defaultLocale;
  }

  _reactCookie2.default.save('currentLocale', currentLocal, {
    path: '/',
    expires: new Date(expireDate)
  });

  var localeData = require('../locale/' + currentLocal + '.js'); // eslint-disable-line

  return localeData.default.messages;
};