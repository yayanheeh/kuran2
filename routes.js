'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IndexRoute = require('react-router/lib/IndexRoute');

var _IndexRoute2 = _interopRequireDefault(_IndexRoute);

var _Route = require('react-router/lib/Route');

var _Route2 = _interopRequireDefault(_Route);

var _Redirect = require('react-router/lib/Redirect');

var _Redirect2 = _interopRequireDefault(_Redirect);

var _auth = require('redux/actions/auth');

var _routeFilters = require('./utils/routeFilters');

var _routeFilters2 = _interopRequireDefault(_routeFilters);

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./containers/Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len, no-console */
exports.default = function (store) {
  var requireLogin = function requireLogin(nextState, replace, cb) {
    function checkAuth() {
      var _store$getState = store.getState(),
          user = _store$getState.auth.user;

      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/');
      }
      cb();
    }

    if (!(0, _auth.isLoaded)(store.getState())) {
      store.dispatch((0, _auth.load)()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

  var shouldAuth = function shouldAuth(nextState, replace, cb) {
    if (!(0, _auth.isLoaded)(store.getState()) && (0, _auth.hasAccessToken)()) {
      return store.dispatch((0, _auth.load)()).then(function () {
        return cb();
      });
    }

    return cb();
  };

  return (0, _jsx3.default)(_Route2.default, {
    path: '/',
    component: _App2.default,
    onEnter: shouldAuth
  }, void 0, (0, _jsx3.default)(_IndexRoute2.default, {
    components: _Home2.default
  }), (0, _jsx3.default)(_Route2.default, {
    path: '/donations',
    getComponent: function getComponent(nextState, cb) {
      return _promise2.default.resolve(require(( /* webpackChunkName: "donations" */'./containers/Donations'))).then(function (module) {
        return cb(null, module.default);
      }).catch(function (err) {
        return console.trace(err);
      });
    }
  }), (0, _jsx3.default)(_Route2.default, {
    path: '/contributions',
    getComponent: function getComponent(nextState, cb) {
      return _promise2.default.resolve(require((
      /* webpackChunkName: "contributions" */'./containers/Donations'))).then(function (module) {
        return cb(null, module.default);
      }).catch(function (err) {
        return console.trace(err);
      });
    }
  }), (0, _jsx3.default)(_Route2.default, {
    path: '/about',
    getComponent: function getComponent(nextState, cb) {
      return _promise2.default.resolve(require(( /* webpackChunkName: "about" */'./containers/About'))).then(function (module) {
        return cb(null, module.default);
      }).catch(function (err) {
        return console.trace(err);
      });
    }
  }), (0, _jsx3.default)(_Route2.default, {
    path: '/contact',
    getComponent: function getComponent(nextState, cb) {
      return _promise2.default.resolve(require(( /* webpackChunkName: "contact" */'./containers/Contact'))).then(function (module) {
        return cb(null, module.default);
      }).catch(function (err) {
        return console.trace(err);
      });
    }
  }), (0, _jsx3.default)(_Route2.default, {
    path: '/contactus',
    getComponent: function getComponent(nextState, cb) {
      return _promise2.default.resolve(require(( /* webpackChunkName: "contactus" */'./containers/Contact'))).then(function (module) {
        return cb(null, module.default);
      }).catch(function (err) {
        return console.trace(err);
      });
    }
  }), (0, _jsx3.default)(_Route2.default, {
    path: '/mobile',
    getComponent: function getComponent(nextState, cb) {
      return _promise2.default.resolve(require(( /* webpackChunkName: "mobile" */'./containers/MobileLanding'))).then(function (module) {
        return cb(null, module.default);
      }).catch(function (err) {
        return console.trace(err);
      });
    }
  }), (0, _jsx3.default)(_Route2.default, {
    path: '/apps',
    getComponent: function getComponent(nextState, cb) {
      return _promise2.default.resolve(require(( /* webpackChunkName: "apps" */'./containers/MobileLanding'))).then(function (module) {
        return cb(null, module.default);
      }).catch(function (err) {
        return console.trace(err);
      });
    }
  }), (0, _jsx3.default)(_Route2.default, {
    path: '/error/:errorKey',
    getComponent: function getComponent(nextState, cb) {
      return _promise2.default.resolve(require(( /* webpackChunkName: "error" */'./containers/Error'))).then(function (module) {
        return cb(null, module.default);
      }).catch(function (err) {
        return console.trace(err);
      });
    }
  }), (0, _jsx3.default)(_Route2.default, {
    path: '/search',
    getComponent: function getComponent(nextState, cb) {
      return _promise2.default.resolve(require(( /* webpackChunkName: "search" */'./containers/Search'))).then(function (module) {
        return cb(null, module.default);
      }).catch(function (err) {
        return console.trace(err);
      });
    }
  }), (0, _jsx3.default)(_Route2.default, {
    path: '/login',
    getComponent: function getComponent(nextState, cb) {
      return _promise2.default.resolve(require(( /* webpackChunkName: "login" */'./containers/Login'))).then(function (module) {
        return cb(null, module.default);
      }).catch(function (err) {
        return console.trace(err);
      });
    }
  }), (0, _jsx3.default)(_Route2.default, {
    onEnter: requireLogin
  }, void 0, (0, _jsx3.default)(_Route2.default, {
    path: '/profile',
    getComponent: function getComponent(nextState, cb) {
      return _promise2.default.resolve(require(( /* webpackChunkName: "profile" */'./containers/Profile'))).then(function (module) {
        return cb(null, module.default);
      }).catch(function (err) {
        return console.trace(err);
      });
    }
  })), (0, _jsx3.default)(_Route2.default, {
    path: '/:chapterId/info(/:language)',
    getComponents: function getComponents(nextState, cb) {
      return _promise2.default.resolve(require((
      /* webpackChunkName: "chapterinfo" */'./containers/ChapterInfo'))).then(function (module) {
        return cb(null, module.default);
      }).catch(function (err) {
        return console.trace(err);
      });
    },
    onEnter: _routeFilters2.default
  }), (0, _jsx3.default)(_Route2.default, {
    path: '/ayatul-kursi',
    getComponents: function getComponents(nextState, cb) {
      return _promise2.default.resolve(require((
      /* webpackChunkName: "ayatulkursi" */'./containers/AyatulKursi'))).then(function (module) {
        return cb(null, module.default);
      }).catch(function (err) {
        return console.trace(err);
      });
    }
  }), (0, _jsx3.default)(_Route2.default, {
    path: '/:chapterId/:range/:translations',
    getComponents: function getComponents(nextState, cb) {
      return _promise2.default.all([_promise2.default.resolve(require(('./containers/Surah'))), _promise2.default.resolve(require(('./components/GlobalNav/Surah')))]).then(function (modules) {
        return cb(null, { main: modules[0].default, nav: modules[1].default });
      }).catch(function (err) {
        return console.trace(err);
      });
    },
    onEnter: _routeFilters2.default
  }), (0, _jsx3.default)(_Redirect2.default, {
    from: '/:chapterId:(:range)',
    to: '/:chapterId(/:range)'
  }), (0, _jsx3.default)(_Redirect2.default, {
    from: '/:chapterId/:from::to',
    to: '/:chapterId/:from-:to'
  }), (0, _jsx3.default)(_Route2.default, {
    path: '/:chapterId(/:range).pdf',
    getComponents: function getComponents(nextState, cb) {
      return _promise2.default.all([_promise2.default.resolve(require(( /* webpackChunkName: "pdf" */'./containers/Pdf'))), _promise2.default.resolve(require((
      /* webpackChunkName: "pdf-footer" */'./components/Footer/PdfFooter')))]).then(function (modules) {
        return cb(null, {
          main: modules[0].default,
          footer: modules[1].default,
          nav: 'noscript'
        });
      }).catch(function (err) {
        return console.trace(err);
      });
    },
    onEnter: _routeFilters2.default
  }), (0, _jsx3.default)(_Route2.default, {
    path: '/:chapterId(/:range)',
    getComponents: function getComponents(nextState, cb) {
      return _promise2.default.all([_promise2.default.resolve(require(( /* webpackChunkName: "surah" */'./containers/Surah'))), _promise2.default.resolve(require((
      /* webpackChunkName: "globalnav-surah" */'./components/GlobalNav/Surah')))]).then(function (modules) {
        return cb(null, { main: modules[0].default, nav: modules[1].default });
      }).catch(function (err) {
        return console.trace(err);
      });
    },
    onEnter: _routeFilters2.default
  }));
};