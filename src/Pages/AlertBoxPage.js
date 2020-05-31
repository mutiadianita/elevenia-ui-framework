import React, { Component } from 'react';
import { AlertBox, Icon } from '../Components/Atom';

class AlertBoxPage extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Alert Box</h1>
                <h2 className="u-mb-8">Success</h2>
                <AlertBox styles="alertbox alertbox--fluid alertbox--success u-my-16">
                    <Icon iwidth="i" name="information" width="22" height="24" fill="#8FC742" class="information u-mr-8" />
                    This is Alert Box
                </AlertBox>
                <code>
                &lt;AlertBox styles="alertbox-container alertbox-container--fluid alertbox--success u-my-16"&gt;<br />
                &nbsp;&lt;AlertBoxIcon styles="alertbox__icon i i__check"/&gt;<br />
                &nbsp; &nbsp;This is Alert Box<br />
                &lt;/AlertBox&gt;
                </code>
                <h2 className="u-mb-8">Warning</h2>
                <AlertBox styles="alertbox alertbox--fluid alertbox--warning u-my-16">
                    <Icon iwidth="i" name="timer" width="16" height="16" fill="#FAAD24" class="timer u-mr-8" />
                    This is Alert Box
                </AlertBox>
                <code>
                &lt;AlertBox styles="alertbox-container alertbox-container--fluid alertbox--warning u-my-16"&gt;<br />
                &nbsp;&lt;AlertBoxIcon styles="alertbox__icon i i__check"/&gt;<br />
                &nbsp; &nbsp;This is Alert Box<br />
                &lt;/AlertBox&gt;
                </code>
                <h2 className="u-mb-8">Error</h2>
                <AlertBox styles="alertbox alertbox--fluid alertbox--error u-my-16">
                    <Icon iwidth="i" name="attention" width="16" height="16" fill="#EE2B2E" class="attention u-mr-8" />
                    This is Alert Box
                </AlertBox>
                <code>
                &lt;AlertBox styles="alertbox-container alertbox-container--fluid alertbox--error u-my-16"&gt;<br />
                &nbsp;&lt;AlertBoxIcon styles="alertbox__icon i i__check"/&gt;<br />
                &nbsp; &nbsp;This is Alert Box<br />
                &lt;/AlertBox&gt;
                </code>
            </div>
        );
    }
}

export default AlertBoxPage;
