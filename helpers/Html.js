'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _serializeJavascript = require('serialize-javascript');

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable global-require, quotes, max-len */
var Html = function Html(_ref) {
  var store = _ref.store,
      component = _ref.component,
      assets = _ref.assets;

  var content = component ? _server2.default.renderToString(component) : '';
  var head = _reactHelmet2.default.rewind();
  return (0, _jsx3.default)('html', {
    lang: 'en'
  }, void 0, (0, _jsx3.default)('head', {}, void 0, head.base.toComponent(), head.title.toComponent(), head.meta.toComponent(), head.link.toComponent(), head.script.toComponent(), head.style.toComponent(), (0, _keys2.default)(assets.styles).map(function (style, i) {
    return (0, _jsx3.default)('link', {
      href: assets.styles[style],
      rel: 'stylesheet',
      type: 'text/css'
    }, i);
  }), (0, _keys2.default)(assets.styles).length === 0 ? (0, _jsx3.default)('style', {
    dangerouslySetInnerHTML: {
      __html: require('../../src/styles/bootstrap.config')
    }
  }) : null), (0, _jsx3.default)('body', {}, void 0, (0, _jsx3.default)('div', {
    id: 'app',
    dangerouslySetInnerHTML: { __html: content }
  }), (0, _jsx3.default)('style', {
    dangerouslySetInnerHTML: {
      __html: '.async-hide { opacity: 0 !important}'
    }
  }), (0, _jsx3.default)('script', {
    dangerouslySetInnerHTML: {
      __html: '(function(a,s,y,n,c,h,i,d,e){s.className+=\' \'+y;h.start=1*new Date;\n            h.end=i=function(){s.className=s.className.replace(RegExp(\' ?\'+y),\'\')};\n            (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;\n            })(window,document.documentElement,\'async-hide\',\'dataLayer\',4000,\n            {\'GTM-PNMFTW3\':true});'
    }
  }), (0, _jsx3.default)('script', {
    dangerouslySetInnerHTML: {
      __html: '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n            })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n\n            ga(\'create\', \'UA-8496014-1\', \'auto\');\n            ga(\'require\', \'GTM-PNMFTW3\');\n            '
    },
    charSet: 'UTF-8'
  }), (0, _jsx3.default)('script', {
    dangerouslySetInnerHTML: {
      __html: 'if (\'serviceWorker\' in navigator) {navigator.serviceWorker.register(\'/quran-service-worker.js\', {scope: \'./\'}).then(function(registration) {}).catch(function(error) {});}'
    },
    charSet: 'UTF-8'
  }), (0, _jsx3.default)('script', {
    dangerouslySetInnerHTML: {
      __html: 'window.reduxData=' + (0, _serializeJavascript2.default)(store.getState()) + ';'
    },
    charSet: 'UTF-8'
  }), process.env.NODE_ENV === 'production' && (0, _jsx3.default)('script', {
    dangerouslySetInnerHTML: {
      __html: '/*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(c){n=document.domain,r.src=\'javascript:var d=document.open();d.domain="\'+n+\'";void(0);\',o=s}o.open()._l=function(){var o=this.createElement("script");n&&(this.domain=n),o.id="js-iframe-async",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write(\'<body onload="document._l();">\'),o.close()}("https://assets.zendesk.com/embeddable_framework/main.js","quran.zendesk.com");/*]]>*/'
    }
  }), process.env.NODE_ENV === 'production' && (0, _jsx3.default)('script', {
    dangerouslySetInnerHTML: {
      __html: '\n                  (function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);mixpanel.init("d3f9b2f15c4bf0509e85845b56921034");\n                '
    }
  }), process.env.NODE_ENV === 'production' && (0, _jsx3.default)('script', {
    src: 'https://cdn.ravenjs.com/3.0.4/raven.min.js'
  }), (0, _keys2.default)(assets.javascript).filter(function (script) {
    return !assets.javascript[script].includes('-chunk');
  }).map(function (script, i) {
    return (0, _jsx3.default)('script', {
      src: assets.javascript[script]
    }, i);
  })));
};

Html.propTypes = {
  store: _react.PropTypes.object, // eslint-disable-line
  assets: _react.PropTypes.object, // eslint-disable-line
  component: _react.PropTypes.element
};

exports.default = Html;