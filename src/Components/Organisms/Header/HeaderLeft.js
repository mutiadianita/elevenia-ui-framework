import React from 'react'

class HeaderLeft extends React.Component {
  render () {
    return (
      <div className={"header-left " + this.props.styles}>{this.props.children}</div>
    )
  }
}

export default HeaderLeft;