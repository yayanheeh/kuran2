'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

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

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = require('./style.scss');

var FontSizeDropdown = function (_Component) {
  (0, _inherits3.default)(FontSizeDropdown, _Component);

  function FontSizeDropdown() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FontSizeDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FontSizeDropdown.__proto__ || (0, _getPrototypeOf2.default)(FontSizeDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.handleOptionSelected = function (type, direction) {
      var _this$props = _this.props,
          onOptionChange = _this$props.onOptionChange,
          fontSize = _this$props.fontSize;

      var changeFactor = {
        translation: 0.5,
        arabic: 0.5
      };

      return onOptionChange({
        fontSize: (0, _extends4.default)({}, fontSize, (0, _defineProperty3.default)({}, type, fontSize[type] + changeFactor[type] * direction))
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FontSizeDropdown, [{
    key: 'renderPopup',
    value: function renderPopup() {
      var _this2 = this;

      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('ul', {
        className: style.list
      }, void 0, (0, _jsx3.default)('li', {
        className: 'text-center ' + style.item
      }, void 0, (0, _jsx3.default)('a', {
        tabIndex: '-1',
        onClick: function onClick() {
          return _this2.handleOptionSelected('arabic', -1);
        },
        className: 'pointer'
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-hyphen'
      }))), (0, _jsx3.default)('li', {
        className: 'text-center ' + style.item
      }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'setting.fontSize.arabic',
        defaultMessage: 'Arabic'
      })), (0, _jsx3.default)('li', {
        className: 'text-center ' + style.item
      }, void 0, (0, _jsx3.default)('a', {
        tabIndex: '-1',
        onClick: function onClick() {
          return _this2.handleOptionSelected('arabic', 1);
        },
        className: 'pointer'
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-plus'
      })))), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('ul', {
        className: style.list
      }, void 0, (0, _jsx3.default)('li', {
        className: 'text-center ' + style.item
      }, void 0, (0, _jsx3.default)('a', {
        tabIndex: '-1',
        onClick: function onClick() {
          return _this2.handleOptionSelected('translation', -1);
        },
        className: 'pointer'
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-hyphen'
      }))), (0, _jsx3.default)('li', {
        className: 'text-center ' + style.item
      }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'setting.translations.title',
        defaultMessage: 'Translations'
      })), (0, _jsx3.default)('li', {
        className: 'text-center ' + style.item
      }, void 0, (0, _jsx3.default)('a', {
        tabIndex: '-1',
        onClick: function onClick() {
          return _this2.handleOptionSelected('translation', 1);
        },
        className: 'pointer'
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-plus'
      })))));
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('li', {
        className: style.link
      }, void 0, this.renderPopup());
    }
  }]);
  return FontSizeDropdown;
}(_react.Component);

FontSizeDropdown.propTypes = {
  onOptionChange: _react.PropTypes.func,
  fontSize: customPropTypes.fontSize.isRequired
};

exports.default = FontSizeDropdown;