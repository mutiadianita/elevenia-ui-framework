import React from 'react';

class DisplayPage extends React.Component {
  render () {
    return (
    <div>
        <h1 className="title">Display</h1>
        <p className="u-tx-info">Change the value of the <span className="u-fw-bold">display property </span>with 
        our responsive display utility classes. We purposely support only a 
        subset of all possible values for <span className="u-tx-primary u-fw-regular">display</span>. Classes can be combined 
        for various effects as you need.</p>
        <p className="u-my-24 u-tx-info">Here are all the support classes</p>
        <h1>Display</h1>
        <ul className="list-page">
          <li><span className="u-tx-primary">.u-ds-none</span> </li>
          <li><span className="u-tx-primary">.u-ds-block</span> </li>
          <li><span className="u-tx-primary">.u-ds-inline-block</span> </li>
          <li><span className="u-tx-primary">.u-ds-inline</span> </li>
          <li><span className="u-tx-primary">.u-ds-table</span> </li>
          <li><span className="u-tx-primary">.u-ds-flex</span> </li>
          <li><span className="u-tx-primary">.u-ds-inline-flex</span> </li>
          <li><span className="u-tx-primary">.u-ds-table-cell</span> </li>
          <li><span className="u-tx-primary">.u-ds-table-row</span> </li>
          <li><span className="u-tx-primary">.u-ds-print-none</span> </li>
          <li><span className="u-tx-primary">.u-ds-print-inline </span> </li>
          <li><span className="u-tx-primary">.u-ds-print-inline-block</span> </li>
          <li><span className="u-tx-primary">.u-ds-print-block</span> </li>
          <li><span className="u-tx-primary">.u-ds-print-table</span> </li>
          <li><span className="u-tx-primary">.u-ds-print-table-row </span> </li>
          <li><span className="u-tx-primary">.u-ds-print-table-cell</span> </li>
          <li><span className="u-tx-primary">.u-ds-print-flex</span> </li>
          <li><span className="u-tx-primary">.u-ds-print-inline-flex</span> </li>
        </ul>
        
        <code>
          &lt;p className="u-ds-none"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-block"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-inline-block"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-inline"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-table"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-flex"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-inline-flex"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-table-cell"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-table-row"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-print-none"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-print-inline"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-print-inline-block"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-print-block"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-print-table"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-print-table-row"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-print-table-cell"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-print-flex"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ds-print-inline-flex"&gt;&lt;/p&gt;
        </code>
        <h1>Overlay</h1>
        <ul className="list-page">
          <li><span className="u-tx-primary">.u-ov-hidden</span> </li>
          <li><span className="u-tx-primary">.u-ov-scroll</span> </li>
          <li><span className="u-tx-primary">.u-ov-auto</span> </li>
          <li><span className="u-tx-primary">.u-ov-x-hidden</span> </li>
          <li><span className="u-tx-primary">.u-ov-y-scroll</span> </li>
        </ul>
        <code>
          &lt;p className="u-ov-hidden"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ov-scroll"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ov-auto"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ov-x-hidden"&gt;&lt;/p&gt;<br/>
          &lt;p className="u-ov-y-scroll"&gt;&lt;/p&gt;<br/>
        </code>
        <h1>Cursor</h1>
        <ul className="list-page">
          <li><span className="u-tx-primary">.u-cr-pointer</span> </li>
        </ul>
        <code>
          &lt;p className="u-cr-pointer"&gt;&lt;/p&gt;<br/>
        </code>
    </div>
    )
  }
}

export default DisplayPage;