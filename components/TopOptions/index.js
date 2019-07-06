'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Share = require('components/Share');

var _Share2 = _interopRequireDefault(_Share);

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopOptions = function TopOptions(_ref) {
  var title = _ref.title,
      chapter = _ref.chapter;
  return (0, _jsx3.default)('div', {
    className: 'row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'col-md-4 hidden-xs hidden-sm'
  }, void 0, title && (0, _jsx3.default)('h1', {
    className: _style2.default.titleText
  }, void 0, title)), (0, _jsx3.default)('div', {
    className: 'col-md-8 text-right'
  }, void 0, (0, _jsx3.default)('ul', {
    className: 'list-inline'
  }, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_Share2.default, {
    chapter: chapter
  })))));
};

TopOptions.propTypes = {
  title: _react.PropTypes.string,
  chapter: customPropTypes.surahType.isRequired
};

exports.default = TopOptions;