'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxConnect = require('redux-connect');

var _chapters = require('./chapters');

var _chapters2 = _interopRequireDefault(_chapters);

var _verses = require('./verses');

var _verses2 = _interopRequireDefault(_verses);

var _audioplayer = require('./audioplayer');

var _audioplayer2 = _interopRequireDefault(_audioplayer);

var _lines = require('./lines');

var _lines2 = _interopRequireDefault(_lines);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _searchResults = require('./searchResults');

var _searchResults2 = _interopRequireDefault(_searchResults);

var _suggestResults = require('./suggestResults');

var _suggestResults2 = _interopRequireDefault(_suggestResults);

var _fontFaces = require('./fontFaces');

var _fontFaces2 = _interopRequireDefault(_fontFaces);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _bookmarks = require('./bookmarks');

var _bookmarks2 = _interopRequireDefault(_bookmarks);

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

var _footNote = require('./footNote');

var _footNote2 = _interopRequireDefault(_footNote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  reduxAsyncConnect: _reduxConnect.reducer,
  auth: _auth2.default,
  bookmarks: _bookmarks2.default,
  media: _media2.default,
  chapters: _chapters2.default,
  verses: _verses2.default,
  audioplayer: _audioplayer2.default,
  fontFaces: _fontFaces2.default,
  lines: _lines2.default,
  searchResults: _searchResults2.default,
  suggestResults: _suggestResults2.default,
  options: _options2.default,
  footNote: _footNote2.default
});