'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reselect = require('reselect');

exports.default = (0, _reselect.createSelector)(function (state) {
  return state.fontFaces;
}, function (fontFaces) {
  return fontFaces;
});