import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Accordion } from '../Components/Atom';


class Aside extends React.Component {
  render() {
    return (
      <aside>
        <Accordion label="UTILITIES" className="u-pl-32">
          <ul>
            <li><NavLink to="/border" activeClassName="active">Border</NavLink></li>
            <li><NavLink to="/clearfix" activeClassName="active">Clearfix</NavLink></li>
            <li><NavLink to="/color" activeClassName="active">Color</NavLink></li>
            <li><NavLink to="/display" activeClassName="active">Display</NavLink></li>
            <li><NavLink to="/flex" activeClassName="active">Flex</NavLink></li>
            <li><NavLink to="/float" activeClassName="active">Float</NavLink></li>
            <li><NavLink to="/sizing" activeClassName="active">Sizing</NavLink></li>
            <li><NavLink to="/spacing" activeClassName="active">Spacing</NavLink></li>
            <li><NavLink to="/position" activeClassName="active">Position</NavLink></li>
            <li><NavLink to="/typography" activeClassName="active">Typography - Desktop</NavLink></li>
            <li><NavLink to="/vertical-align" activeClassName="active">Vertical Align</NavLink></li>
            <li><NavLink to="/zindex" activeClassName="active">Z-Index</NavLink></li>
          </ul>
        </Accordion>
        <Accordion label="LAYOUT" className="u-pl-32">
          <ul>
            <li><NavLink to="/container">Container</NavLink></li>
          </ul>
        </Accordion>
        <Accordion label="ATOM" className="u-pl-32">
          <ul>
            <li><NavLink to="/alert-box" activeClassName="active">Alert Box</NavLink></li>
            <li><NavLink to="/button" activeClassName="active">Button</NavLink></li>
            <li><NavLink to="/box" activeClassName="active">Box</NavLink></li>
            <li><NavLink to="/checkbox" activeClassName="active">Checkbox</NavLink></li>
            <li><NavLink to="/date-picker" activeClassName="active">Date Picker</NavLink></li>
            <li><NavLink to="/divider" activeClassName="active">Divider</NavLink></li>
            <li><NavLink to="/drop-zone" activeClassName="active">Drop Zone</NavLink></li>
            <li><NavLink to="/icon-glyph" activeClassName="active">Icon Glyph</NavLink></li>
            <li><NavLink to="/icon-special" activeClassName="active">Icon Special</NavLink></li>
            <li><NavLink to="/modal-box" activeClassName="active">Modal Box</NavLink></li>
            <li><NavLink to="/modal" activeClassName="active">Modal</NavLink></li>
            <li><NavLink to="/next-nav-button" activeClassName="active">Next-Navigation Button</NavLink></li>
            <li><NavLink to="/radio-button" activeClassName="active">Radio Button</NavLink></li>
            <li><NavLink to="/select-button" activeClassName="active">Select Button</NavLink></li>
            <li><NavLink to="/table" activeClassName="active">Table</NavLink></li>
            <li><NavLink to="/textfield" activeClassName="active">Textfield</NavLink></li>
            <li><NavLink to="/toggle" activeClassName="active">Toggle</NavLink></li>
            <li><NavLink to="/tooltip" activeClassName="active">Tooltip</NavLink></li>
            <li><NavLink to="/tray" activeClassName="active">Tray</NavLink></li>
            <li><NavLink to="/progressbar" activeClassName="active">Progress Bar</NavLink></li>
          </ul>
        </Accordion>
        <Accordion label="MOLECULES" className="u-pl-32">
          <ul>
            <li><NavLink to="/accordion" activeClassName="active">Accordion</NavLink></li>
            <li><NavLink to="/breadcrumbs" activeClassName="active">Breadcrumbs</NavLink></li>
            <li><NavLink to="/button-popover" activeClassName="active">Button Popover</NavLink></li>
            <li><NavLink to="/option-box" activeClassName="active">Option Box</NavLink></li>
            <li><NavLink to="/pagination" activeClassName="active">Pagination</NavLink></li>
            <li><NavLink to="/range-slider" activeClassName="active">Range Slider</NavLink></li>
            <li><NavLink to="/search-bar" activeClassName="active">Search Bar</NavLink></li>
            <li><NavLink to="/stepper" activeClassName="active">Stepper</NavLink></li>
          </ul>
        </Accordion>
        <Accordion label="ORGANISMS" className="u-pl-32">
          <ul>
            <li><NavLink to="/mega-menu" activeClassName="active">Mega Menu</NavLink></li>
            <li><NavLink to="/progress-tracker" activeClassName="active">Progress Tracker</NavLink></li>
            <li><NavLink to="/tabs" activeClassName="active">Tabs</NavLink></li>
          </ul>
        </Accordion>
      </aside>
    )
  }
}

export default Aside;
