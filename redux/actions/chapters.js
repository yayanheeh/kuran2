'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCurrent = exports.loadInfo = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.loadAll = loadAll;
exports.load = load;
exports.isSingleLoaded = isSingleLoaded;
exports.isAllLoaded = isAllLoaded;
exports.isInfoLoaded = isInfoLoaded;

var _schemas = require('redux/schemas');

var _chapters = require('redux/constants/chapters.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadAll() {
  return {
    types: [_chapters.LOAD, _chapters.LOAD_SUCCESS, _chapters.LOAD_FAIL],
    schema: { chapters: [_schemas.chaptersSchema] },
    promise: function promise(client) {
      return client.get('/api/v3/chapters');
    }
  };
}

function load(id) {
  return {
    types: [_chapters.LOAD, _chapters.LOAD_SUCCESS, _chapters.LOAD_FAIL],
    schema: { chapter: _schemas.chaptersSchema },
    promise: function promise(client) {
      return client.get('/api/v3/chapters/' + id);
    }
  };
}

var loadInfo = exports.loadInfo = function loadInfo(params) {
  return {
    types: [_chapters.LOAD_INFO, _chapters.LOAD_INFO_SUCCESS, _chapters.LOAD_INFO_FAIL],
    promise: function promise(client) {
      return client.get('/api/v3/chapters/' + params.chapterId + '/info', {
        params: {
          language: params.language || 'en'
        }
      });
    },
    id: params.chapterId
  };
};

var setCurrent = exports.setCurrent = function setCurrent(id) {
  return {
    type: _chapters.SET_CURRENT,
    current: id
  };
};

function isSingleLoaded(globalState, id) {
  return !!globalState.chapters.entities[id];
}

function isAllLoaded(globalState) {
  return (0, _keys2.default)(globalState.chapters.entities).length === 114;
}

function isInfoLoaded(globalState, id) {
  return globalState.chapters.entities[id] && globalState.chapters.infos[id];
}