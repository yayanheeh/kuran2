'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _getSurahs = require('../../../../tests/fixtures/getSurahs.js');

var _getSurahs2 = _interopRequireDefault(_getSurahs);

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<SurahsList />', function () {
  it('Should render SurahList component', function () {
    var component = (0, _enzyme.mount)((0, _jsx3.default)(_index2.default, {
      surahs: _getSurahs2.default.default.slice(0, 4)
    }));
    expect(component).to.be.ok; // eslint-disable-line
    expect(component.find('li').length).to.equal(4);
  });
});