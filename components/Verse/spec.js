'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _ayah = require('../../../tests/fixtures/ayah');

var _ayah2 = _interopRequireDefault(_ayah);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapper = void 0;

describe('<Ayah />', function () {
  beforeEach(function () {
    wrapper = (0, _enzyme.shallow)((0, _jsx3.default)(_index2.default, {
      ayah: _ayah2.default,
      audioActions: { setCurrentWord: function setCurrentWord() {} }
    }));
  });

  it('should render', function () {
    expect(wrapper).to.be.ok; // eslint-disable-line
  });

  it('should have correct ayah number', function () {
    expect(wrapper.find('.label').text()).to.eql(_ayah2.default.verseKey);
  });

  it('should contain translations', function () {
    expect(wrapper.find('.translation').text()).to.eql(_ayah2.default.content[0].resource.name);
  });
});