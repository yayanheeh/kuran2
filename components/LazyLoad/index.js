'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LazyLoad = function (_Component) {
  (0, _inherits3.default)(LazyLoad, _Component);

  function LazyLoad() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LazyLoad);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LazyLoad.__proto__ || (0, _getPrototypeOf2.default)(LazyLoad)).call.apply(_ref, [this].concat(args))), _this), _this.onScroll = function () {
      var _this$props = _this.props,
          isLoading = _this$props.isLoading,
          isEnd = _this$props.isEnd,
          offset = _this$props.offset,
          onLazyLoad = _this$props.onLazyLoad;
      // TODO: Remove ReactDOM!

      var dom = _reactDom2.default.findDOMNode(_this); // eslint-disable-line
      var componentOffset = (dom.offsetParent || dom).offsetTop - (window.pageYOffset + window.innerHeight); // eslint-disable-line max-len

      if (!isLoading && !isEnd && componentOffset < offset) {
        (0, _debug2.default)('component:LazyLoad', 'onLazyLoad called');
        return onLazyLoad();
      }

      return false;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LazyLoad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (__CLIENT__) {
        window.removeEventListener('scroll', this.onScroll, true);
        window.addEventListener('scroll', this.onScroll, true);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (__CLIENT__) {
        window.removeEventListener('scroll', this.onScroll, true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isEnd = _props.isEnd,
          loadingComponent = _props.loadingComponent,
          endComponent = _props.endComponent;


      if (isEnd) {
        return endComponent;
      }

      return loadingComponent;
    }
  }]);
  return LazyLoad;
}(_react.Component); /* global window */


LazyLoad.propTypes = {
  isLoading: _react.PropTypes.bool.isRequired,
  isEnd: _react.PropTypes.bool.isRequired,
  onLazyLoad: _react.PropTypes.func.isRequired,
  loadingComponent: _react.PropTypes.element,
  endComponent: _react.PropTypes.element,
  offset: _react.PropTypes.number
};

LazyLoad.defaultProps = {
  loadingComponent: 'Loading...',
  endComponent: 'End.',
  offset: 1000
};

exports.default = LazyLoad;