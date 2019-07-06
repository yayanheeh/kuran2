'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _verses = require('redux/actions/verses.js');

var _helpers = require('helpers');

exports.default = function (_ref) {
  var _ref$store = _ref.store,
      dispatch = _ref$store.dispatch,
      getState = _ref$store.getState;

  (0, _helpers.debug)('component:AyatulKursi:versesConnect', 'Init');

  var chapterId = 2;
  var paging = { offset: 254, limit: 1 };

  if (!(0, _verses.isLoaded)(getState(), chapterId, paging)) {
    (0, _helpers.debug)('component:AyatulKursi:versesConnect', 'Not loaded');

    dispatch((0, _verses.clearCurrent)(chapterId)); // In the case where you go to same surah but later ayahs.

    if (__CLIENT__) {
      dispatch((0, _verses.load)(chapterId, paging, getState().options));
      return true;
    }

    return dispatch((0, _verses.load)(chapterId, paging, getState().options));
  }

  return true;
};