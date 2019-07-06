'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

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

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _Image = require('react-bootstrap/lib/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Tabs = require('react-bootstrap/lib/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = require('react-bootstrap/lib/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('./style.scss');

var Profile = function (_Component) {
  (0, _inherits3.default)(Profile, _Component);

  function Profile() {
    (0, _classCallCheck3.default)(this, Profile);
    return (0, _possibleConstructorReturn3.default)(this, (Profile.__proto__ || (0, _getPrototypeOf2.default)(Profile)).apply(this, arguments));
  }

  (0, _createClass3.default)(Profile, [{
    key: 'render',
    // eslint-disable-line

    value: function render() {
      var _props = this.props,
          user = _props.user,
          bookmarks = _props.bookmarks;


      return (0, _jsx3.default)('div', {
        className: 'min-container'
      }, void 0, (0, _jsx3.default)(_reactHelmet2.default, {
        title: 'The Noble Quran - \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645',
        titleTemplate: '%s'
      }), (0, _jsx3.default)('div', {
        className: styles.header
      }), (0, _jsx3.default)('div', {
        className: 'container'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'row'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'col-md-12 text-center'
      }, void 0, (0, _jsx3.default)(_Image2.default, {
        src: user.image + '?type=large',
        circle: true,
        className: styles.image
      }), (0, _jsx3.default)('h2', {}, void 0, user.name))), (0, _jsx3.default)('div', {
        className: 'row'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'col-md-6 col-md-offset-3'
      }, void 0, (0, _jsx3.default)(_Tabs2.default, {
        bsStyle: 'pills',
        defaultActiveKey: 1,
        className: styles.tabs,
        id: 'tabs'
      }, void 0, (0, _jsx3.default)(_Tab2.default, {
        eventKey: 1,
        title: 'Bookmarks'
      }, void 0, (0, _jsx3.default)('ul', {
        className: 'list-group'
      }, void 0, (0, _values2.default)(bookmarks).map(function (bookmark) {
        return (0, _jsx3.default)(_reactRouter.Link, {
          to: bookmark.verseKey.split(':').join('/'),
          className: 'list-group-item'
        }, void 0, bookmark.verseKey);
      }))), (0, _jsx3.default)(_Tab2.default, {
        eventKey: 2,
        title: 'Notes'
      }, void 0, 'Notes...'))))));
    }
  }]);
  return Profile;
}(_react.Component);

Profile.propTypes = {
  user: customPropTypes.userType.isRequired,
  bookmarks: customPropTypes.bookmarkType.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    user: state.auth.user,
    bookmarks: state.bookmarks.entities
  };
})(Profile);