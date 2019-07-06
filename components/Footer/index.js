'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('react-router/lib/Link');

var _Link2 = _interopRequireDefault(_Link);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('./style.scss');

var Footer = function Footer() {
  return (0, _jsx3.default)('footer', {
    className: styles.footer
  }, void 0, (0, _jsx3.default)('div', {
    className: 'container'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-10 col-md-offset-1'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: styles.about + ' col-md-2 col-sm-4 col-xs-12'
  }, void 0, (0, _jsx3.default)('p', {
    className: styles.header
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'nav.navigate',
    defaultMessage: 'Navigate'
  })), (0, _jsx3.default)('ul', {
    className: 'source-sans ' + styles.list
  }, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_Link2.default, {
    to: '/about'
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'nav.aboutUs',
    defaultMessage: 'About Us'
  }))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'https://quran.zendesk.com/hc/en-us/requests/new'
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'nav.contactUs',
    defaultMessage: 'Contact Us'
  }))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'https://quran.zendesk.com/hc/en-us/articles/210090626-Development-help',
    target: '_blank',
    rel: 'noopener noreferrer',
    'data-metrics-event-name': 'Footer:Link:Developer'
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'nav.developers',
    defaultMessage: 'Developers'
  }))))), (0, _jsx3.default)('div', {
    className: styles.links + ' col-md-3 col-sm-4 col-xs-12'
  }, void 0, (0, _jsx3.default)('p', {
    className: styles.header
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'nav.usefulSites',
    defaultMessage: 'USEFUL SITES'
  })), (0, _jsx3.default)('ul', {
    className: 'source-sans ' + styles.list
  }, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    target: '_blank',
    rel: 'noopener noreferrer',
    href: 'http://sunnah.com/',
    'data-metrics-event-name': 'Footer:Link:Sunnah'
  }, void 0, 'Sunnah.com')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    target: '_blank',
    rel: 'noopener noreferrer',
    href: 'http://salah.com/',
    'data-metrics-event-name': 'Footer:Link:Salah'
  }, void 0, 'Salah.com')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    target: '_blank',
    rel: 'noopener noreferrer',
    href: 'http://quranicaudio.com/',
    'data-metrics-event-name': 'Footer:Link:QuranicAudio'
  }, void 0, 'QuranicAudio.com')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    target: '_blank',
    rel: 'noopener noreferrer',
    href: 'http://corpus.quran.com/wordbyword.jsp',
    'data-metrics-event-name': 'Footer:Link:Corpus'
  }, void 0, 'Corpus: Word by Word')))), (0, _jsx3.default)('div', {
    className: styles.links + ' col-md-3 col-sm-4 col-xs-12'
  }, void 0, (0, _jsx3.default)('p', {
    className: styles.header
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'nav.otherLinks',
    defaultMessage: 'Other links'
  })), (0, _jsx3.default)('ul', {
    className: 'source-sans ' + styles.list
  }, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: '/sitemap.xml'
  }, void 0, 'Sitemap')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_Link2.default, {
    to: '/36',
    'data-metrics-event-name': 'Footer:Link:Click',
    'data-metrics-surah-id': '36'
  }, void 0, 'Surah Yasin, Yaseen (\u064A\u0633)')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_Link2.default, {
    to: '/2/255',
    'data-metrics-event-name': 'Footer:Link:Click',
    'data-metrics-surah-id': '2/255'
  }, void 0, 'Ayat Al-Kursi (\u0622\u064A\u0629 \u0627\u0644\u0643\u0631\u0633\u064A)')))), (0, _jsx3.default)('div', {
    className: styles.links + ' col-md-4 col-sm-12 col-xs-12'
  }, void 0, (0, _jsx3.default)('p', {
    className: 'monserrat'
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'nav.aboutQuranProject',
    defaultMessage: 'QURAN.COM (ALSO KNOWN AS THE NOBLE QURAN, AL QURAN, HOLY QURAN, KORAN) IS A PRO BONO PROJECT.'
  }), '.'), (0, _jsx3.default)('p', {
    className: 'monserrat'
  }, void 0, '\xA9 2016 Quran.com.', ' ', (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'nav.rightsReserved',
    defaultMessage: 'All Rights Reserved'
  }), '.')))))));
};

exports.default = Footer;