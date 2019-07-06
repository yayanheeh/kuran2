'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadRecitations = exports.loadTranslations = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.isReadingMode = isReadingMode;
exports.isNightMode = isNightMode;
exports.setOption = setOption;
exports.setUserAgent = setUserAgent;

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _options = require('redux/constants/options.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isReadingMode(globalState) {
  return globalState.options.isReadingMode;
}

function isNightMode(globalState) {
  return globalState.options.isNightMode;
}

function setOption(payload) {
  var options = _reactCookie2.default.load('options') || {}; // protect against first timers.

  (0, _keys2.default)(payload).forEach(function (option) {
    options[option] = payload[option];
  });
  _reactCookie2.default.save('options', (0, _stringify2.default)(options));

  return {
    type: _options.SET_OPTION,
    payload: payload
  };
}

function setUserAgent(userAgent) {
  return {
    type: _options.SET_USER_AGENT,
    userAgent: userAgent
  };
}

var loadTranslations = exports.loadTranslations = function loadTranslations() {
  return {
    types: [_options.LOAD_TRANSLATIONS, _options.LOAD_TRANSLATIONS_SUCCESS, _options.LOAD_TRANSLATIONS_FAIL],
    promise: function promise(client) {
      return client.get('/api/v3/options/translations');
    }
  };
};

var loadRecitations = exports.loadRecitations = function loadRecitations() {
  return {
    types: [_options.LOAD_RECITERS, _options.LOAD_RECITERS_SUCCESS, _options.LOAD_RECITERS_FAIL],
    promise: function promise(client) {
      return client.get('/api/v3/options/recitations');
    }
  };
};