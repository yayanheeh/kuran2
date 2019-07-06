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

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

var _Link = require('react-router/lib/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('./style.scss');

var SurahsList = function SurahsList(props) {
  (0, _debug2.default)('component:Index', 'SurahsList');

  return (0, _jsx3.default)('ul', {
    className: 'col-md-4 list-unstyled'
  }, void 0, props.chapters.map(function (chapter) {
    return (0, _jsx3.default)('li', {
      className: '' + styles.item
    }, chapter.id, (0, _jsx3.default)(_Link2.default, {
      to: '/' + chapter.id,
      className: styles.link + ' row'
    }, void 0, (0, _jsx3.default)('div', {
      className: 'col-xs-2 text-muted'
    }, void 0, chapter.chapterNumber), (0, _jsx3.default)('div', {
      className: 'col-xs-7'
    }, void 0, chapter.nameSimple), (0, _jsx3.default)('div', {
      className: 'col-xs-3 text-left ' + styles.arabic
    }, void 0, (0, _jsx3.default)('span', {
      className: 'icon-surah' + chapter.id
    })), (0, _jsx3.default)('div', {
      className: 'col-xs-10 col-xs-offset-2 ' + styles.translated_name
    }, void 0, (0, _jsx3.default)('span', {
      className: 'text-uppercase ' + chapter.translatedName.languageName
    }, void 0, chapter.translatedName.name))));
  }));
};

SurahsList.propTypes = {
  chapters: customPropTypes.chapters.isRequired
};

exports.default = SurahsList;