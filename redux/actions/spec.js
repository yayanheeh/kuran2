'use strict';

var _audioplayer = require('redux/constants/audioplayer.js');

var audioplayerConstant = _interopRequireWildcard(_audioplayer);

var _verses = require('redux/constants/verses.js');

var ayahsConstants = _interopRequireWildcard(_verses);

var _chapters = require('redux/constants/chapters.js');

var surahsConstants = _interopRequireWildcard(_chapters);

var _audioplayer2 = require('./audioplayer.js');

var audioplayerActions = _interopRequireWildcard(_audioplayer2);

var _ayahs = require('./ayahs.js');

var ayahsActions = _interopRequireWildcard(_ayahs);

var _chapters2 = require('./chapters.js');

var surahsActions = _interopRequireWildcard(_chapters2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('action tests', function () {
  it('audioplayer actions', function () {
    expect(audioplayerActions.setUserAgent('abc').type).to.equal(audioplayerConstant.SET_USER_AGENT);
    expect(audioplayerActions.setCurrentFile('fil').type).to.equal(audioplayerConstant.SET_CURRENT_FILE);
    expect(audioplayerActions.setCurrentWord('word').type).to.equal(audioplayerConstant.SET_CURRENT_WORD);
    expect(audioplayerActions.play().type).to.equal(audioplayerConstant.PLAY);
    expect(audioplayerActions.pause().type).to.equal(audioplayerConstant.PAUSE);
    expect(audioplayerActions.next('abc').type).to.equal(audioplayerConstant.NEXT);
    expect(audioplayerActions.previous('abc').type).to.equal(audioplayerConstant.PREVIOUS);
    expect(audioplayerActions.setRepeat('abc').type).to.equal(audioplayerConstant.SET_REPEAT);
    expect(audioplayerActions.toggleScroll().type).to.equal(audioplayerConstant.TOGGLE_SCROLL);
    expect(audioplayerActions.buildOnClient('abc').type).to.equal(audioplayerConstant.BUILD_ON_CLIENT);
    expect(audioplayerActions.update('abc').type).to.equal(audioplayerConstant.UPDATE);
  });

  it('ayahs actions', function () {
    expect(ayahsActions.load(1, 2, 4).types.length).to.equal(3);
    expect(ayahsActions.clearCurrent().type).to.equal(ayahsConstants.CLEAR_CURRENT);
    expect(ayahsActions.clearCurrentWord(1).type).to.equal(ayahsConstants.CLEAR_CURRENT_WORD);
    expect(ayahsActions.setCurrentVerse(1).type).to.equal(ayahsConstants.SET_CURRENT_VERSE);
    expect(ayahsActions.setCurrentWord(1).type).to.equal(ayahsConstants.SET_CURRENT_WORD);
  });

  it('surahs actions', function () {
    expect(surahsActions.loadAll().types.length).to.equal(3);
    expect(surahsActions.load(1).types.length).to.equal(3);
    expect(surahsActions.loadInfo('url').types.length).to.equal(3);
    expect(surahsActions.setCurrent(1).type).to.equal(surahsConstants.SET_CURRENT);
  });
});