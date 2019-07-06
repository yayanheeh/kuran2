'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _intlEnzymeTestHelper = require('../../../../tests/helpers/intl-enzyme-test-helper.js');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = void 0;
var overlay = void 0;
var setRepeat = void 0;
var chapter = {
  ayat: 10
};

var makeComponent = function makeComponent(repeat) {
  setRepeat = sinon.stub();

  component = (0, _intlEnzymeTestHelper.mountWithIntl)((0, _jsx3.default)(_index2.default, {
    repeat: repeat,
    setRepeat: setRepeat,
    current: 1,
    chapter: chapter
  }));

  overlay = (0, _intlEnzymeTestHelper.mountWithIntl)(component.find('OverlayTrigger').first().props().overlay);
};

describe('<RepeatDropdown />', function () {
  it('should not be repeating', function () {
    makeComponent({ times: Infinity });

    expect(component.find('i').first().props().className).not.to.contain('repeat_');
  });

  it('should indicate repeating', function () {
    makeComponent({ from: 1, to: 10, times: Infinity });

    expect(component.find('i').first().props().className).to.contain('repeat');
  });

  describe('when single ayah', function () {
    beforeEach(function () {
      makeComponent({ from: 3, to: 3, times: Infinity });
    });

    it('should have a single ayah input', function () {
      expect(overlay.find('FormControl').length).to.eql(2); // with the times
    });

    it('should have value of the ayah for the input', function () {
      expect(overlay.find('FormControl').first().props().value).to.eql(3);
    });
  });

  describe('when range', function () {
    beforeEach(function () {
      makeComponent({ from: 1, to: 3, times: Infinity });
    });

    it('should have a range ayah input', function () {
      expect(overlay.find('FormControl').length).to.eql(3); // with the times
    });

    it('should have value of the ayah for the input', function () {
      expect(overlay.find('FormControl').first().props().value).to.eql(1);
      expect(overlay.find('FormControl').at(1).props().value).to.eql(3);
    });
  });

  describe('times', function () {
    it('should have Infinity count', function () {
      makeComponent({ from: 1, to: 3, times: Infinity });

      expect(overlay.find('FormControl').last().props().value).to.eql(Infinity);
    });

    it('should have a count', function () {
      makeComponent({ from: 1, to: 3, times: 4 });

      expect(overlay.find('FormControl').last().props().value).to.eql(4);
    });
  });
});