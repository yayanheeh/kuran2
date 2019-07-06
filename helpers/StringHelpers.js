'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zeroPad = zeroPad;
function zeroPad(num, places) {
  var padChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  // eslint-disable-line
  var zero = places - num.toString().length + 1;

  return Array(+(zero > 0 && zero)).join(padChar) + num;
}