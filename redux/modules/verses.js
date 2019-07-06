'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_CURRENT_VERSE = exports.CLEAR_CURRENT = exports.LOAD_SUCCESS = exports.LOAD = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

exports.default = reducer;

var _verses = require('redux/constants/verses.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.LOAD = _verses.LOAD;
exports.LOAD_SUCCESS = _verses.LOAD_SUCCESS;
exports.CLEAR_CURRENT = _verses.CLEAR_CURRENT;
exports.SET_CURRENT_VERSE = _verses.SET_CURRENT_VERSE;


var initialState = {
  current: null,
  currentWord: null,
  errored: false,
  loaded: false,
  loading: false,
  entities: {},
  result: []
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _verses.SET_CURRENT_VERSE:
      {
        return (0, _extends5.default)({}, state, {
          current: action.id,
          currentWord: state.current === action.id ? state.currentWord : null
        });
      }
    case _verses.SET_CURRENT_WORD:
      {
        var currentVerse = state.current;
        if (action.id && currentVerse) {
          if (!new RegExp('^' + currentVerse + ':').test(action.id)) {
            currentVerse = action.id.match(/^\d+:\d+/g)[0];
          }
        }
        return (0, _extends5.default)({}, state, {
          current: currentVerse,
          currentWord: action.id
        });
      }
    case _verses.CLEAR_CURRENT_WORD:
      {
        return (0, _extends5.default)({}, state, {
          currentWord: null
        });
      }
    case _verses.CLEAR_CURRENT:
      {
        var entities = state.entities;
        return (0, _extends5.default)({}, state, {
          current: null,
          currentWord: null,
          entities: (0, _extends5.default)({}, entities, (0, _defineProperty3.default)({}, action.id, {}))
        });
      }
    case _verses.LOAD:
      {
        return (0, _extends5.default)({}, state, {
          loaded: false,
          loading: true
        });
      }
    case _verses.LOAD_SUCCESS:
      {
        var current = state.current ? state.current : action.result.result[0];
        var stateEntities = state.entities;

        return (0, _extends5.default)({}, state, {
          current: current,
          loaded: true,
          loading: false,
          errored: false,
          entities: (0, _extends5.default)({}, stateEntities, (0, _defineProperty3.default)({}, action.chapterId, (0, _assign2.default)({}, state.entities[action.chapterId], action.result.entities.verses))),
          result: (0, _assign2.default)({}, state.result, action.result.result)
        });
      }
    case _verses.LOAD_FAIL:
      {
        return state;
      }
    default:
      return state;
  }
}