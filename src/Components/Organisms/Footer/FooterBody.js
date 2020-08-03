import React from 'react'

class FooterBody extends React.Component {
  render () {
    return (
      <div className={"footer-body " + this.props.styles}>{this.props.children}</div>
    )
  }
}

export default FooterBody;