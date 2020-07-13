"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormGroup = function FormGroup(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group ".concat(props.types ? "form-group--".concat(props.types) : '', " ").concat(props.validation ? "form-group--".concat(props.validation) : '', " ").concat(props.inline ? 'form-group--inline' : '', " ").concat(props.styles ? props.styles : '')
  }, props.children, props.helptext ? /*#__PURE__*/_react.default.createElement("p", {
    className: "form-group__helptext ".concat(props.helpStyles ? "".concat(props.helpStyles) : '')
  }, props.helptext) : null);
};

var FormGroupLabel = function FormGroupLabel(props) {
  return /*#__PURE__*/_react.default.createElement("p", {
    className: "form-group__label"
  }, props.children !== undefined ? props.children : /*#__PURE__*/_react.default.createElement("div", {
    className: 'u-mt-24'
  }));
};

FormGroup.Label = FormGroupLabel;
var _default = FormGroup;
exports.default = _default;