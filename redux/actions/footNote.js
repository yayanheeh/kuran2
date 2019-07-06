'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFootNote = exports.loadFootNote = undefined;

var _footNote = require('redux/constants/footNote.js');

var loadFootNote = exports.loadFootNote = function loadFootNote(footNoteId) {
  return {
    types: [_footNote.LOAD_FOOT_NOTE, _footNote.LOAD_FOOT_NOTE_SUCCESS, _footNote.LOAD_FOOT_NOTE_FAIL],
    promise: function promise(client) {
      return client.get('/api/v3/foot_notes/' + footNoteId);
    }
  };
};

var removeFootNote = exports.removeFootNote = function removeFootNote() {
  return {
    type: _footNote.REMOVE_FOOT_NOTE
  };
};