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

var _expressUseragent = require('express-useragent');

var _expressUseragent2 = _interopRequireDefault(_expressUseragent);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */
var SmartBanner = function (_Component) {
  (0, _inherits3.default)(SmartBanner, _Component);

  function SmartBanner() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SmartBanner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SmartBanner.__proto__ || (0, _getPrototypeOf2.default)(SmartBanner)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      settings: {},
      deviceType: '',
      appId: ''
    }, _this.parseAppId = function (metaName) {
      var meta = window.document.querySelector('meta[name="' + metaName + '"]');
      return (/app-id=([^\s,]+)/.exec(meta.getAttribute('content'))[1]
      );
    }, _this.hide = function () {
      window.document.querySelector('html').classList.remove('smartbanner-show');
    }, _this.show = function () {
      window.document.querySelector('html').classList.add('smartbanner-show');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SmartBanner, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (__CLIENT__) {
        this.setSettings(this.props.force);
      }
    }
  }, {
    key: 'setSettings',
    value: function setSettings(forceDeviceType) {
      var agent = _expressUseragent2.default.parse(window.navigator.userAgent);
      var deviceType = '';
      var osVersion = parseInt(agent.version, 10);

      if (forceDeviceType) {
        deviceType = forceDeviceType;
      } else if ((agent.isAndroid || agent.isAndroidTablet) && (agent.isChrome ? osVersion < 44 : true)) {
        deviceType = 'android';
      } else if ((agent.isiPad || agent.isiPhone) && (agent.isSafari ? osVersion < 6 : true)) {
        deviceType = 'ios';
      }

      this.setState({ deviceType: deviceType });
      if (deviceType) {
        this.setSettingsForDevice(deviceType);
      }
    }
  }, {
    key: 'setSettingsForDevice',
    value: function setSettingsForDevice(deviceType) {
      var _this2 = this;

      var mixins = {
        ios: {
          icon: 'app-banner-ios.jpg',
          appMeta: 'apple-itunes-app',
          getStoreLink: function getStoreLink() {
            return 'https://itunes.apple.com/' + _this2.props.appStoreLanguage + '/app/id';
          }
        },
        android: {
          icon: 'app-banner-android.png',
          appMeta: 'google-play-app',
          getStoreLink: function getStoreLink() {
            return 'http://play.google.com/store/apps/details?id=';
          }
        }
      };

      if (mixins[deviceType]) {
        this.setState({
          settings: mixins[deviceType],
          appId: this.parseAppId(mixins[deviceType].appMeta)
        });
      }
    }
  }, {
    key: 'close',
    value: function close() {
      this.hide();

      var expireDate = new Date();
      expireDate = new Date(expireDate.setDate(expireDate.getDate() + this.props.daysHidden));

      _reactCookie2.default.save('smartbanner-closed', 'true', {
        path: '/',
        expires: expireDate
      });
    }
  }, {
    key: 'install',
    value: function install() {
      var expireDate = new Date();
      expireDate = new Date(expireDate.setDate(expireDate.getDate() + this.props.daysReminder));

      this.hide();
      _reactCookie2.default.save('smartbanner-installed', 'true', {
        path: '/',
        expires: expireDate
      });
    }
  }, {
    key: 'retrieveInfo',
    value: function retrieveInfo() {
      var link = this.state.settings.getStoreLink() + this.state.appId;
      var inStore = '\n      ' + this.props.price[this.state.deviceType] + ' - ' + this.props.storeText[this.state.deviceType];
      var icon = require('../../../static/images/' + this.state.settings.icon); // eslint-disable-line

      return {
        icon: icon,
        link: link,
        inStore: inStore
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // Don't show banner when:
      // 1) if device isn't iOS or Android
      // 2) website is loaded in app,
      // 3) user dismissed banner,
      // 4) or we have no app id in meta

      if (!this.state.deviceType || window.navigator.standalone || _reactCookie2.default.load('smartbanner-closed') || _reactCookie2.default.load('smartbanner-installed')) {
        return null;
      }

      if (!this.state.appId) {
        return null;
      }

      this.show();

      var _retrieveInfo = this.retrieveInfo(),
          icon = _retrieveInfo.icon,
          link = _retrieveInfo.link,
          inStore = _retrieveInfo.inStore;

      var wrapperClassName = 'smartbanner smartbanner-' + this.state.deviceType;
      var iconStyle = {
        backgroundImage: 'url(' + icon + ')'
      };

      return (0, _jsx3.default)('div', {
        className: wrapperClassName
      }, void 0, (0, _jsx3.default)('div', {
        className: 'smartbanner-container'
      }, void 0, (0, _jsx3.default)('a', {
        tabIndex: '-1',
        className: 'smartbanner-close',
        onClick: function onClick() {
          return _this3.close();
        },
        'data-metrics-event-name': 'SmartBanner:close'
      }, void 0, (0, _jsx3.default)('i', {
        className: 'fa fa-times-circle'
      })), (0, _jsx3.default)('span', {
        className: 'smartbanner-icon',
        style: iconStyle
      }), (0, _jsx3.default)('div', {
        className: 'smartbanner-info'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'smartbanner-title'
      }, void 0, this.props.title), (0, _jsx3.default)('div', {}, void 0, this.props.author), (0, _jsx3.default)('span', {}, void 0, inStore)), (0, _jsx3.default)('a', {
        href: link,
        onClick: function onClick() {
          return _this3.install();
        },
        className: 'smartbanner-button',
        'data-metrics-event-name': 'SmartBanner:InstallAapp'
      }, void 0, (0, _jsx3.default)('span', {
        className: 'smartbanner-button-text'
      }, void 0, this.props.button))));
    }
  }]);
  return SmartBanner;
}(_react.Component);

SmartBanner.propTypes = {
  daysHidden: _react.PropTypes.number,
  daysReminder: _react.PropTypes.number,
  appStoreLanguage: _react.PropTypes.string,
  button: _react.PropTypes.string,
  storeText: customPropTypes.storeText,
  price: customPropTypes.storeText,
  force: _react.PropTypes.string,
  title: _react.PropTypes.string,
  author: _react.PropTypes.string
};

SmartBanner.defaultProps = {
  daysHidden: 15,
  daysReminder: 90,
  appStoreLanguage: 'us',
  button: 'View',
  storeText: {
    ios: 'On the App Store',
    android: 'In Google Play',
    windows: 'In Windows Store',
    kindle: 'In the Amazon Appstore'
  },
  price: {
    ios: 'Free',
    android: 'Free',
    windows: 'Free',
    kindle: 'Free'
  },
  force: '',
  title: '',
  author: ''
};

exports.default = SmartBanner;