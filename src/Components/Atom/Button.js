import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <button type={this.props.type} className={this.props.styles} onMouseDown={this.props.mousedown} onClick={this.props.click} disabled={this.props.isDisabled}>{this.props.children}</button>
      )
  }
}

export default Button;
