'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.default = reducer;

var _suggest = require('redux/constants/suggest.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  errored: false,
  loaded: false,
  results: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _suggest.SUGGEST:
      return (0, _extends4.default)({}, state, {
        loaded: false,
        loading: true
        // query: action.params.q || action.params.query,
        // page: action.params.p || action.params.page
      });
    case _suggest.SUGGEST_SUCCESS:
      return (0, _extends4.default)({}, state, {
        results: (0, _extends4.default)({}, state.results, (0, _defineProperty3.default)({}, action.query, action.result))
      });
    case _suggest.SUGGEST_FAIL:
      return (0, _extends4.default)({}, state, {
        errored: true
      });
    default:
      return state;
  }
}