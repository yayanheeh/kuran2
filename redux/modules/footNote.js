'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = reducer;

var _footNote = require('redux/constants/footNote.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  footNote: null,
  loadingFootNote: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _footNote.LOAD_FOOT_NOTE:
      {
        return (0, _extends3.default)({}, state, {
          loadingFootNote: true,
          footNote: null
        });
      }
    case _footNote.LOAD_FOOT_NOTE_SUCCESS:
      {
        return (0, _extends3.default)({}, state, {
          loadingFootNote: false,
          footNote: action.result.footNote
        });
      }
    case _footNote.REMOVE_FOOT_NOTE:
      {
        return (0, _extends3.default)({}, state, {
          loadingFootNote: false,
          footNote: null
        });
      }
    default:
      return state;
  }
}