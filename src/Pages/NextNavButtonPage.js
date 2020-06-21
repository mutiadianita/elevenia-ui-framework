import React, { Component } from 'react';
import { NextNavButton } from '../Components/Atom';
import Box from '../Components/Atom/Box';

class NextNavButtonPage extends Component {

    render() {
        return (
            <div>
                <h1 className="title">Next-Navigation Button</h1>
                <h2 className="u-mb-8">Both Direction</h2>
                <Box styles="box u-p-40 u-mb-12">
                    <NextNavButton direction='left' />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <NextNavButton direction='right' />
                </Box>
                <code>
                    &lt;Box styles="box u-p-40 u-mb-12"&gt;<br />
                    &nbsp;&lt;NextNavButton styles="navbutton-container navbutton--left"&gt;<br />
                    &nbsp;&nbsp;&lt;NavButton styles="navbutton__button i i__prev" /&gt;<br />
                    &nbsp;&lt;/NextNavButton&gt;<br />
                    &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                    &nbsp;&lt;NextNavButton styles="navbutton-container navbutton--right"&gt;<br />
                    &nbsp;&nbsp;&lt;NavButton styles="navbutton__button i i__next" /&gt;<br />
                    &nbsp;&lt;/NextNavButton&gt;<br />
                    &lt;/Box&gt;<br />
                </code>
                <h2 className="u-mb-8">Left Nav Only</h2>
                <Box styles="box u-p-40 u-mb-12">
                    <NextNavButton direction='left' />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <NextNavButton disabled />
                </Box>
                <code>
                    &lt;Box styles="box u-p-40 u-mb-12"&gt;<br />
                    &nbsp;&lt;NextNavButton styles="navbutton-container navbutton--left"&gt;<br />
                    &nbsp;&nbsp;&lt;NavButton styles="navbutton__button i i__prev" /&gt;<br />
                    &nbsp;&lt;/NextNavButton&gt;<br />
                    &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                    &nbsp;&lt;NextNavButton styles="navbutton-container navbutton--right" disabled&gt;<br />
                    &nbsp;&nbsp;&lt;NavButton styles="navbutton__button i i__next" /&gt;<br />
                    &nbsp;&lt;/NextNavButton&gt;<br />
                    &lt;/Box&gt;<br />
                </code>
                <h2 className="u-mb-8">Right Nav Only</h2>
                <Box styles="box u-p-40 u-mb-12">
                    <NextNavButton disabled />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <NextNavButton direction='right' />
                </Box>
                <code>
                    &lt;Box styles="box u-p-40 u-mb-12"&gt;<br />
                    &nbsp;&lt;NextNavButton styles="navbutton-container navbutton--left" disabled&gt;<br />
                    &nbsp;&nbsp;&lt;NavButton styles="navbutton__button i i__prev" /&gt;<br />
                    &nbsp;&lt;/NextNavButton&gt;<br />
                    &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                    &nbsp;&lt;NextNavButton styles="navbutton-container navbutton--right"&gt;<br />
                    &nbsp;&nbsp;&lt;NavButton styles="navbutton__button i i__next" /&gt;<br />
                    &nbsp;&lt;/NextNavButton&gt;<br />
                    &lt;/Box&gt;<br />
                </code>
            </div>



        );
    }
}

export default NextNavButtonPage;