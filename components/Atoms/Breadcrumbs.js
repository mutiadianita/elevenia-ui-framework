"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = function Breadcrumbs(props) {
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "breadcrumbs"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Home")), props.pages.length > 0 && props.pages.map(function (page, i) {
    return i === props.pages.length - 1 ? /*#__PURE__*/_react.default.createElement("li", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("span", null, page.name)) : /*#__PURE__*/_react.default.createElement("li", {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: page.link
    }, page.name));
  }));
};

var _default = Breadcrumbs;
exports.default = _default;