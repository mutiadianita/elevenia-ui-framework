import React, { Component } from 'react';
import { Tray } from '../Components/Molecules';

class TrayPage extends Component {
  state = {
    show: false
  }

  toggleClick = () => {
    this.setState({ show: !this.state.show})
  }

  render() {
    return (
      <>
        <h1 className="title">Tray</h1>
        <div style={{
          width: 360,
          background: '#55c9fa',
          boxSizing: 'content-box',
          minHeight: 550,
          position: 'relative',
          boxShadow: '0px 0px 10px #DDD',
          overflow: 'hidden'
        }} >
          <div style={{ width: '100%' }} className="u-ds-flex u-js-center u-my-20">
            <button onClick={this.toggleClick} className="btn u-bg-secondary-green u-tx-white">Test Button</button>
          </div>
          <Tray show={this.state.show} toggleShow={this.toggleClick} slideDown={350}>
            <Tray.Header className="u-bd-bottom u-bd-light">
              <h1 className="u-m-0 u-tx-center">Header</h1>
            </Tray.Header>
            <Tray.Content maxHeight={300}>
              <ul className="u-p-8">
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                <li>Lorem, ipsum dolor sit amet consectetur.</li>
              </ul>
            </Tray.Content>
            <Tray.Action>
              <button className="btn u-bg-secondary-green u-tx-white u-ds-block" style={{ width: '100%' }}>Test</button>
            </Tray.Action>
          </Tray>
        </div>

        <div className="u-mt-28">
          <b>Notes: </b>
          <p>1. For Screen or wrapper of Tray, should be added relative position and overflow hidden.</p>
          <p>2. If using props.show please input toggleShowHandler to Tray's toggleShow props</p>
          <p>3. Add maxHeight on Tray.Content for custom height of content</p>
          <b>Thanks</b>
        </div>
      </>
    );
  }
}

export default TrayPage;