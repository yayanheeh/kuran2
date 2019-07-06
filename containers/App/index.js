'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _class, _temp2; /* eslint-disable react/prefer-stateless-function */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

var _reactMetrics = require('react-metrics');

var _reactRedux = require('react-redux');

var _reduxConnect = require('redux-connect');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Modal = require('react-bootstrap/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _ComponentLoader = require('components/ComponentLoader');

var _ComponentLoader2 = _interopRequireDefault(_ComponentLoader);

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _metrics = require('helpers/metrics');

var _metrics2 = _interopRequireDefault(_metrics);

var _Footer = require('components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _NoScript = require('components/NoScript');

var _NoScript2 = _interopRequireDefault(_NoScript);

var _media = require('redux/actions/media');

var _footNote = require('redux/actions/footNote');

var _Loader = require('quran-components/lib/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _connect = require('./connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalHeader = _Modal2.default.Header;
var ModalTitle = _Modal2.default.Title;
var ModalBody = _Modal2.default.Body;

var GlobalNav = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve(require(( /* webpackChunkName: "globalnav" */'components/GlobalNav')));
  },
  LoadingComponent: _ComponentLoader2.default
});

var GlobalSidebar = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve(require(( /* webpackChunkName: "globalsidebar" */'components/GlobalSidebar')));
  },
  LoadingComponent: _ComponentLoader2.default
});

var SmartBanner = (0, _reactLoadable2.default)({
  loader: function loader() {
    return _promise2.default.resolve(require(( /* webpackChunkName: "smartbanner" */'components/SmartBanner')));
  },
  LoadingComponent: _ComponentLoader2.default
});

var App = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sidebarOpen: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          main = _props.main,
          nav = _props.nav,
          footer = _props.footer,
          children = _props.children,
          media = _props.media,
          footNote = _props.footNote,
          loadingFootNote = _props.loadingFootNote,
          removeMedia = _props.removeMedia,
          removeFootNote = _props.removeFootNote,
          props = (0, _objectWithoutProperties3.default)(_props, ['main', 'nav', 'footer', 'children', 'media', 'footNote', 'loadingFootNote', 'removeMedia', 'removeFootNote']);

      (0, _debug2.default)('component:APPLICATION', 'Render');
      var footNoteText = void 0;

      if (footNote) {
        footNoteText = footNote.text;
      } else {
        footNoteText = (0, _jsx3.default)(_Loader2.default, {
          isActive: loadingFootNote
        });
      }

      return (0, _jsx3.default)('div', {}, void 0, _react2.default.createElement(_reactHelmet2.default, _config2.default.app.head), (0, _jsx3.default)(_NoScript2.default, {}, void 0, (0, _jsx3.default)('div', {
        className: 'row noscript-warning'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'col-md-12'
      }, void 0, (0, _jsx3.default)('p', {}, void 0, 'Looks like either your browser does not support Javascript or its disabled. Quran.com workes best with JavaScript enabled. For more instruction on how to enable javascript', (0, _jsx3.default)('a', {
        href: 'http://www.enable-javascript.com/'
      }, void 0, 'Click here'))))), _react2.default.cloneElement(nav || _react2.default.createElement(GlobalNav, (0, _extends3.default)({ isStatic: true }, props)), {
        handleSidebarToggle: function handleSidebarToggle() {
          return _this2.setState({ sidebarOpen: !_this2.state.sidebarOpen });
        }
      }), __CLIENT__ && (0, _jsx3.default)(GlobalSidebar, {
        open: this.state.sidebarOpen,
        handleOpen: function handleOpen(open) {
          return _this2.setState({ sidebarOpen: open });
        }
      }), children || main, (0, _jsx3.default)(SmartBanner, {
        title: 'The Noble Quran - \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645',
        button: 'Install'
      }), footer || (0, _jsx3.default)(_Footer2.default, {}), __CLIENT__ && (0, _jsx3.default)(_Modal2.default, {
        bsSize: 'large',
        show: media && media.content,
        onHide: removeMedia
      }, void 0, (0, _jsx3.default)(ModalHeader, {
        closeButton: true
      }, void 0, (0, _jsx3.default)(ModalTitle, {
        className: 'montserrat'
      }, void 0, media.content && media.content.authorName)), (0, _jsx3.default)(ModalBody, {}, void 0, (0, _jsx3.default)('div', {
        className: 'embed-responsive embed-responsive-16by9',
        dangerouslySetInnerHTML: {
          __html: media.content && media.content.embedText
        }
      }))), __CLIENT__ && (0, _jsx3.default)(_Modal2.default, {
        bsSize: 'large',
        show: !!footNote || loadingFootNote,
        onHide: removeFootNote
      }, void 0, (0, _jsx3.default)(ModalHeader, {
        closeButton: true
      }, void 0, (0, _jsx3.default)(ModalTitle, {
        className: 'montserrat'
      }, void 0, 'Foot note')), (0, _jsx3.default)(ModalBody, {}, void 0, (0, _jsx3.default)('div', {
        className: '' + (footNote && footNote.languageName),
        dangerouslySetInnerHTML: { __html: footNoteText }
      }))));
    }
  }]);
  return App;
}(_react.Component), _class.contextTypes = {
  store: _react.PropTypes.object.isRequired
}, _temp2);


var metricsApp = (0, _reactMetrics.metrics)(_metrics2.default)(App);
var AsyncApp = (0, _reduxConnect.asyncConnect)([{ promise: _connect2.default }])(metricsApp);

App.propTypes = {
  media: customPropTypes.media.isRequired,
  removeMedia: _react.PropTypes.func.isRequired,
  removeFootNote: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.element,
  main: _react.PropTypes.element,
  nav: _react.PropTypes.element,
  footer: _react.PropTypes.element,
  sidebar: _react.PropTypes.element,
  footNote: customPropTypes.footNoteType,
  loadingFootNote: _react.PropTypes.bool
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    media: state.media,
    footNote: state.footNote.footNote,
    loadingFootNote: state.footNote.loadingFootNote
  };
}, { removeMedia: _media.removeMedia, removeFootNote: _footNote.removeFootNote })(AsyncApp);