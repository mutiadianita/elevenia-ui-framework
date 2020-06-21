import React from 'react'

class index extends React.Component {
  render () {
    return (
      <div className={this.props.styles}>{this.props.children}</div>
      )
  }
}

export default index;
