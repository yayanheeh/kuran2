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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bismillah = function Bismillah(_ref) {
  var chapter = _ref.chapter;

  if (chapter && chapter.bismillahPre) {
    return (0, _jsx3.default)('div', {
      id: 'bismillah',
      className: 'bismillah text-center word-font',
      style: { textAlign: 'center' },
      title: '\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u064E\u0651\u0647\u0650 \u0627\u0644\u0631\u064E\u0651\u062D\u0652\u0645\u064E\u0670\u0646\u0650 \u0627\u0644\u0631\u064E\u0651\u062D\u0650\u064A\u0645\u0650'
    }, void 0, '\uFDFD');
  }

  return (0, _jsx3.default)('noscript', {});
};

Bismillah.propTypes = {
  chapter: customPropTypes.surahType.isRequired
};

exports.default = Bismillah;