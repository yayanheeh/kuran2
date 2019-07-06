'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Provider = require('react-redux/lib/components/Provider');

var _Provider2 = _interopRequireDefault(_Provider);

var _reactIntl = require('react-intl');

var _setLocal = require('helpers/setLocal');

var _setLocal2 = _interopRequireDefault(_setLocal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root(_ref) {
  var store = _ref.store,
      component = _ref.component;
  return (0, _jsx3.default)(_reactIntl.IntlProvider, {
    locale: 'en',
    messages: (0, _setLocal2.default)()
  }, void 0, (0, _jsx3.default)(_Provider2.default, {
    store: store
  }, 'provider', component));
};

Root.propTypes = {
  store: _react.PropTypes.object, // eslint-disable-line
  component: _react.PropTypes.element
};

exports.default = Root;