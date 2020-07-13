"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Divider = function Divider(props) {
  var direction = props.direction,
      size = props.size,
      styles = props.styles,
      children = props.children;

  var childrenWithProps = _react.default.Children.map(children, function (child) {
    return /*#__PURE__*/_react.default.cloneElement(child, _objectSpread({}, props));
  });

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(direction ? "dv-".concat(direction) : '', " ").concat(size ? "dv-".concat(size) : '', " ").concat(styles)
  }, childrenWithProps);
};

var Text = function Text(props) {
  var size = props.size,
      background = props.background,
      children = props.children;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "dv-text ".concat(size ? "u-tx-".concat(size) : '', " ").concat(background ? "u-bg-".concat(background) : '')
  }, children);
};

Divider.defaultProps = {
  size: 'base',
  background: 'white'
};
Divider.Text = Text;
var _default = Divider;
exports.default = _default;