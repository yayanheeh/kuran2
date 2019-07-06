'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = reducer;

var _verses = require('redux/constants/verses.js');

var _chapters = require('redux/constants/chapters.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-case-declarations */
var initialState = {
  lines: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _chapters.SET_CURRENT:
      return (0, _extends3.default)({}, state, {
        lines: {}
      });
    case _verses.LOAD:
      return (0, _extends3.default)({}, state, {
        loaded: false,
        loading: true
      });
    case _verses.LOAD_SUCCESS:
      var ayahs = action.result.entities.verses;
      var stateLines = state.lines;
      var lines = (0, _extends3.default)({}, stateLines);

      action.result.result.verses.forEach(function (ayahId) {
        var ayah = ayahs[ayahId];

        ayah.words.forEach(function (word) {
          if (lines[word.pageNumber + '-' + word.lineNumber]) {
            var isInArray = lines[word.pageNumber + '-' + word.lineNumber].find(function (item) {
              var itemChecksum = '' + item.lineNumber + item.code + item.verseKey + item.position;
              var dataChecksum = '' + word.lineNumber + word.code + word.verseKey + item.position;

              return itemChecksum === dataChecksum;
            });

            if (!isInArray) {
              lines[word.pageNumber + '-' + word.lineNumber].push(word);
            }
          } else {
            lines[word.pageNumber + '-' + word.lineNumber] = [word];
          }
        });
      });

      return (0, _extends3.default)({}, state, {
        loaded: true,
        loading: false,
        errored: false,
        lines: lines
      });
    case _verses.LOAD_FAIL:
      return state;
    default:
      return state;
  }
}