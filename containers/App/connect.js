'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _auth = require('redux/actions/auth');

var _bookmarks = require('redux/actions/bookmarks');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$store = _ref.store,
      getState = _ref$store.getState,
      dispatch = _ref$store.dispatch;

  var promises = [];

  if ((0, _auth.isLoaded)(getState())) {
    promises.push(dispatch((0, _bookmarks.load)()));
  }

  return _promise2.default.all(promises);
};