'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _Router = require('react-router/lib/Router');

var _Router2 = _interopRequireDefault(_Router);

var _match = require('react-router/lib/match');

var _match2 = _interopRequireDefault(_match);

var _browserHistory = require('react-router/lib/browserHistory');

var _browserHistory2 = _interopRequireDefault(_browserHistory);

var _applyRouterMiddleware = require('react-router/lib/applyRouterMiddleware');

var _applyRouterMiddleware2 = _interopRequireDefault(_applyRouterMiddleware);

var _reactRouterScroll = require('react-router-scroll');

var _reactRouterScroll2 = _interopRequireDefault(_reactRouterScroll);

var _reduxConnect = require('redux-connect');

var _reactRouterRedux = require('react-router-redux');

var _reactHotLoader = require('react-hot-loader');

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _ApiClient = require('./helpers/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _create = require('./redux/create');

var _create2 = _interopRequireDefault(_create);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _Root = require('./containers/Root');

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _ApiClient2.default(); /* global document, window, $ */

var store = (0, _create2.default)(_browserHistory2.default, client, window.reduxData);
var history = (0, _reactRouterRedux.syncHistoryWithStore)(_browserHistory2.default, store);

try {
  Raven.config(_config2.default.sentryClient).install();
} catch (error) {
  (0, _debug2.default)('client', error);
}

window.quranDebug = _debug2.default;
window.ReactDOM = _reactDom2.default; // For chrome dev tool support
window.store = store;

window.clearCookies = function () {
  _reactCookie2.default.remove('quran');
  _reactCookie2.default.remove('content');
  _reactCookie2.default.remove('audio');
  _reactCookie2.default.remove('isFirstTime');
  _reactCookie2.default.remove('currentLocale');
  _reactCookie2.default.remove('smartbanner-closed');
  _reactCookie2.default.remove('smartbanner-installed');
};

(0, _match2.default)({ history: history, routes: (0, _routes2.default)(store) }, function (error, redirectLocation, renderProps) {
  var component = _react2.default.createElement(_Router2.default, (0, _extends3.default)({}, renderProps, {
    render: function render(props) {
      return _react2.default.createElement(_reduxConnect.ReduxAsyncConnect, (0, _extends3.default)({}, props, {
        helpers: { client: client },
        render: (0, _applyRouterMiddleware2.default)((0, _reactRouterScroll2.default)())
      }));
    }
  }));

  var mountNode = document.getElementById('app');

  (0, _debug2.default)('client', 'React Rendering');

  _reactDom2.default.render((0, _jsx3.default)(_reactHotLoader.AppContainer, {}, void 0, (0, _jsx3.default)(_Root2.default, {
    component: component,
    store: store
  })), mountNode, function () {
    (0, _debug2.default)('client', 'React Rendered');
  });

  if (module.hot) {
    module.hot.accept('./containers/Root', function () {
      var NextRoot = require('./containers/Root'); // eslint-disable-line global-require

      _reactDom2.default.render((0, _jsx3.default)(_reactHotLoader.AppContainer, {}, void 0, (0, _jsx3.default)(NextRoot, {
        store: store,
        component: component
      })), document.getElementById('root'));
    });
  }
});