'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('react-router/lib/Link');

var _Link2 = _interopRequireDefault(_Link);

var _SearchInput = require('components/SearchInput');

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

var _Jumbotron = require('quran-components/lib/Jumbotron');

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logo = require('../../../static/images/logo-lg-w.png');
var styles = require('./style.scss');

var IndexHeader = function (_Component) {
  (0, _inherits3.default)(IndexHeader, _Component);

  function IndexHeader() {
    (0, _classCallCheck3.default)(this, IndexHeader);
    return (0, _possibleConstructorReturn3.default)(this, (IndexHeader.__proto__ || (0, _getPrototypeOf2.default)(IndexHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(IndexHeader, [{
    key: 'renderSearch',
    value: function renderSearch() {
      if (this.props.noSearch) {
        return null;
      }

      return (0, _jsx3.default)(_SearchInput2.default, {});
    }
  }, {
    key: 'render',
    value: function render() {
      (0, _debug2.default)('component:IndexHeader', 'Render');

      return (0, _jsx3.default)(_Jumbotron2.default, {}, void 0, (0, _jsx3.default)('div', {
        className: 'container'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'row'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'col-md-10 col-md-offset-1 text-center'
      }, void 0, (0, _jsx3.default)(_Link2.default, {
        to: '/',
        className: styles.link,
        'data-metrics-event-name': 'IndexHeader:Link:Index'
      }, void 0, (0, _jsx3.default)('img', {
        src: logo,
        className: styles.logo,
        alt: 'logo'
      })), (0, _jsx3.default)('h4', {
        className: styles.title
      }, void 0, 'THE NOBLE QUR\'AN'), this.renderSearch()))));
    }
  }]);
  return IndexHeader;
}(_react.Component);

IndexHeader.propTypes = {
  noSearch: _react.PropTypes.bool
};

exports.default = IndexHeader;