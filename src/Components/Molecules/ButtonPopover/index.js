import React from 'react'

class ButtonPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    this.setState({visible: !this.state.visible})
  }
  render () {
    return (
      <div className="btn-dropdown-wrapper">
        <button className={`btn u-tx-dark u-bd-light ${this.props.classLabel} ${this.state.visible ? "active" : ""}`} onClick={this.toggleButton}>{this.props.label}</button>
        {this.state.visible && <div className={`box u-ps-absolute u-bg-white u-zx-dropdown ${this.props.classBox}`}>{this.props.children}</div>}
      </div>
    )
  }
}

export default ButtonPopover;
