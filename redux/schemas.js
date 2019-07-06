'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bookmarksSchema = exports.versesSchema = exports.chaptersSchema = undefined;

var _normalizr = require('normalizr');

var chaptersSchema = exports.chaptersSchema = new _normalizr.schema.Entity('chapters', {}, { idAttribute: 'id' });
var versesSchema = exports.versesSchema = new _normalizr.schema.Entity('verses', {}, { idAttribute: 'verseKey' });
var bookmarksSchema = exports.bookmarksSchema = new _normalizr.schema.Entity('bookmarks', {}, { idAttribute: 'verseKey' });

var schemas = {
  chaptersSchema: chaptersSchema,
  versesSchema: versesSchema,
  bookmarksSchema: bookmarksSchema
};

exports.default = schemas;