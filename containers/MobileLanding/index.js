'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _makeHeadTags = require('helpers/makeHeadTags');

var _makeHeadTags2 = _interopRequireDefault(_makeHeadTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('./style.scss');
var apple = require('../../../static/images/apple-white.svg');
var play = require('../../../static/images/play-store.svg');
var phones = require('../../../static/images/mockup-desktop@2x.png');

exports.default = function () {
  return (0, _jsx3.default)('div', {
    className: styles.container + ' montserrat container'
  }, void 0, _react2.default.createElement(_reactHelmet2.default, (0, _makeHeadTags2.default)({
    title: 'Quran Android and iOS apps by Quran.com',
    description: 'From the makers of Quran.com comes Quran for iOS and Android, a beautiful, and ad-free mushaf apps' // eslint-disable-line max-len
  })), (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-5'
  }, void 0, (0, _jsx3.default)('h1', {
    className: styles.title
  }, void 0, (0, _jsx3.default)('strong', {}, void 0, 'Quran'), (0, _jsx3.default)('br', {}), 'by quran.com \u0627\u0644\u0642\u0631\u0622\u0646'), (0, _jsx3.default)('h3', {}, void 0, (0, _jsx3.default)('small', {}, void 0, 'From the makers of Quran.com comes Quran for iOS, a beautiful,', ' ', 'and ad-free mushaf app. It\u2019s now easier to read the Quran on the go, memorize it and listen to your', ' ', 'favorite reciters.')), (0, _jsx3.default)('div', {
    className: 'row',
    style: { paddingTop: 15 }
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-6'
  }, void 0, (0, _jsx3.default)(_Button2.default, {
    bsStyle: 'primary',
    bsSize: 'lg',
    href: 'https://itunes.apple.com/us/app/quran-by-quran.com-qran/id1118663303?mt=8',
    className: styles.button,
    block: true
  }, void 0, (0, _jsx3.default)('img', {
    src: apple,
    alt: 'App Store',
    height: '28px',
    style: { paddingRight: 10, marginTop: -6 }
  }), 'Download')), (0, _jsx3.default)('div', {
    className: 'col-md-6'
  }, void 0, (0, _jsx3.default)(_Button2.default, {
    bsSize: 'lg',
    className: styles.button,
    href: 'https://play.google.com/store/apps/details?id=com.quran.labs.androidquran&hl=en',
    block: true
  }, void 0, (0, _jsx3.default)('img', {
    src: play,
    alt: 'Play Store',
    height: '24px',
    style: { paddingRight: 10 }
  }), 'Download')))), (0, _jsx3.default)('div', {
    className: 'col-md-7'
  }, void 0, (0, _jsx3.default)('img', {
    src: phones,
    width: '100%',
    alt: 'Apps'
  }))));
};