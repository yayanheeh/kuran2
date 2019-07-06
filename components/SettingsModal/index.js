'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _customPropTypes = require('customPropTypes');

var customProptypes = _interopRequireWildcard(_customPropTypes);

var _reactRedux = require('react-redux');

var _Modal = require('react-bootstrap/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

var _ReciterDropdown = require('components/ReciterDropdown');

var _ReciterDropdown2 = _interopRequireDefault(_ReciterDropdown);

var _ContentDropdown = require('components/ContentDropdown');

var _ContentDropdown2 = _interopRequireDefault(_ContentDropdown);

var _TooltipDropdown = require('components/TooltipDropdown');

var _TooltipDropdown2 = _interopRequireDefault(_TooltipDropdown);

var _options = require('redux/actions/options.js');

var _verses = require('redux/actions/verses.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalHeader = _Modal2.default.Header;
var ModalTitle = _Modal2.default.Title;
var ModalBody = _Modal2.default.Body;

var SettingsModal = function SettingsModal(_ref) {
  var chapter = _ref.chapter,
      ayahIds = _ref.ayahIds,
      open = _ref.open,
      handleHide = _ref.handleHide,
      options = _ref.options,
      setOption = _ref.setOption,
      load = _ref.load;

  var handleOptionChange = function handleOptionChange(payload) {
    setOption(payload);

    if (chapter) {
      var first = [].concat((0, _toConsumableArray3.default)(ayahIds))[0];
      var last = [].concat((0, _toConsumableArray3.default)(ayahIds))[[].concat((0, _toConsumableArray3.default)(ayahIds)).length - 1];
      load(chapter.chapterNumber, first, last, (0, _extends3.default)({}, options, payload));
    }
  };

  return (0, _jsx3.default)(_Modal2.default, {
    show: open,
    onHide: handleHide
  }, void 0, (0, _jsx3.default)(ModalHeader, {
    closeButton: true
  }, void 0, (0, _jsx3.default)(ModalTitle, {
    className: 'montserrat'
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'setting.title',
    defaultMessage: 'Settings'
  }))), (0, _jsx3.default)(ModalBody, {}, void 0, (0, _jsx3.default)('div', {
    className: 'form-group'
  }, void 0, (0, _jsx3.default)('h5', {
    className: 'text-black'
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'setting.reciters.title',
    defaultMessage: 'Reciters'
  })), (0, _jsx3.default)(_ReciterDropdown2.default, {
    onOptionChange: handleOptionChange
  })), (0, _jsx3.default)('div', {
    className: 'form-group'
  }, void 0, (0, _jsx3.default)('h5', {
    className: 'text-black'
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'setting.translations.title',
    defaultMessage: 'Translations'
  })), (0, _jsx3.default)(_ContentDropdown2.default, {
    onOptionChange: handleOptionChange
  })), (0, _jsx3.default)('div', {
    className: 'form-group'
  }, void 0, (0, _jsx3.default)('h5', {
    className: 'text-black'
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'setting.tooltip.title',
    defaultMessage: 'Tooltip Content'
  })), (0, _jsx3.default)(_TooltipDropdown2.default, {
    tooltip: options.tooltip,
    onOptionChange: setOption
  }))));
};

SettingsModal.propTypes = {
  chapter: customProptypes.surahType,
  ayahIds: _react.PropTypes.instanceOf(_set2.default),
  open: _react.PropTypes.bool,
  handleHide: _react.PropTypes.func.isRequired,
  options: customProptypes.optionsType,
  setOption: _react.PropTypes.func.isRequired,
  load: _react.PropTypes.func.isRequired
};

SettingsModal.defaultProps = {
  open: false
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    options: state.options
  };
}, { setOption: _options.setOption, load: _verses.load })(SettingsModal);