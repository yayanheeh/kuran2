'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = reducer;

var _options = require('redux/constants/options.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  isReadingMode: false,
  isNightMode: false,
  isShowingSurahInfo: false,
  loadingRecitations: false,
  loadingTranslations: false,
  audio: 7, // Mishari Rashid al-`Afasy
  translations: [20], // Sahih International
  tooltip: 'translation',
  userAgent: null,
  footNote: null,
  loadingFootNote: false,
  options: {
    recitations: [],
    translations: []
  },
  fontSize: {
    arabic: 3.5,
    translation: 2
  }
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _options.SET_OPTION:
      {
        var payload = action.payload;
        return (0, _extends3.default)({}, state, payload);
      }
    case _options.LOAD_RECITERS:
      {
        return (0, _extends3.default)({}, state, {
          loadingRecitations: true
        });
      }
    case _options.LOAD_RECITERS_SUCCESS:
      {
        return (0, _extends3.default)({}, state, {
          loadingRecitations: false,
          options: (0, _extends3.default)({}, state.options, {
            recitations: action.result.recitations
          })
        });
      }
    case _options.SET_USER_AGENT:
      {
        var userAgent = action.userAgent;

        return (0, _extends3.default)({}, state, {
          userAgent: userAgent
        });
      }
    case _options.LOAD_TRANSLATIONS:
      {
        return (0, _extends3.default)({}, state, {
          loadingTranslations: true
        });
      }
    case _options.LOAD_TRANSLATIONS_SUCCESS:
      {
        return (0, _extends3.default)({}, state, {
          loadingTranslations: false,
          options: (0, _extends3.default)({}, state.options, {
            translations: action.result.translations
          })
        });
      }
    default:
      return state;
  }
}