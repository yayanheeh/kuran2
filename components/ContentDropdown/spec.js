'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _intlEnzymeTestHelper = require('../../../tests/helpers/intl-enzyme-test-helper.js');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapper = void 0;
var onOptionChange = sinon.stub();
var defaultOption = 19;

describe('<ContentDropdown />', function () {
  beforeEach(function () {
    onOptionChange = sinon.stub();
    wrapper = (0, _intlEnzymeTestHelper.mountWithIntl)((0, _jsx3.default)(_index2.default, {
      content: [defaultOption],
      onOptionChange: onOptionChange
    }));
  });

  it('should render', function () {
    expect(wrapper).to.be.ok; // eslint-disable-line
  });

  it('should contain all the content options', function () {
    _index.slugs.filter(function (slug) {
      return slug.language !== 'ar';
    }).forEach(function (slug) {
      expect(wrapper.text()).to.contain(slug.name);
    });
  });

  it('should show chosen content option', function () {
    expect(wrapper.find('#' + defaultOption + 'en').prop('checked')).to.equal(defaultOption);
  });

  it('should add option when clicked', function () {
    var id = 18;
    wrapper.find('#' + id + 'en').simulate('change');

    expect(onOptionChange).to.have.been.called; // eslint-disable-line
    expect(onOptionChange).to.have.been.calledWith({ content: [defaultOption, id] });
  });

  it('should remove option when clicked', function () {
    wrapper.find('#' + defaultOption + 'en').simulate('change');

    expect(onOptionChange).to.have.been.called; // eslint-disable-line
    expect(onOptionChange).to.have.been.calledWith({ content: [] });
  });

  it('should remove all content', function () {
    var removeAll = wrapper.find('a');

    expect(removeAll.html()).to.contain('Remove all');

    removeAll.simulate('click');

    expect(onOptionChange).to.have.been.called; // eslint-disable-line
    expect(onOptionChange).to.have.been.calledWith({ content: [] });
  });
});