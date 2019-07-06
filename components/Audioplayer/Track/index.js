'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

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

var _class, _temp2; /* eslint-disable jsx-a11y/no-static-element-interactions */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('./style.scss');

var Track = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Track, _Component);

  function Track() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Track);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Track.__proto__ || (0, _getPrototypeOf2.default)(Track)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      var onTrackChange = _this.props.onTrackChange;


      var fraction = event.nativeEvent.offsetX / _this.container.getBoundingClientRect().width;

      return onTrackChange(fraction);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Track, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var progress = this.props.progress;


      return _react2.default.createElement(
        'div',
        {
          ref: function ref(container) {
            _this2.container = container;
          },
          className: styles.container,
          onClick: this.handleClick
        },
        (0, _jsx3.default)('div', {
          className: styles.progress,
          style: { width: progress + '%' }
        })
      );
    }
  }]);
  return Track;
}(_react.Component), _class.propTypes = {
  progress: _react.PropTypes.number.isRequired,
  onTrackChange: _react.PropTypes.func.isRequired
}, _temp2);
exports.default = Track;