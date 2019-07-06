'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

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

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Segments = function (_Component) {
  (0, _inherits3.default)(Segments, _Component);

  function Segments() {
    (0, _classCallCheck3.default)(this, Segments);
    return (0, _possibleConstructorReturn3.default)(this, (Segments.__proto__ || (0, _getPrototypeOf2.default)(Segments)).apply(this, arguments));
  }

  (0, _createClass3.default)(Segments, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return [this.props.currentVerse !== nextProps.currentVerse, this.props.currentTime !== nextProps.currentTime].some(function (test) {
        return test;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          segments = _props.segments,
          currentVerse = _props.currentVerse,
          currentTime = _props.currentTime;

      var style = [];
      var currentWord = null;

      if (!(0, _keys2.default)(segments).length) return (0, _jsx3.default)('noscript', {});

      (0, _keys2.default)(segments.words).forEach(function (wordIndex) {
        var word = segments.words[wordIndex];

        if (currentTime >= word.startTime && currentTime < word.endTime) {
          currentWord = currentVerse + ':' + wordIndex;
        }
      });

      if (currentWord) {
        (0, _debug2.default)('component:Segments', 'render with currentWord ' + currentWord);

        style.push({
          cssText: '#word-' + currentWord.replace(/:/g, '-') + '{\n          color: #279197;\n          border-color: #279197;\n        }'
        });
      } else {
        (0, _debug2.default)('component:Segments', 'render without currentWord');
      }

      return (0, _jsx3.default)(_reactHelmet2.default, {
        style: style
      });
    }
  }]);
  return Segments;
}(_react.Component);

Segments.propTypes = {
  segments: customPropTypes.segments.isRequired,
  currentVerse: _react.PropTypes.string,
  currentTime: _react.PropTypes.number
};

exports.default = Segments;