'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suggest = suggest;
exports.isQueried = isQueried;

var _suggest = require('redux/constants/suggest.js');

function suggest(query) {
  var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

  return {
    types: [_suggest.SUGGEST, _suggest.SUGGEST_SUCCESS, _suggest.SUGGEST_FAIL],
    promise: function promise(client) {
      return client.get('/api/v3/suggest', { params: { q: query, l: lang } });
    },
    query: query
  };
}

function isQueried() {
  return false;
}