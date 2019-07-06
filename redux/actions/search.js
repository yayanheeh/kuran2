'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = search;
exports.isQueried = isQueried;

var _schemas = require('redux/schemas');

var _search = require('redux/constants/search.js');

function search(params) {
  return {
    types: [_search.SEARCH, _search.SEARCH_SUCCESS, _search.SEARCH_FAIL],
    schema: { results: [_schemas.versesSchema] },
    // TODO: We are doing this because of a weird obj.hasOwnProperty method missing on `params`
    promise: function promise(client) {
      return client.get('/api/v3/search', { params: { q: params.q, p: params.p } });
    },
    params: params
  };
}

function isQueried() {
  return false;
}