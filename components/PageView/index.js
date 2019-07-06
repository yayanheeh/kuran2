'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

var _reactRedux = require('react-redux');

var _Line = require('components/Line');

var _Line2 = _interopRequireDefault(_Line);

var _PageBreak = require('components/PageBreak');

var _PageBreak2 = _interopRequireDefault(_PageBreak);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageView = function PageView(_ref) {
  var lines = _ref.lines,
      keys = _ref.keys,
      currentVerse = _ref.currentVerse,
      options = _ref.options,
      isPlaying = _ref.isPlaying,
      audioActions = _ref.audioActions,
      userAgent = _ref.userAgent;
  // eslint-disable-line
  var elements = keys.map(function (lineNum, index) {
    var nextNum = keys[index + 1];
    var pageNum = lineNum.split('-')[0];
    var line = lines[lineNum];
    var renderText = false; // userAgent.isBot;

    if (index + 1 !== keys.length && pageNum !== nextNum.split('-')[0]) {
      return [(0, _jsx3.default)(_Line2.default, {
        line: line,
        currentVerse: currentVerse,
        tooltip: options.tooltip,
        audioActions: audioActions,
        isPlaying: isPlaying,
        useTextFont: renderText
      }, lineNum), (0, _jsx3.default)(_PageBreak2.default, {
        pageNum: parseInt(pageNum, 10) + 1
      })];
    }

    return (0, _jsx3.default)(_Line2.default, {
      line: line,
      currentVerse: currentVerse,
      tooltip: options.tooltip,
      audioActions: audioActions,
      isPlaying: isPlaying,
      useTextFont: renderText
    }, lineNum);
  });

  return (0, _jsx3.default)('div', {}, void 0, elements);
};

PageView.propTypes = {
  keys: _react.PropTypes.array, // eslint-disable-line
  lines: _react.PropTypes.object.isRequired, // eslint-disable-line
  audioActions: customPropTypes.audioActions.isRequired, // eslint-disable-line
  currentVerse: _react.PropTypes.string,
  bookmarks: _react.PropTypes.object.isRequired, // eslint-disable-line
  options: _react.PropTypes.object.isRequired, // eslint-disable-line
  isPlaying: _react.PropTypes.bool,
  userAgent: _react.PropTypes.func
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    userAgent: state.options.userAgent
  };
})(PageView);