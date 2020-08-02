"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stepper = function Stepper(props) {
  var tempQuantity = props.currentQty;

  var Decrease = function Decrease() {
    tempQuantity = tempQuantity - 1;
    return props.change(tempQuantity);
  };

  var Increase = function Increase() {
    tempQuantity = tempQuantity + 1;
    return props.change(tempQuantity);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(props.disabled ? "form-control stepper stepper--disabled" : "form-control stepper")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "stepper-wrapper"
  }, props.currentQty === 0 ? /*#__PURE__*/_react.default.createElement("button", {
    className: "stepper__item stepper__button",
    disabled: true
  }, "-") : /*#__PURE__*/_react.default.createElement("button", {
    className: "stepper__item stepper__button",
    onClick: Decrease
  }, "-")), /*#__PURE__*/_react.default.createElement("div", {
    className: "stepper-wrapper"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "quantity",
    className: "stepper__item stepper__input",
    value: props.currentQty,
    onChange: props.change
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "stepper-wrapper"
  }, props.currentQty === props.limitQty ? /*#__PURE__*/_react.default.createElement("button", {
    className: "stepper__item stepper__button",
    disabled: true
  }, "+") : /*#__PURE__*/_react.default.createElement("button", {
    className: "stepper__item stepper__button",
    onClick: Increase
  }, "+")));
}; // class Stepper extends React.Component {
//   constructor(props) {
//     super(props);
//     this.Decrease = this.Decrease.bind(this);
//     this.Increase = this.Increase.bind(this);
//   }
//   Decrease = () => {
//     let tempQuantity = this.props.currentQty;
//     tempQuantity = tempQuantity - 1;
//     return this.props.change(tempQuantity);
//   }
//   Increase = () => {
//     let tempQuantity = this.props.currentQty;
//     tempQuantity = tempQuantity + 1;
//     return this.props.change(tempQuantity);
//   }
//   render() {
//     return (
//       <FormGroup>
//         <div className={this.props.disabled ? "stepper-container stepper--disabled" : "stepper-container"}>
//           <div className="stepper-wrapper">
//             {this.props.currentQty === 0
//               ? <button className={"stepper__item stepper__button"} disabled>-</button>
//               : <button className={"stepper__item stepper__button"} onClick={this.Decrease}>-</button>
//             }
//           </div>
//           <div className="stepper-wrapper">
//             <input type="text" name="quantity" className="stepper__item stepper__input" value={this.props.currentQty} onChange={this.props.change} />
//           </div>
//           <div className="stepper-wrapper">
//             {this.props.currentQty === this.props.limitQty
//               ? <button className={"stepper__item stepper__button"} disabled>+</button>
//               : <button className={"stepper__item stepper__button"} onClick={this.Increase}>+</button>
//             }
//           </div>
//         </div>
//       </FormGroup>
//     )
//   }
// }


Stepper.propTypes = {
  currentQty: _propTypes.default.number
};
var _default = Stepper;
exports.default = _default;