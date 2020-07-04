import React from 'react'
import { ButtonPopover } from '../Components/Molecules'

class ButtonPopoverPage extends React.Component {
  render () {
    return (
      <div>
        <h1 className="title">Size</h1>
        <div className="u-fx-column u-js-around">
          <div>
            <h2 className="subtitle">Small</h2>
            <ButtonPopover label="Small" classBox="box--small">
              <ul className="vertical-menu">
                <li>Action 1</li>
                <li>Action 2</li>
              </ul>
            </ButtonPopover>
            <br />
          </div>
          <div>
            <h2 className="subtitle">Default</h2>
            <ButtonPopover label="Default">
              <ul className="vertical-menu">
                <li>Action 1</li>
                <li>Action 2</li>
              </ul>
            </ButtonPopover>
            <br />
          </div>
          <div>
            <h2 className="subtitle">Large</h2>
            <ButtonPopover label="Large" classBox="box--large">
              <ul className="vertical-menu">
                <li>Action 1</li>
                <li>Action 2</li>
              </ul>
            </ButtonPopover>
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default ButtonPopoverPage;
