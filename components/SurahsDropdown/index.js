'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

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

var _LinkContainer = require('react-router-bootstrap/lib/LinkContainer');

var _LinkContainer2 = _interopRequireDefault(_LinkContainer);

var _NavDropdown = require('react-bootstrap/lib/NavDropdown');

var _NavDropdown2 = _interopRequireDefault(_NavDropdown);

var _MenuItem = require('react-bootstrap/lib/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('./style.scss');

var SurahsDropdown = function (_Component) {
  (0, _inherits3.default)(SurahsDropdown, _Component);

  function SurahsDropdown() {
    (0, _classCallCheck3.default)(this, SurahsDropdown);
    return (0, _possibleConstructorReturn3.default)(this, (SurahsDropdown.__proto__ || (0, _getPrototypeOf2.default)(SurahsDropdown)).apply(this, arguments));
  }

  (0, _createClass3.default)(SurahsDropdown, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.chapters !== nextProps.chapters;
    }
  }, {
    key: 'renderList',
    value: function renderList() {
      var chapters = this.props.chapters;


      return (0, _values2.default)(chapters).map(function (chapter, index) {
        return (0, _jsx3.default)(_LinkContainer2.default, {
          to: '/' + chapter.chapterNumber,
          activeClass: 'active'
        }, 'chapter-' + index, (0, _jsx3.default)(_MenuItem2.default, {}, void 0, (0, _jsx3.default)('div', {
          className: 'row'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-xs-2 col-md-2'
        }, void 0, (0, _jsx3.default)('span', {
          className: 'chapter-num'
        }, void 0, chapter.chapterNumber)), (0, _jsx3.default)('div', {
          className: 'col-xs-7 col-md-7'
        }, void 0, (0, _jsx3.default)('span', {
          className: 'suran-name'
        }, void 0, chapter.nameSimple), (0, _jsx3.default)('br', {}), (0, _jsx3.default)('span', {
          className: 'chapter-meaning'
        }, void 0, chapter.translatedName.name)), (0, _jsx3.default)('div', {
          className: 'col-xs-3  col-md-3 text-right ' + styles.arabicName
        }, void 0, chapter.nameArabic))));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var chapter = this.props.chapter;


      return (0, _jsx3.default)(_NavDropdown2.default, {
        link: true,
        className: styles.dropdown,
        id: 'chapters-dropdown',
        title: chapter.nameSimple || (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'setting.chapters',
          defaultMessage: 'Surahs'
        })
      }, void 0, this.renderList());
    }
  }]);
  return SurahsDropdown;
}(_react.Component);

SurahsDropdown.propTypes = {
  chapters: customPropTypes.chapters.isRequired,
  chapter: customPropTypes.chapters.isRequired
};

exports.default = SurahsDropdown;