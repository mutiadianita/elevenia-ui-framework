import React from 'react'
import PropTypes from 'prop-types';

const Stepper = (props) => {

  let tempQuantity = props.currentQty;

  const Decrease = () => {
    tempQuantity = tempQuantity - 1;
    return props.change(tempQuantity);
  }

  const Increase = () => {
    tempQuantity = tempQuantity + 1;
    return props.change(tempQuantity);
  }

  return (
      <div className={`${props.disabled ? "form-control stepper stepper--disabled" : "form-control stepper"}`}>
        <div className="stepper-wrapper">
          {props.currentQty === 0
            ? <button className={"stepper__item stepper__button"} disabled>-</button>
            : <button className={"stepper__item stepper__button"} onClick={Decrease}>-</button>
          }
        </div>
        <div className="stepper-wrapper">
          <input type="text" name="quantity" className="stepper__item stepper__input" value={props.currentQty} onChange={props.change} />
        </div>
        <div className="stepper-wrapper">
          {props.currentQty === props.limitQty
            ? <button className={"stepper__item stepper__button"} disabled>+</button>
            : <button className={"stepper__item stepper__button"} onClick={Increase}>+</button>
          }
        </div>
      </div>
  )
}

// class Stepper extends React.Component {

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
  currentQty: PropTypes.number
}


export default Stepper;

