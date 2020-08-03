import React from 'react'

class FooterLeft extends React.Component {
  render () {
    return (
      <div className={"footer-left " + this.props.styles}>{this.props.children}</div>
    )
  }
}

export default FooterLeft;