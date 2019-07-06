'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

var _Popover = require('react-bootstrap/lib/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _Nav = require('react-bootstrap/lib/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = require('react-bootstrap/lib/NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _reactIntl = require('react-intl');

var _SwitchToggle = require('components/SwitchToggle');

var _SwitchToggle2 = _interopRequireDefault(_SwitchToggle);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = require('../style.scss');

var RepeatButton = function (_Component) {
  (0, _inherits3.default)(RepeatButton, _Component);

  function RepeatButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RepeatButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RepeatButton.__proto__ || (0, _getPrototypeOf2.default)(RepeatButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleToggle = function () {
      var _this$props = _this.props,
          repeat = _this$props.repeat,
          setRepeat = _this$props.setRepeat,
          current = _this$props.current;


      if (repeat.from) {
        return setRepeat({});
      }

      return setRepeat({
        from: current,
        to: current
      });
    }, _this.handleNavChange = function (nav) {
      var _this$props2 = _this.props,
          setRepeat = _this$props2.setRepeat,
          current = _this$props2.current;


      if (nav === 1) {
        // Should set single ayah
        return setRepeat({
          from: current,
          to: current
        });
      }

      return setRepeat({
        from: current,
        to: current + 3
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RepeatButton, [{
    key: 'renderRangeAyahs',
    value: function renderRangeAyahs() {
      var _props = this.props,
          chapter = _props.chapter,
          repeat = _props.repeat,
          setRepeat = _props.setRepeat;

      var array = Array(chapter.versesCount).join().split(',');

      return (0, _jsx3.default)('div', {
        className: 'col-md-12',
        style: { paddingTop: 15 }
      }, void 0, (0, _jsx3.default)('ul', {
        className: 'list-inline',
        style: { marginBottom: 0 }
      }, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'player.repeat.rangeStart',
        defaultMessage: 'From'
      }), ' ', ':', (0, _jsx3.default)('br', {}), (0, _jsx3.default)(_FormControl2.default, {
        componentClass: 'select',
        value: repeat.from,
        onChange: function onChange(event) {
          var to = parseInt(event.target.value, 10) + 3;
          to = to < chapter.versesCount ? to : chapter.versesCount;

          setRepeat((0, _extends3.default)({}, repeat, {
            from: parseInt(event.target.value, 10),
            to: to
          }));
        }
      }, void 0, array.reduce(function (options, ayah, index) {
        if (index + 1 < chapter.versesCount) {
          // Exclude last verse
          options.push((0, _jsx3.default)('option', {
            value: index + 1
          }, index, index + 1));
        }
        return options;
      }, []))), (0, _jsx3.default)('li', {}, void 0, ' - '), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'player.repeat.rangeEnd',
        defaultMessage: 'To'
      }), ' ', ':', (0, _jsx3.default)('br', {}), (0, _jsx3.default)(_FormControl2.default, {
        componentClass: 'select',
        value: repeat.to,
        onChange: function onChange(event) {
          return setRepeat((0, _extends3.default)({}, repeat, { to: parseInt(event.target.value, 10) }));
        }
      }, void 0, array.reduce(function (options, ayah, index) {
        if ((repeat.from ? repeat.from : 1) < index + 1 && index + 1 <= chapter.versesCount) {
          // eslint-disable-line max-len
          options.push((0, _jsx3.default)('option', {
            value: index + 1
          }, index, index + 1));
        }
        return options;
      }, [])))));
    }
  }, {
    key: 'renderSingleAyah',
    value: function renderSingleAyah() {
      var _props2 = this.props,
          repeat = _props2.repeat,
          setRepeat = _props2.setRepeat,
          chapter = _props2.chapter;

      var array = Array(chapter.versesCount).join().split(',');

      return (0, _jsx3.default)('div', {
        className: 'col-md-12',
        style: { paddingTop: 15 }
      }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'player.currentVerse',
        defaultMessage: 'Ayah'
      }), ' ', ':', ' ', (0, _jsx3.default)('br', {}), (0, _jsx3.default)(_FormControl2.default, {
        componentClass: 'select',
        value: repeat.from,
        onChange: function onChange(event) {
          return setRepeat((0, _extends3.default)({}, repeat, {
            from: parseInt(event.target.value, 10),
            to: parseInt(event.target.value, 10)
          }));
        }
      }, void 0, array.map(function (ayah, index) {
        return (0, _jsx3.default)('option', {
          value: index + 1
        }, index, index + 1);
      })));
    }
  }, {
    key: 'renderNav',
    value: function renderNav() {
      var repeat = this.props.repeat;


      return (0, _jsx3.default)('div', {
        className: (!repeat.from && style.disabled) + ' row'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'col-md-12'
      }, void 0, (0, _jsx3.default)(_Nav2.default, {
        bsStyle: 'pills',
        activeKey: repeat.from === repeat.to ? 1 : 2,
        onSelect: this.handleNavChange
      }, void 0, (0, _jsx3.default)(_NavItem2.default, {
        eventKey: 1,
        title: 'Single Ayah',
        className: style.pill
      }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'player.repeat.single',
        defaultMessage: 'Single'
      })), (0, _jsx3.default)(_NavItem2.default, {
        eventKey: 2,
        title: 'Range',
        className: style.pill
      }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'player.repeat.range',
        defaultMessage: 'Range'
      })))));
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var repeat = this.props.repeat;


      return (0, _jsx3.default)('div', {
        className: (!repeat.from && style.disabled) + ' row'
      }, void 0, repeat.from === repeat.to ? this.renderSingleAyah() : this.renderRangeAyahs());
    }
  }, {
    key: 'renderTimes',
    value: function renderTimes() {
      var _props3 = this.props,
          repeat = _props3.repeat,
          setRepeat = _props3.setRepeat,
          intl = _props3.intl;

      var times = Array(10).join().split(',');

      return (0, _jsx3.default)('div', {
        className: (!repeat.from && style.disabled) + ' row'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'col-md-12',
        style: { paddingTop: 15 }
      }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'player.repeat.title',
        defaultMessage: 'Repeat'
      }), ':', ' ', (0, _jsx3.default)('br', {}), (0, _jsx3.default)(_FormControl2.default, {
        componentClass: 'select',
        value: repeat.times,
        onChange: function onChange(event) {
          return setRepeat((0, _extends3.default)({}, repeat, {
            times: parseInt(event.target.value, 10)
          }));
        }
      }, void 0, (0, _jsx3.default)('option', {
        value: 'Infinity'
      }, void 0, intl.formatMessage({
        id: 'player.repeat.loop',
        defaultMessage: 'Loop'
      })), times.map(function (ayah, index) {
        return (0, _jsx3.default)('option', {
          value: index + 1
        }, index, index + 1);
      }))));
    }
  }, {
    key: 'render',
    value: function render() {
      var repeat = this.props.repeat;


      var popover = (0, _jsx3.default)(_Popover2.default, {
        id: 'FontSizeDropdown',
        className: style.popover,
        title: (0, _jsx3.default)('div', {
          className: 'row'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-md-12 text-center'
        }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'player.repeat.title',
          defaultMessage: 'TOGGLE REPEAT'
        }), '  ', (0, _jsx3.default)(_SwitchToggle2.default, {
          checked: !!repeat.from,
          onToggle: this.handleToggle,
          id: 'repeat-toggle',
          flat: true
        })))
      }, void 0, this.renderNav(), this.renderOptions(), this.renderTimes());

      return (0, _jsx3.default)('div', {
        className: 'text-center'
      }, void 0, (0, _jsx3.default)(_OverlayTrigger2.default, {
        overlay: popover,
        placement: 'top',
        trigger: 'click',
        rootClose: true
      }, void 0, (0, _jsx3.default)('i', {
        className: 'pointer ss-icon ss-repeat ' + style.buttons + ' ' + (repeat.from && style.repeat)
      })));
    }
  }]);
  return RepeatButton;
}(_react.Component);

RepeatButton.propTypes = {
  chapter: customPropTypes.surahType,
  repeat: customPropTypes.timeInterval,
  setRepeat: _react.PropTypes.func.isRequired,
  current: _react.PropTypes.number.isRequired,
  intl: _reactIntl.intlShape.isRequired
};

exports.default = (0, _reactIntl.injectIntl)(RepeatButton);