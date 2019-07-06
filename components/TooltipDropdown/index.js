'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Menu = require('quran-components/lib/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Radio = require('quran-components/lib/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Icon = require('quran-components/lib/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TooltipDropdown = function TooltipDropdown(_ref) {
  var tooltip = _ref.tooltip,
      onOptionChange = _ref.onOptionChange;

  var handleOptionChange = function handleOptionChange(type) {
    return onOptionChange({
      tooltip: type
    });
  };

  var list = ['translation', 'transliteration'].map(function (type) {
    return (0, _jsx3.default)(_Menu.MenuItem, {}, type, (0, _jsx3.default)(_Radio2.default, {
      id: type,
      name: 'type',
      checked: type === tooltip,
      handleChange: function handleChange() {
        return handleOptionChange(type);
      }
    }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
      id: 'setting.tooltip.' + type,
      defaultMessage: type.toUpperCase()
    })));
  });

  return (0, _jsx3.default)(_Menu.MenuItem, {
    icon: (0, _jsx3.default)(_Icon2.default, {
      type: 'globe'
    }),
    menu: (0, _jsx3.default)(_Menu2.default, {}, void 0, list)
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'setting.tooltip.title',
    defaultMessage: 'Tooltip Content'
  }));
};

TooltipDropdown.propTypes = {
  onOptionChange: _react.PropTypes.func,
  tooltip: _react.PropTypes.string.isRequired
};

exports.default = TooltipDropdown;