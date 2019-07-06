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

var _footNote = require('redux/actions/footNote');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-stateless-function */
var styles = require('./style.scss');

var Translation = function (_Component) {
  (0, _inherits3.default)(Translation, _Component);

  function Translation() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Translation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Translation.__proto__ || (0, _getPrototypeOf2.default)(Translation)).call.apply(_ref, [this].concat(args))), _this), _this.fetchFootNote = function (event) {
      var loadFootNote = _this.props.loadFootNote; // eslint-disable-line no-shadow

      if (event.target.nodeName === 'SUP' && event.target.attributes.foot_note) {
        event.preventDefault();
        loadFootNote(event.target.attributes.foot_note.value);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Translation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var index = this.props.index;

      var trans = void 0;

      if (__CLIENT__) {
        trans = document.getElementById('trans' + index).children[1]; // eslint-disable-line no-undef
        trans.addEventListener('click', this.fetchFootNote, true);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // TODO: this is breaking for search! Need to figure out why
      // const { index } = this.props;
      // let trans;

      // if (__CLIENT__) {
      // trans = document.getElementById(`trans${index}`).children[1]; // eslint-disable-line
      // trans.removeEventListener('click', this.fetchFootNote, true);
      // }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          translation = _props.translation,
          index = _props.index;

      var lang = translation.languageName;
      var isArabic = lang === 'arabic';

      return (0, _jsx3.default)('div', {
        id: 'trans' + index,
        className: styles.translation + ' ' + (isArabic && 'arabic') + ' translation'
      }, void 0, (0, _jsx3.default)('h4', {
        className: 'montserrat'
      }, void 0, translation.resourceName), (0, _jsx3.default)('h2', {
        className: (isArabic ? 'text-right' : 'text-left') + ' text-translation times-new'
      }, void 0, (0, _jsx3.default)('small', {
        dangerouslySetInnerHTML: { __html: translation.text },
        className: '' + (lang || 'times-new')
      })));
    }
  }]);
  return Translation;
}(_react.Component);

Translation.propTypes = {
  translation: customPropTypes.translationType.isRequired,
  index: _react.PropTypes.number,
  loadFootNote: _react.PropTypes.func.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {};
}, // eslint-disable-line no-unused-vars
{ loadFootNote: _footNote.loadFootNote })(Translation);