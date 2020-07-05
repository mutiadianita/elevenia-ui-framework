import React, { Component } from 'react';
import { Box, Divider } from '../Components/Atoms';

class DividerPage extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Divider</h1>
                <p>A divider is something which forms a barrier between two areas or sets of things.</p>
                <p>Dividers are an instrument used for measuring lines and for marking points along them.</p>
                <br/>
                <Box styles='box u-fx-column u-p-8'>
                    <Divider direction='horizontal' background='white' size='base'>
                        <Divider.Text>Divider</Divider.Text>
                    </Divider>
                </Box>
                <code>
                &lt;Divider direction='horizontal' background='white' size='base'&gt; <br/>
                &nbsp; &lt;Divider.Text&gt;Divider&lt;/Divider.Text&gt; <br/>
                &lt;/Divider&gt;
                </code>
            </div>
        );
    }
}

export default DividerPage;