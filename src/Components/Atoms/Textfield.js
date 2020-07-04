import React, { Component } from 'react';

class Textfield extends Component {
  render() {
    return (
      <input
        className={this.props.styles}
        type={this.props.type}
        ref={this.props.setRef}
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.props.value}
        autoComplete={this.props.autocomplete ? 'on' : 'off'}
        disabled={this.props.disabled}
        readOnly={this.props.readonly}
        required={this.props.required}
        maxLength={this.props.maxlength}
        onChange={(event) => this.props.change(event)}
        onKeyDown={this.props.onkeydown}
        onClick={this.props.click}
        tabIndex="1"
        onFocus={this.props.focus}
        onBlur={this.props.blur}
      />
    );
  }
}

export default Textfield;