'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _reactRedux = require('react-redux');

var _buildFontFaces = require('helpers/buildFontFaces');

var _fontFace = require('redux/actions/fontFace.js');

var _fontFace2 = _interopRequireDefault(_fontFace);

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

var _selector = require('./selector');

var _selector2 = _interopRequireDefault(_selector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FontStyles = function (_Component) {
  (0, _inherits3.default)(FontStyles, _Component);

  function FontStyles() {
    (0, _classCallCheck3.default)(this, FontStyles);
    return (0, _possibleConstructorReturn3.default)(this, (FontStyles.__proto__ || (0, _getPrototypeOf2.default)(FontStyles)).apply(this, arguments));
  }

  (0, _createClass3.default)(FontStyles, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return (0, _stringify2.default)(this.props.fontFaces) !== (0, _stringify2.default)(nextProps.fontFaces);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          fontFaces = _props.fontFaces,
          load = _props.load; // eslint-disable-line no-shadow

      (0, _debug2.default)('component:FontStyles', 'render');

      if (__CLIENT__) {
        var FontFaceObserver = require('fontfaceobserver'); // eslint-disable-line global-require

        (0, _keys2.default)(fontFaces).filter(function (className) {
          return !fontFaces[className];
        }).forEach(function (className) {
          var font = new FontFaceObserver(className);

          font.load().then(function () {
            return load(className);
          }, function () {
            return load(className);
          });
        });
      }

      return (0, _jsx3.default)('div', {}, void 0, (0, _keys2.default)(fontFaces).map(function (className) {
        return (0, _jsx3.default)('style', {
          dangerouslySetInnerHTML: {
            __html: fontFaces[className] ? (0, _buildFontFaces.fontFaceStyle)(className) + ' ' + (0, _buildFontFaces.fontFaceStyleLoaded)(className) : (0, _buildFontFaces.fontFaceStyle)(className)
          }
        }, className);
      }));
    }
  }]);
  return FontStyles;
}(_react.Component);

FontStyles.propTypes = {
  fontFaces: _react.PropTypes.objectOf(_react.PropTypes.bool).isRequired,
  load: _react.PropTypes.func.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    fontFaces: (0, _selector2.default)(state)
  };
}, { load: _fontFace2.default })(FontStyles);