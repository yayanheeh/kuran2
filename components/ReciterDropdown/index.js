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

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

var _reactRedux = require('react-redux');

var _Menu = require('quran-components/lib/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Radio = require('quran-components/lib/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Loader = require('quran-components/lib/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _Icon = require('quran-components/lib/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

var _options = require('redux/actions/options');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReciterDropdown = function (_Component) {
  (0, _inherits3.default)(ReciterDropdown, _Component);

  function ReciterDropdown() {
    (0, _classCallCheck3.default)(this, ReciterDropdown);
    return (0, _possibleConstructorReturn3.default)(this, (ReciterDropdown.__proto__ || (0, _getPrototypeOf2.default)(ReciterDropdown)).apply(this, arguments));
  }

  (0, _createClass3.default)(ReciterDropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.recitations.length) {
        return this.props.loadRecitations();
      }

      return false;
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var _props = this.props,
          audio = _props.audio,
          onOptionChange = _props.onOptionChange,
          recitations = _props.recitations;


      return recitations.map(function (slug) {
        return (0, _jsx3.default)(_Menu.MenuItem, {}, slug.id, (0, _jsx3.default)(_Radio2.default, {
          checked: slug.id === audio,
          id: 'slug-' + slug.id,
          name: 'reciter',
          handleChange: function handleChange() {
            return onOptionChange({ audio: slug.id });
          }
        }, void 0, (0, _jsx3.default)('span', {}, void 0, slug.reciterNameEng, ' ', slug.style ? '(' + slug.style + ')' : '')));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var recitations = this.props.recitations;


      return (0, _jsx3.default)(_Menu.MenuItem, {
        icon: (0, _jsx3.default)(_Icon2.default, {
          type: 'mic'
        }),
        menu: recitations.length ? (0, _jsx3.default)(_Menu2.default, {}, void 0, this.renderMenu()) : (0, _jsx3.default)(_Loader2.default, {
          isActive: true
        })
      }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'setting.reciters.title',
        'default': 'Reciters'
      }));
    }
  }]);
  return ReciterDropdown;
}(_react.Component);

ReciterDropdown.propTypes = {
  onOptionChange: _react.PropTypes.func,
  audio: _react.PropTypes.number,
  loadRecitations: _react.PropTypes.func.isRequired,
  recitations: customPropTypes.recitations
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    recitations: state.options.options.recitations,
    loadingRecitations: state.options.loadingRecitations,
    audio: state.options.audio
  };
}, { loadRecitations: _options.loadRecitations })(ReciterDropdown);