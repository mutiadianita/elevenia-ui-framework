"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("./");

var _ic_large_upload = _interopRequireDefault(require("../../assets/images/ic_large_upload.svg"));

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

var Modal = /*#__PURE__*/function (_React$Component) {
  _inherits(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal() {
    _classCallCheck(this, Modal);

    return _super.apply(this, arguments);
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.props.mobile && /*#__PURE__*/_react.default.createElement("div", {
        className: "modal modal--mobile  ".concat(this.props.modalstyles)
      }, this.props.close && /*#__PURE__*/_react.default.createElement(_.Icon, {
        iwidth: "i i--large",
        name: "cancel",
        width: "24",
        height: "24",
        fill: "#70727D",
        class: "cancel"
      }), this.props.banner && /*#__PURE__*/_react.default.createElement("div", {
        className: "banner"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: this.props.banner,
        className: "image ".concat(this.props.bannerstyle),
        alt: this.props.alt
      })), this.props.header && /*#__PURE__*/_react.default.createElement("div", {
        type: this.props.type,
        className: "header ".concat(this.props.headerstyle)
      }, /*#__PURE__*/_react.default.createElement("h2", null, this.props.header)), /*#__PURE__*/_react.default.createElement("div", {
        className: "content ".concat(this.props.contentstyle)
      }, /*#__PURE__*/_react.default.createElement("p", null, this.props.image && /*#__PURE__*/_react.default.createElement("img", {
        src: this.props.image,
        className: "image ".concat(this.props.actionstyle),
        alt: this.props.alt
      })), /*#__PURE__*/_react.default.createElement("div", null, this.props.content), this.props.upload && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "u-tx-center upload"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _ic_large_upload.default,
        alt: "upload"
      }), /*#__PURE__*/_react.default.createElement("p", {
        className: "desc"
      }, "Drag & drop or ", /*#__PURE__*/_react.default.createElement("span", null, "Browser")), /*#__PURE__*/_react.default.createElement("p", {
        className: "subdesc"
      }, "Lorem ipsum dolor sit amet JPG, PNG, PDF with maximum size 500 Kb"))), this.props.seperator && /*#__PURE__*/_react.default.createElement("div", {
        className: "line"
      })), this.props.children && /*#__PURE__*/_react.default.createElement("div", {
        className: "action u-fx-row ".concat(this.props.actionstyle)
      }, this.props.children)), this.props.vertical && /*#__PURE__*/_react.default.createElement("div", {
        className: "modal  ".concat(this.props.modalstyles)
      }, this.props.close && /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.props.close
      }, /*#__PURE__*/_react.default.createElement(_.Icon, {
        iwidth: "i i--large",
        name: "cancel",
        width: "24",
        height: "24",
        fill: "#70727D",
        class: "cancel"
      })), this.props.banner && /*#__PURE__*/_react.default.createElement("div", {
        className: "banner"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: this.props.banner,
        className: "image ".concat(this.props.bannerstyle),
        alt: this.props.alt
      })), this.props.header && /*#__PURE__*/_react.default.createElement("div", {
        type: this.props.type,
        className: "header ".concat(this.props.headerstyle)
      }, /*#__PURE__*/_react.default.createElement("h2", null, this.props.header)), /*#__PURE__*/_react.default.createElement("div", {
        className: "content ".concat(this.props.contentstyle)
      }, /*#__PURE__*/_react.default.createElement("p", null, this.props.image && /*#__PURE__*/_react.default.createElement("img", {
        src: this.props.image,
        className: "image ".concat(this.props.actionstyle),
        alt: this.props.alt
      })), /*#__PURE__*/_react.default.createElement("div", null, this.props.content), this.props.upload && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "u-tx-center upload"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _ic_large_upload.default,
        alt: "upload"
      }), /*#__PURE__*/_react.default.createElement("p", {
        className: "desc"
      }, "Drag & drop or ", /*#__PURE__*/_react.default.createElement("span", null, "Browser")), /*#__PURE__*/_react.default.createElement("p", {
        className: "subdesc"
      }, "Lorem ipsum dolor sit amet JPG, PNG, PDF with maximum size 500 Kb"))), this.props.seperator && /*#__PURE__*/_react.default.createElement("div", {
        className: "line"
      })), this.props.children && /*#__PURE__*/_react.default.createElement("div", {
        className: "action u-fx-row ".concat(this.props.actionstyle)
      }, this.props.children)), this.props.horizontal && /*#__PURE__*/_react.default.createElement("div", {
        className: "modal  modal__list u-fx-row u-al-items-center ".concat(this.props.modalstyles)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "u-al-self-center"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: this.props.toastImage,
        alt: this.props.alt
      })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, "Lorem ipsum dolor sit amet"), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida.")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "action u-fx-row ".concat(this.props.actionstyle)
      }, this.props.children))));
    }
  }]);

  return Modal;
}(_react.default.Component);

var _default = Modal;
exports.default = _default;