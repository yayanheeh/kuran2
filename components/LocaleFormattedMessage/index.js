'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocaleFormattedMessage = function LocaleFormattedMessage(_ref) {
  var id = _ref.id,
      defaultMessage = _ref.defaultMessage,
      intl = _ref.intl,
      values = _ref.values,
      className = _ref.className;
  return (0, _jsx3.default)('span', {
    className: intl.messages.local + ' ' + className
  }, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: id,
    defaultMessage: defaultMessage,
    values: values
  }));
};

LocaleFormattedMessage.propTypes = {
  id: _react.PropTypes.string.isRequired,
  className: _react.PropTypes.string,
  defaultMessage: _react.PropTypes.string,
  intl: _reactIntl.intlShape.isRequired,
  values: _react.PropTypes.object // eslint-disable-line
};

LocaleFormattedMessage.defaultPropTypes = {
  className: ''
};

exports.default = (0, _reactIntl.injectIntl)(LocaleFormattedMessage);