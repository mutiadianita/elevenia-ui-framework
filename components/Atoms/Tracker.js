"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tracker = function Tracker(_ref) {
  var children = _ref.children,
      index = _ref.index,
      step = _ref.step,
      label = _ref.label,
      inline = _ref.inline,
      props = _objectWithoutProperties(_ref, ["children", "index", "step", "label", "inline"]);

  var number = index < step ? /*#__PURE__*/_react.default.createElement(_.Icon, {
    iwidth: "i ".concat(!inline ? 'i--large' : ''),
    name: "check",
    width: "16",
    height: "16",
    fill: "#FFFFFF",
    class: "add-document"
  }) : index + 1;
  var active = index === step ? 'track__label--active' : '';
  var finished = index < step ? 'track__label--finished' : '';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "track"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "track__label ".concat(active, " ").concat(finished)
  }, /*#__PURE__*/_react.default.createElement("span", null, number), /*#__PURE__*/_react.default.createElement("h1", {
    className: "u-m-0"
  }, label)), /*#__PURE__*/_react.default.createElement("span", {
    className: "track__divider"
  }), children && /*#__PURE__*/_react.default.createElement("div", {
    className: "track__description"
  }, children));
};

var _default = Tracker;
exports.default = _default;