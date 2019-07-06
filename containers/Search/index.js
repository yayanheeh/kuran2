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

var _customPropTypes = require('customPropTypes');

var customPropTypes = _interopRequireWildcard(_customPropTypes);

var _reactMetrics = require('react-metrics');

var _reduxConnect = require('redux-connect');

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactPaginate = require('react-paginate');

var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

var _reactIntl = require('react-intl');

var _IndexHeader = require('components/IndexHeader');

var _IndexHeader2 = _interopRequireDefault(_IndexHeader);

var _Verse = require('components/Verse');

var _Verse2 = _interopRequireDefault(_Verse);

var _Loader = require('quran-components/lib/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _search = require('redux/actions/search.js');

var _LocaleFormattedMessage = require('components/LocaleFormattedMessage');

var _LocaleFormattedMessage2 = _interopRequireDefault(_LocaleFormattedMessage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = require('./style.scss');

var Search = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Search, _Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call.apply(_ref, [this].concat(args))), _this), _this.handlePageChange = function (payload) {
      var _this$props = _this.props,
          push = _this$props.push,
          query = _this$props.query,
          currentPage = _this$props.currentPage; // eslint-disable-line no-shadow

      var selectedPage = payload.selected + 1;

      if (currentPage !== selectedPage) {
        _this.context.metrics.track('Search', { action: 'paginate', label: query + ' - ' + selectedPage });

        return push({
          pathname: '/search',
          query: { p: selectedPage, q: query }
        });
      }

      return true;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Search, [{
    key: 'renderStatsBar',
    value: function renderStatsBar() {
      var _props = this.props,
          totalCount = _props.totalCount,
          totalPages = _props.totalPages,
          currentPage = _props.currentPage,
          query = _props.query,
          perPage = _props.perPage;

      var from = Math.max.apply(Math, [(currentPage - 1) * perPage, 1]);
      var to = Math.min.apply(Math, [currentPage * perPage, totalCount]);
      var values = { from: from, to: to, query: query, total: totalCount };

      if (totalPages) {
        return (0, _jsx3.default)('div', {
          className: style.header
        }, void 0, (0, _jsx3.default)('div', {
          className: 'container'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'row'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'col-md-6 text-uppercase search-status'
        }, void 0, (0, _jsx3.default)(_reactIntl.FormattedHTMLMessage, {
          id: 'search.resultHeading',
          defaultMessage: '{from}-{to} OF {total} SEARCH RESULTS FOR: {query}',
          values: values
        })), (0, _jsx3.default)('div', {
          className: 'col-md-6 text-right'
        }, void 0, (0, _jsx3.default)(_reactPaginate2.default, {
          previousLabel: (0, _jsx3.default)('span', {
            'aria-hidden': 'true'
          }, void 0, (0, _jsx3.default)('i', {
            className: 'ss-icon ss-directleft'
          })),
          nextLabel: (0, _jsx3.default)('span', {
            'aria-hidden': 'true'
          }, void 0, (0, _jsx3.default)('i', {
            className: 'ss-icon ss-directright'
          })),
          breakLabel: (0, _jsx3.default)('a', {
            href: ''
          }, void 0, '...'),
          pageNum: currentPage,
          marginPagesDisplayed: 2,
          pageRangeDisplayed: 5,
          initialSelected: currentPage,
          forceSelected: currentPage,
          onPageChange: this.handlePageChange,
          containerClassName: 'pagination',
          subContainerClassName: 'pages pagination',
          pageLinkClassName: 'pointer',
          activeClass: style.active,
          pageCount: totalPages
        })))));
      }

      return false;
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      var _props2 = this.props,
          isErrored = _props2.isErrored,
          isLoading = _props2.isLoading,
          results = _props2.results,
          entities = _props2.entities,
          options = _props2.options,
          query = _props2.location.query;


      if (!query || !query.q) {
        return (0, _jsx3.default)('h3', {
          className: 'text-center',
          style: { padding: '15%' }
        }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'search.nothing',
          defaultMessage: 'No search query.'
        }));
      }

      if (isErrored) {
        return (0, _jsx3.default)('h3', {
          className: 'text-center',
          style: { padding: '15%' }
        }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'search.error',
          defaultMessage: 'Sorry, there was an error with your search.'
        }));
      }

      if (isLoading) {
        return (0, _jsx3.default)(_Loader2.default, {
          isActive: isLoading
        });
      }

      if (!results.length) {
        return (0, _jsx3.default)('h3', {
          className: 'text-center',
          style: { padding: '15%' }
        }, void 0, (0, _jsx3.default)(_LocaleFormattedMessage2.default, {
          id: 'search.noResult',
          defaultMessage: 'No results found.'
        }));
      }

      return results.map(function (result) {
        return (0, _jsx3.default)(_Verse2.default, {
          verse: entities[result],
          match: entities[result].match,
          tooltip: options.tooltip,
          userAgent: options.userAgent,
          isSearched: true
        }, entities[result].verseKey);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          query = _props3.query,
          options = _props3.options;


      return (0, _jsx3.default)('div', {
        className: 'index-page'
      }, void 0, (0, _jsx3.default)(_reactHelmet2.default, {
        title: query,
        style: [{
          cssText: '.text-arabic{font-size: ' + options.fontSize.arabic + 'rem;}\n            .text-translation{font-size: ' + options.fontSize.translation + 'rem;}'
        }]
      }), (0, _jsx3.default)(_IndexHeader2.default, {}), this.renderStatsBar(), (0, _jsx3.default)('div', {
        className: 'container surah-list'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'row'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'col-md-12'
      }, void 0, this.renderBody()))));
    }
  }]);
  return Search;
}(_react.Component), _class.contextTypes = {
  metrics: _reactMetrics.PropTypes.metrics
}, _temp2);


Search.propTypes = {
  isErrored: _react.PropTypes.bool,
  isLoading: _react.PropTypes.bool,
  totalCount: _react.PropTypes.number,
  totalPages: _react.PropTypes.number,
  currentPage: _react.PropTypes.number,
  perPage: _react.PropTypes.number,
  query: _react.PropTypes.string,
  results: _react.PropTypes.arrayOf(_react.PropTypes.string),
  entities: _react.PropTypes.arrayOf(customPropTypes.verseType),
  push: _react.PropTypes.func.isRequired,
  location: _react.PropTypes.shape({ // eslint-disable-line
    q: _react.PropTypes.string,
    p: _react.PropTypes.string
  }),
  options: customPropTypes.optionsType
};

Search.defaultProps = {
  results: []
};

var AsyncSearch = (0, _reduxConnect.asyncConnect)([{
  promise: function promise(_ref2) {
    var dispatch = _ref2.store.dispatch,
        location = _ref2.location;

    if (__CLIENT__) {
      dispatch((0, _search.search)(location.query || location.q));
      return false;
    }

    return dispatch((0, _search.search)(location.query || location.q));
  }
}])(Search);

function mapStateToProps(state) {
  return {
    isErrored: state.searchResults.errored,
    isLoading: state.searchResults.loading,
    totalCount: state.searchResults.totalCount,
    currentPage: state.searchResults.currentPage,
    totalPages: state.searchResults.totalPages,
    perPage: state.searchResults.perPage,
    took: state.searchResults.took,
    query: state.searchResults.query,
    results: state.searchResults.results,
    entities: state.searchResults.entities,
    options: state.options
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { push: _reactRouterRedux.push })(AsyncSearch);