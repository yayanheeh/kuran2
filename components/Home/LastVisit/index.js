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

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('containers/Home/style.scss');

var LastVisit = function LastVisit(props) {
  (0, _debug2.default)('component:Index', 'LastVisit');
  if (!props.chapter) return false;

  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('h4', {
    className: 'text-muted ' + styles.title
  }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
    id: 'surah.index.continue',
    defaultMessage: 'Continue'
  }), ' ', (0, _jsx3.default)(_Link2.default, {
    to: '/' + props.chapter.chapterNumber + '/' + props.verse
  }, void 0, (0, _jsx3.default)('span', {}, void 0, props.chapter.nameSimple, ' (', props.chapter.chapterNumber, ':', props.verse, ')'))));
};

LastVisit.propTypes = {
  chapter: customPropTypes.surahType.isRequired,
  verse: _react.PropTypes.number.isRequired
};

exports.default = LastVisit;