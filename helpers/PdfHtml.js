'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PdfHtml = function PdfHtml(_ref) {
  var component = _ref.component,
      assets = _ref.assets,
      url = _ref.url;

  var content = component ? _server2.default.renderToString(component) : '';
  var head = _reactHelmet2.default.rewind();

  return (0, _jsx3.default)('html', {
    lang: 'en'
  }, void 0, (0, _jsx3.default)('head', {}, void 0, head.title.toComponent(), head.meta.toComponent(), head.link.toComponent(), head.script.toComponent(), head.style.toComponent(), (0, _jsx3.default)('base', {
    href: url
  }), (0, _keys2.default)(assets.styles).map(function (style, i) {
    return (0, _jsx3.default)('link', {
      href: assets.styles[style],
      rel: 'stylesheet',
      type: 'text/css'
    }, i);
  }), (0, _keys2.default)(assets.styles).length === 0 ? (0, _jsx3.default)('style', {
    dangerouslySetInnerHTML: {
      __html: require('../../src/styles/bootstrap.config')
    }
  }) : null, (0, _keys2.default)(assets.javascript).map(function (script, i) {
    return (0, _jsx3.default)('script', {
      src: assets.javascript[script]
    }, i);
  }), (0, _jsx3.default)('style', {}, void 0, '\n          body{ zoom: 75%;}\n        ')), (0, _jsx3.default)('body', {}, void 0, (0, _jsx3.default)('div', {
    id: 'app',
    dangerouslySetInnerHTML: { __html: content }
  })));
}; /* eslint-disable global-require, quotes, max-len */


PdfHtml.propTypes = {
  store: _react.PropTypes.object, // eslint-disable-line
  assets: _react.PropTypes.object, // eslint-disable-line
  component: _react.PropTypes.element,
  url: _react.PropTypes.string.isRequired
};

exports.default = PdfHtml;