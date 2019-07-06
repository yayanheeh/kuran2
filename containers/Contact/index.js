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

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _IndexHeader = require('components/IndexHeader');

var _IndexHeader2 = _interopRequireDefault(_IndexHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function (_Component) {
  (0, _inherits3.default)(Contact, _Component);

  function Contact() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Contact);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      success: false
    }, _this.submitSupport = function (event) {
      event.preventDefault();

      var form = {
        subject: _this.purpose.value.trim(),
        description: _this.body.value.trim(),
        requester: {
          name: _this.name.value.trim(),
          email: _this.email.value.trim(),
          locale_id: 8
        }
      };

      _superagent2.default.post('/support').send(form).end(function (err, _ref2) {
        var body = _ref2.body;

        if (body.ticket) {
          _this.setState({
            success: true
          });
        }
      });
    }, _this.renderSubmitSuccess = function () {
      return (0, _jsx3.default)('h3', {
        className: 'text-center form-success-message'
      }, void 0, 'Thank you for contacting us - we look forward to speaking with you. While this is a volunteer effort, we do experience many support tickets on a daily basis and would love to get back to everyone on a timely manner.');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Contact, [{
    key: 'renderForm',
    value: function renderForm() {
      var _this2 = this;

      return (0, _jsx3.default)('form', {
        className: 'form-horizontal',
        onSubmit: this.submitSupport
      }, void 0, (0, _jsx3.default)('div', {
        className: 'form-group'
      }, void 0, (0, _jsx3.default)('label', {
        htmlFor: 'name',
        className: 'col-sm-2 control-label'
      }, void 0, 'Name'), (0, _jsx3.default)('div', {
        className: 'col-sm-8'
      }, void 0, _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: function ref(name) {
          _this2.name = name;
        } }))), (0, _jsx3.default)('input', {
        type: 'hidden',
        name: '_next',
        value: 'google.com'
      }), (0, _jsx3.default)('div', {
        className: 'form-group'
      }, void 0, (0, _jsx3.default)('label', {
        htmlFor: 'email',
        className: 'col-sm-2 control-label'
      }, void 0, 'Email'), (0, _jsx3.default)('div', {
        className: 'col-sm-8'
      }, void 0, _react2.default.createElement('input', { type: 'email', className: 'form-control', ref: function ref(email) {
          _this2.email = email;
        } }))), (0, _jsx3.default)('div', {
        className: 'form-group'
      }, void 0, (0, _jsx3.default)('label', {
        htmlFor: 'message',
        className: 'col-sm-2 control-label'
      }, void 0, 'Purpose'), (0, _jsx3.default)('div', {
        className: 'col-sm-8'
      }, void 0, _react2.default.createElement(
        'select',
        { className: 'form-control', ref: function ref(purpose) {
            _this2.purpose = purpose;
          }, defaultValue: 'feedback' },
        (0, _jsx3.default)('option', {
          value: 'feedback'
        }, void 0, 'Feedback & Suggestions'),
        (0, _jsx3.default)('option', {
          value: 'translation-bug'
        }, void 0, 'Translation Error'),
        (0, _jsx3.default)('option', {
          value: 'bug'
        }, void 0, 'Site Bug'),
        (0, _jsx3.default)('option', {
          value: 'talent'
        }, void 0, 'Contributing (monetary or talent)'),
        (0, _jsx3.default)('option', {
          value: 'help'
        }, void 0, 'Help')
      ))), (0, _jsx3.default)('div', {
        className: 'form-group'
      }, void 0, (0, _jsx3.default)('label', {
        htmlFor: 'message',
        className: 'col-sm-2 control-label'
      }, void 0, 'Message'), (0, _jsx3.default)('div', {
        className: 'col-sm-8'
      }, void 0, _react2.default.createElement('textarea', { rows: '4', cols: '50', className: 'form-control', ref: function ref(body) {
          _this2.body = body;
        } }))), (0, _jsx3.default)('div', {
        className: 'form-group'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'col-sm-offset-4 col-sm-4'
      }, void 0, (0, _jsx3.default)('input', {
        type: 'submit',
        value: 'Send',
        className: 'btn btn-primary btn-lg btn-block'
      }))));
    }
  }, {
    key: 'render',
    value: function render() {
      var body = void 0;

      if (this.state.success) {
        body = this.renderSubmitSuccess();
      } else {
        body = this.renderForm();
      }

      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_IndexHeader2.default, {
        noSearch: true
      }), (0, _jsx3.default)('div', {
        className: 'container-fluid about-text'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'row'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'col-md-6 col-md-offset-3'
      }, void 0, (0, _jsx3.default)('h4', {}, void 0, 'Contacting us - thank you for taking time to speak to us. Please be as concise as possible and include screenshots where applicable to help us help you as quickly as we can.', (0, _jsx3.default)('br', {}), (0, _jsx3.default)('br', {}))), (0, _jsx3.default)('div', {
        className: 'col-md-8 col-md-offset-2'
      }, void 0, body))));
    }
  }]);
  return Contact;
}(_react.Component);

exports.default = Contact;