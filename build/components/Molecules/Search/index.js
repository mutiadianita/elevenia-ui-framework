"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SearchBar = require("./SearchBar");

var _axios = _interopRequireDefault(require("axios"));

var _reactOutsideClickHandler = _interopRequireDefault(require("react-outside-click-handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var index = /*#__PURE__*/function (_Component) {
  _inherits(index, _Component);

  var _super = _createSuper(index);

  function index() {
    var _this;

    _classCallCheck(this, index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isShowList: false,
      inputText: '',
      suggests: [],
      recents: [{
        title: "recent 1"
      }, {
        title: "recent 2"
      }, {
        title: "recent 3"
      }, {
        title: "recent 4"
      }] || _this.props.recent,
      typing: false,
      typingTimeout: 0
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
      _this.setState({
        isShowList: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showList", function () {
      _this.setState({
        isShowList: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function (e) {
      var choice = e.target.value;

      _this.setState({
        isShowList: false,
        inputText: choice
      });
    });

    _defineProperty(_assertThisInitialized(_this), "doSearch", function () {
      var searchInput = _this.state.inputText;

      if (searchInput.length === 0) {
        _this.setState({
          suggests: []
        });
      } else {
        var newKeyword = 'http://192.168.10.215/laravel/public/autosuggest/' + searchInput;

        _axios.default.get(newKeyword).then(function (res) {
          _this.setState({
            suggests: res.data.keyword.data
          });
        }).then(_this.setState({
          showResult: true
        })).catch(function (error) {
          console.log(error.res);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var self = _assertThisInitialized(_this);

      if (self.state.typingTimeout) {
        clearTimeout(self.state.typingTimeout);
      }

      self.setState({
        inputText: event.target.value,
        typing: false,
        typingTimeout: setTimeout(function () {
          self.doSearch(self.state.inputText);
        }, 500)
      });
    });

    return _this;
  }

  _createClass(index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var type = this.props.type;

      switch (type) {
        case "small":
          return /*#__PURE__*/_react.default.createElement(_SearchBar.SmallSearch, {
            handleChange: this.handleChange,
            placeholderText: this.props.placeholderText
          });

        case "mobile":
          return /*#__PURE__*/_react.default.createElement(_reactOutsideClickHandler.default, {
            onOutsideClick: function onOutsideClick() {
              _this2.handleClickOutside();
            }
          }, /*#__PURE__*/_react.default.createElement(_SearchBar.MobileSearch, _extends({
            handleChange: this.handleChange,
            placeholderText: this.props.placeholderText
          }, this.props)));

        default:
          return /*#__PURE__*/_react.default.createElement(_reactOutsideClickHandler.default, {
            onOutsideClick: function onOutsideClick() {
              _this2.handleClickOutside();
            }
          }, /*#__PURE__*/_react.default.createElement(_SearchBar.RegularSearch, {
            suggests: this.state.suggests,
            recents: this.state.recents,
            showList: this.showList,
            isShowList: this.state.isShowList,
            handleChange: this.handleChange,
            placeholderText: this.props.placeholderText
          }));
      }
    }
  }]);

  return index;
}(_react.Component);

var _default = index;
exports.default = _default;