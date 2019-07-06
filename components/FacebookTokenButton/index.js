'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactShare = require('react-share');

var _auth = require('redux/actions/auth');

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('./style.scss');

var FacebookIcon = (0, _reactShare.generateShareIcon)('facebook');

var FacebookTokenButton = function FacebookTokenButton(_ref) {
  var save = _ref.save,
      push = _ref.push;
  // eslint-disable-line
  var popup = null;
  var interval = null;

  var handleClick = function handleClick() {
    popup = window.open('/onequran/omniauth/facebook?omniauth_window_type=newWindow&resource_class=User', '_blank'); // eslint-disable-line
    interval = setInterval(function () {
      return popup.postMessage('requestCredentials', '*');
    }, 1000);

    window.addEventListener('message', function (event) {
      // eslint-disable-line
      if (event.data.uid) {
        save(event.data);
        clearInterval(interval);

        return push('/');
      }
    }, false);
  };

  return (0, _jsx3.default)('button', {
    onClick: handleClick,
    className: styles.button + ' btn btn-default btn-block btn-lg'
  }, void 0, (0, _jsx3.default)(FacebookIcon, {
    size: 24,
    iconBgStyle: { fill: 'transparent' },
    logoFillColor: 'white'
  }), ' ', 'Continue with Facebook');
};

exports.default = (0, _reactRedux.connect)(null, { save: _auth.save, push: _reactRouterRedux.push })(FacebookTokenButton);