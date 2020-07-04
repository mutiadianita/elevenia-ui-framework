import React, { Component } from 'react';
import { AlertBox, Icon } from '../Components/Atoms';

class AlertBoxPage extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Alert Box</h1>
                <div className="row u-mb-24">
                    <div className="col u-tx-info">
                    An alert dialog box is a special dialog box that is displayed in a graphical user interface when something unexpected occurred that requires immediate user action.
                    </div>
                </div>
                <h1 className="u-my-24">Size</h1>
                <h2 className="u-mb-8">Green Label</h2>
                Green label is for information that may being a benefit to the user, or we really want user to notice this stuff. e.g Promo.
                <br/>
                <AlertBox styles="alertbox alertbox--success u-my-16">
                    <Icon iwidth="i" name="information" width="22" height="24" fill="#8FC742" class="information u-mr-8" />
                    This is Alert Box
                </AlertBox>
                <br/>
                <code>
                &lt;AlertBox styles="alertbox-container alertbox--success u-my-16"&gt;<br />
                &nbsp;&lt;AlertBoxIcon styles="alertbox__icon i i__check"/&gt;<br />
                &nbsp; This is Alert Box<br />
                &lt;/AlertBox&gt;
                </code>
                <h2 className="u-mb-8">Orange Label</h2>
                Orange label is for information that neutral, example like detail information of product.
                <br/>
                <AlertBox styles="alertbox alertbox--warning u-my-16">
                    <Icon iwidth="i" name="timer" width="16" height="16" fill="#FAAD24" class="timer u-mr-8" />
                    This is Alert Box
                </AlertBox>
                <br/>
                <code>
                &lt;AlertBox styles="alertbox-container alertbox--warning u-my-16"&gt;<br />
                &nbsp;&lt;AlertBoxIcon styles="alertbox__icon i i__check"/&gt;<br />
                &nbsp; &nbsp;This is Alert Box<br />
                &lt;/AlertBox&gt;
                </code>
                <h2 className="u-mb-8">Red Label</h2>
                Red label is for information that act as a caution and prevention for users to do certain task. e.g Alert login failed, etc.
                <br/>
                <AlertBox styles="alertbox alertbox--error u-my-16">
                    <Icon iwidth="i" name="attention" width="16" height="16" fill="#EE2B2E" class="attention u-mr-8" />
                    This is Alert Box
                </AlertBox>
                <br/>
                <code>
                &lt;AlertBox styles="alertbox-container alertbox--error u-my-16"&gt;<br />
                &nbsp;&lt;AlertBoxIcon styles="alertbox__icon i i__check"/&gt;<br />
                &nbsp; &nbsp;This is Alert Box<br />
                &lt;/AlertBox&gt;
                </code>
                
                <h1 className="u-my-24">Fluid</h1>
                Add <span class="u-tx-primary">.alertbox--fluid</span> to styles to make <b>AlertBox</b> responsive
                <AlertBox styles="alertbox alertbox--fluid alertbox--success u-my-16">
                    <Icon iwidth="i" name="information" width="22" height="24" fill="#8FC742" class="information u-mr-8" />
                    This is Alert Box
                </AlertBox>
                <AlertBox styles="alertbox alertbox--fluid alertbox--warning u-my-16">
                    <Icon iwidth="i" name="timer" width="16" height="16" fill="#FAAD24" class="timer u-mr-8" />
                    This is Alert Box
                </AlertBox>
                <AlertBox styles="alertbox alertbox--fluid alertbox--error u-my-16">
                    <Icon iwidth="i" name="attention" width="16" height="16" fill="#EE2B2E" class="attention u-mr-8" />
                    This is Alert Box
                </AlertBox>
                <code>
                &lt;AlertBox styles="alertbox-container alertbox-container--fluid alertbox--success u-my-16"&gt;<br />
                &nbsp;&lt;AlertBoxIcon styles="alertbox__icon i i__check"/&gt;<br />
                &nbsp; This is Alert Box<br />
                &lt;/AlertBox&gt;
                </code>
                <br/>
                <code>
                &lt;AlertBox styles="alertbox-container alertbox-container--fluid alertbox--warning u-my-16"&gt;<br />
                &nbsp;&lt;AlertBoxIcon styles="alertbox__icon i i__check"/&gt;<br />
                &nbsp; &nbsp;This is Alert Box<br />
                &lt;/AlertBox&gt;
                </code>
                <br/>
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
