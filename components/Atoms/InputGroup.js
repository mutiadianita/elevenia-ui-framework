"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputGroup = function InputGroup(props) {
  var IconLeft = props.IconLeft ? 'icon-left' : '';
  var IconRight = props.IconLeft ? 'icon-right' : '';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group ".concat(props.size ? "input-group--".concat(props.size) : '', " ").concat(IconLeft, " ").concat(IconRight, " ").concat(props.styles)
  }, props.children);
};

var Prepend = function Prepend(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-prepend ".concat(props.styles),
    onClick: props.click,
    tabIndex: "-1"
  }, props.children);
};

var Append = function Append(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-append ".concat(props.styles),
    onClick: props.click,
    tabIndex: "-1"
  }, props.children);
};

InputGroup.Prepend = Prepend;
InputGroup.Append = Append;
var _default = InputGroup;
exports.default = _default;