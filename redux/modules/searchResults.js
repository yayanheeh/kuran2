'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = reducer;

var _search = require('redux/constants/search.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  errored: false,
  loaded: false,
  results: []
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _search.SEARCH:
      return (0, _extends3.default)({}, state, {
        loaded: false,
        loading: true
        // query: action.params.q || action.params.query,
        // page: action.params.p || action.params.page
      });
    case _search.SEARCH_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loaded: true,
        loading: false,
        errored: false,
        totalCount: action.result.result.totalCount,
        totalPages: action.result.result.totalPages,
        currentPage: action.result.result.currentPage,
        perPage: action.result.result.perPage,
        took: action.result.result.took,
        query: action.result.result.query,
        results: action.result.result.results,
        entities: action.result.entities.verses
      });
    case _search.SEARCH_FAIL:
      return (0, _extends3.default)({}, state, {
        errored: true
      });
    default:
      return state;
  }
}