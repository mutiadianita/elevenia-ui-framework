import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class DocumentationPage extends Component {
    render() {
        return (
            <div>
                <h1 className="title u-tx-center"> Elevenia UI</h1>
                <p className="u-tx-d4 u-tx-info">
                    A special framework for Elevenia that uses React JS technology with a consistent design, standardized code flow, and can develop website interface quickly.
                </p>
                <p className="u-tx-d4 u-tx-info u-mt-16">
                    Using the atomic design methodology that divides components into <b>atoms</b>, <b>molecules</b>, <b>organisms</b>, and additional <b>utilities</b> class.
                </p>
                <p className="u-tx-d4 u-tx-info u-mt-16">
                    Take a look to <NavLink to="/installation">Installation</NavLink> to use and install Elevenia UI Framework.
                </p>
                <p className="u-tx-d4 u-tx-info u-mt-16">
                    To use layouting, use grid system in <NavLink to="/container">Container</NavLink>.
                </p>
                <p className="u-tx-d4 u-tx-info u-mt-16">
                    Atoms are basic components that cannot be broken down. Atoms consists of:
                </p>
                <ul className="list-page u-mt-16">
                    <li><NavLink to="/alert-box">Alert Box</NavLink></li>
                    <li><NavLink to="/box">Box</NavLink></li>
                    <li><NavLink to="/button">Button</NavLink></li>
                    <li><NavLink to="/checkbox">Checkbox</NavLink></li>
                    <li><NavLink to="/date-picker">Date Picker</NavLink></li>
                    <li><NavLink to="/divider">Divider</NavLink></li>
                    <li><NavLink to="/icon-glyph">Icon Glyph</NavLink></li>
                    <li><NavLink to="/icon-special">Icon Special</NavLink></li>
                    <li><NavLink to="/modal-box">Modal Box</NavLink></li>
                    <li><NavLink to="/modal">Modal</NavLink></li>
                    <li><NavLink to="/next-nav-button">Next Nav Button</NavLink></li>
                    <li><NavLink to="/radio-button">Radio Button</NavLink></li>
                    <li><NavLink to="/select-button">Select Button</NavLink></li>
                    <li><NavLink to="/table">Table</NavLink></li>
                    <li><NavLink to="/textfield">Textfield</NavLink></li>
                    <li><NavLink to="/toggle">Toggle</NavLink></li>
                </ul>
                <p className="u-tx-d4 u-tx-info u-mt-16">
                    Molecules are components formed from atoms. Molecules consist of:
                </p>
                <ul className="list-page u-mt-16">
                    <li><NavLink to="/accordion">Accordion</NavLink></li>
                    <li><NavLink to="/breadcrumbs">Breadcrumbs</NavLink></li>
                    <li><NavLink to="/button-popover">Button Popover</NavLink></li>
                    <li><NavLink to="/option-box">Option Box</NavLink></li>
                    <li><NavLink to="/pagination">Pagination</NavLink></li>
                    <li><NavLink to="/range-slider">Range Slider</NavLink></li>
                    <li><NavLink to="/search-bar">Search Bar</NavLink></li>
                    <li><NavLink to="/stepper">Stepper</NavLink></li>
                    <li><NavLink to="/uploader">Uploader</NavLink></li>
                </ul>
                <p className="u-tx-d4 u-tx-info u-mt-16">
                    Organisms are components formed from atoms and or molecules. Molecules consist of:
                </p>
                <ul className="list-page u-mt-16">
                    <li><NavLink to="/header">Header</NavLink></li>
                    <li><NavLink to="/footer">Footer</NavLink></li>
                    <li><NavLink to="/mega-menu">Mega Menu</NavLink></li>
                    <li><NavLink to="/progress-tracker">Progress Tracker</NavLink></li>
                    <li><NavLink to="/tabs">Tabs</NavLink></li>
                </ul>
                <p className="u-tx-d4 u-tx-info u-mt-16">
                    Utilities are supporting classnames for components. Utilities are:
                </p>
                <ul className="list-page u-mt-16">
                    <li><NavLink to="/border">Border</NavLink></li>
                    <li><NavLink to="/clearfix">Clearfix</NavLink></li>
                    <li><NavLink to="/color">Color</NavLink></li>
                    <li><NavLink to="/display">Display</NavLink></li>
                    <li><NavLink to="/flex">Flex</NavLink></li>
                    <li><NavLink to="/float">Float</NavLink></li>
                    <li><NavLink to="/sizing">Sizing</NavLink></li>
                    <li><NavLink to="/spacing">Spacing</NavLink></li>
                    <li><NavLink to="/position">Position</NavLink></li>
                    <li><NavLink to="/typography">Typography</NavLink></li>
                    <li><NavLink to="/vertical-align">Vertical Align</NavLink></li>
                    <li><NavLink to="/zindex">Z-Index</NavLink></li>
                </ul>


                
            </div>
        );
    }
}

export default DocumentationPage;