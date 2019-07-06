'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoScript = function NoScript(props) {
  var staticMarkup = _server2.default.renderToStaticMarkup(props.children);
  return (0, _jsx3.default)('noscript', {
    dangerouslySetInnerHTML: { __html: staticMarkup }
  });
};

NoScript.propTypes = {
  children: _react.PropTypes.element
};

exports.default = NoScript;