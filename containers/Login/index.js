'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FacebookTokenButton = require('components/FacebookTokenButton');

var _FacebookTokenButton2 = _interopRequireDefault(_FacebookTokenButton);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logo = require('../../../static/images/logo-lg.png');

exports.default = function () {
  return (0, _jsx3.default)('div', {
    className: 'row',
    style: { paddingTop: '10vh' }
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-4 col-md-offset-4'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'panel panel-default'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'panel-body'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'text-center'
  }, void 0, (0, _jsx3.default)('img', {
    src: logo,
    alt: 'logo',
    width: '30%'
  }), (0, _jsx3.default)('h3', {
    style: { color: '#000' }
  }, void 0, 'Quran.com')), (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'login.message',
    'default': 'Sign in to Quran.com to store all your bookmarks, notes and activities.'
  })), (0, _jsx3.default)(_FacebookTokenButton2.default, {})))));
};