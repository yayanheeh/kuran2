'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeText = exports.suggestions = exports.suggestion = exports.recitations = exports.line = exports.chapters = exports.match = exports.segments = exports.segmentType = exports.words = exports.verses = exports.verseType = exports.wordType = exports.userType = exports.translationOptions = exports.transliteration = exports.translation = exports.translationType = exports.timeInterval = exports.surahType = exports.recitationTypes = exports.optionsType = exports.location = exports.fontSize = exports.matchType = exports.language = exports.audioActions = exports.mediaActions = exports.media = exports.infoType = exports.footNoteType = exports.contentType = exports.bookmarkType = exports.bookmarkActions = undefined;

var _react = require('react');

var bookmarkActions = exports.bookmarkActions = _react.PropTypes.shape({
  isLoaded: _react.PropTypes.func.isRequired,
  load: _react.PropTypes.func.isRequired,
  addBookmark: _react.PropTypes.func.isRequired,
  removeBookmark: _react.PropTypes.func.isRequired
});

var bookmarkType = exports.bookmarkType = _react.PropTypes.shape({
  id: _react.PropTypes.string.isRequired,
  verseKey: _react.PropTypes.string.isRequired,
  createdAt: _react.PropTypes.string.isRequired,
  updatedAt: _react.PropTypes.string.isRequired
});

var contentType = exports.contentType = _react.PropTypes.shape({
  id: _react.PropTypes.number,
  authorName: _react.PropTypes.string,
  languageName: _react.PropTypes.string
});

var footNoteType = exports.footNoteType = _react.PropTypes.shape({
  id: _react.PropTypes.number,
  text: _react.PropTypes.string,
  language_name: _react.PropTypes.string
});

var infoType = exports.infoType = _react.PropTypes.shape({
  chapterId: _react.PropTypes.number.isRequired,
  text: _react.PropTypes.string.isRequired,
  source: _react.PropTypes.string.isRequired,
  shortText: _react.PropTypes.string.isRequired,
  languageName: _react.PropTypes.string.isRequired
});

var media = exports.media = _react.PropTypes.shape({
  content: _react.PropTypes.object
});

var mediaActions = exports.mediaActions = _react.PropTypes.shape({
  setMedia: _react.PropTypes.func.isRequired,
  removeMedia: _react.PropTypes.func.isRequired
});

var audioActions = exports.audioActions = _react.PropTypes.shape({
  pause: _react.PropTypes.func.isRequired,
  setAyah: _react.PropTypes.func.isRequired,
  play: _react.PropTypes.func.isRequired,
  setCurrentWord: _react.PropTypes.func.isRequired
});

var language = exports.language = _react.PropTypes.shape({
  beta: _react.PropTypes.bool,
  direction: _react.PropTypes.string.isRequired,
  english: _react.PropTypes.string.isRequired,
  esAnalyzerDefault: _react.PropTypes.string,
  languageCode: _react.PropTypes.string.isRequired,
  priority: _react.PropTypes.number.isRequired,
  unicode: _react.PropTypes.string
});

var matchType = exports.matchType = _react.PropTypes.shape({
  score: _react.PropTypes.number.isRequired,
  text: _react.PropTypes.string.isRequired,
  languageCode: _react.PropTypes.string.isRequired,
  subType: _react.PropTypes.string.isRequired,
  cardinalityType: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  resourceId: _react.PropTypes.number.isRequired,
  description: _react.PropTypes.string,
  language: language.isRequired,
  sourceId: _react.PropTypes.number.isRequired,
  type: _react.PropTypes.string.isRequired,
  authorId: _react.PropTypes.number.isRequired,
  slug: _react.PropTypes.string.isRequired,
  isAvailable: _react.PropTypes.bool
});

var fontSize = exports.fontSize = _react.PropTypes.shape({
  arabic: _react.PropTypes.number,
  translations: _react.PropTypes.number
});

var location = exports.location = _react.PropTypes.shape({
  action: _react.PropTypes.string,
  hash: _react.PropTypes.string,
  pathname: _react.PropTypes.string,
  search: _react.PropTypes.string,
  query: _react.PropTypes.objectOf(_react.PropTypes.string)
});

var optionsType = exports.optionsType = _react.PropTypes.shape({
  isReadingMode: _react.PropTypes.bool,
  isShowingSurahInfo: _react.PropTypes.bool,
  audio: _react.PropTypes.number,
  quran: _react.PropTypes.number,
  content: _react.PropTypes.arrayOf(_react.PropTypes.number),
  tooltip: _react.PropTypes.string,
  fontSize: fontSize.isRequired
});

var recitationTypes = exports.recitationTypes = _react.PropTypes.shape({
  id: _react.PropTypes.number,
  style: _react.PropTypes.string,
  reciter_name_eng: _react.PropTypes.string
});

var surahType = exports.surahType = _react.PropTypes.shape({
  id: _react.PropTypes.number.isRequired,
  versesCount: _react.PropTypes.number.isRequired,
  bismillahPre: _react.PropTypes.bool.isRequired,
  revelationOrder: _react.PropTypes.number.isRequired,
  revelationPlace: _react.PropTypes.string.isRequired,
  pages: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
  nameComplex: _react.PropTypes.string.isRequired,
  nameSimple: _react.PropTypes.string.isRequired,
  nameArabic: _react.PropTypes.string.isRequired
});

var timeInterval = exports.timeInterval = _react.PropTypes.shape({
  from: _react.PropTypes.number,
  to: _react.PropTypes.number,
  time: _react.PropTypes.number
});

var translationType = exports.translationType = _react.PropTypes.shape({
  languageName: _react.PropTypes.string.isRequired,
  text: _react.PropTypes.string.isRequired,
  resourceName: _react.PropTypes.string.isRequired
});

var translation = exports.translation = _react.PropTypes.shape({
  languageName: _react.PropTypes.string,
  text: _react.PropTypes.string
});

var transliteration = exports.transliteration = _react.PropTypes.shape({
  languageName: _react.PropTypes.string,
  text: _react.PropTypes.string
});

var translationOptions = exports.translationOptions = _react.PropTypes.arrayOf(contentType);

var userType = exports.userType = _react.PropTypes.shape({
  provider: _react.PropTypes.string,
  uid: _react.PropTypes.string,
  firstName: _react.PropTypes.string,
  lastName: _react.PropTypes.string,
  username: _react.PropTypes.string,
  link: _react.PropTypes.string,
  image: _react.PropTypes.string,
  email: _react.PropTypes.string,
  name: _react.PropTypes.string
});

var wordType = exports.wordType = _react.PropTypes.shape({
  arabic: _react.PropTypes.string,
  verseKey: _react.PropTypes.string.isRequired,
  charType: _react.PropTypes.string.isRequired,
  className: _react.PropTypes.string.isRequired,
  code: _react.PropTypes.string.isRequired,
  lineNumber: _react.PropTypes.number.isRequired,
  pageNumber: _react.PropTypes.number.isRequired,
  position: _react.PropTypes.number.isRequired,
  translation: translation,
  transliteration: transliteration,
  wordId: _react.PropTypes.number
});

var verseType = exports.verseType = _react.PropTypes.shape({
  id: _react.PropTypes.number.isRequired,
  chapterId: _react.PropTypes.number.isRequired,
  pageNumber: _react.PropTypes.number.isRequired,
  juzNumber: _react.PropTypes.number.isRequired,
  hizbNumber: _react.PropTypes.number.isRequired,
  rubNumber: _react.PropTypes.number.isRequired,
  verseKey: _react.PropTypes.string.isRequired,
  sajdah: _react.PropTypes.bool,
  words: _react.PropTypes.arrayOf(wordType).isRequired,
  textMadani: _react.PropTypes.string.isRequired,
  textSimple: _react.PropTypes.string.isRequired,
  translations: _react.PropTypes.arrayOf(translationType), // NOTE: In search, it is not required.
  audio: _react.PropTypes.object // NOTE: In search, it is not required.
});

var verses = exports.verses = _react.PropTypes.objectOf(verseType);

var words = exports.words = _react.PropTypes.shape({
  startTime: _react.PropTypes.number.isRequired,
  endTime: _react.PropTypes.number.isRequired,
  duration: _react.PropTypes.number.isRequired
});

var segmentType = exports.segmentType = _react.PropTypes.shape({
  words: words,
  intervals: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]) // TODO: This should be done a better way.
});

var segments = exports.segments = _react.PropTypes.objectOf(segmentType);

var match = exports.match = _react.PropTypes.arrayOf(matchType);

var chapters = exports.chapters = _react.PropTypes.objectOf(surahType);

var line = exports.line = _react.PropTypes.arrayOf(wordType);

var recitations = exports.recitations = _react.PropTypes.arrayOf(recitationTypes);

var suggestion = exports.suggestion = _react.PropTypes.shape({
  ayah: _react.PropTypes.string,
  href: _react.PropTypes.string.isRequired,
  text: _react.PropTypes.string.isRequired
});

var suggestions = exports.suggestions = _react.PropTypes.arrayOf(suggestion);

var storeText = exports.storeText = _react.PropTypes.shape({
  ios: _react.PropTypes.string.isRequired,
  android: _react.PropTypes.string.isRequired,
  windows: _react.PropTypes.string.isRequired,
  kindle: _react.PropTypes.string.isRequired
});