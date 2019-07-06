'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactShare = require('react-share');

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('./style.scss');

var FacebookShareButton = _reactShare.ShareButtons.FacebookShareButton,
    TwitterShareButton = _reactShare.ShareButtons.TwitterShareButton;

var FacebookIcon = (0, _reactShare.generateShareIcon)('facebook');
var TwitterIcon = (0, _reactShare.generateShareIcon)('twitter');

var Share = function Share(_ref) {
  var chapter = _ref.chapter,
      verse = _ref.verse;

  // Fallback to Surah Id
  var path = void 0;

  if (verse) {
    var translations = (verse.translations || []).map(function (translation) {
      return translation.resourceId;
    }).join(',');
    path = verse.chapterId + '/' + verse.verseNumber + '?translations=' + translations;
  } else {
    path = chapter.chapterNumber;
  }

  var shareUrl = 'https://quran.com/' + path;
  var title = verse ? 'Surah ' + chapter.nameSimple + ' [' + verse.verseKey + ']' : 'Surah ' + chapter.nameSimple;
  var iconProps = verse ? { iconBgStyle: { fill: '#d1d0d0' } } : {};

  return (0, _jsx3.default)('div', {
    className: '' + styles.shareContainer
  }, void 0, (0, _jsx3.default)(FacebookShareButton, {
    url: shareUrl,
    title: title,
    windowWidth: 670,
    windowHeight: 540,
    className: '' + styles.iconContainer
  }, void 0, _react2.default.createElement(FacebookIcon, (0, _extends3.default)({ size: 24, round: true }, iconProps))), (0, _jsx3.default)(TwitterShareButton, {
    url: shareUrl,
    title: title,
    className: '' + styles.iconContainer
  }, void 0, _react2.default.createElement(TwitterIcon, (0, _extends3.default)({ size: 24, round: true }, iconProps))));
};

Share.propTypes = {
  chapter: customPropTypes.surahType.isRequired,
  verse: customPropTypes.verseType
};

exports.default = Share;