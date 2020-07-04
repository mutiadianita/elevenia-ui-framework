import React, { Component } from 'react';
import { Icon } from '../Components/Atoms';
import { Ribbon } from '../Components/Molecules';

class RibbonPage extends Component {
  constructor(...args) {
    super(args);
    this.state = {
      renderRibbon: true
    }

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setTimeout(() => this.setState({ renderRibbon: false }), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <h1 className="title">Ribbon</h1>
        <h2 className="u-mb-8">Type</h2>
        {this.state.renderRibbon ? <Ribbon styles="u-bg-success u-tx-p2 u-tx-white u-py-12 u-px-16 u-ds-flex u-al-items-center"><Icon iwidth="i u-mr-8" name="information" width="22" height="24" fill="#ffffff" class="information" />This is example of label with icon</Ribbon> : null}

        <br />
        <Ribbon styles="u-bg-warning u-tx-p2 u-tx-white u-py-12 u-px-16 u-ds-flex u-al-items-center"><Icon iwidth="i u-mr-8" name="time" width="16" height="16" fill="#ffffff" class="time" />This is example of label with icon</Ribbon>
        <br />
        <Ribbon styles="u-bg-danger u-tx-p2 u-tx-white u-py-12 u-px-16 u-ds-flex u-al-items-center"><Icon iwidth="i u-mr-8" name="attention" width="24" height="24" fill="#ffffff" class="attention" />This is example of label with icon</Ribbon>
        <pre>
          <code>
          &lt;Ribbon styles=&quot;u-bg-warning u-tx-p2 u-tx-white u-py-12 u-px-16 u-ds-flex u-al-items-center&quot;&gt;<br/>
          &nbsp;&lt;Icon iwidth=&quot;i u-mr-8&quot; name=&quot;time&quot; width=&quot;16&quot; height=&quot;16&quot; fill=&quot;#ffffff&quot; class=&quot;time&quot;/&gt;<br/>
          &nbsp;&nbsp;This is example of label with icon<br/>
          &lt;/Ribbon&gt;<br/>
          &lt;Ribbon styles=&quot;u-bg-danger u-tx-p2 u-tx-white u-py-12 u-px-16 u-ds-flex u-al-items-center&quot;&gt;<br/>
          &nbsp;&lt;Icon iwidth=&quot;i u-mr-8&quot; name=&quot;attention&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;#ffffff&quot; class=&quot;attention&quot; /&gt;<br/>
          &nbsp;&nbsp;This is example of label with icon<br/>
          &lt;/Ribbon&gt;
          </code>
        </pre>
        
      </div>
    );
  }
}

export default RibbonPage;
