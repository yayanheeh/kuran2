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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMetrics = require('react-metrics');

var _reactRouterRedux = require('react-router-redux');

var _reactRedux = require('react-redux');

var _reactIntl = require('react-intl');

var _SearchAutocomplete = require('components/SearchAutocomplete');

var _SearchAutocomplete2 = _interopRequireDefault(_SearchAutocomplete);

var _debug = require('helpers/debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchInput = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(SearchInput, _Component);

  function SearchInput() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SearchInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SearchInput.__proto__ || (0, _getPrototypeOf2.default)(SearchInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      showAutocomplete: false
    }, _this.search = function (event) {
      var arabic = new RegExp(/[\u0600-\u06FF]/);
      var shortcutSearch = /\d[\.,\:,\,,\\,//]/g; // eslint-disable-line no-useless-escape
      var splitSearch = /[\.,\:,\,,\\,//]/g; // eslint-disable-line no-useless-escape

      if (event.key === 'Enter' || event.keyCode === 13 || event.type === 'click') {
        var inputEl = _this.input;
        var searching = inputEl.value.trim();
        var ayah = void 0;
        var surah = void 0;

        // prevent search function while search input field is empty
        if (searching === '') {
          // reset input to display "Search" placeholder text
          inputEl.value = '';
          return false;
        }

        var pattern = new RegExp(shortcutSearch);

        if (pattern.test(searching)) {
          surah = parseInt(searching.split(splitSearch)[0], 10);
          ayah = parseInt(searching.split(splitSearch)[1], 10);

          if (isNaN(ayah)) {
            ayah = 1;
          }

          _this.context.metrics.track('Search', {
            action: 'surah',
            label: '/' + surah + '/' + ayah + '-' + (ayah + 10)
          });

          return _this.props.push('/' + surah + '/' + ayah + '-' + (ayah + 10));
        }

        _this.context.metrics.track('Search', {
          action: 'query',
          label: searching
        });

        return _this.props.push('/search?q=' + searching);
      }

      // This checks to see if the user is typing Arabic
      // and adjusts the text-align.
      if (arabic.test(event.target.value)) {
        event.target.style.textAlign = 'right'; // eslint-disable-line no-param-reassign
      } else {
        event.target.style.textAlign = 'left'; // eslint-disable-line no-param-reassign
      }

      if (_this.input) {
        _this.setState({ value: _this.input.value.trim() });
      }

      return false;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SearchInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var showAutocomplete = this.state.showAutocomplete;
      var _props = this.props,
          className = _props.className,
          intl = _props.intl;

      var placeholder = intl.formatMessage({ id: 'search.placeholder', defaultMessage: 'Search' });

      (0, _debug2.default)('component:SearchInput', 'Render');

      return (0, _jsx3.default)('div', {
        className: 'right-inner-addon searchinput ' + className
      }, void 0, (0, _jsx3.default)('a', {
        tabIndex: '-1',
        onClick: this.search
      }, void 0, (0, _jsx3.default)('i', {
        className: 'ss-icon ss-search'
      })), _react2.default.createElement('input', {
        type: 'search',
        placeholder: placeholder,
        ref: function ref(input) {
          _this2.input = input;
        },
        onFocus: function onFocus() {
          return _this2.setState({ showAutocomplete: true });
        }
        // onBlur={() => this.setState({ showAutocomplete: false })}
        , onKeyUp: this.search
      }), showAutocomplete && (0, _jsx3.default)(_SearchAutocomplete2.default, {
        value: this.state.value,
        input: this.input
      }));
    }
  }]);
  return SearchInput;
}(_react.Component), _class.contextTypes = {
  metrics: _reactMetrics.PropTypes.metrics
}, _temp2);


SearchInput.propTypes = {
  push: _react.PropTypes.func.isRequired,
  className: _react.PropTypes.string,
  intl: _reactIntl.intlShape.isRequired
};

exports.default = (0, _reactIntl.injectIntl)((0, _reactRedux.connect)(null, { push: _reactRouterRedux.push })(SearchInput));