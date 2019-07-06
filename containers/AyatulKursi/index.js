'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

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

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

var _Link = require('react-router/lib/Link');

var _Link2 = _interopRequireDefault(_Link);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxConnect = require('redux-connect');

var _reactRouterRedux = require('react-router-redux');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Verse = require('components/Verse');

var _Verse2 = _interopRequireDefault(_Verse);

var _ComponentLoader = require('components/ComponentLoader');

var _ComponentLoader2 = _interopRequireDefault(_ComponentLoader);

var _Bismillah = require('components/Bismillah');

var _Bismillah2 = _interopRequireDefault(_Bismillah);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

var _makeHeadTags = require('helpers/makeHeadTags');

var _makeHeadTags2 = _interopRequireDefault(_makeHeadTags);

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

var _audioplayer = require('redux/actions/audioplayer.js');

var AudioActions = _interopRequireWildcard(_audioplayer);

var _verses = require('redux/actions/verses.js');

var AyahActions = _interopRequireWildcard(_verses);

var _bookmarks = require('redux/actions/bookmarks.js');

var BookmarkActions = _interopRequireWildcard(_bookmarks);

var _options = require('redux/actions/options.js');

var OptionsActions = _interopRequireWildcard(_options);

var _media = require('redux/actions/media.js');

var MediaActions = _interopRequireWildcard(_media);

var _connect = require('containers/Surah/connect');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Helpers


// components

// redux
var style = require('../Surah/style.scss'); /* global window, document */


var PageView = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve(require(( /* webpackChunkName: "pageview" */'components/PageView')));
  },
  LoadingComponent: _ComponentLoader2.default
});

var Audioplayer = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve(require(( /* webpackChunkName: "audioplayer" */'components/Audioplayer')));
  },
  LoadingComponent: _ComponentLoader2.default
});

var TopOptions = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve(require(( /* webpackChunkName: "topoptions" */'components/TopOptions')));
  },
  LoadingComponent: _ComponentLoader2.default
});

var title = 'Ayatul Kursi';

var description = 'Ayatul Kursi is verse 255 of the second chapter, surah Baqarah of the Holy Quran, Surah al-Baqarah (The Chapter of the Cow).  It is also known as the Throne Verse.';

var AyatulKursi = function (_Component) {
  (0, _inherits3.default)(AyatulKursi, _Component);

  function AyatulKursi() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AyatulKursi);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AyatulKursi.__proto__ || (0, _getPrototypeOf2.default)(AyatulKursi)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sidebarOpen: false
    }, _this.handleLazyLoadAyahs = function () {
      return false;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AyatulKursi, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var conditions = [this.state.sidebarOpen !== nextState.sidebarOpen, this.props.chapter !== nextProps.chapter, this.props.bookmarks !== nextProps.bookmarks, this.props.isLoading !== nextProps.isLoading, this.props.isLoaded !== nextProps.isLoaded, this.props.options !== nextProps.options, this.props.currentVerse !== nextProps.currentVerse, this.props.isPlaying !== nextProps.isPlaying];

      return conditions.some(function (condition) {
        return condition;
      });
    }
  }, {
    key: 'renderVerses',
    value: function renderVerses() {
      var _props = this.props,
          chapter = _props.chapter,
          verses = _props.verses,
          actions = _props.actions,
          options = _props.options,
          bookmarks = _props.bookmarks,
          isPlaying = _props.isPlaying,
          isAuthenticated = _props.isAuthenticated,
          currentVerse = _props.currentVerse; // eslint-disable-line no-shadow

      return (0, _values2.default)(verses).map(function (verse) {
        return (0, _jsx3.default)(_Verse2.default, {
          verse: verse,
          chapter: chapter,
          currentVerse: currentVerse,
          iscurrentVerse: isPlaying && verse.verseKey === currentVerse,
          bookmarked: !!bookmarks[verse.verseKey],
          tooltip: options.tooltip,
          bookmarkActions: actions.bookmark,
          audioActions: actions.audio,
          mediaActions: actions.media,
          isPlaying: isPlaying,
          isAuthenticated: isAuthenticated,
          userAgent: options.userAgent,
          audio: options.audio
        }, verse.chapterId + '-' + verse.id + '-verse');
      });
    }
  }, {
    key: 'renderLines',
    value: function renderLines() {
      var _props2 = this.props,
          lines = _props2.lines,
          options = _props2.options,
          currentVerse = _props2.currentVerse,
          isPlaying = _props2.isPlaying,
          actions = _props2.actions;

      var keys = (0, _keys2.default)(lines);

      return (0, _jsx3.default)(PageView, {
        lines: lines,
        keys: keys,
        options: options,
        currentVerse: currentVerse,
        audioActions: actions.audio,
        isPlaying: isPlaying
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          chapter = _props3.chapter,
          verses = _props3.verses,
          options = _props3.options; // eslint-disable-line no-shadow

      (0, _debug2.default)('component:AyatulKursi', 'Render');

      return (0, _jsx3.default)('div', {
        className: 'chapter-body'
      }, void 0, _react2.default.createElement(_reactHelmet2.default, (0, _extends3.default)({}, (0, _makeHeadTags2.default)({
        title: title,
        description: description
      }), {
        script: [{
          type: 'application/ld+json',
          innerHTML: '{\n              "@context": "http://schema.org",\n              "@type": "BreadcrumbList",\n              "itemListElement": [{\n                "@type": "ListItem",\n                "position": 1,\n                "item": {\n                  "@id": "https://quran.com/",\n                  "name": "Quran"\n                }\n              },{\n                "@type": "ListItem",\n                "position": 2,\n                "item": {\n                  "@id": "https://quran.com/ayatul-kursi",\n                  "name": "Ayatul Kursi"\n                }\n              }]\n            }'
        }],
        style: [{
          cssText: '.text-arabic{font-size: ' + options.fontSize.arabic + 'rem;} .text-translation{font-size: ' + options.fontSize.translation + 'rem;}' // eslint-disable-line max-len
        }]
      })), (0, _jsx3.default)('div', {
        className: 'container-fluid ' + style.container
      }, void 0, (0, _jsx3.default)('div', {
        className: 'row'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'col-md-10 col-md-offset-1'
      }, void 0, __CLIENT__ && (0, _jsx3.default)(TopOptions, {
        title: 'Ayatul Kursi',
        chapter: chapter
      }), (0, _jsx3.default)(_Bismillah2.default, {
        chapter: chapter
      }), options.isReadingMode ? this.renderLines() : this.renderVerses()), (0, _jsx3.default)('div', {
        className: 'col-md-10 col-md-offset-1'
      }, void 0, (0, _jsx3.default)('ul', {
        className: 'pager'
      }, void 0, (0, _jsx3.default)('li', {
        className: 'text-center'
      }, void 0, (0, _jsx3.default)(_Link2.default, {
        to: '/2/255-265'
      }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'chapter.index.continue',
        defaultMessage: 'Continue'
      }))))))), __CLIENT__ && (0, _jsx3.default)(Audioplayer, {
        chapter: chapter,
        startVerse: (0, _values2.default)(verses)[0],
        onLoadAyahs: this.handleLazyLoadAyahs
      }));
    }
  }]);
  return AyatulKursi;
}(_react.Component);

AyatulKursi.propTypes = {
  chapter: customPropTypes.surahType.isRequired,
  actions: _react.PropTypes.object.isRequired, // eslint-disable-line
  lines: _react.PropTypes.object.isRequired, // eslint-disable-line
  currentVerse: _react.PropTypes.string,
  bookmarks: _react.PropTypes.object.isRequired, // eslint-disable-line
  isLoading: _react.PropTypes.bool.isRequired,
  isLoaded: _react.PropTypes.bool.isRequired,
  isAuthenticated: _react.PropTypes.bool.isRequired,
  options: _react.PropTypes.object.isRequired, // eslint-disable-line
  verses: customPropTypes.verses,
  isPlaying: _react.PropTypes.bool
};

var AsyncAyatulKursi = (0, _reduxConnect.asyncConnect)([{ promise: _connect.chaptersConnect }, {
  promise: function promise(_ref2) {
    var store = _ref2.store;
    return (0, _connect.versesConnect)({ store: store, params: { chapterId: '2', range: '255' } });
  }
}])(AyatulKursi);

function mapStateToProps(state) {
  var chapterId = 2;
  var chapter = state.chapters.entities[chapterId];
  var verses = state.verses.entities[chapterId];
  var currentVerse = state.audioplayer.currentVerse || (0, _keys2.default)(verses)[0];

  return {
    chapter: chapter,
    verses: verses,
    currentVerse: currentVerse,
    isStarted: state.audioplayer.isStarted,
    isPlaying: state.audioplayer.isPlaying,
    isAuthenticated: state.auth.loaded,
    currentWord: state.verses.currentWord,
    bookmarks: state.bookmarks.entities,
    isLoading: state.verses.loading,
    isLoaded: state.verses.loaded,
    lines: state.lines.lines,
    options: state.options
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      options: (0, _redux.bindActionCreators)(OptionsActions, dispatch),
      verse: (0, _redux.bindActionCreators)(AyahActions, dispatch),
      audio: (0, _redux.bindActionCreators)(AudioActions, dispatch),
      bookmark: (0, _redux.bindActionCreators)(BookmarkActions, dispatch),
      media: (0, _redux.bindActionCreators)(MediaActions, dispatch),
      push: (0, _redux.bindActionCreators)(_reactRouterRedux.push, dispatch)
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AsyncAyatulKursi);