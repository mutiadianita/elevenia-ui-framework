"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.MobileSearch = exports.SmallSearch = exports.RegularSearch = void 0;

var _react = _interopRequireDefault(require("react"));

var _Atoms = require("../../Atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RegularSearch = function RegularSearch(props) {
  return /*#__PURE__*/_react.default.createElement("form", {
    className: "search",
    onFocus: props.showList
  }, /*#__PURE__*/_react.default.createElement(_Atoms.InputGroup, {
    styles: "icon-right"
  }, /*#__PURE__*/_react.default.createElement(_Atoms.Textfield, {
    styles: "input-control",
    type: "text",
    name: "",
    placeholder: props.placeholderText,
    value: props.inputText,
    autoComplete: true,
    disabled: false,
    readonly: false,
    required: false,
    change: props.handleChange,
    onkeydown: props.onkeydown
  }), /*#__PURE__*/_react.default.createElement(_Atoms.InputGroup.Append, null, /*#__PURE__*/_react.default.createElement(_Atoms.Icon, {
    iwidth: "i i--large",
    name: "search",
    width: "24",
    height: "24",
    fill: "#70727D",
    class: "search"
  }))), props.isShowList ? /*#__PURE__*/_react.default.createElement("div", {
    className: "search__list u-mt-8"
  }, List(_objectSpread({}, props))) : null);
};

exports.RegularSearch = RegularSearch;

var SmallSearch = function SmallSearch(props) {
  return /*#__PURE__*/_react.default.createElement("form", {
    className: "search search-small"
  }, /*#__PURE__*/_react.default.createElement(_Atoms.InputGroup, {
    styles: "icon-left"
  }, /*#__PURE__*/_react.default.createElement(_Atoms.InputGroup.Prepend, null, /*#__PURE__*/_react.default.createElement(_Atoms.Button, {
    styles: "btn u-p-0 i i__search"
  })), /*#__PURE__*/_react.default.createElement(_Atoms.Textfield, {
    styles: "input-control",
    type: "text",
    name: "",
    placeholder: props.placeholderText,
    value: props.inputText,
    autoComplete: true,
    disabled: false,
    readonly: false,
    required: false,
    change: props.handleChange,
    onkeydown: props.onkeydown
  })));
};

exports.SmallSearch = SmallSearch;

var MobileSearch = function MobileSearch(props) {
  return /*#__PURE__*/_react.default.createElement("form", {
    className: "search search-mobile",
    onFocus: props.showList
  }, /*#__PURE__*/_react.default.createElement(_Atoms.InputGroup, {
    styles: "icon-left"
  }, /*#__PURE__*/_react.default.createElement(_Atoms.InputGroup.Prepend, null, /*#__PURE__*/_react.default.createElement(_Atoms.Button, {
    styles: "btn u-p-0 i ".concat(props.icon)
  })), /*#__PURE__*/_react.default.createElement(_Atoms.Textfield, {
    styles: "input-control",
    type: "text",
    name: "",
    placeholder: props.placeholderText,
    value: props.inputText,
    autoComplete: true,
    disabled: false,
    readonly: false,
    required: false,
    change: props.handleChange,
    onkeydown: props.onkeydown
  })), props.isShowList ? /*#__PURE__*/_react.default.createElement("div", {
    className: "search__list u-mt-8"
  }, List(_objectSpread({}, props))) : null);
};

exports.MobileSearch = MobileSearch;

var List = function List(props) {
  var list = props.suggests.length === 0 ? props.recents : props.suggests;
  return /*#__PURE__*/_react.default.createElement("ul", null, list.map(function (result, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "search__list-item",
      key: index
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "search__link",
      onClick: props.click,
      href: result.url,
      value: result.title
    }, result.title), props.deleteable ? /*#__PURE__*/_react.default.createElement("i", {
      className: "search__delete",
      onClick: props.isFocus
    }, "X") : null);
  }));
};

exports.List = List;