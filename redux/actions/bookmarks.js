'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLoaded = isLoaded;
exports.load = load;
exports.addBookmark = addBookmark;
exports.removeBookmark = removeBookmark;

var _schemas = require('redux/schemas');

var _bookmarks = require('redux/constants/bookmarks');

function isLoaded(globalState) {
  return globalState.auth && globalState.auth.user;
}

function load() {
  return {
    types: [_bookmarks.LOAD, _bookmarks.LOAD_SUCCESS, _bookmarks.LOAD_FAILURE],
    schema: [_schemas.bookmarksSchema],
    promise: function promise(client) {
      return client.get('/onequran/api/v1/bookmarks.json');
    }
  };
}

function addBookmark(verseKey) {
  return {
    types: [_bookmarks.ADD_BOOKMARK, _bookmarks.ADD_BOOKMARK_SUCCESS, _bookmarks.ADD_BOOKMARK_FAILURE],
    promise: function promise(client) {
      return client.post('/onequran/api/v1/bookmarks.json', {
        data: {
          bookmark: { verseKey: verseKey }
        }
      });
    },
    verseKey: verseKey
  };
}

function removeBookmark(verseKey) {
  return {
    types: [_bookmarks.REMOVE_BOOKMARK, _bookmarks.REMOVE_BOOKMARK_SUCCESS, _bookmarks.REMOVE_BOOKMARK_FAILURE],
    promise: function promise(client) {
      return client.del('/onequran/api/v1/bookmarks/' + verseKey + '.json');
    },
    verseKey: verseKey
  };
}