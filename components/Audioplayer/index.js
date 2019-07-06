'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Audioplayer = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _reactRedux = require('react-redux');

var _humps = require('humps');

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

var _scroller = require('utils/scroller');

var _scroller2 = _interopRequireDefault(_scroller);

var _audioplayer = require('redux/actions/audioplayer');

var AudioActions = _interopRequireWildcard(_audioplayer);

var _ComponentLoader = require('components/ComponentLoader');

var _ComponentLoader2 = _interopRequireDefault(_ComponentLoader);

var _Track = require('./Track');

var _Track2 = _interopRequireDefault(_Track);

var _Segments = require('./Segments');

var _Segments2 = _interopRequireDefault(_Segments);

var _ScrollButton = require('./ScrollButton');

var _ScrollButton2 = _interopRequireDefault(_ScrollButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = require('./style.scss');

// Redux


// Helpers
/* global document */
// TODO: This file is too too large.


var RepeatDropdown = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve(require(( /* webpackChunkName: "repeatdropdown" */'./RepeatDropdown')));
  },
  LoadingComponent: _ComponentLoader2.default
});

var Audioplayer = exports.Audioplayer = function (_Component) {
  (0, _inherits3.default)(Audioplayer, _Component);

  function Audioplayer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Audioplayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Audioplayer.__proto__ || (0, _getPrototypeOf2.default)(Audioplayer)).call.apply(_ref, [this].concat(args))), _this), _this.handleAyahChange = function () {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'next';
      var _this$props = _this.props,
          isPlaying = _this$props.isPlaying,
          play = _this$props.play,
          pause = _this$props.pause,
          currentVerse = _this$props.currentVerse; // eslint-disable-line no-shadow, max-len

      var previouslyPlaying = isPlaying;

      if (isPlaying) pause();

      var nextVerse = _this[(0, _humps.camelize)('get_' + direction)]();
      if (!nextVerse) return pause();

      _this.props[direction](currentVerse);

      _this.handleScrollTo(nextVerse);

      _this.preloadNext();

      if (previouslyPlaying) play();

      return false;
    }, _this.scrollToVerse = function () {
      var ayahNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.currentVerse;

      _scroller2.default.scrollTo('verse:' + ayahNum, -45);
    }, _this.handleScrollTo = function (ayahNum) {
      var shouldScroll = _this.props.shouldScroll;


      if (shouldScroll) {
        _this.scrollToVerse(ayahNum);
      }
    }, _this.play = function () {
      _this.handleScrollTo();

      _this.props.play();
      _this.preloadNext();
    }, _this.handleRepeat = function (file) {
      var _this$props2 = _this.props,
          repeat = _this$props2.repeat,
          currentVerse = _this$props2.currentVerse,
          setRepeat = _this$props2.setRepeat,
          setAyah = _this$props2.setAyah;

      var _currentVerse$split$m = currentVerse.split(':').map(function (val) {
        return parseInt(val, 10);
      }),
          _currentVerse$split$m2 = (0, _slicedToArray3.default)(_currentVerse$split$m, 2),
          chapter = _currentVerse$split$m2[0],
          ayah = _currentVerse$split$m2[1];

      file.pause();

      if (repeat.from > ayah && repeat.to < ayah) {
        // user selected a range where current ayah is outside
        return _this.handleAyahChange();
      }

      if (repeat.from === repeat.to) {
        // user selected single ayah repeat
        if (ayah !== repeat.from) return _this.handleAyahChange();

        if (repeat.times === 1) {
          // end of times
          setRepeat({});

          return _this.handleAyahChange();
        }

        setRepeat((0, _extends3.default)({}, repeat, { times: repeat.times - 1 }));
        file.currentTime = 0; // eslint-disable-line no-param-reassign

        return file.play();
      }

      if (repeat.from !== repeat.to) {
        // user selected a range
        if (ayah < repeat.to) {
          // still in range
          return _this.handleAyahChange();
        }

        if (ayah === repeat.to) {
          // end of range
          if (repeat.times === 1) {
            // end of times
            setRepeat({});

            return _this.handleAyahChange();
          }

          setRepeat((0, _extends3.default)({}, repeat, { times: repeat.times - 1 }));
          setAyah(chapter + ':' + repeat.from);

          return _this.play();
        }
      }

      return false;
    }, _this.handleScrollToggle = function (event) {
      event.preventDefault();

      var _this$props3 = _this.props,
          shouldScroll = _this$props3.shouldScroll,
          currentVerse = _this$props3.currentVerse;


      if (!shouldScroll) {
        // we use the inverse (!) here because we're toggling, so false is true
        _this.scrollToVerse(currentVerse);
      }

      _this.props.toggleScroll();
    }, _this.handleRemoveFileListeners = function (file) {
      file.pause();
      file.currentTime = 0; // eslint-disable-line no-param-reassign
      file.onloadeddata = null; // eslint-disable-line no-param-reassign
      file.ontimeupdate = null; // eslint-disable-line no-param-reassign
      file.onplay = null; // eslint-disable-line no-param-reassign
      file.onPause = null; // eslint-disable-line no-param-reassign
      file.onended = null; // eslint-disable-line no-param-reassign
      file.onprogress = null; // eslint-disable-line no-param-reassign
    }, _this.handleTrackChange = function (fraction) {
      var _this$props4 = _this.props,
          currentFile = _this$props4.currentFile,
          update = _this$props4.update; // eslint-disable-line no-shadow

      update({
        currentTime: fraction * currentFile.duration
      });

      currentFile.currentTime = fraction * currentFile.duration;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Audioplayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var currentFile = this.props.currentFile; // eslint-disable-line no-shadow, max-len

      (0, _debug2.default)('component:Audioplayer', 'componentDidMount');

      if (currentFile) {
        return this.handleAddFileListeners(currentFile);
      }

      console.error('Audioplayer mounted but no file available');

      return false;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // Make sure we have a current ayah to mount it to Audio
      if (!this.props.currentVerse && !nextProps.currentFile) {
        return false;
      }

      // First load
      if (this.props.currentFile !== nextProps.currentFile) {
        if (this.props.currentFile) {
          this.handleRemoveFileListeners(this.props.currentFile);
        }

        return this.handleAddFileListeners(nextProps.currentFile);
      }

      // Change verse
      if (this.props.currentVerse !== nextProps.currentVerse) {
        if (this.props.currentFile) {
          this.handleRemoveFileListeners(this.props.currentFile);
        }

        return this.handleAddFileListeners(nextProps.currentFile);
      }

      return false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _props = this.props,
          currentFile = _props.currentFile,
          isPlaying = _props.isPlaying;


      if (!currentFile) return false;

      if (isPlaying) {
        currentFile.play();
      } else {
        currentFile.pause();
      }

      return false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _props2 = this.props,
          files = _props2.files,
          currentFile = _props2.currentFile;

      (0, _debug2.default)('component:Audioplayer', 'componentWillUnmount');

      if (files[currentFile]) {
        return this.handleRemoveFileListeners(files[currentFile]);
      }

      return false;
    }
  }, {
    key: 'getPrevious',
    value: function getPrevious() {
      var _props3 = this.props,
          currentVerse = _props3.currentVerse,
          files = _props3.files;

      var ayahIds = (0, _keys2.default)(files);
      var index = ayahIds.findIndex(function (id) {
        return id === currentVerse;
      });

      return ayahIds[index - 1];
    }
  }, {
    key: 'getNext',
    value: function getNext() {
      var _props4 = this.props,
          currentVerse = _props4.currentVerse,
          chapter = _props4.chapter,
          files = _props4.files,
          onLoadAyahs = _props4.onLoadAyahs;

      var ayahIds = (0, _keys2.default)(files);
      var ayahNum = currentVerse.split(':')[1];
      var index = ayahIds.findIndex(function (id) {
        return id === currentVerse;
      });

      if (chapter.versesCount === ayahNum + 1) {
        // We are at the end of the chapter!
        return false;
      }

      if (ayahIds.length - 3 <= index + 1) {
        // Need to load the next set of ayahs!
        onLoadAyahs();
      }

      return ayahIds[index + 1];
    }
  }, {
    key: 'preloadNext',
    value: function preloadNext() {
      var _props5 = this.props,
          currentVerse = _props5.currentVerse,
          files = _props5.files;

      var ayahIds = (0, _keys2.default)(files);
      var index = ayahIds.findIndex(function (id) {
        return id === currentVerse;
      }) + 1;

      for (var id = index; id <= index + 2; id += 1) {
        if (ayahIds[id]) {
          var verseKey = ayahIds[id];

          if (files[verseKey]) {
            files[verseKey].setAttribute('preload', 'auto');
          }
        }
      }
    }
  }, {
    key: 'handleAddFileListeners',
    value: function handleAddFileListeners(file) {
      var _this2 = this;

      // NOTE: if no file, just wait.
      if (!file) return false;

      var _props6 = this.props,
          update = _props6.update,
          currentTime = _props6.currentTime; // eslint-disable-line no-shadow

      (0, _debug2.default)('component:Audioplayer', 'Attaching listeners to ' + file.src);

      // Preload file
      file.setAttribute('preload', 'auto');

      var onLoadeddata = function onLoadeddata() {
        // Default current time to zero. This will change
        file.currentTime = // eslint-disable-line no-param-reassign
        file.currentTime || currentTime || 0;

        return update({
          duration: file.duration,
          isLoading: false
        });
      };

      var onTimeupdate = function onTimeupdate() {
        return update({
          currentTime: file.currentTime,
          duration: file.duration
        });
      };

      var onEnded = function onEnded() {
        var repeat = _this2.props.repeat;


        if (repeat.from) {
          return _this2.handleRepeat(file);
        }

        if (file.readyState >= 3 && file.paused) {
          file.pause();
        }

        return _this2.handleAyahChange();
      };

      var onPlay = function onPlay() {
        file.ontimeupdate = onTimeupdate; // eslint-disable-line no-param-reassign
      };

      var onPause = function onPause() {
        file.ontimeupdate = null; // eslint-disable-line no-param-reassign
      };

      file.onloadeddata = onLoadeddata; // eslint-disable-line no-param-reassign
      file.onpause = onPause; // eslint-disable-line no-param-reassign
      file.onplay = onPlay; // eslint-disable-line no-param-reassign
      file.onended = onEnded; // eslint-disable-line no-param-reassign

      return file;
    }
  }, {
    key: 'renderPlayStopButtons',
    value: function renderPlayStopButtons() {
      var _props7 = this.props,
          isPlaying = _props7.isPlaying,
          pause = _props7.pause; // eslint-disable-line no-shadow

      return (0, _jsx3.default)('a', {
        tabIndex: '-1',
        className: 'pointer text-center ' + style.playingButton + ' ' + style.buttons,
        onClick: isPlaying ? pause : this.play
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ' + (isPlaying ? 'ss-pause' : 'ss-play')
      }));
    }
  }, {
    key: 'renderPreviousButton',
    value: function renderPreviousButton() {
      var _this3 = this;

      var _props8 = this.props,
          currentVerse = _props8.currentVerse,
          files = _props8.files;

      if (!files) return false;
      var index = (0, _keys2.default)(files).findIndex(function (id) {
        return id === currentVerse;
      });

      return (0, _jsx3.default)('a', {
        tabIndex: '-1',
        className: 'pointer ' + style.buttons + ' ' + (!index ? style.disabled : ''),
        onClick: function onClick() {
          return index && _this3.handleAyahChange('previous');
        }
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-skipback'
      }));
    }
  }, {
    key: 'renderNextButton',
    value: function renderNextButton() {
      var _this4 = this;

      var _props9 = this.props,
          chapter = _props9.chapter,
          currentVerse = _props9.currentVerse;

      if (!chapter) return false;
      var isEnd = chapter.versesCount === parseInt(currentVerse.split(':')[1], 10);

      return (0, _jsx3.default)('a', {
        tabIndex: '-1',
        className: 'pointer ' + style.buttons + ' ' + (isEnd ? style.disabled : ''),
        onClick: function onClick() {
          return !isEnd && _this4.handleAyahChange();
        }
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-skipforward'
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      (0, _debug2.default)('component:Audioplayer', 'render');

      var _props10 = this.props,
          className = _props10.className,
          segments = _props10.segments,
          isLoading = _props10.isLoading,
          currentVerse = _props10.currentVerse,
          currentFile = _props10.currentFile,
          currentTime = _props10.currentTime,
          duration = _props10.duration,
          chapter = _props10.chapter,
          isPlaying = _props10.isPlaying,
          repeat = _props10.repeat,
          shouldScroll = _props10.shouldScroll,
          setRepeat = _props10.setRepeat;


      if (isLoading || !currentFile) {
        return (0, _jsx3.default)('li', {
          className: style.container + ' ' + className
        }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'app.loading',
          defaultMessage: 'Loading...'
        })));
      }

      return (0, _jsx3.default)('div', {
        className: (isPlaying && style.isPlaying) + ' ' + style.container + ' ' + className
      }, void 0, (0, _jsx3.default)('div', {
        className: style.wrapper
      }, void 0, currentFile && (0, _jsx3.default)(_Track2.default, {
        progress: currentTime / duration * 100,
        onTrackChange: this.handleTrackChange
      }), segments && segments[currentVerse] && (0, _jsx3.default)(_Segments2.default, {
        segments: segments[currentVerse],
        currentVerse: currentVerse,
        currentTime: currentTime
      })), (0, _jsx3.default)('ul', {
        className: 'list-inline ' + style.controls
      }, void 0, (0, _jsx3.default)('li', {
        className: style.controlItem
      }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'player.currentVerse',
        defaultMessage: 'Ayah'
      }), ':', ' ', currentVerse.split(':')[1]), (0, _jsx3.default)('li', {
        className: style.controlItem
      }, void 0, this.renderPreviousButton()), (0, _jsx3.default)('li', {
        className: style.controlItem
      }, void 0, this.renderPlayStopButtons()), (0, _jsx3.default)('li', {
        className: style.controlItem
      }, void 0, this.renderNextButton()), (0, _jsx3.default)('li', {
        className: style.controlItem
      }, void 0, (0, _jsx3.default)(RepeatDropdown, {
        repeat: repeat,
        setRepeat: setRepeat,
        current: parseInt(currentVerse.split(':')[1], 10),
        chapter: chapter
      })), (0, _jsx3.default)('li', {
        className: style.controlItem
      }, void 0, (0, _jsx3.default)(_ScrollButton2.default, {
        shouldScroll: shouldScroll,
        onScrollToggle: this.handleScrollToggle
      }))));
    }
  }]);
  return Audioplayer;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var currentVerse = state.audioplayer.currentVerse || ownProps.startVerse.verseKey;
  var files = state.audioplayer.files[ownProps.chapter.id];

  return {
    files: files,
    currentVerse: currentVerse,
    segments: state.audioplayer.segments[ownProps.chapter.id],
    currentFile: files[currentVerse],
    chapterId: ownProps.chapter.id,
    isPlaying: state.audioplayer.isPlaying,
    isLoading: state.audioplayer.isLoading,
    repeat: state.audioplayer.repeat,
    shouldScroll: state.audioplayer.shouldScroll,
    duration: state.audioplayer.duration,
    currentTime: state.audioplayer.currentTime
  };
};

Audioplayer.propTypes = {
  className: _react.PropTypes.string,
  chapter: customPropTypes.surahType,
  onLoadAyahs: _react.PropTypes.func.isRequired,
  segments: customPropTypes.segments,
  // NOTE: should be PropTypes.instanceOf(Audio) but not on server.
  files: _react.PropTypes.object, // eslint-disable-line
  currentVerse: _react.PropTypes.string,
  isLoading: _react.PropTypes.bool.isRequired,
  play: _react.PropTypes.func.isRequired,
  pause: _react.PropTypes.func.isRequired,
  next: _react.PropTypes.func.isRequired, // eslint-disable-line
  previous: _react.PropTypes.func.isRequired, // eslint-disable-line
  update: _react.PropTypes.func.isRequired,
  repeat: customPropTypes.timeInterval.isRequired,
  shouldScroll: _react.PropTypes.bool.isRequired,
  setRepeat: _react.PropTypes.func.isRequired,
  setAyah: _react.PropTypes.func.isRequired,
  toggleScroll: _react.PropTypes.func.isRequired,
  isPlaying: _react.PropTypes.bool,
  currentTime: _react.PropTypes.number,
  duration: _react.PropTypes.number,
  // NOTE: should be PropTypes.instanceOf(Audio) but not on server.
  currentFile: _react.PropTypes.any, // eslint-disable-line
  startVerse: customPropTypes.verseType // eslint-disable-line
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, AudioActions)(Audioplayer);