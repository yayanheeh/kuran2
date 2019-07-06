"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOffset;
function getOffset(element) {
  var elem = element;
  var offsetLeft = 0;
  var offsetTop = 0;

  do {
    if (!isNaN(elem.offsetLeft)) {
      offsetLeft += elem.offsetLeft;
      offsetTop += elem.offsetTop;
    }
    elem = elem.offsetParent;
  } while (elem);

  return { left: offsetLeft, top: offsetTop };
}