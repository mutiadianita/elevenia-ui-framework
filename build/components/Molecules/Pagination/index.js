"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Atoms = require("../../Atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var pageFactory = function pageFactory(value) {
  var dotted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    value: value,
    dotted: dotted
  };
};

var createRange = function createRange(start, end, factory) {
  return _lodash.default.map(_lodash.default.range(start, end + 1), function (page) {
    return factory(page, false);
  });
};

var isSimplePagination = function isSimplePagination(_ref) {
  var outerRange = _ref.outerRange,
      innerRange = _ref.innerRange,
      total = _ref.total;
  var outerRangeSize = 2 * outerRange;
  var showDotted = outerRange && outerRange > 0;
  var dottedSize = showDotted ? 2 : 0;
  var innerRangeSize = 2 * innerRange;
  return 1 + dottedSize + innerRangeSize + outerRangeSize >= total;
};

var createDottedPrefix = function createDottedPrefix(firstGroupEnd, middleGroupStart, pageFactory) {
  var prefixPage = middleGroupStart - 1;
  var showDotted = prefixPage !== firstGroupEnd + 1;
  return pageFactory(prefixPage, showDotted);
};

var createDottedSuffix = function createDottedSuffix(middleGroupEnd, lastGroupStart, pageFactory) {
  var suffixPage = middleGroupEnd + 1;
  var showDotted = suffixPage !== lastGroupStart - 1;
  return pageFactory(suffixPage, showDotted);
};

var createPaginationItem = function createPaginationItem(page, _ref2) {
  var innerRange = _ref2.innerRange,
      outerRange = _ref2.outerRange,
      total = _ref2.total;
  var showDotted = outerRange && outerRange > 0;
  var dottedSize = showDotted ? 1 : 0;
  var firstGroupEnd = outerRange;
  var firstGroup = createRange(1, firstGroupEnd, pageFactory);
  var lastGroupStart = total + 1 - outerRange;
  var lastGroup = createRange(lastGroupStart, total, pageFactory);
  var middleGroupStart = Math.min(Math.max(page - innerRange, firstGroupEnd + dottedSize + 1), lastGroupStart - dottedSize - 2 * innerRange - 1);
  var middleGroupEnd = middleGroupStart + 2 * innerRange;
  var middleGroup = createRange(middleGroupStart, middleGroupEnd, pageFactory);
  return [].concat(_toConsumableArray(firstGroup), [showDotted && createDottedPrefix(firstGroupEnd, middleGroupStart, pageFactory)], _toConsumableArray(middleGroup), [showDotted && createDottedSuffix(middleGroupEnd, lastGroupStart, pageFactory)], _toConsumableArray(lastGroup));
};

var Pagination = /*#__PURE__*/function (_PureComponent) {
  _inherits(Pagination, _PureComponent);

  var _super = _createSuper(Pagination);

  function Pagination() {
    var _this;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      page: 1
    });

    _defineProperty(_assertThisInitialized(_this), "setPage", function (page) {
      _this.setState({
        page: page
      }, function () {
        return _this.props.hasOwnProperty('onChange') ? _this.props.onChange(_this.state.page) : null;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nextPage", function () {
      if (_this.state.page < _this.props.total) _this.setPage(_this.state.page + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "prevPage", function () {
      if (_this.state.page > 1) _this.setPage(_this.state.page - 1);
    });

    return _this;
  }

  _createClass(Pagination, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.hasOwnProperty('activePage')) this.setState({
        page: this.props.activePage
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var page = this.state.page;

      var _this$props = this.props,
          total = _this$props.total,
          innerRange = _this$props.innerRange,
          outerRange = _this$props.outerRange,
          props = _objectWithoutProperties(_this$props, ["total", "innerRange", "outerRange"]);

      var pages = isSimplePagination({
        total: total,
        innerRange: innerRange,
        outerRange: outerRange
      }) ? createRange(1, total, pageFactory) : createPaginationItem(page, {
        total: total,
        innerRange: innerRange,
        outerRange: outerRange
      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "pagination ".concat(props.className)
      }, /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.prevPage,
        className: "btn u-bd u-bd-light u-p-12 u-mr-8"
      }, /*#__PURE__*/_react.default.createElement(_Atoms.Icon, {
        iwidth: "i",
        name: "chevron-left",
        width: "16",
        height: "16",
        fill: "#DCDEE3"
      })), pages.map(function (pageItem, index) {
        return /*#__PURE__*/_react.default.createElement(PaginationItem, {
          key: index,
          onClick: function onClick() {
            return _this2.setPage(pageItem.value);
          },
          dotted: pageItem.dotted,
          active: page === pageItem.value,
          value: pageItem.value
        });
      }), /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.nextPage,
        className: "btn u-bd u-bd-light u-p-12"
      }, /*#__PURE__*/_react.default.createElement(_Atoms.Icon, {
        iwidth: "i",
        name: "chevron-right",
        width: "16",
        height: "16",
        fill: "#DCDEE3"
      })));
    }
  }]);

  return Pagination;
}(_react.PureComponent);

_defineProperty(Pagination, "defaultProps", {
  innerRange: 1,
  outerRange: 1,
  activePage: 1,
  total: 10
});

_defineProperty(Pagination, "propTypes", {
  innerRange: _propTypes.default.number,
  outerRange: _propTypes.default.number,
  activePage: _propTypes.default.number,
  total: _propTypes.default.number
});

var PaginationItem = function PaginationItem(_ref3) {
  var _ref3$value = _ref3.value,
      value = _ref3$value === void 0 ? null : _ref3$value,
      _ref3$dotted = _ref3.dotted,
      dotted = _ref3$dotted === void 0 ? false : _ref3$dotted,
      _ref3$active = _ref3.active,
      active = _ref3$active === void 0 ? false : _ref3$active,
      props = _objectWithoutProperties(_ref3, ["value", "dotted", "active"]);

  return value && /*#__PURE__*/_react.default.createElement("button", _extends({}, props, {
    onClick: dotted ? function () {
      return null;
    } : props.onClick,
    className: "pagination__item btn ".concat(active ? 'pagination__item--active' : '')
  }), dotted ? '...' : value);
};

var _default = Pagination;
exports.default = _default;