import React, { Component } from 'react';
import { Box } from '../../Components/Atoms';

class BoxPage extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Box</h1>
                <p>Box act as group of information, it will be very usefull to distinguish each group of information.  There will be several state of box:</p>
                <h1 className="u-my-24">Default</h1>
                <Box styles="box u-p-40 u-mb-12">This Box Atom</Box>
                <pre>
                    <code>
                    &lt;Box styles=&quot;box u-p-40 u-mb-12&quot;&gt;This Box Atom&lt;/Box&gt;
                    </code>
                </pre>
                <h1 className="u-my-24">Action</h1>
                <Box styles="box action u-p-40 u-mb-12">This Box Atom Action</Box>
                <pre>
                    <code>
                    &lt;Box styles=&quot;box action u-p-40 u-mb-12&quot;&gt;This Box Atom Action&lt;/Box&gt;
                    </code>
                </pre>
                <h1 className="u-my-24">Disable</h1>
                <Box styles="box disable u-p-40">This Box Atom Disable</Box>
                <pre>
                    <code>
                    &lt;Box styles=&quot;box disable u-p-40&quot;&gt;This Box Atom Disable&lt;/Box&gt;
                    </code>
                </pre>
            </div>
        );
    }
}

export default BoxPage;