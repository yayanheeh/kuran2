'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = 'Some text';
var wrapper = void 0;

describe('<Copy />', function () {
  beforeEach(function () {
    wrapper = (0, _enzyme.shallow)((0, _jsx3.default)(_index2.default, {
      text: text
    }));
  });

  it('should render', function () {
    expect(wrapper).to.be.ok; // eslint-disable-line
  });
});