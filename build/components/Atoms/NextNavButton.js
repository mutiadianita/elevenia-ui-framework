"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("./");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NextNavButton = function NextNavButton(props) {
  var styles = props.styles,
      disabled = props.disabled,
      click = props.click,
      direction = props.direction;

  var directionIcon = function directionIcon(icon) {
    switch (icon) {
      case "left":
        return /*#__PURE__*/_react.default.createElement(_.Icon, {
          iwidth: "i",
          name: "chevron-left",
          width: "16",
          height: "16",
          fill: "#70727D",
          class: "chevron-left"
        });

      case "right":
        return /*#__PURE__*/_react.default.createElement(_.Icon, {
          iwidth: "i",
          name: "chevron-right",
          width: "16",
          height: "16",
          fill: "#70727D",
          class: "chevron-right"
        });

      default:
        return;
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navbutton-container ".concat(direction ? "navbutton--".concat(direction) : '', " ").concat(styles, " ").concat(disabled ? "navbutton--disabled" : '', " ")
  }, /*#__PURE__*/_react.default.createElement(_.Button, {
    styles: "btn navbutton__button u-p-0",
    click: click
  }, directionIcon(direction)));
};

NextNavButton.propTypes = {
  direction: _propTypes.default.oneOf(['left', 'right'])
};
var _default = NextNavButton;
exports.default = _default;