"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var Tray = /*#__PURE__*/function (_React$Component) {
  _inherits(Tray, _React$Component);

  var _super = _createSuper(Tray);

  function Tray() {
    var _this;

    _classCallCheck(this, Tray);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      show: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggleShow", function () {
      _this.setState(function (prevState) {
        return {
          show: !prevState.show
        };
      });
    });

    return _this;
  }

  _createClass(Tray, [{
    key: "render",
    value: function render() {
      var show = this.props.hasOwnProperty('show') ? this.props.show : this.state.show;
      var toggleShow = this.props.hasOwnProperty('toggleShow') ? this.props.toggleShow : this.toggleShow;
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          slideDown = _this$props.slideDown;

      var childrens = _react.default.Children.map(children, function (child) {
        return /*#__PURE__*/_react.default.cloneElement(child, {
          toggleShow: toggleShow
        });
      });

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        onClick: function onClick() {
          return show && toggleShow();
        },
        className: "tray-background ".concat(show ? 'tray-background--show' : '')
      }), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          transform: "translateY(".concat(show ? '0px' : "".concat(slideDown, "px"), ")")
        },
        className: "tray ".concat(show ? 'tray--show' : '', " ").concat(className)
      }, childrens));
    }
  }]);

  return Tray;
}(_react.default.Component);

Tray.defaultProps = {
  className: '',
  slideDown: 250
};

var Header = function Header(_ref) {
  var children = _ref.children,
      swipeable = _ref.swipeable,
      hideOnClick = _ref.hideOnClick,
      className = _ref.className,
      toggleShow = _ref.toggleShow,
      props = _objectWithoutProperties(_ref, ["children", "swipeable", "hideOnClick", "className", "toggleShow"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    onClick: function onClick() {
      return hideOnClick && toggleShow();
    },
    className: "tray__header ".concat(swipeable && 'tray__header--swipeable', " ").concat(className)
  }), children);
};

Header.defaultProps = {
  swipeable: true,
  hideOnClick: true
};
Header.propTypes = {
  swipeable: _propTypes.default.bool,
  hideOnClick: _propTypes.default.bool
};

var Content = function Content(_ref2) {
  var children = _ref2.children,
      hideOnClick = _ref2.hideOnClick,
      toggleShow = _ref2.toggleShow,
      _ref2$maxHeight = _ref2.maxHeight,
      maxHeight = _ref2$maxHeight === void 0 ? 350 : _ref2$maxHeight,
      props = _objectWithoutProperties(_ref2, ["children", "hideOnClick", "toggleShow", "maxHeight"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    style: {
      maxHeight: maxHeight
    },
    className: "tray__content",
    onClick: function onClick() {
      return hideOnClick && toggleShow();
    }
  }), children);
};

var Action = function Action(_ref3) {
  var children = _ref3.children,
      hideOnClick = _ref3.hideOnClick,
      toggleShow = _ref3.toggleShow;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tray__action u-bd-top u-bd-light u-p-16",
    onClick: function onClick() {
      return hideOnClick && toggleShow();
    }
  }, children);
};

Tray.Header = Header;
Tray.Content = Content;
Tray.Action = Action;
var _default = Tray;
exports.default = _default;