import React from 'react'
import { SelectButton } from '../Components/Atom'

class SelectButtonPages extends React.Component {
  constructor() {
    super()
  }
  render () {
    return (
      <div>
        <h1 className="title">Select button</h1>
        <h2 className="u-my-24">State</h2>
        <div className="u-fx-row">
          <SelectButton label="Select Button"/>
          <SelectButton styles="active" label="Select Button"/>
        </div>
        <code>
            &lt;SelectButton label="Select Button"/&gt;<br />
            &lt;SelectButton styles="active" label="Select Button"/&gt;
        </code>
      </div>
    )
  }
}

export default SelectButtonPages;
