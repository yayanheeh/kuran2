'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeComponent = void 0;
var component = void 0;
var setRepeat = void 0;
var setAyah = void 0;
var file = void 0;

describe('<Audioplayer />', function () {
  describe('#handleRepeat', function () {
    describe('single ayah repeat', function () {
      beforeEach(function () {
        setRepeat = sinon.stub();
        setAyah = sinon.stub();
        file = {
          play: sinon.stub(),
          pause: sinon.stub(),
          currentTime: 100
        };

        makeComponent = function makeComponent(repeat) {
          component = (0, _enzyme.shallow)((0, _jsx3.default)(_index.Audioplayer, {
            setRepeat: setRepeat,
            setAyah: setAyah,
            repeat: repeat,
            currentVerse: '2:3'
          }));

          component.instance().handleAyahChange = sinon.stub();
          component.instance().play = sinon.stub();
        };
      });

      it('should not do anything with no repeat set', function () {
        makeComponent({});
        component.instance().handleRepeat(file);

        expect(component.instance().handleAyahChange).to.have.been.called; // eslint-disable-line
        expect(component.instance().play).not.to.have.been.called; // eslint-disable-line
        expect(setRepeat).not.to.have.been.called; // eslint-disable-line
        expect(setAyah).not.to.have.been.called; // eslint-disable-line
      });

      it('should not do anything when out of range', function () {
        makeComponent({ from: 13, to: 13, times: 10 });
        component.instance().handleRepeat(file);

        expect(component.instance().handleAyahChange).to.have.been.called; // eslint-disable-line
        expect(setRepeat).not.to.have.been.called; // eslint-disable-line
      });

      it('should repeat current ayah', function () {
        makeComponent({ from: 3, to: 3, times: 10 });
        component.instance().handleRepeat(file);

        expect(file.pause).to.have.been.called; // eslint-disable-line
        expect(setRepeat).to.have.been.called; // eslint-disable-line
        expect(setRepeat).to.have.been.calledWith({ from: 3, to: 3, times: 9 });
        expect(file.currentTime).to.eql(0);
        expect(file.play).to.have.been.called; // eslint-disable-line
      });

      it('should not repeat when last time to repeat', function () {
        makeComponent({ from: 3, to: 3, times: 1 });
        component.instance().handleRepeat(file);

        expect(setRepeat).to.have.been.called; // eslint-disable-line
        expect(setRepeat).to.have.been.calledWith({});
        expect(component.instance().handleAyahChange).to.have.been.called; // eslint-disable-line
      });
    });

    describe('ayah range repeat', function () {
      beforeEach(function () {
        setRepeat = sinon.stub();
        setAyah = sinon.stub();
        file = {
          play: sinon.stub(),
          pause: sinon.stub(),
          currentTime: 100
        };

        makeComponent = function makeComponent(repeat) {
          component = (0, _enzyme.shallow)((0, _jsx3.default)(_index.Audioplayer, {
            setRepeat: setRepeat,
            setAyah: setAyah,
            repeat: repeat,
            currentVerse: '2:3'
          }));

          component.instance().handleAyahChange = sinon.stub();
          component.instance().play = sinon.stub();
        };
      });

      it('should not do anything when out of range', function () {
        makeComponent({ from: 7, to: 13, times: 10 });
        component.instance().handleRepeat(file);

        expect(component.instance().handleAyahChange).to.have.been.called; // eslint-disable-line
        expect(setRepeat).not.to.have.been.called; // eslint-disable-line
      });

      it('should play next ayah when within range', function () {
        makeComponent({ from: 2, to: 5, times: 10 });
        component.instance().handleRepeat(file);

        expect(file.pause).to.have.been.called; // eslint-disable-line
        expect(setRepeat).not.to.have.been.called; // eslint-disable-line
        expect(component.instance().handleAyahChange).to.have.been.called; // eslint-disable-line
      });

      it('should start the range from the beginning when at the end', function () {
        makeComponent({ from: 1, to: 3, times: 10 });
        component.instance().handleRepeat(file);

        expect(file.pause).to.have.been.called; // eslint-disable-line
        expect(setRepeat).to.have.been.called; // eslint-disable-line
        expect(setRepeat).to.have.been.calledWith({ from: 1, to: 3, times: 9 });
        expect(setAyah).to.have.been.calledWith('2:1');
      });

      it('should not repeat when last time to repeat when range ayah', function () {
        makeComponent({ from: 1, to: 3, times: 1 });
        component.instance().handleRepeat(file);

        expect(setRepeat).to.have.been.called; // eslint-disable-line
        expect(setRepeat).to.have.been.calledWith({});
        expect(component.instance().handleAyahChange).to.have.been.called; // eslint-disable-line
      });
    });
  });
});