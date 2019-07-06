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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PdfFooter = function PdfFooter() {
  return (0, _jsx3.default)('footer', {}, void 0, (0, _jsx3.default)('div', {
    className: 'container'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-12'
  }, void 0, (0, _jsx3.default)('p', {
    className: 'text-center'
  }, void 0, 'This PDF is exported from ', ' ', (0, _jsx3.default)(_Link2.default, {
    to: 'https://quran.com'
  }, void 0, 'Quran.com'))))));
};

exports.default = PdfFooter;