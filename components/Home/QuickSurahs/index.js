'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

var _Link = require('react-router/lib/Link');

var _Link2 = _interopRequireDefault(_Link);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('containers/Home/style.scss');

exports.default = function () {
  (0, _debug2.default)('component:Index', 'QuickSurahs');

  var isFriday = new Date().getDay() === 5;

  return (0, _jsx3.default)('div', {
    className: ''
  }, void 0, (0, _jsx3.default)('h4', {
    className: 'text-muted ' + styles.title + ' ' + styles.items
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'surah.index.quickLinks',
    defaultMessage: 'Quick links'
  }), isFriday && (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)(_Link2.default, {
    to: '/18',
    'data-metrics-event-name': 'QuickLinks:Click',
    'data-metrics-surah-id': '18'
  }, void 0, 'Surah Al-Kahf')), (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)(_Link2.default, {
    to: '/36',
    'data-metrics-event-name': 'QuickLinks:Click',
    'data-metrics-surah-id': '36'
  }, void 0, 'Surah Yasin (Yaseen)')), (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)(_Link2.default, {
    to: '/55',
    'data-metrics-event-name': 'QuickLinks:Click',
    'data-metrics-surah-id': '55'
  }, void 0, 'Surah Ar-Rahman')), (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)(_Link2.default, {
    to: '/67',
    'data-metrics-event-name': 'QuickLinks:Click',
    'data-metrics-surah-id': '67'
  }, void 0, 'Surah Al Mulk')), (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)(_Link2.default, {
    to: '/ayatul-kursi',
    'data-metrics-event-name': 'QuickLinks:Click',
    'data-metrics-surah-id': 'ayatul-kursi'
  }, void 0, 'Ayatul Kursi'))));
};