import React from 'react'

class ContainerPage extends React.Component {
  render () {
    return (
      <div>
        <h1 className="title">Layout</h1>
        <h1>Container</h1>
        <p>Container is basic layout element and is required when using our default grid system. Containers are used to contain, pad, and (sometimes) center the content within them. While containers can be nested, most layouts do not require a nested container.</p>
        <ul className="list-page">
            <li><span className="u-tx-primary">.container</span> </li>
        </ul>
        <code>
          &lt;div className="container"&gt; &lt;/div&gt;
        </code>
        <h1>Grid</h1>
        <p>For grids that are the same from the smallest of devices to the largest, use the .col and .col-* classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to .col.</p>
        <ul className="list-page">
            <li><span className="u-tx-primary">.row</span> </li>
            <li><span className="u-tx-primary">.col</span> </li>
            <li><span className="u-tx-primary">.col-1</span> </li>
            <li><span className="u-tx-primary">.col-2</span> </li>
            <li><span className="u-tx-primary">.col-3</span> </li>
            <li><span className="u-tx-primary">.col-4</span> </li>
            <li><span className="u-tx-primary">.col-5</span> </li>
            <li><span className="u-tx-primary">.col-6</span> </li>
            <li><span className="u-tx-primary">.col-7</span> </li>
            <li><span className="u-tx-primary">.col-8</span> </li>
            <li><span className="u-tx-primary">.col-9</span> </li>
            <li><span className="u-tx-primary">.col-10</span> </li>
            <li><span className="u-tx-primary">.col-11</span> </li>
            <li><span className="u-tx-primary">.col-12</span> </li>
        </ul>
        <div className="row u-bd">
          <div className="col u-bd-right u-p-8">.Col</div>
          <div className="col u-bd-right u-p-8">.Col</div>
          <div className="col u-p-8">.Col</div>
        </div>
        <code>
            &lt;div className="row"&gt; <br/>
            &nbsp;&lt;div className="col"&gt; &lt;/div&gt;  <br/>
            &nbsp;&lt;div className="col"&gt; &lt;/div&gt; <br/>
            &nbsp;&lt;div className="col"&gt; &lt;/div&gt; <br/>
          &lt;/div&gt;
          <br />
        </code>
        <div className="row u-bd u-mt-24">
          <div className="col-3 u-bd-right u-p-8">.Col-3</div>
          <div className="col-6 u-bd-right u-p-8">.Col-6</div>
          <div className="col-3 u-p-8">.Col-3</div>
        </div>
        <code>
            &lt;div className="row"&gt; <br/>
            &nbsp;&lt;div className="col-3"&gt; &lt;/div&gt;  <br/>
            &nbsp;&lt;div className="col-6"&gt; &lt;/div&gt; <br/>
            &nbsp;&lt;div className="col-3"&gt; &lt;/div&gt; <br/>
          &lt;/div&gt;
          <br />
        </code>
      </div>
    )
  }
}

export default ContainerPage;
