'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reduxConnect = require('redux-connect');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Button = require('quran-components/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ComponentLoader = require('components/ComponentLoader');

var _ComponentLoader2 = _interopRequireDefault(_ComponentLoader);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

var _makeHeadTags = require('helpers/makeHeadTags');

var _makeHeadTags2 = _interopRequireDefault(_makeHeadTags);

var _connect = require('../Surah/connect');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SurahInfo = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve(require(( /* webpackChunkName: "surahinfo" */'components/SurahInfo')));
  },
  LoadingComponent: _ComponentLoader2.default
});

var ChapterInfo = function ChapterInfo(_ref) {
  var chapter = _ref.chapter,
      info = _ref.info;
  return (0, _jsx3.default)('div', {
    className: 'row',
    style: { marginTop: 20 }
  }, void 0, _react2.default.createElement(_reactHelmet2.default, (0, _extends3.default)({}, (0, _makeHeadTags2.default)({
    title: 'Surah ' + chapter.nameSimple + ' [' + chapter.chapterNumber + ']',
    description: (info ? info.shortText : '') + ' This Surah has ' + chapter.versesCount + ' verses and resides between pages ' + chapter.pages[0] + ' to ' + chapter.pages[1] + ' in the Quran.' // eslint-disable-line max-len
  }), {
    script: [{
      type: 'application/ld+json',
      innerHTML: '{\n          "@context": "http://schema.org",\n          "@type": "BreadcrumbList",\n          "itemListElement": [{\n            "@type": "ListItem",\n            "position": 1,\n            "item": {\n              "@id": "https://quran.com/",\n              "name": "Quran"\n            }\n          },{\n            "@type": "ListItem",\n            "position": 2,\n            "item": {\n              "@id": "https://quran.com/' + chapter.chapterNumber + '",\n              "name": "' + chapter.nameSimple + '"\n            }\n          }]\n        }'
    }]
  })), (0, _jsx3.default)(SurahInfo, {
    chapter: chapter,
    info: info,
    isShowingSurahInfo: true
  }), (0, _jsx3.default)('div', {
    className: 'text-center'
  }, void 0, (0, _jsx3.default)(_Button2.default, {
    href: '/' + chapter.id
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'surah.read',
    defaultMessage: 'Read full Surah'
  }))));
};

ChapterInfo.propTypes = {
  chapter: customPropTypes.surahType,
  info: customPropTypes.infoType
};

var AsyncChapterInfo = (0, _reduxConnect.asyncConnect)([{ promise: _connect.chaptersConnect }, { promise: _connect.chapterInfoConnect }])(ChapterInfo);

function mapStateToProps(state, ownProps) {
  var chapterId = parseInt(ownProps.params.chapterId, 10);
  var chapter = state.chapters.entities[chapterId];

  return {
    chapter: chapter,
    info: state.chapters.infos[chapterId]
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(AsyncChapterInfo);