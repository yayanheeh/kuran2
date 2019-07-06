'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _clientMiddleware = require('./middleware/clientMiddleware');

var _clientMiddleware2 = _interopRequireDefault(_clientMiddleware);

var _reducer = require('./modules/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */
/* eslint-disable global-require */
function createStore(history, client, data) {
  var middleware = [(0, _clientMiddleware2.default)(client), (0, _reactRouterRedux.routerMiddleware)(history)];

  var finalCreateStore = void 0;
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    var _require = require('redux-devtools'),
        persistState = _require.persistState;

    var DevTools = require('../containers/DevTools').default;

    finalCreateStore = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(), persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))(_redux.createStore);
  } else {
    finalCreateStore = _redux.applyMiddleware.apply(undefined, middleware)(_redux.createStore);
  }

  var store = finalCreateStore(_reducer2.default, data);

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./modules/reducer', function () {
      store.replaceReducer(require('./modules/reducer'));
    });
  }

  return store;
}