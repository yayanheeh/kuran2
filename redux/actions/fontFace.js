'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fontFace = require('redux/constants/fontFace.js');

var _fontFace2 = _interopRequireDefault(_fontFace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (className) {
  return {
    type: _fontFace2.default,
    className: className
  };
};