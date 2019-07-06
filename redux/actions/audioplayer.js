'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCurrentFile = setCurrentFile;
exports.setCurrentWord = setCurrentWord;
exports.playCurrentWord = playCurrentWord;
exports.play = play;
exports.pause = pause;
exports.next = next;
exports.setAyah = setAyah;
exports.previous = previous;
exports.setRepeat = setRepeat;
exports.toggleScroll = toggleScroll;
exports.buildOnClient = buildOnClient;
exports.update = update;
exports.load = load;
exports.isLoaded = isLoaded;

var _audioplayer = require('redux/constants/audioplayer.js');

function setCurrentFile(file) {
  return {
    type: _audioplayer.SET_CURRENT_FILE,
    file: file
  };
}

function setCurrentWord(word) {
  return {
    type: _audioplayer.SET_CURRENT_WORD,
    word: word
  };
}

function playCurrentWord(payload) {
  return {
    type: _audioplayer.PLAY_CURRENT_WORD,
    payload: payload
  };
}

function play() {
  return {
    type: _audioplayer.PLAY
  };
}

function pause() {
  return {
    type: _audioplayer.PAUSE
  };
}

function next(currentVerse) {
  return {
    type: _audioplayer.NEXT,
    currentVerse: currentVerse
  };
}

function setAyah(currentVerse) {
  return {
    type: _audioplayer.SET_AYAH,
    currentVerse: currentVerse
  };
}

function previous(currentVerse) {
  return {
    type: _audioplayer.PREVIOUS,
    currentVerse: currentVerse
  };
}

function setRepeat(repeat) {
  return {
    type: _audioplayer.SET_REPEAT,
    repeat: repeat
  };
}

function toggleScroll() {
  return {
    type: _audioplayer.TOGGLE_SCROLL
  };
}

function buildOnClient(chapterId) {
  return {
    type: _audioplayer.BUILD_ON_CLIENT,
    chapterId: chapterId
  };
}

function update(payload) {
  return {
    type: _audioplayer.UPDATE,
    payload: payload
  };
}

function load(_ref) {
  var chapterId = _ref.chapterId,
      verseId = _ref.verseId,
      verseKey = _ref.verseKey,
      audio = _ref.audio;

  // eslint-disable-line
  return {
    types: [_audioplayer.LOAD, _audioplayer.LOAD_SUCCESS, _audioplayer.LOAD_FAIL],
    promise: function promise(client) {
      return client.get('/api/v3/chapters/' + chapterId + '/verses/' + verseId + '/audio_files', {
        params: {
          recitation: audio || 7 // NOTE: default, but should never be used
        }
      });
    },
    verseKey: verseKey,
    chapterId: chapterId
  };
}

function isLoaded(files, verse) {
  return files[verse.chapterId][verse.verseKey];
}