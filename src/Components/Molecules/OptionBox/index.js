import React, { Component } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Icon } from '../../Atom';

class OptionBox extends Component {

  state = {
    isFocus: false,
    value: this.props.value,
  }

  toggleOptions = () => {
    this.setState(prevState => ({
      isFocus: !prevState.isFocus
    }))
  }

  handleClickOutside = () => {
    if (this.state.isFocus) {
      this.setState({ isFocus: false })
    } else {
      return
    }
  }

  selectedOption = (option) => {
    this.setState({
      isFocus: false,
      value: option.value,
    });
    const input = this.optionInput;
    function setNativeValue(element, value) {
      const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set
      const prototype = Object.getPrototypeOf(element)
      const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set
      if (valueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, value)
      } else {
        valueSetter.call(element, value)
      }
    }
    setNativeValue(input, option.value)
    input.dispatchEvent(new Event('input', { bubbles: true }))
  }

  render() {

    const { isFocus, value } = this.state;
    const { styles } = this.props;
    const { autocomplete, change, disabled, name, placeholder, readonly } = this.props;
    const { mobile, options, optionsText } = this.props;

    switch (mobile) {
      case true: return (
        <div className="optionbox optionbox-mobile">
          <div className={`input-group ${styles}`} >
            <select className="input input-control">
              {
                options.map(
                  (option, index) => (
                    <option className="optionbox__list-item" key={index} onClick={() => { this.selectedOption(option) }} tabIndex="-1">
                      {option[`${optionsText}`]}
                    </option>
                  )
                )
              }
            </select>
          </div>
          <div className={`input-group-append`}>
            <div className="btn u-p-0">
              <Icon iwidth="i" name="chevron-down" width="16" height="16" fill="#70727D" class="chevron-down" />
            </div>
          </div>
        </div>
      )
      default: return (
        <OutsideClickHandler
          onOutsideClick={() => {
            this.handleClickOutside()
          }}
        >
          <div className="optionbox">
            <div className={`input-group ${isFocus ? 'input-group--focused' : ''} ${styles}`} onFocus={this.focus}>
              <input
                className="input input-control"
                type="text"
                autoComplete={autocomplete}
                name={name}
                onChange={(event) => change(event)}
                ref={(input) => this.optionInput = input}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                readOnly={readonly}
                tabIndex="1" />
              <div className={`input-group-append`} onClick={() => this.toggleOptions()} tabIndex="-1">
                <button className="btn u-p-0" type="button">
                  {isFocus
                    ? <Icon iwidth="i" name="chevron-up" width="16" height="16" fill="#70727D" class="chevron-up" />
                    : <Icon iwidth="i" name="chevron-down" width="16" height="16" fill="#70727D" class="chevron-down" />
                  }
                </button>
              </div>
            </div>

            {isFocus
              ? <div className="optionbox__list u-pt-8">
                <div className="optionbox__list-wrapper">
                  <ul>
                    {
                      options.map(
                        (option, index) => (
                          <li className="optionbox__list-item" key={index} onClick={() => { this.selectedOption(option) }} tabIndex="-1">
                            <button className="optionbox__link" type="button">
                              {option[`${optionsText}`]}
                            </button>
                          </li>
                        )
                      )
                    }
                  </ul>
                </div>
              </div>
              : null
            }
          </div>
        </OutsideClickHandler>
      )
    }
  }
}

OptionBox.defaultProps = {
  value: ""
}

export default OptionBox;