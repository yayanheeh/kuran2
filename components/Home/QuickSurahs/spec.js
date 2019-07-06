'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

var _intlEnzymeTestHelper = require('../../../../tests/helpers/intl-enzyme-test-helper.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<QuickSurahs />', function () {
  var count = new Date().getDay() === 5 ? 5 : 4;

  it('Should render QuickSurahs component', function () {
    var component = (0, _intlEnzymeTestHelper.mountWithIntl)((0, _jsx3.default)(_index2.default, {}));

    expect(component).to.be.ok; // eslint-disable-line
    expect(component.find('a').length).to.equal(count);
  });

  it('Should render QuickSurahs component with Surah Al-Kahf', function () {
    var component = (0, _intlEnzymeTestHelper.mountWithIntl)((0, _jsx3.default)(_index2.default, {}));
    expect(component).to.be.ok; // eslint-disable-line
    expect(component.find('a').length).to.equal(count);
  });
});