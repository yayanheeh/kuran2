'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _Loader = require('quran-components/lib/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _LazyLoad = require('components/LazyLoad');

var _LazyLoad2 = _interopRequireDefault(_LazyLoad);

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

var _connect = require('./connect');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Helpers


// components

// redux
var LoaderStyle = { width: '10em', height: '10em' }; /* global window, document */


var style = require('./style.scss');

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
var SurahInfo = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve(require(( /* webpackChunkName: "surahinfo" */'components/SurahInfo')));
  },
  LoadingComponent: _ComponentLoader2.default
});
var TopOptions = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve(require(( /* webpackChunkName: "topoptions" */'components/TopOptions')));
  },
  LoadingComponent: _ComponentLoader2.default
});

var Surah = function (_Component) {
  (0, _inherits3.default)(Surah, _Component);

  function Surah() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Surah);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Surah.__proto__ || (0, _getPrototypeOf2.default)(Surah)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      lazyLoading: false,
      sidebarOpen: false
    }, _this.handleLazyLoadAyahs = function (callback) {
      var _this$props = _this.props,
          verseIds = _this$props.verseIds,
          chapter = _this$props.chapter,
          isEndOfSurah = _this$props.isEndOfSurah,
          options = _this$props.options,
          actions = _this$props.actions; // eslint-disable-line no-shadow, max-len

      var range = [_this.getFirst(), _this.getLast()];

      var size = 10;
      var from = range[1];
      var to = from + size;
      var paging = { offset: from, limit: to - from };

      if (!isEndOfSurah && !verseIds.has(to)) {
        actions.verse.load(chapter.chapterNumber, paging, options).then(function () {
          _this.setState({ lazyLoading: false });
          return callback && callback();
        });
      }

      return false;
    }, _this.handleSurahInfoToggle = function (payload) {
      var actions = _this.props.actions; // eslint-disable-line no-shadow

      return actions.options.setOption(payload);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Surah, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          params = _props.params,
          chapter = _props.chapter,
          actions = _props.actions; // eslint-disable-line no-shadow

      if (params.range && params.range.includes('-')) {
        var start = parseInt(params.range.split('-')[0], 10);

        if (start > chapter.versesCount || isNaN(start)) {
          return actions.push.push('/error/invalid-verse-range');
        }

        return false;
      }

      return false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props2 = this.props,
          verses = _props2.verses,
          audio = _props2.options.audio;


      (0, _values2.default)(verses).forEach(function (verse) {
        _this2.props.actions.audio.load({
          chapterId: verse.chapterId,
          verseId: verse.id,
          verseKey: verse.verseKey,
          audio: audio
        });
      });
    }

    // TODO: Should this belong here?

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      if (this.props.options.audio !== nextProps.options.audio) {
        var verses = nextProps.verses,
            audio = nextProps.options.audio;


        (0, _values2.default)(verses).forEach(function (verse) {
          _this3.props.actions.audio.load({
            chapterId: verse.chapterId,
            verseId: verse.id,
            verseKey: verse.verseKey,
            audio: audio
          });
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var conditions = [this.state.lazyLoading !== nextState.lazyLoading, this.state.sidebarOpen !== nextState.sidebarOpen, this.props.chapter !== nextProps.chapter, this.props.isEndOfSurah !== nextProps.isEndOfSurah, this.props.verseIds.length !== nextProps.verseIds.length, this.props.chapters !== nextProps.chapters, this.props.bookmarks !== nextProps.bookmarks, this.props.isLoading !== nextProps.isLoading, this.props.isLoaded !== nextProps.isLoaded, this.props.options !== nextProps.options, this.props.currentVerse !== nextProps.currentVerse, this.props.isPlaying !== nextProps.isPlaying];

      return conditions.some(function (condition) {
        return condition;
      });
    }
  }, {
    key: 'getLast',
    value: function getLast() {
      var verseIds = this.props.verseIds;


      return [].concat((0, _toConsumableArray3.default)(verseIds))[[].concat((0, _toConsumableArray3.default)(verseIds)).length - 1];
    }
  }, {
    key: 'getFirst',
    value: function getFirst() {
      var verseIds = this.props.verseIds;


      return [].concat((0, _toConsumableArray3.default)(verseIds))[0];
    }
  }, {
    key: 'hasVerses',
    value: function hasVerses() {
      return (0, _keys2.default)(this.props.verses).length;
    }
  }, {
    key: 'title',
    value: function title() {
      var _props3 = this.props,
          params = _props3.params,
          chapter = _props3.chapter;


      if (params.range) {
        return 'Surah ' + chapter.nameSimple + ' [' + chapter.chapterNumber + ':' + params.range + ']';
      }

      return 'Surah ' + chapter.nameSimple + ' [' + chapter.chapterNumber + ']';
    }
  }, {
    key: 'description',
    value: function description() {
      var _props4 = this.props,
          params = _props4.params,
          verses = _props4.verses,
          chapter = _props4.chapter,
          info = _props4.info;


      if (params.range) {
        if (params.range.includes('-')) {
          var _params$range$split$m = params.range.split('-').map(function (num) {
            return parseInt(num, 10);
          }),
              _params$range$split$m2 = (0, _slicedToArray3.default)(_params$range$split$m, 2),
              from = _params$range$split$m2[0],
              to = _params$range$split$m2[1];

          var array = Array(to - from).fill(from);
          var translations = array.map(function (fromAyah, index) {
            var verse = verses[chapter.chapterNumber + ':' + (fromAyah + index)];

            if (verse && verse.content && verse.content[0]) {
              return verse.content[0].text;
            }

            return '';
          });

          var content = translations.join(' - ').slice(0, 250);

          return 'Surat ' + chapter.nameSimple + ' [verse ' + params.range + '] - ' + content;
        }

        var verse = verses[chapter.chapterNumber + ':' + params.range];

        if (verse && verse.content && verse.content[0]) {
          return 'Surat ' + chapter.nameSimple + ' [verse ' + params.range + '] - ' + verse.content[0].text;
        }

        return 'Surat ' + chapter.nameSimple + ' [verse ' + params.range + ']';
      }

      return (info ? info.shortText : '') + ' This Surah has ' + chapter.versesCount + ' verses and resides between pages ' + chapter.pages[0] + ' to ' + chapter.pages[1] + ' in the Quran.'; // eslint-disable-line max-len
    }
  }, {
    key: 'renderNoAyah',
    value: function renderNoAyah() {
      var isLoading = this.props.isLoading;


      var noAyah = (0, _jsx3.default)('div', {
        className: 'text-center'
      }, void 0, (0, _jsx3.default)('h2', {}, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'ayah.notFound',
        defaultMessage: 'Ayah not found.'
      })));

      return isLoading ? (0, _jsx3.default)(_Loader2.default, {
        isActive: true,
        style: LoaderStyle
      }) : noAyah;
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      var _props5 = this.props,
          isSingleAyah = _props5.isSingleAyah,
          isLoading = _props5.isLoading,
          isEndOfSurah = _props5.isEndOfSurah,
          chapter = _props5.chapter,
          options = _props5.options;

      var translations = (options.translations || []).join(',');

      // If single verse, eh. /2/30
      if (isSingleAyah) {
        var to = this.getFirst() + 10 > chapter.versesCount ? chapter.versesCount : this.getFirst() + 10;

        return (0, _jsx3.default)('ul', {
          className: 'pager'
        }, void 0, (0, _jsx3.default)('li', {
          className: 'text-center'
        }, void 0, (0, _jsx3.default)(_Link2.default, {
          to: '/' + chapter.chapterNumber + '/' + this.getFirst() + '-' + to + '?translations=' + translations
        }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'chapter.index.continue',
          defaultMessage: 'Continue'
        }))));
      }

      return (0, _jsx3.default)(_LazyLoad2.default, {
        onLazyLoad: this.handleLazyLoadAyahs,
        isEnd: isEndOfSurah && !isLoading,
        isLoading: isLoading,
        endComponent: (0, _jsx3.default)('ul', {
          className: 'pager'
        }, void 0, chapter.chapterNumber > 1 && (0, _jsx3.default)('li', {
          className: 'previous'
        }, void 0, (0, _jsx3.default)(_Link2.default, {
          to: '/' + (chapter.chapterNumber * 1 - 1) + '?translations=' + translations
        }, void 0, '\u2190', (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'chapter.previous',
          defaultMessage: 'Previous Surah'
        }))), (0, _jsx3.default)('li', {
          className: 'text-center'
        }, void 0, (0, _jsx3.default)(_Link2.default, {
          to: '/' + chapter.chapterNumber + '?translations=' + translations
        }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'chapter.goToBeginning',
          defaultMessage: 'Beginning of Surah'
        }))), chapter.chapterNumber < 114 && (0, _jsx3.default)('li', {
          className: 'next'
        }, void 0, (0, _jsx3.default)(_Link2.default, {
          to: '/' + (chapter.chapterNumber * 1 + 1) + '?translations=' + translations
        }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'chapter.next',
          defaultMessage: 'Next Surah'
        }), '\u2192'))),
        loadingComponent: (0, _jsx3.default)(_Loader2.default, {
          isActive: isLoading,
          style: LoaderStyle
        })
      });
    }
  }, {
    key: 'renderVerses',
    value: function renderVerses() {
      var _props6 = this.props,
          chapter = _props6.chapter,
          verses = _props6.verses,
          actions = _props6.actions,
          options = _props6.options,
          bookmarks = _props6.bookmarks,
          isPlaying = _props6.isPlaying,
          isAuthenticated = _props6.isAuthenticated,
          currentVerse = _props6.currentVerse; // eslint-disable-line no-shadow

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
      var _props7 = this.props,
          lines = _props7.lines,
          options = _props7.options,
          currentVerse = _props7.currentVerse,
          isPlaying = _props7.isPlaying,
          actions = _props7.actions;

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
      var _props8 = this.props,
          chapter = _props8.chapter,
          verses = _props8.verses,
          options = _props8.options,
          info = _props8.info,
          actions = _props8.actions; // eslint-disable-line no-shadow

      (0, _debug2.default)('component:Surah', 'Render');

      if (!this.hasVerses()) {
        return (0, _jsx3.default)('div', {
          className: style.container,
          style: { margin: '50px auto' }
        }, void 0, this.renderNoAyah());
      }

      return (0, _jsx3.default)('div', {
        className: 'chapter-body'
      }, void 0, _react2.default.createElement(_reactHelmet2.default, (0, _extends3.default)({}, (0, _makeHeadTags2.default)({
        title: this.title(),
        description: this.description()
      }), {
        script: [{
          type: 'application/ld+json',
          innerHTML: '{\n              "@context": "http://schema.org",\n              "@type": "BreadcrumbList",\n              "itemListElement": [{\n                "@type": "ListItem",\n                "position": 1,\n                "item": {\n                  "@id": "https://quran.com/",\n                  "name": "Quran"\n                }\n              },{\n                "@type": "ListItem",\n                "position": 2,\n                "item": {\n                  "@id": "https://quran.com/' + chapter.chapterNumber + '",\n                  "name": "' + chapter.nameSimple + '"\n                }\n              }]\n            }'
        }],
        style: [{
          cssText: '.text-arabic{font-size: ' + options.fontSize.arabic + 'rem;} .text-translation{font-size: ' + options.fontSize.translation + 'rem;}' // eslint-disable-line max-len
        }]
      })), (0, _jsx3.default)('div', {
        className: 'container-fluid ' + style.container
      }, void 0, (0, _jsx3.default)('div', {
        className: 'row'
      }, void 0, (0, _jsx3.default)(SurahInfo, {
        chapter: chapter,
        info: info,
        loadInfo: actions.loadInfo,
        isShowingSurahInfo: options.isShowingSurahInfo,
        onClose: this.handleSurahInfoToggle
      }), (0, _jsx3.default)('div', {
        className: 'col-md-10 col-md-offset-1'
      }, void 0, __CLIENT__ && (0, _jsx3.default)(TopOptions, {
        chapter: chapter
      }), (0, _jsx3.default)(_Bismillah2.default, {
        chapter: chapter
      }), options.isReadingMode ? this.renderLines() : this.renderVerses()), (0, _jsx3.default)('div', {
        className: 'col-md-10 col-md-offset-1'
      }, void 0, this.renderPagination()))), __CLIENT__ && (0, _jsx3.default)(Audioplayer, {
        chapter: chapter,
        startVerse: (0, _values2.default)(verses)[0],
        onLoadAyahs: this.handleLazyLoadAyahs
      }));
    }
  }]);
  return Surah;
}(_react.Component);

Surah.propTypes = {
  chapter: customPropTypes.surahType.isRequired,
  chapters: customPropTypes.chapters.isRequired,
  actions: _react.PropTypes.object.isRequired, // eslint-disable-line
  lines: _react.PropTypes.object.isRequired, // eslint-disable-line
  isEndOfSurah: _react.PropTypes.bool.isRequired,
  verseIds: _react.PropTypes.instanceOf(_set2.default),
  currentVerse: _react.PropTypes.string,
  info: customPropTypes.infoType,
  bookmarks: _react.PropTypes.object.isRequired, // eslint-disable-line
  isLoading: _react.PropTypes.bool.isRequired,
  isLoaded: _react.PropTypes.bool.isRequired,
  isSingleAyah: _react.PropTypes.bool.isRequired,
  isAuthenticated: _react.PropTypes.bool.isRequired,
  options: _react.PropTypes.object.isRequired, // eslint-disable-line
  params: _react.PropTypes.shape({
    chapterId: _react.PropTypes.string.isRequired
  }).isRequired,
  verses: customPropTypes.verses,
  isPlaying: _react.PropTypes.bool
};

var AsyncSurah = (0, _reduxConnect.asyncConnect)([{ promise: _connect.chaptersConnect }, { promise: _connect.chapterInfoConnect }, { promise: _connect.versesConnect }])(Surah);

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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AsyncSurah);