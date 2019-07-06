'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

exports.default = reducer;

var _bookmarks = require('redux/constants/bookmarks');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  loaded: false,
  entities: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _bookmarks.LOAD_SUCCESS:
      {
        var entities = state.entities;
        var bookmarks = action.result.entities.bookmarks;

        return (0, _extends5.default)({}, state, {
          loaded: true,
          errored: false,
          entities: (0, _extends5.default)({}, entities, bookmarks)
        });
      }

    case _bookmarks.ADD_BOOKMARK_SUCCESS:
      {
        return (0, _extends5.default)({}, state, {
          entities: (0, _extends5.default)({}, state.entities, (0, _defineProperty3.default)({}, action.verseKey, action.result))
        });
      }

    case _bookmarks.REMOVE_BOOKMARK_SUCCESS:
      {
        return (0, _extends5.default)({}, state, {
          entities: (0, _extends5.default)({}, state.entities, (0, _defineProperty3.default)({}, action.verseKey, null))
        });
      }
    default:
      return state;
  }
}