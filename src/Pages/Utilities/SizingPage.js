import React from 'react';


class SizingPage extends React.Component {
  render () {
  return (
    <div>
      <h1 className="title">Sizing</h1>
        <p className="u-tx-info">Use these shorthand utilities for quickly configuring the sizing of an element.</p>
        <p className="u-my-24 u-tx-info">Here are all the support classes</p>
        <ul className="list-page">
          <li><span className="u-tx-primary">.u-wd-full</span> for width full </li>
          <li><span className="u-tx-primary">.u-hg-full</span> for height full </li>
          <li><span className="u-tx-primary">.u-hg-vh</span> for height full viewport</li>
          <li><span className="u-tx-primary">.u-wd-large </span> for width 1080px</li>
          <li><span className="u-tx-primary">.u-wd-medium</span> for width 984px</li>
          <li><span className="u-tx-primary">.u-wd-small</span> for width 784px</li>
        </ul>
        <code>
            &lt;div className="row"&gt; <br/>
            &nbsp;&lt;div className="u-wd-full"&gt; &lt;/div&gt;  <br/>
            &nbsp;&lt;div className="u-hg-full"&gt; &lt;/div&gt; <br/>
            &nbsp;&lt;div className="u-hg-vh"&gt; &lt;/div&gt; <br/>
            &nbsp;&lt;div className="u-wd-large"&gt; &lt;/div&gt; <br/>
            &nbsp;&lt;div className="u-wd-medium"&gt; &lt;/div&gt; <br/>
            &nbsp;&lt;div className="u-wd-small"&gt; &lt;/div&gt; <br/>
          &lt;/div&gt;
          <br />
        </code>
    </div>
    )
  }
}

export default SizingPage;