'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _humps = require('humps');

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methods = ['get', 'post', 'put', 'patch', 'del'];

function contentLanguage() {
  return _reactCookie2.default.load('currentLocale') || _config2.default.defaultLocale;
}

function formatUrl(path) {
  var adjustedPath = path[0] !== '/' ? '/' + path : path;

  if (__SERVER__) {
    if (adjustedPath.startsWith('/onequran')) {
      return _config2.default.oneQuran + adjustedPath.replace('/onequran', '');
    }

    return '' + _config2.default.api + adjustedPath;
  }

  if (adjustedPath.startsWith('/onequran')) {
    return adjustedPath;
  }

  return '/api' + adjustedPath;
}

var _default = function _default(req) {
  var _this = this;

  (0, _classCallCheck3.default)(this, _default);

  methods.forEach(function (method) {
    _this[method] = function (path) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          params = _ref.params,
          data = _ref.data,
          arrayFormat = _ref.arrayFormat;

      return new _promise2.default(function (resolve, reject) {
        var request = _superagent2.default[method](formatUrl(path));

        params = params || {}; // eslint-disable-line no-param-reassign

        params.language = params.language || contentLanguage(); // eslint-disable-line

        request.query(_qs2.default.stringify((0, _humps.decamelizeKeys)(params), {
          arrayFormat: arrayFormat || 'brackets'
        }));

        if (_reactCookie2.default.load('auth')) {
          var headers = _reactCookie2.default.load('auth');
          (0, _keys2.default)(headers).forEach(function (key) {
            return request.set(key, headers[key]);
          });
        }

        if (__SERVER__ && req.get('cookie')) {
          request.set('cookie', req.get('cookie'));
        }

        if (data) {
          request.send((0, _humps.decamelizeKeys)(data));
        }

        request.end(function (err) {
          var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              header = _ref2.header,
              body = _ref2.body;

          if (err) {
            return reject(body || err);
          }

          if (header['access-token']) {
            _reactCookie2.default.save('auth', {
              'access-token': header['access-token'],
              client: header.client,
              expiry: header.expiry,
              uid: header.uid,
              'token-type': 'Bearer'
            });
          }

          return resolve(body);
        });
      });
    };
  });
};

exports.default = _default;