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

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

var _reactRedux = require('react-redux');

var _Link = require('react-router/lib/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Navbar = require('react-bootstrap/lib/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Nav = require('react-bootstrap/lib/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _LocaleSwitcher = require('components/LocaleSwitcher');

var _LocaleSwitcher2 = _interopRequireDefault(_LocaleSwitcher);

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */
var styles = require('./style.scss');

var GlobalNav = function (_Component) {
  (0, _inherits3.default)(GlobalNav, _Component);

  function GlobalNav() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GlobalNav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GlobalNav.__proto__ || (0, _getPrototypeOf2.default)(GlobalNav)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      scrolled: false
    }, _this.handleNavbar = function () {
      var isStatic = _this.props.isStatic;
      var scrolled = _this.state.scrolled;


      if (window.pageYOffset > 50) {
        if (!scrolled && !isStatic) {
          _this.setState({ scrolled: true });
        }
      } else if (scrolled) {
        _this.setState({ scrolled: false });
      }

      return false;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GlobalNav, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleNavbar, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleNavbar, true);
    }
  }, {
    key: 'isHome',
    value: function isHome() {
      return this.props.location.pathname === '/';
    }
  }, {
    key: 'renderRightControls',
    value: function renderRightControls() {
      var _props = this.props,
          user = _props.user,
          rightControls = _props.rightControls;


      return rightControls || [(0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
        href: 'https://quranicaudio.com/',
        target: '_blank',
        rel: 'noopener noreferrer',
        'data-metrics-event-name': 'Sites:Audio'
      }, void 0, 'Audio')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
        href: 'http://salah.com/',
        target: '_blank',
        rel: 'noopener noreferrer',
        'data-metrics-event-name': 'Sites:Salah'
      }, void 0, 'Salah')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
        href: 'http://sunnah.com/',
        target: '_blank',
        rel: 'noopener noreferrer',
        'data-metrics-event-name': 'Sites:Sunnah'
      }, void 0, 'Sunnah')), (0, _jsx3.default)(_LocaleSwitcher2.default, {}), user ? (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_Link2.default, {
        to: '/profile',
        'data-metrics-event-name': 'IndexHeader:Link:Profile'
      }, void 0, user.firstName || user.name)) : (0, _jsx3.default)('noscript', {})];
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          leftControls = _props2.leftControls,
          handleSidebarToggle = _props2.handleSidebarToggle,
          isStatic = _props2.isStatic;

      (0, _debug2.default)('component:GlobalNav', 'Render');

      return (0, _jsx3.default)(_Navbar2.default, {
        className: 'montserrat ' + (this.state.scrolled && styles.scrolled),
        fixedTop: !isStatic,
        fluid: true,
        'static': isStatic
      }, void 0, (0, _jsx3.default)('button', {
        type: 'button',
        className: 'navbar-toggle collapsed',
        onClick: handleSidebarToggle
      }, void 0, (0, _jsx3.default)('span', {
        className: 'sr-only'
      }, void 0, 'Toggle navigation'), (0, _jsx3.default)('span', {
        className: 'icon-bar'
      }), (0, _jsx3.default)('span', {
        className: 'icon-bar'
      }), (0, _jsx3.default)('span', {
        className: 'icon-bar'
      })), (0, _jsx3.default)(_Nav2.default, {
        className: styles.nav
      }, void 0, !this.isHome() && (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_Link2.default, {
        to: '/'
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-home'
      }))), this.isHome() && (0, _jsx3.default)(_LocaleSwitcher2.default, {
        className: 'visible-xs-inline-block'
      }), leftControls && leftControls.map(function (control, index) {
        return _react2.default.cloneElement(control, { key: index });
      })), (0, _jsx3.default)(_Nav2.default, {
        pullRight: true,
        className: 'hidden-xs hidden-sm'
      }, void 0, this.renderRightControls().map(function (control, index) {
        return _react2.default.cloneElement(control, { key: index });
      })));
    }
  }]);
  return GlobalNav;
}(_react.Component);

GlobalNav.propTypes = {
  // handleToggleSidebar: PropTypes.func.isRequired,
  leftControls: _react.PropTypes.arrayOf(_react.PropTypes.element),
  rightControls: _react.PropTypes.arrayOf(_react.PropTypes.element),
  handleSidebarToggle: _react.PropTypes.func.isRequired,
  isStatic: _react.PropTypes.bool.isRequired,
  user: customPropTypes.userType,
  location: customPropTypes.location
};

GlobalNav.defaultProps = {
  isStatic: false
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    user: state.auth.user
  };
})(GlobalNav);