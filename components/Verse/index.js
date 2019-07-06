'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

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

var _Element = require('react-scroll/lib/components/Element');

var _Element2 = _interopRequireDefault(_Element);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _ComponentLoader = require('components/ComponentLoader');

var _ComponentLoader2 = _interopRequireDefault(_ComponentLoader);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

var _Word = require('components/Word');

var _Word2 = _interopRequireDefault(_Word);

var _Translation = require('components/Translation');

var _Translation2 = _interopRequireDefault(_Translation);

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('./style.scss');

var Copy = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve(require(('components/Copy')));
  },
  LoadingComponent: _ComponentLoader2.default
});

var Share = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve(require(('components/Share')));
  },
  LoadingComponent: _ComponentLoader2.default
});

var Verse = function (_Component) {
  (0, _inherits3.default)(Verse, _Component);

  function Verse() {
    (0, _classCallCheck3.default)(this, Verse);
    return (0, _possibleConstructorReturn3.default)(this, (Verse.__proto__ || (0, _getPrototypeOf2.default)(Verse)).apply(this, arguments));
  }

  (0, _createClass3.default)(Verse, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var conditions = [this.props.verse !== nextProps.verse, this.props.bookmarked !== nextProps.bookmarked, this.props.tooltip !== nextProps.tooltip, this.props.currentWord !== nextProps.currentWord, this.props.iscurrentVerse !== nextProps.iscurrentVerse];

      if (this.props.match) {
        conditions.push(this.props.match.length !== nextProps.match.length);
      }

      return conditions.some(function (condition) {
        return condition;
      });
    }
  }, {
    key: 'handlePlay',
    value: function handlePlay(verse) {
      var _props = this.props,
          isPlaying = _props.isPlaying,
          audioActions = _props.audioActions,
          iscurrentVerse = _props.iscurrentVerse;
      var pause = audioActions.pause,
          setAyah = audioActions.setAyah,
          play = audioActions.play;


      if (isPlaying) {
        pause();
      }

      if (iscurrentVerse) {
        return;
      }

      setAyah(verse.verseKey);
      play();
    }
  }, {
    key: 'renderTranslations',
    value: function renderTranslations() {
      var _props2 = this.props,
          verse = _props2.verse,
          match = _props2.match;

      var array = match || verse.translations || [];

      return array.map(function (translation) {
        return (0, _jsx3.default)(_Translation2.default, {
          translation: translation,
          index: translation.id
        }, translation.id);
      });
    }
  }, {
    key: 'renderMedia',
    value: function renderMedia() {
      var _props3 = this.props,
          verse = _props3.verse,
          mediaActions = _props3.mediaActions,
          isSearched = _props3.isSearched,
          isPdf = _props3.isPdf;


      if (isSearched || !verse.mediaContents) return false;
      if (isPdf) return false;

      return (0, _jsx3.default)('div', {}, void 0, verse.mediaContents.map(function (content, index) {
        return (0, _jsx3.default)('div', {
          className: styles.translation + ' translation'
        }, index, (0, _jsx3.default)('h2', {
          className: 'text-translation times-new'
        }, void 0, (0, _jsx3.default)('small', {}, void 0, (0, _jsx3.default)('a', {
          tabIndex: '-1',
          className: 'pointer',
          onClick: function onClick() {
            return mediaActions.setMedia(content);
          },
          'data-metrics-event-name': 'Media Click',
          'data-metrics-media-content-url': content.url,
          'data-metrics-media-content-id': content.id,
          'data-metrics-media-content-verse-key': verse.verseKey
        }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'verse.media.lectureFrom',
          defaultMessage: 'Watch lecture by {from}',
          values: { from: content.authorName }
        })))));
      }));
    }
  }, {
    key: 'renderText',
    value: function renderText() {
      var _props4 = this.props,
          verse = _props4.verse,
          tooltip = _props4.tooltip,
          currentVerse = _props4.currentVerse,
          isPlaying = _props4.isPlaying,
          audioActions = _props4.audioActions,
          isSearched = _props4.isSearched; // eslint-disable-line max-len
      // NOTE: Some 'word's are glyphs (jeem). Not words and should not be clicked for audio

      var wordAudioPosition = -1;
      var renderText = false; // userAgent.isBot;

      var text = verse.words.map(function (word) {
        return (// eslint-disable-line
          (0, _jsx3.default)(_Word2.default, {
            word: word,
            currentVerse: currentVerse,
            tooltip: tooltip,
            isPlaying: isPlaying,
            audioActions: audioActions,
            audioPosition: word.charType === 'word' ? wordAudioPosition += 1 : null,
            isSearched: isSearched,
            useTextFont: renderText
          }, word.position + '-' + word.code + '-' + word.lineNum)
        );
      });

      return (0, _jsx3.default)('h1', {
        className: styles.font + ' text-right text-arabic'
      }, void 0, (0, _jsx3.default)('p', {}, void 0, text));
    }
  }, {
    key: 'renderPlayLink',
    value: function renderPlayLink() {
      var _this2 = this;

      var _props5 = this.props,
          isSearched = _props5.isSearched,
          verse = _props5.verse,
          currentVerse = _props5.currentVerse,
          isPlaying = _props5.isPlaying,
          isPdf = _props5.isPdf;

      var playing = verse.verseKey === currentVerse && isPlaying;

      if (isPdf) return false;

      if (!isSearched) {
        return (0, _jsx3.default)('a', {
          tabIndex: '-1',
          onClick: function onClick() {
            return _this2.handlePlay(verse);
          },
          className: 'text-muted'
        }, void 0, (0, _jsx3.default)('i', {
          className: 'ss-icon ' + (playing ? 'ss-pause' : 'ss-play') + ' vertical-align-middle'
        }), ' ', (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: playing ? 'actions.pause' : 'actions.play',
          defaultMessage: playing ? 'Pause' : 'Play'
        }));
      }

      return false;
    }
  }, {
    key: 'renderCopyLink',
    value: function renderCopyLink() {
      var _props6 = this.props,
          isSearched = _props6.isSearched,
          verse = _props6.verse,
          isPdf = _props6.isPdf;


      if (isPdf) return false;

      if (!isSearched) {
        return (0, _jsx3.default)(Copy, {
          text: verse.textMadani,
          verseKey: verse.verseKey
        });
      }

      return false;
    }
  }, {
    key: 'renderBookmark',
    value: function renderBookmark() {
      var _props7 = this.props,
          verse = _props7.verse,
          bookmarked = _props7.bookmarked,
          isAuthenticated = _props7.isAuthenticated,
          bookmarkActions = _props7.bookmarkActions,
          isSearched = _props7.isSearched;


      if (isSearched || !isAuthenticated) return false;

      if (bookmarked) {
        return (0, _jsx3.default)('a', {
          tabIndex: '-1',
          onClick: function onClick() {
            return bookmarkActions.removeBookmark(verse.verseKey);
          },
          className: 'text-muted'
        }, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _jsx3.default)('i', {
          className: 'ss-icon ss-bookmark vertical-align-middle'
        }), ' ', (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'verse.bookmarked',
          defaultMessage: 'Bookmarked'
        })));
      }

      return (0, _jsx3.default)('a', {
        tabIndex: '-1',
        onClick: function onClick() {
          return bookmarkActions.addBookmark(verse.verseKey);
        },
        className: 'text-muted'
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-bookmark vertical-align-middle'
      }), ' ', (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'verse.bookmark',
        defaultMessage: 'Bookmark'
      }));
    }
  }, {
    key: 'renderBadge',
    value: function renderBadge() {
      var _props8 = this.props,
          isSearched = _props8.isSearched,
          verse = _props8.verse;

      var translations = (verse.translations || []).map(function (translation) {
        return translation.resourceId;
      }).join(',');
      var metric = void 0;

      var content = (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)('span', {
        className: 'label label-default ' + styles.label
      }, void 0, verse.verseKey));

      if (isSearched) {
        metric = 'Verse:Searched:Link';
      } else {
        metric = 'Verse:Link';
      }

      return (0, _jsx3.default)(_Link2.default, {
        to: '/' + verse.chapterId + '/' + verse.verseNumber + '?translations=' + translations,
        'data-metrics-event-name': metric
      }, void 0, content);
    }
  }, {
    key: 'renderShare',
    value: function renderShare() {
      var _props9 = this.props,
          isSearched = _props9.isSearched,
          verse = _props9.verse,
          chapter = _props9.chapter;


      if (isSearched) return false;

      return (0, _jsx3.default)(Share, {
        chapter: chapter,
        verse: verse
      });
    }
  }, {
    key: 'renderControls',
    value: function renderControls() {
      var isPdf = this.props.isPdf;


      return (0, _jsx3.default)('div', {
        className: 'col-md-1 col-sm-1 ' + styles.controls
      }, void 0, this.renderBadge(), this.renderPlayLink(), this.renderCopyLink(), this.renderBookmark(), !isPdf && this.renderShare());
    }
  }, {
    key: 'render',
    value: function render() {
      var _props10 = this.props,
          verse = _props10.verse,
          iscurrentVerse = _props10.iscurrentVerse;

      (0, _debug2.default)('component:Verse', 'Render ' + verse.verseKey);

      return (0, _jsx3.default)(_Element2.default, {
        name: 'verse:' + verse.verseKey,
        className: 'row ' + (iscurrentVerse && 'highlight') + ' ' + styles.container
      }, void 0, this.renderControls(), (0, _jsx3.default)('div', {
        className: 'col-md-11 col-sm-11'
      }, void 0, this.renderText(), this.renderTranslations(), this.renderMedia()));
    }
  }]);
  return Verse;
}(_react.Component);

Verse.propTypes = {
  isSearched: _react.PropTypes.bool,
  verse: customPropTypes.verseType.isRequired,
  chapter: customPropTypes.surahType.isRequired,
  bookmarked: _react.PropTypes.bool, // TODO: Add this for search
  bookmarkActions: customPropTypes.bookmarkActions,
  mediaActions: customPropTypes.mediaActions,
  audioActions: customPropTypes.audioActions,
  match: customPropTypes.match,
  isPlaying: _react.PropTypes.bool,
  isAuthenticated: _react.PropTypes.bool,
  tooltip: _react.PropTypes.string,
  currentWord: _react.PropTypes.number, // gets passed in an integer, null by default
  iscurrentVerse: _react.PropTypes.bool,
  currentVerse: _react.PropTypes.string,
  userAgent: _react.PropTypes.object, // eslint-disable-line
  isPdf: _react.PropTypes.bool
};

Verse.defaultProps = {
  currentWord: null,
  isSearched: false,
  isPdf: false
};

exports.default = Verse;