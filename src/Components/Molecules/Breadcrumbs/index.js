import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from '../../Atoms'

const Breadcrumbs = (props) => {
    return (
      <ul className="breadcrumbs">
        <li>
            <Link to="/">Home</Link> <Icon iwidth="i" name="chevron-right" width="12" height="12" fill="#70727D" class="chevron-right" />
        </li>
        {props.pages.length > 0 &&
            props.pages.map(
              (page, i) =>
                i === props.pages.length - 1 ? 
                ( 
                  <li key={i}>
                     <span>{page.name}</span>
                  </li > ) : 
                  <li key={i}>
                    <Link to={page.link}>{page.name}</Link> <Icon iwidth="i" name="chevron-right" width="12" height="12" fill="#70727D" class="chevron-right" />
                  </li>
            )}
      </ul>
    )
  };

export default Breadcrumbs;
