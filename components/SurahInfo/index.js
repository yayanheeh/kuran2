'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

var _Loader = require('quran-components/lib/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = require('./style.scss');

var SurahInfo = function SurahInfo(_ref) {
  var chapter = _ref.chapter,
      info = _ref.info,
      isShowingSurahInfo = _ref.isShowingSurahInfo,
      onClose = _ref.onClose;

  // So we don't need to load images and files unless needed
  if (!isShowingSurahInfo) return (0, _jsx3.default)('noscript', {});
  if (!info) {
    return (0, _jsx3.default)(_Loader2.default, {
      isActive: true
    });
  }

  return (0, _jsx3.default)('div', {
    className: 'col-xs-12 ' + style.container + ' chapter-info ' + style.show
  }, void 0, onClose && (0, _jsx3.default)('button', {
    tabIndex: '-1',
    className: style.close + ' ss-delete',
    onClick: function onClick() {
      return onClose({ isShowingSurahInfo: !isShowingSurahInfo });
    }
  }), (0, _jsx3.default)('div', {
    className: style.row + ' row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-3 col-xs-6 ' + style.bg + ' ' + style[chapter.revelationPlace]
  }), (0, _jsx3.default)('div', {
    className: style.list + ' col-md-1 col-xs-6'
  }, void 0, (0, _jsx3.default)('dl', {}, void 0, (0, _jsx3.default)('dt', {}, void 0, 'VERSES'), (0, _jsx3.default)('dd', {
    className: 'text-uppercase'
  }, void 0, chapter.versesCount), (0, _jsx3.default)('dt', {}, void 0, 'PAGES'), (0, _jsx3.default)('dd', {
    className: 'text-uppercase'
  }, void 0, chapter.pages.join('-')))), (0, _jsx3.default)('div', {
    className: style.info + ' ' + info.languageName + ' times-new col-md-8'
  }, void 0, (0, _jsx3.default)('div', {
    dangerouslySetInnerHTML: { __html: info.text }
  }), (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('em', {}, void 0, 'Source: ', info.source))))));
};

SurahInfo.propTypes = {
  onClose: _react.PropTypes.func,
  isShowingSurahInfo: _react.PropTypes.bool,
  chapter: customPropTypes.surahType,
  info: customPropTypes.infoType
};

exports.default = SurahInfo;