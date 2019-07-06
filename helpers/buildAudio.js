'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.buildAudioForAyah = buildAudioForAyah;
exports.buildAudioFromHash = buildAudioFromHash;
exports.default = buildAudio;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Audio */
function buildAudioForAyah(audio) {
  var scopedAudio = new Audio();
  var segments = null;

  scopedAudio.preload = 'none';

  if (audio.url) {
    scopedAudio.src = audio.url;
    segments = audio.segments;
    return { audio: scopedAudio, segments: segments };
  }

  return { audio: scopedAudio, segments: segments };
}

function buildAudioFromHash() {
  var ayahsObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var audioFromHash = { files: {}, segments: {} };

  (0, _keys2.default)(ayahsObject).forEach(function (ayahId) {
    var ayah = ayahsObject[ayahId];
    var audioForAyah = buildAudioForAyah(ayah.audio);

    audioFromHash.files[ayahId] = audioForAyah.audio;
    audioFromHash.segments[ayahId] = audioForAyah.segments;
  });

  return audioFromHash;
}

function buildAudio(ayahs) {
  if (!ayahs.length) {
    return false;
  }

  return ayahs.map(function (ayah) {
    return buildAudioForAyah(ayah);
  });
}