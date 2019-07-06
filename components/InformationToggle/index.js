'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

var _Menu = require('quran-components/lib/Menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InformationToggle = function InformationToggle(_ref) {
  var isToggled = _ref.isToggled,
      onToggle = _ref.onToggle;
  return (0, _jsx3.default)(_Menu.MenuItem, {
    icon: (0, _jsx3.default)('i', {
      className: 'ss-icon ss-info vertical-align-middle'
    }),
    onClick: function onClick() {
      return onToggle({ isShowingSurahInfo: !isToggled });
    }
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'surah.info',
    defaultMessage: 'Surah Info'
  }));
};

InformationToggle.propTypes = {
  isToggled: _react.PropTypes.bool.isRequired,
  onToggle: _react.PropTypes.func.isRequired
};

exports.default = InformationToggle;