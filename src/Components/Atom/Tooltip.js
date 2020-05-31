import React from 'react'

class Tooltip extends React.Component {
  render () {
    
    return (
      <div className={this.props.styles} data-tooltip={this.props.content}>
        {this.props.children}
      </div>
    )
  }
}

export default Tooltip;
