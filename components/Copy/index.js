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

var _copyToClipboard = require('copy-to-clipboard');

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Copy = function (_Component) {
  (0, _inherits3.default)(Copy, _Component);

  function Copy() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Copy);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Copy.__proto__ || (0, _getPrototypeOf2.default)(Copy)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isCopied: false
    }, _this.handleCopy = function () {
      (0, _copyToClipboard2.default)(_this.props.text + ' - ' + _this.props.verseKey);
      _this.setState({ isCopied: true });

      setTimeout(function () {
        return _this.setState({ isCopied: false });
      }, 1000);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Copy, [{
    key: 'render',
    value: function render() {
      var isCopied = this.state.isCopied;


      return (0, _jsx3.default)('a', {
        tabIndex: '-1',
        onClick: this.handleCopy,
        className: !isCopied && 'text-muted',
        'data-metrics-event-name': 'Ayah:Copy'
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-attach vertical-align-middle'
      }), ' ', (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: isCopied ? 'actions.copied' : 'actions.copy',
        defaultMessage: isCopied ? 'Copied!' : 'Copy'
      }));
    }
  }]);
  return Copy;
}(_react.Component);

Copy.propTypes = {
  text: _react.PropTypes.string.isRequired,
  verseKey: _react.PropTypes.string.isRequired
};

exports.default = Copy;