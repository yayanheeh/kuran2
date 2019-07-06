'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = void 0;

describe('<Segments />', function () {
  describe('when are an empty object', function () {
    beforeEach(function () {
      component = (0, _enzyme.mount)((0, _jsx3.default)(_index2.default, {
        segments: {}
      }));
    });

    it('should not have add any styles', function () {
      expect(component.props()).to.eql({ segments: {} });
    });

    it('should return noscript', function () {
      expect(component.find('noscript').length).to.eql(1);
    });
  });

  describe('when current time within words', function () {
    beforeEach(function () {
      component = (0, _enzyme.mount)((0, _jsx3.default)(_index2.default, {
        segments: { words: { 0: { startTime: 0, endTime: 1 }, 1: { startTime: 1, endTime: 2 } } },
        currentTime: 1.5,
        currentVerse: '1:1'
      }));
    });

    it('should not contain noscript', function () {
      expect(component.find('noscript').length).to.eql(0);
    });

    it('should render Helmet', function () {
      expect(component.find(_reactHelmet2.default).length).to.eql(1);
    });

    it('should have style for the second word', function () {
      expect(component.find(_reactHelmet2.default).first().props().style[0].cssText).to.contain('#word-1-1-1');
    });
  });

  describe('when current time is outside words', function () {
    beforeEach(function () {
      component = (0, _enzyme.mount)((0, _jsx3.default)(_index2.default, {
        segments: {
          words: {
            0: {
              startTime: 0,
              endTime: 1
            },
            1: {
              startTime: 2,
              endTime: 3
            }
          }
        },
        currentTime: 1.5,
        currentVerse: '1:1'
      }));
    });

    it('should not contain noscript', function () {
      expect(component.find('noscript').length).to.eql(0);
    });

    it('should render Helmet', function () {
      expect(component.find(_reactHelmet2.default).length).to.eql(1);
    });

    it('should not have style words', function () {
      expect(component.find(_reactHelmet2.default).first().props().style).to.have.lengthOf(0);
    });
  });
});