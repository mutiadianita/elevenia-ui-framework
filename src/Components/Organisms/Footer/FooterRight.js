import React from 'react'

class FooterRight extends React.Component {
  render () {
    return (
      <div className={"footer-right " + this.props.styles}>{this.props.children}</div>
    )
  }
}

export default FooterRight;