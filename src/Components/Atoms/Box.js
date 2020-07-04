import React from 'react'

class Box extends React.Component {
  render () {
    return (
      <div className={this.props.styles} onClick={this.props.click} >{this.props.children}</div>
    )
  }
}

export default Box;
