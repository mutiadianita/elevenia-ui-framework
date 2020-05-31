import React from 'react'

class index extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className={this.props.styles}>{this.props.children}</div>
      )
  }
}

export default index;
