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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

var _Word = require('components/Word');

var _Word2 = _interopRequireDefault(_Word);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('../Verse/style.scss');

var Line = function (_Component) {
  (0, _inherits3.default)(Line, _Component);

  function Line() {
    (0, _classCallCheck3.default)(this, Line);
    return (0, _possibleConstructorReturn3.default)(this, (Line.__proto__ || (0, _getPrototypeOf2.default)(Line)).apply(this, arguments));
  }

  (0, _createClass3.default)(Line, [{
    key: 'renderText',

    // NOTE: this is commented out as it caused problems with 55:31 with missing text.
    // shouldComponentUpdate(nextProps) {
    //   const conditions = [
    //     this.props.currentVerse !== nextProps.currentVerse,
    //     this.props.line !== nextProps.line,
    //     this.props.isPlaying !== nextProps.isPlaying
    //   ];
    //
    //   console.log(conditions, conditions.some(condition => condition));
    //
    //   return conditions.some(condition => condition);
    // }

    value: function renderText() {
      var _props = this.props,
          tooltip = _props.tooltip,
          currentVerse = _props.currentVerse,
          audioActions = _props.audioActions,
          isPlaying = _props.isPlaying,
          line = _props.line,
          useTextFont = _props.useTextFont;

      // NOTE: Some 'word's are glyphs (jeem). Not words and should not be clicked for audio

      var wordAudioPosition = -1;

      var text = line.map(function (word) {
        return (// eslint-disable-line
          (0, _jsx3.default)(_Word2.default, {
            word: word,
            currentVerse: currentVerse,
            tooltip: tooltip,
            isPlaying: isPlaying,
            audioActions: audioActions,
            audioPosition: word.charType === 'word' ? wordAudioPosition += 1 : null,
            useTextFont: useTextFont
          }, word.position + '-' + word.code + '-' + word.lineNum)
        );
      });

      return (0, _jsx3.default)('span', {
        className: styles.line + ' text-center'
      }, void 0, text);
    }
  }, {
    key: 'render',
    value: function render() {
      var line = this.props.line;


      (0, _debug2.default)('component:Line', 'Page: ' + line[0].pageNum + ' - Line: ' + line[0].lineNum + ' - Ayah: ' + line[0].verseKey);

      return (0, _jsx3.default)('div', {
        className: 'row ' + styles.font + ' text-justify text-arabic'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'col-md-12 line-container',
        name: 'ayah:' + line[0].verseKey
      }, void 0, this.renderText()));
    }
  }]);
  return Line;
}(_react.Component);

Line.propTypes = {
  line: customPropTypes.line.isRequired,
  tooltip: _react.PropTypes.string,
  currentVerse: _react.PropTypes.string.isRequired,
  audioActions: customPropTypes.audioActions,
  isPlaying: _react.PropTypes.bool,
  useTextFont: _react.PropTypes.bool
};

exports.default = Line;