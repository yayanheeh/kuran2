"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global document, window */
exports.default = {
  scrollTo: function scrollTo(name) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var node = document.getElementsByName(name)[0];

    if (!node) {
      console.warn("node [name=" + name + "] not found, could not scroll"); // eslint-disable-line
      return;
    }

    var nodeRect = node.getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    var scrollOffset = nodeRect.top - bodyRect.top + offset;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // Only scroll if item is not already on screen.
    // If an item is larger than the screen, don't scroll to the top of it if it's already filling
    // the screen.
    if (scrollOffset < scrollTop !== scrollOffset + nodeRect.height > scrollTop + viewportHeight + offset) {
      window.scrollTo(0, scrollOffset);
    }
  }
};