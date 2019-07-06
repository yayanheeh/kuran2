'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

var _getSurahs = require('../../../tests/fixtures/getSurahs.js');

var _getSurahs2 = _interopRequireDefault(_getSurahs);

var _InformationToggle = require('components/InformationToggle');

var _InformationToggle2 = _interopRequireDefault(_InformationToggle);

var _FontSizeDropdown = require('components/FontSizeDropdown');

var _FontSizeDropdown2 = _interopRequireDefault(_FontSizeDropdown);

var _TooltipDropdown = require('components/TooltipDropdown');

var _TooltipDropdown2 = _interopRequireDefault(_TooltipDropdown);

var _ReadingModeToggle = require('components/ReadingModeToggle');

var _ReadingModeToggle2 = _interopRequireDefault(_ReadingModeToggle);

var _Share = require('components/Share');

var _Share2 = _interopRequireDefault(_Share);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line

// eslint-disable-line
// eslint-disable-line
describe('<TopOptions />', function () {
  it('Should render QuickSurahs component', function () {
    var options = {
      isReadingMode: false,
      isShowingSurahInfo: false,
      tooltip: 'translation',
      fontSize: {}
    };

    var actions = {
      options: {
        setOption: function setOption() {},
        toggleReadingMode: function toggleReadingMode() {}
      }
    };

    var component = (0, _enzyme.shallow)((0, _jsx3.default)(_index2.default, {
      options: options,
      actions: actions,
      chapter: _getSurahs2.default[5]
    }));

    expect(component).to.be.ok; // eslint-disable-line
    expect(component.find(_Share2.default).length).to.eql(1);
  });
}); // eslint-disable-line
// eslint-disable-line

// used components