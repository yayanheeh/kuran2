'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapper = void 0;
var onLazyLoad = void 0;
var makeComponent = void 0;

describe('<LazyLoad />', function () {
  beforeEach(function () {
    makeComponent = function makeComponent() {
      var isEnd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      onLazyLoad = sinon.stub();
      wrapper = (0, _enzyme.mount)((0, _jsx3.default)(_index2.default, {
        onLazyLoad: onLazyLoad,
        isEnd: isEnd,
        isLoading: isLoading,
        endComponent: (0, _jsx3.default)('p', {}, void 0, 'End'),
        loadingComponent: (0, _jsx3.default)('p', {}, void 0, 'Loading')
      }));
    };

    makeComponent();
  });

  it('should render', function () {
    expect(wrapper).to.be.ok; // eslint-disable-line
  });

  it('should show loading component', function () {
    expect(wrapper.text()).to.eql('Loading');
  });

  it('should show end component when no more lazy loading needed', function () {
    makeComponent(true);
    expect(wrapper.text()).to.eql('End');
  });

  it('should call onLazyLoad when not end and not loading', function () {
    wrapper.instance().onScroll();
    expect(wrapper.props().onLazyLoad).to.have.been.called; // eslint-disable-line
  });

  it('should not call onLazyLoad when at end', function () {
    makeComponent(true);
    wrapper.instance().onScroll();
    expect(wrapper.props().onLazyLoad).not.to.have.been.called; // eslint-disable-line
  });

  it('should not call onLazyLoad when loading', function () {
    makeComponent(false, true);
    wrapper.instance().onScroll();
    expect(wrapper.props().onLazyLoad).not.to.have.been.called; // eslint-disable-line
  });
});