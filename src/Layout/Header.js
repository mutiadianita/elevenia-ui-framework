import React from 'react'
import imgHeader from './assets/img.jpg'

class Header extends React.Component {
  render () {
    return (
        <header>
            
            <h1 className="u-tx-d2 header-themes"><img src={imgHeader}></img> UI Design</h1>
        </header>
    )
  }
}

export default Header;
