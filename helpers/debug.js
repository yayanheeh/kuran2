'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  if (arguments.length === 2) {
    return (0, _debug2.default)('quran:' + (arguments.length <= 0 ? undefined : arguments[0]))(arguments.length <= 1 ? undefined : arguments[1]);
  }

  return (0, _debug2.default)('quran')(arguments.length <= 0 ? undefined : arguments[0]);
};