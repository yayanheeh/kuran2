'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = reducer;

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _auth = require('redux/constants/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  loaded: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _auth.SAVE:
      {
        _reactCookie2.default.save('auth', {
          client: action.data.client_id,
          expiry: action.data.expiry,
          uid: action.data.uid,
          'access-token': action.data.auth_token,
          'token-type': 'Bearer'
        });

        return (0, _extends3.default)({}, state, {
          loading: false,
          loaded: true,
          user: action.data
        });
      }
    case _auth.LOAD_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        user: action.result.user
      });
    case _auth.FACEBOOK_SUCCESS:
      _reactCookie2.default.save('accessToken', action.result.user.accessToken);

      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        user: action.result.user
      });
    case _auth.FACEBOOK_FAILURE:
    case _auth.LOAD_FAILURE:
    case _auth.LOGOUT_SUCCESS:
      _reactCookie2.default.remove('accessToken');

      return (0, _extends3.default)({}, state, {
        loggingOut: false,
        loaded: false,
        loading: false,
        user: null
      });
    default:
      return state;
  }
}