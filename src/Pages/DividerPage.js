import React, { Component } from 'react';
import { Box, Divider } from '../Components/Atoms';

class DividerPage extends Component {
    render() {
        return (
            <div>
                <Box styles='box u-fx-column u-p-8'>
                    <p>A divider is something which forms a barrier between two areas or sets of things.</p>
                    <Divider direction='horizontal' background='white' size='base'>
                        <Divider.Text>Divider</Divider.Text>
                    </Divider>
                    <p>Dividers are an instrument used for measuring lines and for marking points along them.</p>
                </Box>
            </div>
        );
    }
}

export default DividerPage;