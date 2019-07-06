"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractSegments = exports.buildSegments = undefined;

var _values = require("babel-runtime/core-js/object/values");

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildSegments = exports.buildSegments = function buildSegments(segments) {
  var words = {};
  var intervals = segments.map(function (segment) {
    var startTime = segment[2];
    var endTime = segment[3];
    var duration = segment[3] - segment[2];
    var wordIndex = segment[0];
    var mappedVal = {
      startTime: startTime / 1000,
      endTime: endTime / 1000,
      duration: duration / 1000
    };

    if (wordIndex >= 0 && !words[wordIndex]) {
      words[wordIndex] = mappedVal;
    }

    return [startTime / 1000, endTime / 1000, wordIndex];
  });

  return { words: words, intervals: intervals };
};

var extractSegments = exports.extractSegments = function extractSegments(verses) {
  var segments = {};

  if (verses) {
    (0, _values2.default)(verses).forEach(function (verse) {
      if (verse.audio) {
        if (verse.audio.segments) {
          segments[verse.verseKey] = buildSegments(verse.audio.segments);
        }
      }
    });
  }

  return segments;
};