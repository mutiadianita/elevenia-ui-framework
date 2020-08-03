import React from 'react'

class HeaderRight extends React.Component {
  render () {
    return (
      <div className={"header-right " + this.props.styles}>{this.props.children}</div>
    )
  }
}

export default HeaderRight;