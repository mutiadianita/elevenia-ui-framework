import React from 'react'
import { ProgressBar } from '../Components/Atom'

class ProgressBarPage extends React.Component {
  render () {
    return (
      <div>
        <ProgressBar styles="u-bg-light" stylesinside="u-bg-primary" stylecss={{width:'20%', height: '4px'}}/>
      </div>
    )
  }
}

export default ProgressBarPage;
