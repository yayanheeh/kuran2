'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

exports.default = serve;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _prettyError = require('pretty-error');

var _prettyError2 = _interopRequireDefault(_prettyError);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _reduxConnect = require('redux-connect');

var _createMemoryHistory = require('react-router/lib/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _reactRedux = require('react-redux');

var _reactIntl = require('react-intl');

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _raven = require('raven');

var _raven2 = _interopRequireDefault(_raven);

var _errorhandler = require('errorhandler');

var _errorhandler2 = _interopRequireDefault(_errorhandler);

var _htmlPdf = require('html-pdf');

var _htmlPdf2 = _interopRequireDefault(_htmlPdf);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _express3 = require('./server/config/express');

var _express4 = _interopRequireDefault(_express3);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _ApiClient = require('./helpers/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _create = require('./redux/create');

var _create2 = _interopRequireDefault(_create);

var _debug = require('./helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

var _Html = require('./helpers/Html');

var _Html2 = _interopRequireDefault(_Html);

var _PdfHtml = require('./helpers/PdfHtml');

var _PdfHtml2 = _interopRequireDefault(_PdfHtml);

var _options = require('./redux/actions/options.js');

var _setLocal = require('./helpers/setLocal');

var _setLocal2 = _interopRequireDefault(_setLocal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pretty = new _prettyError2.default(); /* global webpack_isomorphic_tools */

var server = (0, _express2.default)();
_raven2.default.config(_config2.default.sentryServer, {
  captureUnhandledRejections: true,
  autoBreadcrumbs: true
}).install();

(0, _express4.default)(server);

server.use(_raven2.default.requestHandler());

server.use(function (req, res, next) {
  _reactCookie2.default.plugToRequest(req, res);
  var client = new _ApiClient2.default(req);
  var history = (0, _createMemoryHistory2.default)(req.originalUrl);
  var store = (0, _create2.default)(history, client);
  var localMessages = (0, _setLocal2.default)(req);

  if (process.env.NODE_ENV === 'development') {
    webpack_isomorphic_tools.refresh();
  }

  if (req.query.DISABLE_SSR) {
    return res.status(200).send('<!doctype html>\n' + _server2.default.renderToString((0, _jsx3.default)(_reactIntl.IntlProvider, {
      locale: 'en',
      messages: localMessages
    }, void 0, (0, _jsx3.default)(_Html2.default, {
      store: store,
      assets: webpack_isomorphic_tools.assets()
    }))));
  }

  store.dispatch((0, _options.setUserAgent)(req.useragent));
  store.dispatch((0, _options.setOption)(_reactCookie2.default.load('options') || {}));
  (0, _debug2.default)('Server', 'Executing navigate action');

  (0, _reactRouter.match)({ history: history, routes: (0, _routes2.default)(store), location: req.originalUrl }, function (error, redirectLocation, renderProps) {
    (0, _debug2.default)('Server', 'Route match callback');

    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500).send(error);
    } else if (renderProps) {
      var status = renderProps.location.pathname.indexOf('/error') > -1 ? 404 : 200;

      (0, _reduxConnect.loadOnServer)((0, _extends3.default)({}, renderProps, { store: store, helpers: { client: client } })).then(function () {
        var component = (0, _jsx3.default)(_reactIntl.IntlProvider, {
          messages: localMessages,
          locale: 'en'
        }, void 0, (0, _jsx3.default)(_reactRedux.Provider, {
          store: store
        }, void 0, _react2.default.createElement(_reduxConnect.ReduxAsyncConnect, renderProps)));

        res.type('html');
        res.setHeader('Cache-Control', 'public, max-age=31557600');
        res.status(status);
        (0, _debug2.default)('Server', 'Sending markup');

        if (req.originalUrl.includes('.pdf')) {
          var body = _server2.default.renderToString((0, _jsx3.default)(_PdfHtml2.default, {
            url: req.protocol + '://' + req.get('host'),
            component: component,
            assets: webpack_isomorphic_tools.assets()
          }));
          var _html = '<!doctype html>\n' + body;

          return _htmlPdf2.default.create(_html).toStream(function (err, stream) {
            if (err) {
              res.status(422).send(err);
            }

            res.set('Content-type', 'application/pdf');
            // NOTE: If you want to export a file.
            // res.set('Content-disposition', 'attachment; filename=pdf.pdf');
            stream.pipe(res);
          });
        }

        var html = '<!doctype html>\n' + _server2.default.renderToString((0, _jsx3.default)(_Html2.default, {
          component: component,
          store: store,
          assets: webpack_isomorphic_tools.assets()
        }));

        return res.send(html);
      }).catch(next);
    }
  });

  return false;
});

server.use(_raven2.default.errorHandler());

if (process.env.NODE_ENV === 'development') {
  // only use in development
  server.use((0, _errorhandler2.default)());
} else {
  server.use(function (req, res) {
    res.status(500);
    res.send('OOPS');
  });
}

var port = process.env.PORT || 8000;

function serve(cb) {
  var _this = this;

  return server.listen(port, function () {
    console.info('==> \uD83C\uDF0E  ENV=' + process.env.NODE_ENV);
    console.info('==> \u2705  Server is listening at http://localhost:' + port);
    console.info('==> \uD83C\uDFAF  API at ' + process.env.API_URL);
    (0, _keys2.default)(_config2.default).forEach(function (key) {
      return _config2.default[key].constructor.name !== 'Object' && console.info('==> ' + key, _config2.default[key]);
    });

    return cb && cb(_this);
  });
}