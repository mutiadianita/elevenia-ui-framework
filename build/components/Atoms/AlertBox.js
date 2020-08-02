"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertBox = function AlertBox(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: props.styles
  }, props.children);
};

var _default = AlertBox;
exports.default = _default;