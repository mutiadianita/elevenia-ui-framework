import React from 'react'

class RadioButton extends React.Component {
  render () {
    return (
      <label class={this.props.styles}>{this.props.label}
        <input type="radio" name={this.props.name} value={this.props.value} checked={this.props.checked} onChange={this.props.change} disabled={this.props.disabled}/>
        <span class="radiobutton__dot"></span>
      </label>
        
    )
  }
}

export default RadioButton;
