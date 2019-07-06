'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

var _reactRedux = require('react-redux');

var _reduxConnect = require('redux-connect');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Verse = require('components/Verse');

var _Verse2 = _interopRequireDefault(_Verse);

var _Bismillah = require('components/Bismillah');

var _Bismillah2 = _interopRequireDefault(_Bismillah);

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

var _connect = require('../Surah/connect');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Helpers


// components
var style = require('../Surah/style.scss');
// redux

var Pdf = function (_Component) {
  (0, _inherits3.default)(Pdf, _Component);

  function Pdf() {
    (0, _classCallCheck3.default)(this, Pdf);
    return (0, _possibleConstructorReturn3.default)(this, (Pdf.__proto__ || (0, _getPrototypeOf2.default)(Pdf)).apply(this, arguments));
  }

  (0, _createClass3.default)(Pdf, [{
    key: 'hasVerses',
    value: function hasVerses() {
      return (0, _keys2.default)(this.props.verses).length;
    }
  }, {
    key: 'renderVerses',
    value: function renderVerses() {
      var _props = this.props,
          chapter = _props.chapter,
          verses = _props.verses,
          options = _props.options,
          isPlaying = _props.isPlaying,
          isAuthenticated = _props.isAuthenticated,
          currentVerse = _props.currentVerse; // eslint-disable-line no-shadow

      return (0, _values2.default)(verses).map(function (verse) {
        return (0, _jsx3.default)(_Verse2.default, {
          verse: verse,
          chapter: chapter,
          currentVerse: currentVerse,
          iscurrentVerse: isPlaying && verse.verseKey === currentVerse,
          tooltip: options.tooltip,
          isPlaying: isPlaying,
          isAuthenticated: isAuthenticated,
          userAgent: options.userAgent,
          audio: options.audio,
          isPdf: true
        }, verse.chapterId + '-' + verse.id + '-verse');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          chapter = _props2.chapter,
          options = _props2.options; // eslint-disable-line no-shadow

      (0, _debug2.default)('component:Surah', 'Render');

      if (!this.hasVerses()) {
        return (0, _jsx3.default)('div', {
          className: style.container,
          style: { margin: '50px auto' }
        }, void 0, this.renderNoAyah());
      }

      return (0, _jsx3.default)('div', {
        className: 'chapter-body'
      }, void 0, (0, _jsx3.default)(_reactHelmet2.default, {
        style: [{
          cssText: '.text-arabic{font-size: ' + options.fontSize.arabic + 'rem;} .text-translation{font-size: ' + options.fontSize.translation + 'rem;}' // eslint-disable-line max-len
        }]
      }), (0, _jsx3.default)('div', {
        className: 'container-fluid ' + style.container
      }, void 0, (0, _jsx3.default)('div', {
        className: 'row'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'col-md-10 col-md-offset-1'
      }, void 0, (0, _jsx3.default)(_Bismillah2.default, {
        chapter: chapter
      }), options.isReadingMode ? this.renderLines() : this.renderVerses()))));
    }
  }]);
  return Pdf;
}(_react.Component);

Pdf.propTypes = {
  chapter: customPropTypes.surahType.isRequired,
  lines: _react.PropTypes.object.isRequired, // eslint-disable-line
  currentVerse: _react.PropTypes.string,
  isAuthenticated: _react.PropTypes.bool.isRequired,
  options: _react.PropTypes.object.isRequired, // eslint-disable-line
  verses: customPropTypes.verses,
  isPlaying: _react.PropTypes.bool
};

var AsyncPdf = (0, _reduxConnect.asyncConnect)([{ promise: _connect.chaptersConnect }, { promise: _connect.versesConnect }])(Pdf);

function mapStateToProps(state, ownProps) {
  var chapterId = parseInt(ownProps.params.chapterId, 10);
  var chapter = state.chapters.entities[chapterId];
  var verses = state.verses.entities[chapterId];
  var verseArray = verses ? (0, _keys2.default)(verses).map(function (key) {
    return parseInt(key.split(':')[1], 10);
  }) : [];
  var verseIds = new _set2.default(verseArray);
  var lastAyahInArray = verseArray.slice(-1)[0];
  var isSingleAyah = !!ownProps.params.range && !ownProps.params.range.includes('-');
  var currentVerse = state.audioplayer.currentVerse || (0, _keys2.default)(verses)[0];

  return {
    chapter: chapter,
    verses: verses,
    verseIds: verseIds,
    isSingleAyah: isSingleAyah,
    currentVerse: currentVerse,
    info: state.chapters.infos[ownProps.params.chapterId],
    isStarted: state.audioplayer.isStarted,
    isPlaying: state.audioplayer.isPlaying,
    isAuthenticated: state.auth.loaded,
    currentWord: state.verses.currentWord,
    isEndOfSurah: lastAyahInArray === chapter.versesCount,
    chapters: state.chapters.entities,
    isLoading: state.verses.loading,
    isLoaded: state.verses.loaded,
    lines: state.lines.lines,
    options: state.options
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(AsyncPdf);