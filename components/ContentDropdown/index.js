'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

var _options = require('redux/actions/options');

var _Menu = require('quran-components/lib/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Checkbox = require('quran-components/lib/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Loader = require('quran-components/lib/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _Icon = require('quran-components/lib/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = require('./style.scss');

var compareAlphabetically = function compareAlphabetically(property) {
  return function (previous, next) {
    var previousText = previous[property].toUpperCase();
    var nextText = next[property].toUpperCase();

    if (previousText < nextText) {
      return -1;
    }

    if (previousText > nextText) {
      return 1;
    }

    return 0;
  };
};

var ContentDropdown = function (_Component) {
  (0, _inherits3.default)(ContentDropdown, _Component);

  function ContentDropdown() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContentDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContentDropdown.__proto__ || (0, _getPrototypeOf2.default)(ContentDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.handleRemoveContent = function () {
      var onOptionChange = _this.props.onOptionChange;


      onOptionChange({ translations: [] });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContentDropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.translationOptions.length) {
        return this.props.loadTranslations();
      }

      return false;
    }
  }, {
    key: 'handleOptionSelected',
    value: function handleOptionSelected(id) {
      var _props = this.props,
          onOptionChange = _props.onOptionChange,
          translations = _props.translations;


      if (translations.find(function (option) {
        return option === id;
      })) {
        onOptionChange({ translations: translations.filter(function (option) {
            return option !== id;
          }) });
      } else {
        onOptionChange({ translations: [].concat((0, _toConsumableArray3.default)(translations), [id]) });
      }
    }
  }, {
    key: 'renderItems',
    value: function renderItems(items, render) {
      var _this2 = this;

      var translations = this.props.translations;


      return items.map(function (translation) {
        var checked = translations.find(function (option) {
          return option === translation.id;
        });

        return (0, _jsx3.default)(_Menu.MenuItem, {
          className: style.item
        }, translation.id, (0, _jsx3.default)(_Checkbox2.default, {
          id: translation.id + translation.languageName,
          name: 'translation',
          checked: checked || false,
          handleChange: function handleChange() {
            return _this2.handleOptionSelected(translation.id);
          }
        }, void 0, (0, _jsx3.default)('span', {}, void 0, render(translation))));
      });
    }
  }, {
    key: 'renderEnglishList',
    value: function renderEnglishList() {
      var list = this.props.translationOptions.filter(function (translation) {
        return translation.languageName === 'English';
      }).sort(compareAlphabetically('authorName'));

      return this.renderItems(list, function (translation) {
        return translation.authorName;
      });
    }
  }, {
    key: 'renderLanguagesList',
    value: function renderLanguagesList() {
      var list = this.props.translationOptions.filter(function (translation) {
        return translation.languageName !== 'English';
      }).sort(compareAlphabetically('languageName'));

      return this.renderItems(list, function (translation) {
        return translation.languageName + ' - ' + translation.authorName;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          translations = _props2.translations,
          translationOptions = _props2.translationOptions;


      return (0, _jsx3.default)(_Menu.MenuItem, {
        icon: (0, _jsx3.default)(_Icon2.default, {
          type: 'list'
        }),
        menu: translationOptions.length ? (0, _jsx3.default)(_Menu2.default, {}, void 0, translations && translations.length && (0, _jsx3.default)(_Menu.MenuItem, {
          onClick: this.handleRemoveContent
        }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'setting.translations.removeAll',
          defaultMessage: 'Remove all'
        })), (0, _jsx3.default)(_Menu.MenuItem, {
          divider: true
        }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'setting.translations.english',
          defaultMessage: 'English'
        })), this.renderEnglishList(), (0, _jsx3.default)(_Menu.MenuItem, {
          divider: true
        }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'setting.translations.other',
          defaultMessage: 'Other Languages'
        })), this.renderLanguagesList()) : (0, _jsx3.default)(_Loader2.default, {
          isActive: true
        })
      }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'setting.translations.title',
        defaultMessage: 'Translations'
      }));
    }
  }]);
  return ContentDropdown;
}(_react.Component);

ContentDropdown.propTypes = {
  onOptionChange: _react.PropTypes.func.isRequired,
  translations: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
  translationOptions: customPropTypes.translationOptions,
  loadTranslations: _react.PropTypes.func.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    translationOptions: state.options.options.translations,
    loadingTranslations: state.options.loadingTranslations,
    translations: state.options.translations
  };
}, { loadTranslations: _options.loadTranslations })(ContentDropdown);