'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = void 0;
var onTrackChange = void 0;

describe('<Track />', function () {
  beforeEach(function () {
    onTrackChange = sinon.stub();
    component = (0, _enzyme.mount)((0, _jsx3.default)(_index2.default, {
      progress: 50,
      onTrackChange: onTrackChange
    }));
  });

  it('should show the progress to be 50%', function () {
    expect(component.children().first().props().style.width).to.eql('50%');
  });

  it('should return click progress', function () {
    component.simulate('click', { nativeEvent: { offsetX: 1 } });

    expect(onTrackChange).to.have.been.called; // eslint-disable-line
    expect(onTrackChange).to.have.been.calledWith(Infinity); // because the bounding box is 0!
  });
});