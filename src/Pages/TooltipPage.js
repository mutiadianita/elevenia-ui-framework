import React, { Component } from 'react';
import { Tooltip, Button } from '../Components/Atom';

class TooltipPage extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Tooltip</h1>
                <h1>Right Default</h1>
                <Tooltip styles="tooltip tooltip--right" content="Tooltip Right">
                    <Button styles="btn btn--small u-bg-light">&nbsp;</Button>
                </Tooltip><br/>
                <code>
                    &lt;Tooltip styles="tooltip tooltip--right" content="Tooltip Right"&gt;<br/>
                        &lt;Button styles="btn btn--small u-bg-light">&nbsp;&lt;/Button&gt;<br/>
                    &lt;/Tooltip&gt;<br/>
                </code>
                <h1>Right Dark</h1>
                <Tooltip styles="tooltip tooltip--top tooltip--dark" content="Tooltip Right">
                    <Button styles="btn btn--small u-bg-light">&nbsp;</Button>
                </Tooltip><br/>
                <code>
                    &lt;Tooltip styles="tooltip tooltip--right tooltip--dark" content="Tooltip Right"&gt;<br/>
                        &lt;Button styles="btn btn--small u-bg-light">&nbsp;&lt;/Button&gt;<br/>
                    &lt;/Tooltip&gt;<br/>
                </code>
                <h1>Left Default</h1>
                <Tooltip styles="tooltip tooltip--left" content="Tooltip Left">
                    <Button styles="btn btn--small u-bg-light">&nbsp;</Button>
                </Tooltip><br/>
                <code>
                    &lt;Tooltip styles="tooltip tooltip--right tooltip--dark" content="Tooltip Right"&gt;<br/>
                        &lt;Button styles="btn btn--small u-bg-light">&nbsp;&lt;/Button&gt;<br/>
                    &lt;/Tooltip&gt;<br/>
                </code>
                <h1>Top Default</h1>
                <Tooltip styles="tooltip tooltip--top" content="Tooltip Top">
                    <Button styles="btn btn--small u-bg-light">&nbsp;</Button>
                </Tooltip><br/>
                <code>
                    &lt;Tooltip styles="tooltip tooltip--top" content="Tooltip Top"&gt;<br/>
                        &lt;Button styles="btn btn--small u-bg-light">&nbsp;&lt;/Button&gt;<br/>
                    &lt;/Tooltip&gt;<br/>
                </code>
                <h1>Bottom Default</h1>
                <Tooltip styles="tooltip tooltip--bottom" content="Tooltip Bottom">
                    <Button styles="btn btn--small u-bg-light">&nbsp;</Button>
                </Tooltip><br/>
                <code>
                    &lt;Tooltip styles="toolti&lt; tooltip--bottom" content="Tooltip Bottom"&gt;<br/>
                        &lt;Button styles="btn btn--small u-bg-light">&nbsp;&lt;/Button&gt;<br/>
                    &lt;/Tooltip&gt;<br/>
                </code>
            </div>
        );
    }
}

export default TooltipPage;