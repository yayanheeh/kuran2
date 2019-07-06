'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */
exports.default = {
  pageViewEvent: 'pageLoad',
  vendors: [{
    api: {
      name: 'Analytics',
      pageView: function pageView() {
        mixpanel.track('Pageview', window.location);

        return ga('send', 'pageview');
      },
      track: function track(eventName, params) {
        mixpanel.track(eventName, params);

        return ga('send', {
          hitType: 'event',
          eventCategory: eventName,
          eventAction: params.action || 'click',
          eventLabel: params.label || 'Interactions'
        });
      },
      user: function user(_user) {
        return new _promise2.default(function (resolve) {
          resolve({
            user: _user
          });
        });
      }
    }
  }]
};