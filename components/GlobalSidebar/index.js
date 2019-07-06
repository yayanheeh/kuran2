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

var _Navbar = require('react-bootstrap/lib/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */
var styles = require('./style.scss');

var NavbarHeader = _Navbar2.default.Header;

var GlobalSidebar = function (_Component) {
  (0, _inherits3.default)(GlobalSidebar, _Component);

  function GlobalSidebar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GlobalSidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GlobalSidebar.__proto__ || (0, _getPrototypeOf2.default)(GlobalSidebar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      settingsModalOpen: false
    }, _this.onBodyClick = function () {
      var _this$props = _this.props,
          open = _this$props.open,
          handleOpen = _this$props.handleOpen;


      if (open) {
        return handleOpen(false);
      }

      return false;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GlobalSidebar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('click', this.onBodyClick.bind(this), true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('click', this.onBodyClick.bind(this), true);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          open = _props.open,
          handleOpen = _props.handleOpen,
          children = _props.children;


      return (0, _jsx3.default)('div', {
        className: styles.container + ' sidebar ' + (open && styles.open)
      }, void 0, (0, _jsx3.default)(_Navbar2.default, {
        'static': true,
        fluid: true
      }, void 0, (0, _jsx3.default)(NavbarHeader, {}, void 0, (0, _jsx3.default)('p', {
        className: 'navbar-text',
        onClick: function onClick() {
          return handleOpen(false);
        }
      }, void 0, (0, _jsx3.default)(_Link2.default, {
        to: '/'
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-home ' + styles.backToHome
      }), (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'nav.title',
        defaultMessage: 'Quran'
      }))))), (0, _jsx3.default)('ul', {
        className: styles.list
      }, void 0, children, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
        href: 'https://quran.zendesk.com/hc/en-us',
        'data-metrics-event-name': 'Sidebar:Link:Help'
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-help vertical-align-middle'
      }), ' ', (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'nav.help',
        defaultMessage: 'Help & feedback'
      }))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_Link2.default, {
        to: '/apps',
        'data-metrics-event-name': 'Sidebar:Link:Mobile'
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-cell vertical-align-middle'
      }), ' ', (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'nav.mobile',
        defaultMessage: 'Mobile'
      }))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_Link2.default, {
        to: '/donations',
        'data-metrics-event-name': 'Sidebar:Link:Contribute'
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-dollarsign vertical-align-middle'
      }), ' ', (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'nav.contribute',
        defaultMessage: 'Contribute'
      }))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
        href: 'https://quran.zendesk.com/hc/en-us/articles/210090626-Development-help',
        target: '_blank',
        rel: 'noopener noreferrer',
        'data-metrics-event-name': 'IndexHeader:Link:Developer'
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-laptop vertical-align-middle'
      }), ' ', (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'nav.developers',
        defaultMessage: 'Developers'
      }))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
        href: 'http://legacy.quran.com',
        'data-metrics-event-name': 'Sidebar:Link:Legacy'
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-alert vertical-align-middle'
      }), ' ', (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'nav.legacySite',
        defaultMessage: 'Legacy Quran.com'
      }))), (0, _jsx3.default)('hr', {}), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
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
      }, void 0, 'Sunnah'))));
    }
  }]);
  return GlobalSidebar;
}(_react.Component);

GlobalSidebar.propTypes = {
  open: _react.PropTypes.bool.isRequired,
  handleOpen: _react.PropTypes.func,
  settingsModalProps: _react.PropTypes.object, // eslint-disable-line
  children: _react.PropTypes.node
};

GlobalSidebar.defaultProps = {
  open: false
};

exports.default = GlobalSidebar;