'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

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

var _NavDropdown = require('react-bootstrap/lib/NavDropdown');

var _NavDropdown2 = _interopRequireDefault(_NavDropdown);

var _MenuItem = require('react-bootstrap/lib/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _reactScroll = require('react-scroll');

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = require('./style.scss');

var VersesDropdown = function (_Component) {
  (0, _inherits3.default)(VersesDropdown, _Component);

  function VersesDropdown() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, VersesDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = VersesDropdown.__proto__ || (0, _getPrototypeOf2.default)(VersesDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.renderItem = function (ayah, index) {
      var _this$props = _this.props,
          chapter = _this$props.chapter,
          loadedVerses = _this$props.loadedVerses,
          isReadingMode = _this$props.isReadingMode,
          _onClick = _this$props.onClick;

      var number = index + 1;

      if (loadedVerses.has(number) && !isReadingMode) {
        return (0, _jsx3.default)('li', {}, index, (0, _jsx3.default)(_reactScroll.Link, {
          onClick: function onClick() {
            return _onClick(number);
          },
          to: 'verse:' + chapter.chapterNumber + ':' + number,
          smooth: true,
          spy: true,
          offset: -120,
          activeClass: 'active',
          duration: 500,
          className: 'pointer'
        }, void 0, number));
      }

      return (0, _jsx3.default)(_MenuItem2.default, {
        onClick: function onClick() {
          return _onClick(number);
        }
      }, index, number);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(VersesDropdown, [{
    key: 'renderMenu',
    value: function renderMenu() {
      var _this2 = this;

      var chapter = this.props.chapter;

      var array = Array(chapter.versesCount).join().split(',');

      return array.map(function (ayah, index) {
        return _this2.renderItem(ayah, index);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;


      var title = (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'setting.verses',
        defaultMessage: 'Go to verse'
      });

      return (0, _jsx3.default)(_NavDropdown2.default, {
        link: true,
        className: 'dropdown ' + className + ' ' + style.dropdown,
        id: 'verses-dropdown',
        title: title
      }, void 0, this.renderMenu());
    }
  }]);
  return VersesDropdown;
}(_react.Component);

VersesDropdown.propTypes = {
  loadedVerses: _react.PropTypes.instanceOf(_set2.default).isRequired,
  chapter: customPropTypes.surahType.isRequired, // Set
  onClick: _react.PropTypes.func.isRequired,
  isReadingMode: _react.PropTypes.bool,
  className: _react.PropTypes.string
};

VersesDropdown.defaultProps = {
  className: ''
};

exports.default = VersesDropdown;