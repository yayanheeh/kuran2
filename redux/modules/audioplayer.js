'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_AYAH = exports.NEXT = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends9 = require('babel-runtime/helpers/extends');

var _extends10 = _interopRequireDefault(_extends9);

exports.default = reducer;

var _buildAudio = require('helpers/buildAudio');

var _buildSegments = require('helpers/buildSegments');

var _audioplayer = require('redux/constants/audioplayer.js');

var _verses = require('./verses');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-case-declarations */
exports.NEXT = _audioplayer.NEXT;
exports.SET_AYAH = _audioplayer.SET_AYAH;


var initialState = {
  files: {},
  currentFile: null,
  currentVerse: null,
  currentWord: null,
  currentTime: 0,
  duration: 1,
  isPlaying: false,
  repeat: {
    from: undefined,
    to: undefined,
    times: Infinity
  },
  shouldScroll: true,
  isLoading: true,
  segments: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _verses.CLEAR_CURRENT:
      {
        var stateFilesCurrent = state.files;

        return (0, _extends10.default)({}, state, {
          files: (0, _extends10.default)({}, stateFilesCurrent, (0, _defineProperty3.default)({}, action.id, {}))
        });
      }
    case _verses.LOAD:
      {
        return (0, _extends10.default)({}, state, {
          isLoading: false
        });
      }
    case _audioplayer.LOAD_SUCCESS:
      {
        var data = (0, _buildAudio.buildAudioForAyah)(action.result.audioFile);

        return (0, _extends10.default)({}, state, {
          loaded: true,
          loading: false,
          errored: false,
          files: (0, _extends10.default)({}, state.files, (0, _defineProperty3.default)({}, action.chapterId, (0, _extends10.default)({}, state.files[action.chapterId], (0, _defineProperty3.default)({}, action.verseKey, data.audio)))),
          segments: (0, _extends10.default)({}, state.segments, (0, _defineProperty3.default)({}, action.chapterId, (0, _extends10.default)({}, state.segments[action.chapterId], (0, _defineProperty3.default)({}, action.verseKey, (0, _buildSegments.buildSegments)(data.segments)))))
        });
      }
    case _audioplayer.UPDATE:
      {
        var payload = action.payload;

        return (0, _extends10.default)({}, state, payload);
      }
    case _audioplayer.PLAY:
      {
        return (0, _extends10.default)({}, state, {
          isPlaying: true
        });
      }
    case _audioplayer.PAUSE:
      {
        return (0, _extends10.default)({}, state, {
          isPlaying: false
        });
      }
    case _audioplayer.NEXT:
      {
        var _action$currentVerse$ = action.currentVerse.split(':'),
            _action$currentVerse$2 = (0, _slicedToArray3.default)(_action$currentVerse$, 2),
            chapterId = _action$currentVerse$2[0],
            ayahNum = _action$currentVerse$2[1];

        var nextId = chapterId + ':' + (parseInt(ayahNum, 10) + 1);

        return (0, _extends10.default)({}, state, {
          currentVerse: nextId,
          currentFile: state.files[chapterId][nextId],
          currentTime: 0
        });
      }
    case _audioplayer.PREVIOUS:
      {
        var _action$currentVerse$3 = action.currentVerse.split(':'),
            _action$currentVerse$4 = (0, _slicedToArray3.default)(_action$currentVerse$3, 2),
            _chapterId = _action$currentVerse$4[0],
            _ayahNum = _action$currentVerse$4[1];

        var _nextId = _chapterId + ':' + (parseInt(_ayahNum, 10) - 1);

        return (0, _extends10.default)({}, state, {
          currentVerse: _nextId,
          currentFile: state.files[_chapterId][_nextId],
          currentTime: 0
        });
      }
    case _audioplayer.SET_AYAH:
      {
        var _action$currentVerse$5 = action.currentVerse.split(':'),
            _action$currentVerse$6 = (0, _slicedToArray3.default)(_action$currentVerse$5, 2),
            _chapterId2 = _action$currentVerse$6[0],
            _ayahNum2 = _action$currentVerse$6[1];

        var currentVerse = _chapterId2 + ':' + parseInt(_ayahNum2, 10);
        var currentFile = state.files[_chapterId2][currentVerse];

        return (0, _extends10.default)({}, state, {
          currentVerse: currentVerse,
          currentFile: currentFile,
          currentTime: 0
        });
      }
    case _audioplayer.SET_REPEAT:
      {
        var repeat = action.repeat;

        return (0, _extends10.default)({}, state, {
          repeat: repeat
        });
      }
    case _audioplayer.TOGGLE_SCROLL:
      {
        return (0, _extends10.default)({}, state, {
          shouldScroll: !state.shouldScroll
        });
      }
    case _audioplayer.SET_CURRENT_FILE:
      {
        return (0, _extends10.default)({}, state, {
          currentFile: action.file
        });
      }
    case _audioplayer.SET_CURRENT_WORD:
      {
        if (!action.word) return state;
        var currentTime = null;

        var _action$word$split = action.word.split(':'),
            _action$word$split2 = (0, _slicedToArray3.default)(_action$word$split, 3),
            _chapterId3 = _action$word$split2[0],
            _ayahNum3 = _action$word$split2[1],
            word = _action$word$split2[2];

        var _nextId2 = _chapterId3 + ':' + _ayahNum3;
        if (!state.segments[_chapterId3][_nextId2]) return state;
        if (state.files[_chapterId3][_nextId2] === state.currentFile) {
          // When the files are the same, set the current time to that word
          currentTime = state.segments[_chapterId3][_nextId2].words[word].startTime;
          state.currentFile.currentTime = currentTime; // eslint-disable-line no-param-reassign

          return (0, _extends10.default)({}, state, {
            currentWord: action.word,
            currentTime: currentTime
          });
        }

        // When the files are not the same.
        var _currentFile = state.files[_chapterId3][_nextId2];
        var segment = (0, _buildSegments.buildSegments)(state.segments[_chapterId3][_nextId2]);
        currentTime = segment.words[word].startTime;
        _currentFile.currentTime = currentTime;
        var stateSegments = state.segments;
        var stateSegmentsId = state.segments[_chapterId3];

        return (0, _extends10.default)({}, state, {
          currentWord: action.word,
          currentVerse: _nextId2,
          isPlaying: false,
          currentTime: currentTime,
          currentFile: _currentFile,
          segments: (0, _extends10.default)({}, stateSegments, (0, _defineProperty3.default)({}, _chapterId3, (0, _extends10.default)({}, stateSegmentsId, (0, _defineProperty3.default)({}, _nextId2, segment))))
        });
      }
    case _audioplayer.PLAY_CURRENT_WORD:
      {
        if (!action.payload) return state;

        var _action$payload = action.payload,
            _word = _action$payload.word,
            position = _action$payload.position;

        var _word$verseKey$split = _word.verseKey.split(':'),
            _word$verseKey$split2 = (0, _slicedToArray3.default)(_word$verseKey$split, 2),
            _chapterId4 = _word$verseKey$split2[0],
            _ayahNum4 = _word$verseKey$split2[1];

        var _nextId3 = _chapterId4 + ':' + _ayahNum4;
        var _currentFile2 = state.files[_chapterId4][_nextId3];

        if (!state.segments[_chapterId4][_nextId3].words[position]) return state;

        var _currentTime = state.segments[_chapterId4][_nextId3].words[position].startTime;

        var endTime = state.segments[_chapterId4][_nextId3].words[position].endTime;
        _currentFile2.currentTime = _currentTime;

        var int = setInterval(function () {
          if (_currentFile2.currentTime > endTime) {
            _currentFile2.pause();
            clearInterval(int);
          }
        }, 10);
        _currentFile2.play();

        return (0, _extends10.default)({}, state, {
          currentWord: _word
        });
      }
    case _verses.SET_CURRENT_VERSE:
      {
        return (0, _extends10.default)({}, state, {
          currentVerse: action.id
        });
      }
    default:
      {
        return state;
      }
  }
}