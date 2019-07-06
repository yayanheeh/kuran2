'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _options = require('redux/actions/options.js');

var OptionsActions = _interopRequireWildcard(_options);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _Link = require('react-router/lib/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Drawer = require('quran-components/lib/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Menu = require('quran-components/lib/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _SearchInput = require('components/SearchInput');

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _SurahsDropdown = require('components/SurahsDropdown');

var _SurahsDropdown2 = _interopRequireDefault(_SurahsDropdown);

var _ReadingModeToggle = require('components/ReadingModeToggle');

var _ReadingModeToggle2 = _interopRequireDefault(_ReadingModeToggle);

var _NightModeToggle = require('components/NightModeToggle');

var _NightModeToggle2 = _interopRequireDefault(_NightModeToggle);

var _InformationToggle = require('components/InformationToggle');

var _InformationToggle2 = _interopRequireDefault(_InformationToggle);

var _FontSizeDropdown = require('components/FontSizeDropdown');

var _FontSizeDropdown2 = _interopRequireDefault(_FontSizeDropdown);

var _ReciterDropdown = require('components/ReciterDropdown');

var _ReciterDropdown2 = _interopRequireDefault(_ReciterDropdown);

var _ContentDropdown = require('components/ContentDropdown');

var _ContentDropdown2 = _interopRequireDefault(_ContentDropdown);

var _TooltipDropdown = require('components/TooltipDropdown');

var _TooltipDropdown2 = _interopRequireDefault(_TooltipDropdown);

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

var _VersesDropdown = require('components/VersesDropdown');

var _VersesDropdown2 = _interopRequireDefault(_VersesDropdown);

var _verses = require('redux/actions/verses.js');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('../style.scss');

var GlobalNavSurah = function (_Component) {
  (0, _inherits3.default)(GlobalNavSurah, _Component);

  function GlobalNavSurah() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GlobalNavSurah);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GlobalNavSurah.__proto__ || (0, _getPrototypeOf2.default)(GlobalNavSurah)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      drawerOpen: false
    }, _this.handleOptionChange = function (payload) {
      var _this$props = _this.props,
          chapter = _this$props.chapter,
          setOption = _this$props.setOption,
          options = _this$props.options,
          versesIds = _this$props.versesIds;


      setOption(payload);

      if (chapter) {
        var from = [].concat((0, _toConsumableArray3.default)(versesIds))[0];
        var to = [].concat((0, _toConsumableArray3.default)(versesIds))[[].concat((0, _toConsumableArray3.default)(versesIds)).length - 1];
        var paging = { offset: from - 1, limit: to - from + 1 };
        _this.props.load(chapter.chapterNumber, paging, (0, _extends3.default)({}, options, payload));
      }
    }, _this.handleVerseDropdownClick = function (verseNum) {
      var _this$props2 = _this.props,
          versesIds = _this$props2.versesIds,
          chapter = _this$props2.chapter; // eslint-disable-line no-shadow

      _this.props.setCurrentVerse(chapter.chapterNumber + ':' + verseNum);

      if (versesIds.has(verseNum)) {
        return false;
      }

      return _this.props.replace('/' + chapter.chapterNumber + '/' + verseNum + '-' + (verseNum + 10));
    }, _this.handleDrawerToggle = function (open) {
      _this.setState({ drawerOpen: open });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GlobalNavSurah, [{
    key: 'renderDrawerToggle',
    value: function renderDrawerToggle(visibleXs) {
      var _this2 = this;

      return (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
        tabIndex: '-1',
        className: 'pointer ' + (visibleXs && 'visible-xs visible-sm'),
        onClick: function onClick() {
          return _this2.handleDrawerToggle(true);
        }
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-settings text-align'
      }), (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
        id: 'setting.title',
        defaultMessage: 'Settings'
      })));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          chapter = _props.chapter,
          chapters = _props.chapters,
          setOption = _props.setOption,
          versesIds = _props.versesIds,
          options = _props.options,
          props = (0, _objectWithoutProperties3.default)(_props, ['chapter', 'chapters', 'setOption', 'versesIds', 'options']);


      return _react2.default.createElement(_index2.default, (0, _extends3.default)({}, props, {
        leftControls: [(0, _jsx3.default)(_SurahsDropdown2.default, {
          chapter: chapter,
          chapters: chapters
        }), (0, _jsx3.default)(_VersesDropdown2.default, {
          chapter: chapter,
          isReadingMode: options.isReadingMode,
          loadedVerses: versesIds,
          onClick: this.handleVerseDropdownClick
        }), (0, _jsx3.default)('div', {
          className: 'navbar-form navbar-left hidden-xs hidden-sm'
        }, void 0, (0, _jsx3.default)(_SearchInput2.default, {
          className: 'search-input'
        })), (0, _jsx3.default)('li', {
          className: 'visible-xs-inline-block visible-sm-inline-block'
        }, void 0, (0, _jsx3.default)(_Link2.default, {
          to: '/search'
        }, void 0, (0, _jsx3.default)('i', {
          className: 'ss-icon ss-search',
          style: { verticalAlign: 'sub' }
        }))), this.renderDrawerToggle(true), (0, _jsx3.default)(_Drawer2.default, {
          right: true,
          drawerClickClose: false,
          open: this.state.drawerOpen,
          handleOpen: this.handleDrawerToggle,
          toggle: (0, _jsx3.default)('noscript', {}),
          header: (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
            id: 'setting.title',
            defaultMessage: 'Settings'
          }))
        }, void 0, (0, _jsx3.default)(_Menu2.default, {}, void 0, (0, _jsx3.default)(_InformationToggle2.default, {
          onToggle: setOption,
          isToggled: options.isShowingSurahInfo
        }), (0, _jsx3.default)(_ReadingModeToggle2.default, {
          isToggled: options.isReadingMode,
          onToggle: setOption
        }), (0, _jsx3.default)(_NightModeToggle2.default, {
          isNightMode: options.isNightMode,
          onToggle: setOption
        }), (0, _jsx3.default)('hr', {}), (0, _jsx3.default)(_ReciterDropdown2.default, {
          onOptionChange: this.handleOptionChange
        }), (0, _jsx3.default)(_ContentDropdown2.default, {
          onOptionChange: this.handleOptionChange
        }), (0, _jsx3.default)(_TooltipDropdown2.default, {
          tooltip: options.tooltip,
          onOptionChange: setOption
        }), (0, _jsx3.default)('hr', {}), (0, _jsx3.default)('div', {
          className: styles.title
        }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'setting.fontSize',
          defaultMessage: 'Font Size'
        })), (0, _jsx3.default)(_FontSizeDropdown2.default, {
          fontSize: options.fontSize,
          onOptionChange: setOption
        })))],
        rightControls: [this.renderDrawerToggle()]
      }));
    }
  }]);
  return GlobalNavSurah;
}(_react.Component);

function mapStateToProps(state, ownProps) {
  var chapterId = parseInt(ownProps.params.chapterId, 10);
  var chapter = state.chapters.entities[chapterId];
  var verses = state.verses.entities[chapterId];
  var versesArray = verses ? (0, _keys2.default)(verses).map(function (key) {
    return parseInt(key.split(':')[1], 10);
  }) : [];
  var versesIds = new _set2.default(versesArray);

  return {
    chapter: chapter,
    chapters: state.chapters.entities,
    options: state.options,
    versesIds: versesIds
  };
}

GlobalNavSurah.propTypes = {
  chapter: customPropTypes.surahType.isRequired,
  chapters: customPropTypes.chapters.isRequired,
  options: customPropTypes.optionsType.isRequired,
  setOption: _react.PropTypes.func.isRequired,
  versesIds: _react.PropTypes.instanceOf(_set2.default),
  load: _react.PropTypes.func.isRequired,
  setCurrentVerse: _react.PropTypes.func.isRequired,
  replace: _react.PropTypes.func.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, (0, _extends3.default)({}, OptionsActions, {
  load: _verses.load,
  replace: _reactRouterRedux.replace,
  setCurrentVerse: _verses.setCurrentVerse
}))(GlobalNavSurah);