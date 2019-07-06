'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IndexHeader = require('components/IndexHeader');

var _IndexHeader2 = _interopRequireDefault(_IndexHeader);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var error = {
  'invalid-surah': "Surah is out of range. Please go to <a href='/'> home page</a> and select a Surah",
  'invalid-ayah': "Ayah is out of range. Please go to <a href='/'> home page </a> and select a Surah/Ayah"
};

var ErrorPage = function ErrorPage(_ref) {
  var params = _ref.params;
  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_reactHelmet2.default, {
    title: 'Error ' + error[params.errorKey]
  }), (0, _jsx3.default)(_IndexHeader2.default, {
    noSearch: true
  }), (0, _jsx3.default)('div', {
    className: 'container-fluid about-text'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-8 col-md-offset-2'
  }, void 0, (0, _jsx3.default)('h4', {
    className: 'source-sans text-center'
  }, void 0, (0, _jsx3.default)(_reactIntl.FormattedHTMLMessage, {
    id: 'error.' + params.errorKey,
    defaultMessage: error[params.errorKey]
  }))))));
};

ErrorPage.propTypes = {
  params: _react.PropTypes.string.isRequired
};

exports.default = ErrorPage;