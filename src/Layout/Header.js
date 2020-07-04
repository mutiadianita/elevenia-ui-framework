import React from 'react';
import imgHeader from './assets/img.jpg';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>

        <div className="u-tx-d2 header-themes">
          <div className="col-9">
            <img src={imgHeader} alt="header" className="u-yal-middle"></img>
            Elevenia UI Framework
          </div>
          <div className="col-3 header-nav">
            <span className="active">
              <NavLink to="/" activeClassName="active">Documentation</NavLink>
            </span>
            <span>
              <NavLink to="/installation" activeClassName="active">Installation</NavLink>
            </span>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
