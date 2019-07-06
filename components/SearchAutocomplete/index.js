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

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _suggest = require('redux/actions/suggest');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = require('./style.scss'); // TODO: Should be handled by redux and not component states.


var ayahRegex = /^(\d+)(?::(\d+))?$/;

var SearchAutocomplete = function (_Component) {
  (0, _inherits3.default)(SearchAutocomplete, _Component);

  function SearchAutocomplete() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SearchAutocomplete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SearchAutocomplete.__proto__ || (0, _getPrototypeOf2.default)(SearchAutocomplete)).call.apply(_ref, [this].concat(args))), _this), _this.getSurahSuggestions = function (value) {
      var matches = [];

      if (!value) return matches;

      var isverseKeySearch = ayahRegex.test(value);

      if (isverseKeySearch) {
        var captures = value.match(ayahRegex);
        var chapterId = captures[1];
        var ayahNum = captures[2];
        var chapter = _this.props.chapters[chapterId];
        matches.push([chapter.nameSimple, chapter.chapterNumber + (ayahNum ? '/' + ayahNum : '')]);
      } else if (value.length >= 2) {
        var escaped = value.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

        (0, _keys2.default)(_this.props.chapters).forEach(function (chapterId) {
          var chapter = _this.props.chapters[chapterId];
          if (RegExp(escaped, 'i').test(chapter.nameSimple.replace(/['-]/g, ''))) {
            matches.push([chapter.nameSimple, chapter.chapterNumber]);
          } else if (RegExp(escaped, 'i').test(chapter.nameArabic)) {
            matches.push([chapter.nameArabic, chapter.chapterNumber]);
          }
        });
      }

      return matches.map(function (match) {
        return {
          text: '<b>' + match[0] + '</b>',
          href: '/' + match[1]
        };
      }).slice(0, 5);
    }, _this.suggest = function (query) {
      var lang = _this.props.lang;


      if (!query || ayahRegex.test(query)) return false;

      return _this.props.suggest(query, lang);
    }, _this.handleInputKeyDown = function (event) {
      if (!(event.keyCode === 9 || event.keyCode === 40 || event.keyCode === 27)) {
        return;
      }

      var items = _this.menu.getElementsByTagName('li');

      if (!items.length) {
        return;
      }

      switch (event.keyCode) {
        case 9:
          // tab
          items[0].focus();
          break;
        case 27:
          // escape
          // TODO if open closeMenu()
          break;
        case 40:
          // down
          items[0].focus();
          break;
        default:
          return;
      }
      event.preventDefault();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SearchAutocomplete, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.input.addEventListener('keydown', this.handleInputKeyDown.bind(this));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.value !== nextProps.value) {
        if (this.timer) {
          clearTimeout(this.timer);
        }

        this.timer = setTimeout(function () {
          _this2.suggest(nextProps.value);
        }, this.props.delay);
      }

      return false;
    }
  }, {
    key: 'getSuggestions',
    value: function getSuggestions() {
      var suggestions = this.getSurahSuggestions(this.props.value);

      if (this.props.suggestions) {
        suggestions = suggestions.concat(this.props.suggestions);
      }

      return suggestions;
    }
  }, {
    key: 'handleItemKeyDown',
    value: function handleItemKeyDown(event, item) {
      var items = this.menu.getElementsByTagName('li');

      if (!items.length) {
        return;
      }

      switch (event.keyCode) {
        case 9:
          // tab
          return;
        case 13:
          // enter
          this.props.push(item.href); // change url
          break;
        case 27:
          // escape
          // TODO if open closeMenu()
          break;
        case 38:
          // up
          if (event.target === items[0]) {
            // we're on the first item, so focus the input
            this.props.input.focus();
          } else {
            event.target.previousSibling.focus();
          }
          break;
        case 40:
          // down
          if (event.target === items[items.length - 1]) {
            items[0].focus();
          } else {
            event.target.nextSibling.focus();
          }
          break;
        default:
          return;
      }
      event.preventDefault();
    }
  }, {
    key: 'renderList',
    value: function renderList() {
      var _this3 = this;

      if (!this.getSuggestions().length) {
        return false;
      }

      return this.getSuggestions().map(function (item) {
        return (0, _jsx3.default)('li', {
          tabIndex: '-1',
          onKeyDown: function onKeyDown(event) {
            return _this3.handleItemKeyDown(event, item);
          }
        }, item.href, (0, _jsx3.default)('div', {
          className: styles.link
        }, void 0, (0, _jsx3.default)('a', {
          href: item.href,
          tabIndex: '-1'
        }, void 0, item.ayah)), (0, _jsx3.default)('div', {
          className: styles.text
        }, void 0, (0, _jsx3.default)('a', {
          href: item.href,
          tabIndex: '-1',
          dangerouslySetInnerHTML: { __html: item.text }
        })));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return (0, _jsx3.default)('div', {
        className: styles.autocomplete + ' ' + (!this.getSuggestions().length && 'hidden')
      }, void 0, _react2.default.createElement(
        'ul',
        { role: 'menu', className: styles.list, ref: function ref(_ref2) {
            _this4.menu = _ref2;
          } },
        this.renderList()
      ));
    }
  }]);
  return SearchAutocomplete;
}(_react.Component);

function mapStateToProps(state, ownProps) {
  var chapters = state.chapters.entities;
  var chapterId = state.chapters.current;
  var suggestions = state.suggestResults.results[ownProps.value];
  var lang = 'en';

  if (state.verses && state.verses.entities && state.verses.entities[chapterId]) {
    var ayahs = state.verses.entities[chapterId];
    var verseKey = (0, _keys2.default)(ayahs)[0];

    if (verseKey) {
      var ayah = ayahs[verseKey];

      if (ayah.content && ayah.content[0] && ayah.content[0].lang) {
        lang = ayah.content[0].lang;
      }
    }
  }

  return {
    chapters: chapters,
    suggestions: suggestions,
    lang: lang
  };
}

SearchAutocomplete.propTypes = {
  chapters: customPropTypes.chapters.isRequired,
  value: _react.PropTypes.string,
  // TODO: This should not be doing html stuff. Should use react onKeydown.
  input: _react.PropTypes.any, // eslint-disable-line
  push: _react.PropTypes.func.isRequired,
  suggest: _react.PropTypes.func.isRequired,
  suggestions: customPropTypes.suggestions,
  lang: _react.PropTypes.string,
  delay: _react.PropTypes.number
};

SearchAutocomplete.defaultProps = {
  delay: 200
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { push: _reactRouterRedux.push, suggest: _suggest.suggest })(SearchAutocomplete);