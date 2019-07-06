'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _IndexHeader = require('components/IndexHeader');

var _IndexHeader2 = _interopRequireDefault(_IndexHeader);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _reduxConnect = require('redux-connect');

var _reactRedux = require('react-redux');

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

var _chapters = require('redux/actions/chapters.js');

var _LastVisit = require('components/Home/LastVisit');

var _LastVisit2 = _interopRequireDefault(_LastVisit);

var _SurahsList = require('components/Home/SurahsList');

var _SurahsList2 = _interopRequireDefault(_SurahsList);

var _QuickSurahs = require('components/Home/QuickSurahs');

var _QuickSurahs2 = _interopRequireDefault(_QuickSurahs);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('./style.scss');

var Home = function Home(props) {
  (0, _debug2.default)('component:Index', 'Render');

  var lastVisit = _reactCookie2.default.load('lastVisit') || null;

  return (0, _jsx3.default)('div', {
    className: 'index-page'
  }, void 0, (0, _jsx3.default)(_reactHelmet2.default, {
    title: 'The Noble Quran - \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645',
    titleTemplate: '%s'
  }), (0, _jsx3.default)(_IndexHeader2.default, {}), (0, _jsx3.default)('div', {
    className: 'container ' + styles.list
  }, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-10 col-md-offset-1'
  }, void 0, lastVisit && (0, _jsx3.default)(_LastVisit2.default, {
    chapter: props.chapters[lastVisit.chapterId],
    verse: lastVisit.verseId
  }), (0, _jsx3.default)(_QuickSurahs2.default, {}), (0, _jsx3.default)('h4', {
    className: 'text-muted ' + styles.title
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'surah.index.heading',
    defaultMessage: 'SURAHS (CHAPTERS)'
  })), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)(_SurahsList2.default, {
    chapters: (0, _values2.default)(props.chapters).slice(0, 38)
  }), (0, _jsx3.default)(_SurahsList2.default, {
    chapters: (0, _values2.default)(props.chapters).slice(38, 76)
  }), (0, _jsx3.default)(_SurahsList2.default, {
    chapters: (0, _values2.default)(props.chapters).slice(76, 114)
  }))))));
};

Home.propTypes = {
  chapters: customPropTypes.chapters.isRequired
};

var AsyncHome = (0, _reduxConnect.asyncConnect)([{
  promise: function promise(_ref) {
    var _ref$store = _ref.store,
        getState = _ref$store.getState,
        dispatch = _ref$store.dispatch;

    if (!(0, _chapters.isAllLoaded)(getState())) {
      return dispatch((0, _chapters.loadAll)());
    }

    return true;
  }
}])(Home);

exports.default = (0, _reactRedux.connect)(function (state) {
  return { chapters: state.chapters.entities };
})(AsyncHome);