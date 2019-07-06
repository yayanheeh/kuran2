'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeComponent = void 0;
var component = void 0;
var onScrollToggle = void 0;

describe('<ScrollButton />', function () {
  beforeEach(function () {
    makeComponent = function makeComponent(shouldScroll) {
      onScrollToggle = sinon.stub();

      component = (0, _enzyme.mount)((0, _jsx3.default)(_index2.default, {
        shouldScroll: shouldScroll,
        onScrollToggle: onScrollToggle
      }));
    };
  });

  it('should indicate that shouldScroll', function () {
    makeComponent(true);

    expect(component.find('a').first().props().className).to.contain('scroll');
  });

  it('should not indicate that shouldScroll', function () {
    makeComponent(false);

    expect(component.find('a').first().props().className).not.to.contain('scroll');
  });

  it('should call onScrollToggle when clicked', function () {
    component.find('a').first().simulate('click');

    expect(onScrollToggle).to.have.been.called; // eslint-disable-line
  });
});