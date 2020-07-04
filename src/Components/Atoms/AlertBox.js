import React from 'react'

const AlertBox = (props) => {
  return (
    <div className={props.styles}>
      {props.children}
    </div>
  )
}

export default AlertBox;
