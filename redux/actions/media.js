'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeMedia = exports.setMedia = undefined;

var _media = require('redux/constants/media');

var setMedia = exports.setMedia = function setMedia(content) {
  return {
    type: _media.SET_MEDIA,
    content: content
  };
};

var removeMedia = exports.removeMedia = function removeMedia() {
  return {
    type: _media.REMOVE_MEDIA
  };
};