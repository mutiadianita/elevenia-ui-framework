import React from 'react'
import {Link} from 'react-router-dom'
import Tooltip from './Tooltip'

const Breadcrumbs = (props) => {
    return (
      <ul className="breadcrumbs">
        <li>
            <Link to="/">Home</Link>
        </li>
        {props.pages.length > 0 &&
            props.pages.map(
              (page, i) =>
                i === props.pages.length - 1 ? 
                ( 
                  <li key={i}>
                     <span>{page.name}</span>
                  </li> ) : 
                  <li key={i}>
                    <Link to={page.link}>{page.name}</Link>
                  </li>
            )}
      </ul>
    )
  };

export default Breadcrumbs;
