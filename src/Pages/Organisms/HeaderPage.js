import React, { Component } from 'react';
import { Header, HeaderLeft, HeaderBody, HeaderRight } from '../../Components/Organisms';
import { Search } from '../../Components/Molecules'
import { Icon } from '../../Components/Atoms';

class HeaderPage extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Header</h1>
                <h1>Header</h1>
                <p>Header is a wrapper for header</p>
                <h1>HeaderLeft</h1>
                <p>HeaderLeft is a wrapper for left header</p>
                <h1>HeaderBody</h1>
                <p>HeaderLeft is a wrapper for left header</p>
                <h1>HeaderRight</h1>
                <p>HeaderRight is a wrapper for right header, </p>
                <h1>Below is example usage of header:</h1>
                <Header styles="u-ps-relative">
                    <HeaderLeft>
                        <a href="http://www.elevenia.co.id">
                            <img src="http://www.elevenia.co.id/img_11ia/logo.png" alt="elevenia" style={{ height: "30px", width: "120px" }} />
                        </a>
                    </HeaderLeft>
                    <HeaderBody>
                        <Search />
                    </HeaderBody>
                    <HeaderRight>
                        <span className="u-mr-16">
                            <Icon iwidth="i" name="add-to-cart" width="24" height="24" fill="#70727D" class="add-to-cart" />
                        </span>
                        <span className="u-mr-16">
                            <Icon iwidth="i" name="more-horizontal" width="24" height="24" fill="#70727D" class="more-horizontal" />
                        </span>
                    </HeaderRight>
                </Header>
                <code>
                &lt;Header styles="u-ps-relative"&gt; <br/>
                &nbsp;&lt;HeaderLeft&gt;<br/>
                &nbsp;&nbsp;&lt;a href="http://www.elevenia.co.id"&gt; <br/>
                &nbsp;&nbsp;&nbsp;&lt;img src="http://www.elevenia.co.id/img_11ia/logo.png" alt="elevenia" style=&#123;&#123; height: "30px", width: "120px" &#125;&#125; /&gt; <br/>
                &nbsp;&nbsp;&lt;/a&gt; <br/>
                &nbsp;&lt;/HeaderLeft&gt; <br/>
                &nbsp;&lt;HeaderBody&gt; <br/>
                &nbsp;&nbsp;&lt;Search /&gt; <br/>
                &nbsp;&lt;/HeaderBody&gt; <br/>
                &nbsp;&lt;HeaderRight&gt; <br/>
                &nbsp;&nbsp;&lt;span className="u-mr-16"&gt; <br/>
                &nbsp;&nbsp;&nbsp;&lt;Icon iwidth="i" name="add-to-cart" width="24" height="24" fill="#70727D" class="add-to-cart" /&gt; <br/>
                &nbsp;&nbsp;&lt;/span&gt; <br/>
                &nbsp;&nbsp;&lt;span className="u-mr-16"&gt; <br/>
                &nbsp;&nbsp;&nbsp;&lt;Icon iwidth="i" name="more-horizontal" width="24" height="24" fill="#70727D" class="more-horizontal" /&gt; <br/>
                &nbsp;&nbsp;&lt;/span&gt; <br/>
                &nbsp;&lt;/HeaderRight&gt; <br/>
                &lt;/Header&gt; <br/>
                </code>
            </div>
        );
    }
}

export default HeaderPage;