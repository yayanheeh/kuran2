'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

var _Tooltip = require('react-bootstrap/lib/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = require('../style.scss');

var ScrollButton = function ScrollButton(_ref) {
  var shouldScroll = _ref.shouldScroll,
      onScrollToggle = _ref.onScrollToggle;

  var tooltip = (0, _jsx3.default)(_Tooltip2.default, {
    id: 'scroll-button-tooltip',
    placement: 'bottom'
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'player.scrollButtonTip',
    defaultMessage: 'Automatically scrolls to the currently playing ayah on transitions...'
  }));

  return (0, _jsx3.default)('div', {
    className: 'text-center'
  }, void 0, (0, _jsx3.default)(_OverlayTrigger2.default, {
    overlay: tooltip,
    placement: 'top',
    trigger: ['hover', 'focus']
  }, void 0, (0, _jsx3.default)('a', {
    tabIndex: '-1',
    className: 'pointer ' + style.buttons + ' ' + (shouldScroll ? style.scroll : ''),
    onClick: onScrollToggle,
    style: { marginBottom: 0 }
  }, void 0, (0, _jsx3.default)('i', {
    className: 'ss-icon ss-link'
  }))));
};

ScrollButton.propTypes = {
  shouldScroll: _react.PropTypes.bool.isRequired,
  onScrollToggle: _react.PropTypes.func.isRequired
};

exports.default = ScrollButton;