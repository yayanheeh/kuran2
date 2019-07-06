'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = reducer;

var _verses = require('redux/constants/verses.js');

var _search = require('redux/constants/search.js');

var _fontFace = require('redux/constants/fontFace.js');

var _fontFace2 = _interopRequireDefault(_fontFace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _verses.LOAD_SUCCESS:
    case _search.SEARCH_SUCCESS:
      {
        var verses = action.result.entities.verses;
        var classNames = {};

        if (verses) {
          (0, _keys2.default)(verses).forEach(function (ayahId) {
            var verse = verses[ayahId];

            if (!state['p' + verse.pageNumber]) {
              classNames['p' + verse.pageNumber] = false;
            }
          });
        }

        return (0, _extends4.default)({}, state, classNames);
      }
    case _fontFace2.default:
      return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, action.className, true));
    default:
      return state;
  }
}