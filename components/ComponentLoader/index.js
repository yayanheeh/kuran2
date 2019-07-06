'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentLoader = function ComponentLoader(_ref) {
  var isLoading = _ref.isLoading,
      error = _ref.error,
      pastDelay = _ref.pastDelay;

  if (isLoading) {
    return pastDelay ? (0, _jsx3.default)('noscript', {}) : null;
  } else if (error) {
    return (0, _jsx3.default)('div', {}, void 0, 'Error! Component failed to load');
  }

  return null;
};

ComponentLoader.propTypes = {
  isLoading: _react.PropTypes.bool,
  error: _react.PropTypes.any, // eslint-disable-line
  pastDelay: _react.PropTypes.bool
};

exports.default = ComponentLoader;