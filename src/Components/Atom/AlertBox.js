import React from 'react'

// class AlertBox extends React.Component {
//   render () {
//     return (
//       <div>Alert Box Content</div>
//     )
//   }
// }

const AlertBox = (props) => {
  return (
    <div className={props.styles}>
      {props.children}
    </div>
  )
}

export default AlertBox;
