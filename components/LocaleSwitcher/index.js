'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _NavDropdown = require('react-bootstrap/lib/NavDropdown');

var _NavDropdown2 = _interopRequireDefault(_NavDropdown);

var _MenuItem = require('react-bootstrap/lib/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locales = _config2.default.locales,
    defaultLocale = _config2.default.defaultLocale; /* global window */

var LocaleSwitcher = function (_Component) {
  (0, _inherits3.default)(LocaleSwitcher, _Component);

  function LocaleSwitcher() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LocaleSwitcher);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LocaleSwitcher.__proto__ || (0, _getPrototypeOf2.default)(LocaleSwitcher)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentLocale: defaultLocale
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LocaleSwitcher, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (__CLIENT__) {
        // TODO: This should be passed in as a prop!
        this.setState({ currentLocale: _reactCookie2.default.load('currentLocale') || defaultLocale }); // eslint-disable-line
      }
    }
  }, {
    key: 'handleLocaleClick',
    value: function handleLocaleClick(locale, e) {
      e.preventDefault();
      var expireDate = new Date();
      expireDate.setYear(expireDate.getFullYear() + 1);

      this.setState({ currentLocale: locale });

      _reactCookie2.default.save('currentLocale', locale, {
        path: '/',
        expires: new Date(expireDate)
      });

      window.location.reload();
    }
  }, {
    key: 'renderList',
    value: function renderList() {
      var _this2 = this;

      var keys = (0, _keys2.default)(locales);

      return keys.map(function (key) {
        return (0, _jsx3.default)(_MenuItem2.default, {
          className: key === _this2.state.currentLocale && 'active',
          onClick: function onClick(e) {
            return _this2.handleLocaleClick(key, e);
          },
          href: '?local=' + key
        }, key, locales[key]);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;


      return (0, _jsx3.default)(_NavDropdown2.default, {
        active: false,
        id: 'site-language-dropdown',
        className: className,
        title: locales[this.state.currentLocale]
      }, void 0, this.renderList());
    }
  }]);
  return LocaleSwitcher;
}(_react.Component);

LocaleSwitcher.propTypes = {
  className: _react.PropTypes.string
};

exports.default = LocaleSwitcher;