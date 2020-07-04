import React from 'react';

class PositionPage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Position</h1>
        <p className="u-tx-info">Use these shorthand utilities for quickly configuring the position of an element.</p>
        <p className="u-my-24 u-tx-info">Here are all the support classes</p>
        <ul className="list-page">
          <li><span className="u-tx-primary">.u-ps-relative</span> </li>
          <li><span className="u-tx-primary">.u-ps-absolute</span> </li>
          <li><span className="u-tx-primary">.u-ps-static</span> </li>
          <li><span className="u-tx-primary">.u-ps-fixed</span> </li>
          <li><span className="u-tx-primary">.u-ps-fixed-top</span> </li>
          <li><span className="u-tx-primary">.u-ps-fixed-bottom</span> </li>
          <li><span className="u-tx-primary">.u-ps-sticky</span> </li>
          <li><span className="u-tx-primary">.u-ps-sticky-top</span> </li>
        </ul>
        <code>
          &lt;div className="row"&gt; <br />
            &nbsp;&lt;div className="u-ps-relative"&gt; &lt;/div&gt;  <br />
            &nbsp;&lt;div className="u-ps-absolute"&gt; &lt;/div&gt; <br />
            &nbsp;&lt;div className="u-ps-static"&gt; &lt;/div&gt; <br />
            &nbsp;&lt;div className="u-ps-fixed"&gt; &lt;/div&gt; <br />
            &nbsp;&lt;div className="u-ps-fixed-top"&gt; &lt;/div&gt; <br />
            &nbsp;&lt;div className="u-ps-fixed-bottom"&gt; &lt;/div&gt; <br />
            &nbsp;&lt;div className="u-ps-sticky"&gt; &lt;/div&gt; <br />
            &nbsp;&lt;div className="u-ps-sticky-top"&gt; &lt;/div&gt; <br />
          &lt;/div&gt;
          <br />
        </code>
      </div>
    )
  }
}

export default PositionPage;