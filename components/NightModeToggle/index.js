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

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

var _Menu = require('quran-components/lib/Menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NightModeToggle = function (_Component) {
  (0, _inherits3.default)(NightModeToggle, _Component);

  function NightModeToggle() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NightModeToggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NightModeToggle.__proto__ || (0, _getPrototypeOf2.default)(NightModeToggle)).call.apply(_ref, [this].concat(args))), _this), _this.toggleNightMode = function () {
      var _this$props = _this.props,
          isNightMode = _this$props.isNightMode,
          onToggle = _this$props.onToggle;


      if (isNightMode) {
        document.body.classList.remove('night-mode');
      } else {
        document.body.classList.add('night-mode');
      }

      onToggle({ isNightMode: !isNightMode });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NightModeToggle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var isNightMode = this.props.isNightMode;


      if (isNightMode) {
        document.body.classList.add('night-mode');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)(_Menu.MenuItem, {
        icon: (0, _jsx3.default)('i', {
          className: 'ss-icon ss-lightbulb vertical-align-middle'
        }),
        onClick: this.toggleNightMode
      }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'setting.nightMode',
        defaultMessage: 'Night Mode'
      }));
    }
  }]);
  return NightModeToggle;
}(_react.Component); /* global document */


NightModeToggle.propTypes = {
  isNightMode: _react.PropTypes.bool.isRequired,
  onToggle: _react.PropTypes.func.isRequired
};

exports.default = NightModeToggle;