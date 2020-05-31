import React from 'react'

class CheckBox extends React.Component {
  render () {
    return (
      <div className={this.props.styles}>
          <input type="checkbox" id={this.props.id} onChange={this.props.change} disabled={this.props.disabled} checked={this.props.checked} value={this.props.value}/>
          <label htmlFor={this.props.id}>{this.props.children}</label>
      </div>
    )
  }
}

export default CheckBox;
