'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.save = undefined;
exports.isLoaded = isLoaded;
exports.load = load;
exports.facebook = facebook;
exports.logout = logout;
exports.hasAccessToken = hasAccessToken;

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _auth = require('redux/constants/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLoaded(globalState) {
  return globalState.auth && globalState.auth.user;
}

function load() {
  return {
    types: [_auth.LOAD, _auth.LOAD_SUCCESS, _auth.LOAD_FAILURE],
    promise: function promise(client) {
      return client.get('/onequran/auth/validate_token');
    }
  };
}

function facebook() {
  return {
    types: [_auth.FACEBOOK, _auth.FACEBOOK_SUCCESS, _auth.FACEBOOK_FAILURE]
  };
}

var save = exports.save = function save(data) {
  return {
    type: _auth.SAVE,
    data: data
  };
};

function logout() {
  return {
    type: _auth.LOGOUT_SUCCESS
  };
}

function hasAccessToken() {
  return !!_reactCookie2.default.load('accessToken');
}