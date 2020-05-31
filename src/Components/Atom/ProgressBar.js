import React from 'react'

class ProgressBar extends React.Component {

  render () {
    return (
      <div className={this.props.styles}>
        <div className={this.props.stylesinside} style={this.props.stylecss}></div>
      </div>
    )
  }
}

export default ProgressBar;
