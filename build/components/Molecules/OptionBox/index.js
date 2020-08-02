"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactOutsideClickHandler = _interopRequireDefault(require("react-outside-click-handler"));

var _Atoms = require("../../Atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OptionBox = /*#__PURE__*/function (_Component) {
  _inherits(OptionBox, _Component);

  var _super = _createSuper(OptionBox);

  function OptionBox() {
    var _this;

    _classCallCheck(this, OptionBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocus: false,
      value: _this.props.value
    });

    _defineProperty(_assertThisInitialized(_this), "toggleOptions", function () {
      _this.setState(function (prevState) {
        return {
          isFocus: !prevState.isFocus
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function () {
      if (_this.state.isFocus) {
        _this.setState({
          isFocus: false
        });
      } else {
        return;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectedOption", function (option) {
      _this.setState({
        isFocus: false,
        value: option.value
      });

      var input = _this.optionInput;

      function setNativeValue(element, value) {
        var valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
        var prototype = Object.getPrototypeOf(element);
        var prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

        if (valueSetter && valueSetter !== prototypeValueSetter) {
          prototypeValueSetter.call(element, value);
        } else {
          valueSetter.call(element, value);
        }
      }

      setNativeValue(input, option.value);
      input.dispatchEvent(new Event('input', {
        bubbles: true
      }));
    });

    return _this;
  }

  _createClass(OptionBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isFocus = _this$state.isFocus,
          value = _this$state.value;
      var styles = this.props.styles;
      var _this$props = this.props,
          autocomplete = _this$props.autocomplete,
          change = _this$props.change,
          disabled = _this$props.disabled,
          name = _this$props.name,
          placeholder = _this$props.placeholder,
          readonly = _this$props.readonly;
      var _this$props2 = this.props,
          mobile = _this$props2.mobile,
          options = _this$props2.options,
          optionsText = _this$props2.optionsText;

      switch (mobile) {
        case true:
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "optionbox optionbox-mobile"
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "input-group ".concat(styles)
          }, /*#__PURE__*/_react.default.createElement("select", {
            className: "input input-control"
          }, options.map(function (option, index) {
            return /*#__PURE__*/_react.default.createElement("option", {
              className: "optionbox__list-item",
              key: index,
              onClick: function onClick() {
                _this2.selectedOption(option);
              },
              tabIndex: "-1"
            }, option["".concat(optionsText)]);
          }))), /*#__PURE__*/_react.default.createElement("div", {
            className: "input-group-append"
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "btn u-p-0"
          }, /*#__PURE__*/_react.default.createElement(_Atoms.Icon, {
            iwidth: "i",
            name: "chevron-down",
            width: "16",
            height: "16",
            fill: "#70727D",
            class: "chevron-down"
          }))));

        default:
          return /*#__PURE__*/_react.default.createElement(_reactOutsideClickHandler.default, {
            onOutsideClick: function onOutsideClick() {
              _this2.handleClickOutside();
            }
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "optionbox"
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "input-group ".concat(isFocus ? 'input-group--focused' : '', " ").concat(styles),
            onFocus: this.focus
          }, /*#__PURE__*/_react.default.createElement("input", {
            className: "input input-control",
            type: "text",
            autoComplete: autocomplete,
            name: name,
            onChange: function onChange(event) {
              return change(event);
            },
            ref: function ref(input) {
              return _this2.optionInput = input;
            },
            placeholder: placeholder,
            value: value,
            disabled: disabled,
            readOnly: readonly,
            tabIndex: "1"
          }), /*#__PURE__*/_react.default.createElement("div", {
            className: "input-group-append",
            onClick: function onClick() {
              return _this2.toggleOptions();
            },
            tabIndex: "-1"
          }, /*#__PURE__*/_react.default.createElement("button", {
            className: "btn u-p-0",
            type: "button"
          }, isFocus ? /*#__PURE__*/_react.default.createElement(_Atoms.Icon, {
            iwidth: "i",
            name: "chevron-up",
            width: "16",
            height: "16",
            fill: "#70727D",
            class: "chevron-up"
          }) : /*#__PURE__*/_react.default.createElement(_Atoms.Icon, {
            iwidth: "i",
            name: "chevron-down",
            width: "16",
            height: "16",
            fill: "#70727D",
            class: "chevron-down"
          })))), isFocus ? /*#__PURE__*/_react.default.createElement("div", {
            className: "optionbox__list u-pt-8"
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "optionbox__list-wrapper"
          }, /*#__PURE__*/_react.default.createElement("ul", null, options.map(function (option, index) {
            return /*#__PURE__*/_react.default.createElement("li", {
              className: "optionbox__list-item",
              key: index,
              onClick: function onClick() {
                _this2.selectedOption(option);
              },
              tabIndex: "-1"
            }, /*#__PURE__*/_react.default.createElement("button", {
              className: "optionbox__link",
              type: "button"
            }, option["".concat(optionsText)]));
          })))) : null));
      }
    }
  }]);

  return OptionBox;
}(_react.Component);

OptionBox.defaultProps = {
  value: ""
};
var _default = OptionBox;
exports.default = _default;