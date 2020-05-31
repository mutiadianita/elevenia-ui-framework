import React, { Component } from 'react';
import { Toggle } from '../Components/Atom';

class TogglePage extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Toggle</h1>
        <div className="u-mb-24">
          <h1>Default</h1>
          <Toggle />
        </div>
        <code>
          &lt;Toggle /&gt;
        </code>
        <div className="u-mb-24">
          <h1>Default Checked</h1>
          <Toggle checked />
        </div>
        <code>
          &lt;Toggle checked /&gt;
        </code>
        <div className="u-mb-24">
          <h1>Disabled</h1>
          <Toggle disabled />
        </div>
        <code>
          &lt;Toggle disabled /&gt;
        </code>
        <div className="u-mb-24">
          <h1>Label Right</h1>
          <Toggle labelText="lorem ipsum" labelPosition="right" />
        </div>
        <code>
          &lt;Toggle labelText="lorem ipsum" labelPosition="right" /&gt;
        </code>
        <div className="u-mb-24">
          <h1>Label Left</h1>
          <Toggle labelText="lorem ipsum" labelPosition="left" />
        </div>
        <code>
          &lt;Toggle labelText="lorem ipsum" labelPosition="left" /&gt;
        </code>
        <div className="u-mb-24">
          <h1>Label Inside</h1>
          <Toggle labelInside />
        </div>
        <code>
          &lt;Toggle labelInside /&gt;
        </code>
      </div>
    )
  }
};

export default TogglePage;