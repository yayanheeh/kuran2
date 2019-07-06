"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageBreak = function PageBreak(_ref) {
  var pageNum = _ref.pageNum;
  return (0, _jsx3.default)("div", {
    className: "row"
  }, void 0, (0, _jsx3.default)("div", {
    className: "col-md-12"
  }, void 0, (0, _jsx3.default)("hr", {
    style: { width: '100%' }
  }), "Page ", pageNum));
};

PageBreak.propTypes = {
  pageNum: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired
};

exports.default = PageBreak;