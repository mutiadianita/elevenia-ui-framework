import React from 'react'

class HeaderBody extends React.Component {
  render () {
    return (
      <div className={"header-body " + this.props.styles}>{this.props.children}</div>
    )
  }
}

export default HeaderBody;