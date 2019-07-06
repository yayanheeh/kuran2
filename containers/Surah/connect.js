'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.versesConnect = exports.chapterInfoConnect = exports.chaptersConnect = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _chapters = require('redux/actions/chapters.js');

var _verses = require('redux/actions/verses.js');

var _helpers = require('helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var determinePage = function determinePage(range) {
  var from = void 0;
  var to = void 0;

  if (range) {
    if (range.includes('-')) {
      var _range$split$map = range.split('-').map(function (value) {
        return parseInt(value, 10);
      });

      var _range$split$map2 = (0, _slicedToArray3.default)(_range$split$map, 2);

      from = _range$split$map2[0];
      to = _range$split$map2[1];


      if (isNaN(from) || isNaN(to)) return {};

      return {
        offset: from - 1,
        limit: to - from
      };
    }

    var offset = parseInt(range, 10);

    if (isNaN(offset)) return {};

    return {
      offset: offset - 1,
      limit: 1
    };
  }

  return {};
};

var chaptersConnect = exports.chaptersConnect = function chaptersConnect(_ref) {
  var _ref$store = _ref.store,
      getState = _ref$store.getState,
      dispatch = _ref$store.dispatch;

  (0, _helpers.debug)('component:Surah:chaptersConnect', 'Init');
  if ((0, _chapters.isAllLoaded)(getState())) return false;

  (0, _helpers.debug)('component:Surah:chaptersConnect', 'Surahs not loaded');

  if (__CLIENT__) {
    dispatch((0, _chapters.loadAll)());
    return true;
  }

  return dispatch((0, _chapters.loadAll)());
};

var chapterInfoConnect = exports.chapterInfoConnect = function chapterInfoConnect(_ref2) {
  var _ref2$store = _ref2.store,
      dispatch = _ref2$store.dispatch,
      getState = _ref2$store.getState,
      params = _ref2.params;

  if ((0, _chapters.isInfoLoaded)(getState(), params.chapterId)) return false;

  if (__CLIENT__) {
    dispatch((0, _chapters.loadInfo)(params));
    return true;
  }

  return dispatch((0, _chapters.loadInfo)(params));
};

var versesConnect = exports.versesConnect = function versesConnect(_ref3) {
  var _ref3$store = _ref3.store,
      dispatch = _ref3$store.dispatch,
      getState = _ref3$store.getState,
      params = _ref3.params,
      location = _ref3.location;

  (0, _helpers.debug)('component:Surah:versesConnect', 'Init');

  var chapterId = parseInt(params.chapterId, 10);
  var paging = determinePage(params.range);
  var translations = params.translations || location.query.translations;

  if (chapterId !== getState().chapters.current) {
    dispatch((0, _chapters.setCurrent)(chapterId));
  }

  if (!(0, _verses.isLoaded)(getState(), chapterId, paging)) {
    (0, _helpers.debug)('component:Surah:versesConnect', 'Not loaded');

    dispatch((0, _verses.clearCurrent)(chapterId)); // In the case where you go to same surah but later ayahs.

    if (__CLIENT__) {
      dispatch((0, _verses.load)(chapterId, paging, { translations: translations }, getState().options));
      return true;
    }

    return dispatch((0, _verses.load)(chapterId, paging, { translations: translations }, getState().options));
  }

  return true;
};