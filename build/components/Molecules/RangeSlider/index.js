"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _rcSlider = _interopRequireDefault(require("rc-slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Range = _rcSlider.default.Range;

var RangeSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(RangeSlider, _React$Component);

  var _super = _createSuper(RangeSlider);

  function RangeSlider() {
    _classCallCheck(this, RangeSlider);

    return _super.apply(this, arguments);
  }

  _createClass(RangeSlider, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, this.props.slider && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "slider-label ".concat(this.props.rangestyle)
      }, /*#__PURE__*/_react.default.createElement("span", null, this.props.labelmaxvalue)), /*#__PURE__*/_react.default.createElement(_rcSlider.default, {
        min: this.props.minvalue,
        max: this.props.maxvalue,
        defaultValue: this.props.defaultvalue,
        className: this.props.rangestyle
      })), this.props.range && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "range-label ".concat(this.props.rangestyle)
      }, /*#__PURE__*/_react.default.createElement("span", null, this.props.labelminvalue), /*#__PURE__*/_react.default.createElement("span", null, this.props.labelmaxvalue)), /*#__PURE__*/_react.default.createElement(Range, {
        allowCross: false,
        defaultValue: ["".concat(this.props.minvalue), "".concat(this.props.maxvalue)],
        className: this.props.rangestyle
      })));
    }
  }]);

  return RangeSlider;
}(_react.default.Component);

var _default = RangeSlider;
exports.default = _default;