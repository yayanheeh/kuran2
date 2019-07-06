'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bindTooltip = require('utils/bindTooltip');

var _bindTooltip2 = _interopRequireDefault(_bindTooltip);

var _StringHelpers = require('helpers/StringHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
var CHAR_TYPE_WORD = 'word';
var CHAR_TYPE_END = 'end';
var CHAR_TYPE_PAUSE = 'pause';
var CHAR_TYPE_RUB = 'rub';
var CHAR_TYPE_SAJDAH = 'sajdah';

var Word = function (_Component) {
  (0, _inherits3.default)(Word, _Component);

  function Word() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Word);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Word.__proto__ || (0, _getPrototypeOf2.default)(Word)).call.apply(_ref, [this].concat(args))), _this), _this.buildTooltip = function (word, tooltip) {
      var title = void 0;

      if (word.charType === CHAR_TYPE_END) {
        title = 'Verse ' + word.verseKey.split(':')[1];
      } else if (word.charType === CHAR_TYPE_WORD) {
        title = word[tooltip].text;
      } else {
        title = '';
      }
      return title;
    }, _this.handleWordPlay = function () {
      var word = _this.props.word;


      if (word.audio) {
        var audio = new Audio(word.audio.url); // eslint-disable-line

        audio.play();
      }
    }, _this.handleSegmentPlay = function () {
      var _this$props = _this.props,
          word = _this$props.word,
          currentVerse = _this$props.currentVerse,
          audioActions = _this$props.audioActions,
          audioPosition = _this$props.audioPosition,
          isPlaying = _this$props.isPlaying,
          isSearched = _this$props.isSearched;


      if (isSearched || !word.audio) {
        return;
      }

      if (currentVerse === word.verseKey && isPlaying) {
        audioActions.setCurrentWord(word.code);
      } else {
        audioActions.pause();
        audioActions.setAyah(word.verseKey);
        audioActions.playCurrentWord({ word: word, position: audioPosition });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Word, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          tooltip = _props.tooltip,
          word = _props.word,
          currentVerse = _props.currentVerse,
          isPlaying = _props.isPlaying,
          audioPosition = _props.audioPosition,
          useTextFont = _props.useTextFont;


      var text = void 0;
      var spacer = void 0;
      var highlight = currentVerse === word.verseKey && isPlaying ? 'highlight' : '';
      var className = '' + (useTextFont ? 'text-' : '') + word.className + ' ' + word.charType + ' ' + highlight + ' ' + (word.highlight ? word.highlight : '');
      var id = 'word-' + word.verseKey.replace(/:/, '-') + '-' + audioPosition;

      if (useTextFont) {
        if (word.charType === CHAR_TYPE_END) {
          text = (0, _StringHelpers.zeroPad)(word.verseKey.split(':')[1], 3, 0);
        } else {
          text = word.textMadani;
        }
      } else {
        text = word.code;
      }

      if (word.charType === CHAR_TYPE_WORD) {
        spacer = '&nbsp;';
      }

      return (0, _jsx3.default)('span', {}, void 0, _react2.default.createElement('b', (0, _extends3.default)({}, _bindTooltip2.default, {
        key: word.code,
        id: id,
        onDoubleClick: this.handleSegmentPlay,
        onClick: this.handleWordPlay,
        className: className + ' pointer',
        title: this.buildTooltip(word, tooltip),
        dangerouslySetInnerHTML: { __html: text }
      })), (0, _jsx3.default)('small', {
        dangerouslySetInnerHTML: { __html: spacer },
        style: { letterSpacing: -15 }
      }));
    }
  }]);
  return Word;
}(_react.Component);

Word.propTypes = {
  word: _react.PropTypes.object.isRequired, // eslint-disable-line
  tooltip: _react.PropTypes.string,
  audioActions: _react.PropTypes.object.isRequired, // eslint-disable-line
  audioPosition: _react.PropTypes.number,
  currentVerse: _react.PropTypes.string,
  isPlaying: _react.PropTypes.bool,
  isSearched: _react.PropTypes.bool,
  useTextFont: _react.PropTypes.bool // tmp change to compare text and code based rendering
};

exports.default = Word;