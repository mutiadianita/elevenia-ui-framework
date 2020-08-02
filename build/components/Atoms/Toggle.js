"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Toggle = function Toggle(props) {
  var _useState = (0, _react.useState)(props.checked),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var labelPosition = props.labelPosition === 'right' ? 'u-fx-row-reverse' : 'u-fx-row';
  var labelInsidePosition = checked ? 'u-js-start' : 'u-js-end';
  var labelInsideText = checked ? 'On' : 'Off';
  var labelText = props.labelText !== null ? /*#__PURE__*/_react.default.createElement("span", {
    className: "toggle__text u-mx-4"
  }, props.labelText) : null;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "toggle u-ds-inline-flex u-al-items-center ".concat(labelPosition, " ").concat(props.styles)
  }, labelText, /*#__PURE__*/_react.default.createElement("input", {
    className: "toggle__input",
    type: "checkbox",
    name: props.name,
    onChange: function onChange() {
      return setChecked(!checked);
    },
    disabled: props.disabled,
    checked: checked
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('toggle__slider u-tx-white u-px-8', props.labelInside ? 'toggle__slider--label-inside' : null, props.toggleStyles, labelInsidePosition)
  }, props.labelInside ? labelInsideText : null));
};

Toggle.defaultProps = {
  checked: false,
  disabled: false,
  name: null,
  styles: '',
  toggleStyles: '',
  labelText: null,
  labelPosition: 'right',
  labelInside: false
};
Toggle.propTypes = {
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  name: _propTypes.default.string,
  styles: _propTypes.default.string,
  toggleStyles: _propTypes.default.string,
  labelText: _propTypes.default.string,
  labelPosition: _propTypes.default.oneOf(['left', 'right']),
  labelInside: _propTypes.default.bool
};
var _default = Toggle;
exports.default = _default;