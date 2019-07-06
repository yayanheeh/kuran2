'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _expressUseragent = require('express-useragent');

var _expressUseragent2 = _interopRequireDefault(_expressUseragent);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _httpProxy = require('http-proxy');

var _httpProxy2 = _interopRequireDefault(_httpProxy);

var _sitemap = require('./sitemap');

var _sitemap2 = _interopRequireDefault(_sitemap);

var _support = require('./support');

var _support2 = _interopRequireDefault(_support);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var proxyApi = _httpProxy2.default.createProxyServer({
  target: process.env.API_URL,
  secure: true
});

var proxyOneQuran = _httpProxy2.default.createProxyServer({
  target: process.env.ONE_QURAN_URL,
  secure: false,
  proxyTimeout: 15000,
  autoRewrite: true,
  changeOrigin: true
});

proxyApi.on('error', function (error, req, res) {
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error); // eslint-disable-line
  }
  if (!res.headersSent) {
    res.writeHead(500, { 'content-type': 'application/json' });
  }

  var json = { error: 'proxy_error', reason: error.message };
  res.end((0, _stringify2.default)(json));
});

proxyOneQuran.on('error', function (error, req, res) {
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error); // eslint-disable-line
  }
  if (!res.headersSent) {
    res.writeHead(500, { 'content-type': 'application/json' });
  }

  var json = { error: 'proxy_error', reason: error.message };
  res.end((0, _stringify2.default)(json));
});

exports.default = function (server) {
  server.use((0, _morgan2.default)('dev'));
  // Must be first thing. See: https://github.com/nodejitsu/node-http-proxy/issues/180#issuecomment-3677221
  server.use('/onequran', function (req, res) {
    proxyOneQuran.web(req, res);
  });

  server.use('/api', function (req, res) {
    proxyApi.web(req, res);
  });

  server.use((0, _compression2.default)());
  server.use(_bodyParser2.default.json());
  server.use(_expressUseragent2.default.express());
  server.use((0, _cookieParser2.default)());
  server.use((0, _cors2.default)());

  // Static content
  server.use((0, _serveFavicon2.default)(_path2.default.join(process.env.PWD || process.env.pm_cwd, '/static/favicon.ico')));
  server.use(_express2.default.static(_path2.default.join(process.env.PWD || process.env.pm_cwd, '/static')));
  server.use('/public', _express2.default.static(_path2.default.join(process.env.PWD || process.env.pm_cwd, '/static/dist')));

  (0, _sitemap2.default)(server);
  (0, _support2.default)(server);

  server.get(/^\/(images|fonts)\/.*/, function (req, res) {
    res.redirect(301, '//quran-1f14.kxcdn.com' + req.path);
  });
};