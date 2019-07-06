'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.default = reducer;

var _chapters = require('redux/constants/chapters.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  errored: false,
  loaded: false,
  loading: false,
  infoLoading: false,
  current: null,
  entities: {},
  infos: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _chapters.SET_CURRENT:
      return (0, _extends4.default)({}, state, {
        current: action.current
      });
    case _chapters.LOAD_SUCCESS:
      {
        var entities = state.entities;
        var chapters = action.result.entities.chapters;

        return (0, _extends4.default)({}, state, {
          loaded: true,
          errored: false,
          entities: (0, _extends4.default)({}, entities, chapters)
        });
      }
    case _chapters.LOAD_FAIL:
      return state;
    case _chapters.LOAD_INFO:
      return (0, _extends4.default)({}, state, {
        infoLoading: true
      });
    case _chapters.LOAD_INFO_SUCCESS:
      return (0, _extends4.default)({}, state, {
        infos: (0, _extends4.default)({}, state.entities, (0, _defineProperty3.default)({}, action.id, action.result.chapterInfo))
      });
    default:
      return state;
  }
}