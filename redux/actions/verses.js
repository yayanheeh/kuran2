'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.load = load;
exports.clearCurrent = clearCurrent;
exports.clearCurrentWord = clearCurrentWord;
exports.setCurrentVerse = setCurrentVerse;
exports.setCurrentWord = setCurrentWord;
exports.isLoaded = isLoaded;

var _schemas = require('redux/schemas');

var _verses = require('redux/constants/verses.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: For safe measure
var defaultOptions = {
  translations: [20]
};

// NOTE: From the API!
var perPage = 10;

function prepareParams(params, options) {
  // NOTE: first priority to options in URL, second to options and lastly fallback to defaultOptions
  var translations = void 0;

  if (params.translations && params.translations.length) {
    translations = typeof params.translations === 'string' ? params.translations.split(',') : params.translations;
  } else {
    translations = options.translations || defaultOptions.translations;
  }

  return { translations: translations };
}

function load(id, paging, params) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultOptions;

  var apiOptions = prepareParams(params, options);

  // TODO: move this to module/verses
  // cookie.save('lastVisit', JSON.stringify({ chapterId: id, verseId: from }));

  return {
    types: [_verses.LOAD, _verses.LOAD_SUCCESS, _verses.LOAD_FAIL],
    schema: { verses: [_schemas.versesSchema] },
    promise: function promise(client) {
      return client.get('/api/v3/chapters/' + id + '/verses', {
        params: (0, _extends3.default)({}, paging, apiOptions)
      });
    },
    chapterId: id
  };
}

function clearCurrent(id) {
  return {
    type: _verses.CLEAR_CURRENT,
    id: id
  };
}

function clearCurrentWord() {
  return {
    type: _verses.CLEAR_CURRENT_WORD
  };
}

function setCurrentVerse(id) {
  return {
    type: _verses.SET_CURRENT_VERSE,
    id: id
  };
}

function setCurrentWord(id) {
  return {
    type: _verses.SET_CURRENT_WORD,
    id: id
  };
}

function isLoaded(globalState, chapterId, paging) {
  if (paging.offset) {
    return globalState.verses.entities[chapterId] && globalState.verses.entities[chapterId][chapterId + ':' + (paging.offset ? paging.offset + 1 : 1)] && globalState.verses.entities[chapterId][chapterId + ':' + (paging.offset && paging.limit ? paging.offset + paging.limit : perPage)];
  }

  return globalState.verses.entities[chapterId] && globalState.verses.entities[chapterId][chapterId + ':1'];
}