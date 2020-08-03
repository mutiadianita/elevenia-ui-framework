import React, { Component } from 'react';
import { Footer, FooterLeft, FooterBody, FooterRight } from '../../Components/Organisms';
import { Button } from '../../Components/Atoms';

class FooterPage extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Footer</h1>
                <h1>Footer</h1>
                <p>Footer is a wrapper for footer</p>
                <h1>FooterLeft</h1>
                <p>FooterLeft is a wrapper for left footer</p>
                <h1>FooterBody</h1>
                <p>FooterBody is a wrapper for body footer</p>
                <h1>FooterRight</h1>
                <p>FooterRight is a wrapper for right footer, </p>
                <h1>Below is example usage of Footer:</h1>
                <Footer>
                    <FooterLeft>
                        <a href="http://www.elevenia.co.id">
                            <img src="http://www.elevenia.co.id/img_11ia/logo.png" alt="elevenia" style={{ height: "30px", width: "120px" }} />
                        </a>
                        <span className="u-ml-8 u-tx-b2" style={{ fontSize: "12px", marginLeft: "8px" }}>© 2009-2018, PT XL Planet</span>
                    </FooterLeft>
                    <FooterBody>
                    </FooterBody>
                    <FooterRight>
                        <Button label="footer" styles="btn btn--small u-bg-white" click={this.handleClick}>Indonesia</Button>
                        <Button label="footer" styles="btn btn--small u-bg-white u-tx-black-40 u-bd-black-40" click={this.handleClick}>English</Button>
                    </FooterRight>
                </Footer>
                
                <code>
                &lt;Footer&gt; <br/>
                &nbsp;&lt;FooterLeft&gt; <br/>
                &nbsp;&nbsp;&lt;a href="http://www.elevenia.co.id"&gt; <br/>
                &nbsp;&lt;img src="http://www.elevenia.co.id/img_11ia/logo.png" alt="elevenia" style=&#123;&#123; height: "30px", width: "120px" &#125;&#125; /&gt;<br/>
                &nbsp;&nbsp;&lt;/a&gt; <br/>
                &nbsp;&nbsp;&lt;span className="u-ml-8 u-tx-b2" style=&#123;&#123; fontSize: "12px", marginLeft: "8px" &#125;&#125;&gt;© 2009-2018, PT XL Planet&lt;/span&gt;<br/>
                &nbsp;&lt;/FooterLeft&gt; <br/>
                &nbsp;&lt;FooterBody&gt;<br/>
                &nbsp;&lt;/FooterBody&gt;<br/>
                &nbsp;&lt;FooterRight&gt;<br/>
                &nbsp;&nbsp;&lt;Button label="footer" styles="btn btn--small u-bg-white" click=&#123;this.handleClick&#125;&gt;Indonesia&lt;/Button&gt;<br/>
                &nbsp;&nbsp;&lt;Button label="footer" styles="btn btn--small u-bg-white u-tx-black-40 u-bd-black-40" click=&#123;this.handleClick&#125;&gt;English&lt;/Button&gt; <br/>
                &nbsp;&lt;/FooterRight&gt;<br/>
                &lt;/Footer&gt;<br/>
                </code>
            </div>
        );
    }
}

export default FooterPage;