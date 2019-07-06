'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('./style.scss');

var SwitchToggle = function SwitchToggle(_ref) {
  var id = _ref.id,
      flat = _ref.flat,
      checked = _ref.checked,
      onToggle = _ref.onToggle;
  return (0, _jsx3.default)('div', {
    className: styles.switch + ' switch'
  }, void 0, (0, _jsx3.default)('input', {
    id: id,
    className: styles.toggle + ' ' + (flat ? styles.toggleFlat : styles.toggleRound),
    type: 'checkbox',
    checked: checked,
    onChange: onToggle
  }), (0, _jsx3.default)('label', {
    htmlFor: id,
    className: styles.label
  }));
};

SwitchToggle.propTypes = {
  id: _react.PropTypes.string,
  flat: _react.PropTypes.bool,
  checked: _react.PropTypes.bool,
  onToggle: _react.PropTypes.func.isRequired
};

SwitchToggle.defaultProps = {
  flat: false,
  checked: false
};

exports.default = SwitchToggle;