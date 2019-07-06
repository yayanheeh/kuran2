'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = reducer;

var _media = require('redux/constants/media');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  content: null
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _media.SET_MEDIA:
      {
        return (0, _extends3.default)({}, state, {
          content: action.content
        });
      }
    case _media.REMOVE_MEDIA:
      {
        return (0, _extends3.default)({}, state, {
          content: null
        });
      }
    default:
      return state;
  }
}