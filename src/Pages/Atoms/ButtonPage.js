import React from 'react'
import { Button, Icon } from '../../Components/Atoms'

class ButtonPage extends React.Component {
  handleClick = () => {
    return (
      console.log('test')
    )
  }
  render () {
    return (
      <div>
        <h1 className="title">Button</h1>
        <h1 className="u-my-24">Size</h1>
        <div className="u-fx-column u-js-around">
          <div>
            <h2 className="subtitle">Small</h2>
            <div>
              <Button label="test" styles="btn btn--small u-bg-primary u-tx-white" click={this.handleClick}>Lorem ipsum sit</Button>
              <Button label="test" styles="btn btn--small u-bg-secondary-green u-tx-white" click={this.handleClick}>Lorem ipsum sit</Button>
              <Button label="test" styles="btn btn--small u-tx-dark u-bd-light" click={this.handleClick}>Lorem ipsum sit</Button>
              <Button label="test" styles="btn btn--small u-bg-primary u-tx-white" click={this.handleClick} isDisabled="true">Lorem ipsum sit</Button>
            </div>
            <code>
                &lt;Button label="test" styles="btn btn--small u-bg-primary u-tx-white" click={this.handleClick}&gt;Lorem ipsum sit&lt;/Button&gt;
                <br />
                &lt;Button label="test" styles="btn btn--small u-bg-secondary-green u-tx-white" click={this.handleClick}&gt;Lorem ipsum sit&lt;/Button&gt;
                <br />
                &lt;Button label="test" styles="btn btn--small u-tx-dark u-bd-light" click={this.handleClick}&gt;Lorem ipsum sit&lt;/Button&gt;
                <br />
                &lt;Button label="test" styles="btn btn--small u-bg-primary u-tx-white" click={this.handleClick} isDisabled="true"&gt;Lorem ipsum sit&lt;/Button&gt;
            </code>
          </div>

          <div>
            <h2 className="subtitle">Default</h2>
            <div>
              <Button label="test" styles="btn u-bg-primary u-tx-white" click={this.handleClick}>Lorem ipsum sit</Button>
              <Button label="test" styles="btn u-bg-secondary-green u-tx-white" click={this.handleClick}>Lorem ipsum sit</Button>
              <Button label="test" styles="btn u-tx-dark u-bd-light" click={this.handleClick}>Lorem ipsum sit</Button>
              <Button label="test" styles="btn u-bg-primary u-tx-white" click={this.handleClick} isDisabled="true">Lorem ipsum sit</Button>
            </div>
            <code>
              &lt;Button label="test" styles="btn u-bg-primary u-tx-white" click={this.handleClick}&gt;Lorem ipsum sit&lt;/Button&gt;
              <br />
              &lt;Button label="test" styles="btn u-bg-secondary-green u-tx-white" click={this.handleClick}&gt;Lorem ipsum sit&lt;/Button&gt;
              <br />
              &lt;Button label="test" styles="btn u-tx-dark u-bd-light" click={this.handleClick}&gt;Lorem ipsum sit&lt;/Button&gt;
              <br />
              &lt;Button label="test" styles="btn u-bg-primary u-tx-white" click={this.handleClick} isDisabled="true"&gt;Lorem ipsum sit&lt;/Button&gt;
            </code>
          </div>
          <div>
            <h2 className="subtitle">Large</h2>
            <div>
              <Button label="test" styles="btn btn--large u-bg-primary u-tx-white" click={this.handleClick}>Lorem ipsum sit</Button>
              <Button label="test" styles="btn btn--large u-bg-secondary-green u-tx-white" click={this.handleClick}>Lorem ipsum sit</Button>
              <Button label="test" styles="btn btn--large u-tx-dark u-bd-light" click={this.handleClick}>Lorem ipsum sit</Button>
              <Button label="test" styles="btn btn--large u-bg-primary u-tx-white" click={this.handleClick} isDisabled="true">Lorem ipsum sit</Button>
            </div>
            <code>
              &lt;Button label="test" styles="btn btn--large u-bg-primary u-tx-white" click={this.handleClick}&gt;Lorem ipsum sit&lt;/Button&gt;
              <br />
              &lt;Button label="test" styles="btn btn--large u-bg-secondary-green u-tx-white" click={this.handleClick}&gt;Lorem ipsum sit&lt;/Button&gt;
              <br />
              &lt;Button label="test" styles="btn btn--large u-tx-dark u-bd-light" click={this.handleClick}&gt;Lorem ipsum sit&lt;/Button&gt;
              <br />
              &lt;Button label="test" styles="btn btn--large u-bg-primary u-tx-white" click={this.handleClick} isDisabled="true"&gt;Lorem ipsum sit&lt;/Button&gt;
            </code>
          </div>
        </div>
        <h1 className="u-my-24">Type</h1>
        <div className="u-fx-column u-js-around">
          <div>
            <h2 className="subtitle">Button</h2>
            <div className="u-fx-row">
              <Button styles="btn u-bg-primary u-tx-white">Lorem ipsum sit</Button>
            </div>
            <code>
              &lt;Button styles="btn u-bg-primary u-tx-white"&gt;Lorem ipsum sit&lt;/Button&gt;
            </code>
          </div>
          <div>
            <h2 className="subtitle">Button with Icon</h2>
            <div className="u-fx-row">
              <Button styles="btn u-bg-primary u-tx-white"><Icon iwidth="i u-mr-8" name="delete" width="16" height="16" fill="#70727D" class="delete" /> Lorem ipsum sit</Button>
              <Button styles="btn u-bg-primary u-tx-white" isDisabled="true"><Icon iwidth="i u-mr-8" name="delete" width="16" height="16" fill="#70727D" class="delete" /> Lorem ipsum sit</Button>
              <Button styles="btn u-bg-primary u-tx-white">Lorem ipsum sit <Icon iwidth="i u-ml-8" name="delete" width="16" height="16" fill="#70727D" class="delete" /></Button>
              <Button styles="btn u-bg-primary u-tx-white" isDisabled="true">Lorem ipsum sit <Icon iwidth="i u-ml-8" name="delete" width="16" height="16" fill="#70727D" class="delete" /></Button>
            </div>
            <code>
              &lt;Button styles="btn u-bg-primary u-tx-white"&gt;&lt;Icon iwidth="i u-mr-8" name="chevron-down" width="16" height="16" fill="#70727D" class="chevron-down" /&gt; Lorem ipsum sit&lt;/Button&gt;
              <br />
              &lt;Button styles="btn u-bg-primary u-tx-white" isDisabled="true"&gt;&lt;Icon iwidth="i u-mr-8" name="chevron-down" width="16" height="16" fill="#70727D" class="chevron-down" /&gt; Lorem ipsum sit&lt;/Button&gt;
              <br />
              &lt;Button styles="btn u-bg-primary u-tx-white"&gt;Lorem ipsum sit &lt;Icon iwidth="i u-ml-8" name="chevron-down" width="16" height="16" fill="#70727D" class="chevron-down" /&gt;&lt;/Button&gt;
              <br/>
              &lt;Button styles="btn u-bg-primary u-tx-white" isDisabled="true"&gt;Lorem ipsum sit &lt;Icon iwidth="i u-ml-8" name="chevron-down" width="16" height="16" fill="#70727D" class="chevron-down" /&gt;&lt;/Button&gt;
            </code>
          </div>
          <div>
            <h2 className="subtitle">Text</h2>
            <div>
              <Button styles="btn u-tx-primary">Lorem ipsum sit</Button>
              <Button styles="btn u-tx-primary" isDisabled="true">Lorem ipsum sit</Button>
            </div>
            <code>
              &lt;Button styles="btn u-tx-primary"&gt;Lorem ipsum sit&lt;/Button&gt;
              <br />
              &lt;Button styles="btn u-tx-primary" isDisabled="true"&gt;Lorem ipsum sit&lt;/Button&gt;
            </code>
          </div>
          <div>
            <h2 className="subtitle">Text with Icon</h2>
            <div>
              <Button styles="btn u-tx-primary"><Icon iwidth="i u-mr-8" name="delete" width="16" height="16" fill="#70727D" class="delete" /> Lorem ipsum sit</Button>
              <Button styles="btn u-tx-primary" isDisabled="true"><Icon iwidth="i u-mr-8" name="delete" width="16" height="16" fill="#70727D" class="delete" /> Lorem ipsum sit</Button>
              <Button styles="btn u-tx-primary">Lorem ipsum sit <Icon iwidth="i u-ml-8" name="delete" width="16" height="16" fill="#70727D" class="delete" /></Button>
              <Button styles="btn u-tx-primary" isDisabled="true">Lorem ipsum sit <Icon iwidth="i u-ml-8" name="delete" width="16" height="16" fill="#70727D" class="delete" /></Button>
            </div>
            <code>
              &lt;Button styles="btn u-tx-primary"&gt;&lt;Icon iwidth="i u-mr-8" name="delete" width="16" height="16" fill="#70727D" class="delete" /&gt; Lorem ipsum sit&lt;/Button&gt;
              <br />
              &lt;Button styles="btn u-tx-primary" isDisabled="true"&gt;&lt;Icon iwidth="i u-mr-8" name="delete" width="16" height="16" fill="#70727D" class="delete" /&gt; Lorem ipsum sit&lt;/Button&gt;
              <br />
              &lt;Button styles="btn u-tx-primary"&gt;Lorem ipsum sit &lt;Icon iwidth="i u-ml-8" name="delete" width="16" height="16" fill="#70727D" class="delete" /&gt;&lt;/Button&gt;
              <br />
              &lt;Button styles="btn u-tx-primary" isDisabled="true"&gt;Lorem ipsum sit &lt;Icon iwidth="i u-ml -8" name="delete" width="16" height="16" fill="#70727D" class="delete" /&gt;&lt;/Button&gt;
            </code>
          </div>
        </div>
        <h1 className="u-my-24">Level</h1>
        <div className="u-fx-row">
          <div>
            <h2 className="subtitle">Primary</h2>
            <Button styles="btn u-bg-primary u-tx-white">Lorem ipsum sit</Button>
          </div>
          <div>
            <h2 className="subtitle">Primary Alternative</h2>
            <Button styles="btn u-bg-secondary-green u-tx-white">Lorem ipsum sit</Button>
          </div>
          <div>
            <h2 className="subtitle">Secondary</h2>
            <Button styles="btn u-tx-dark u-bd-light">Lorem ipsum sit</Button>
          </div>
        </div>
        <code>
          &lt;Button styles="btn u-bg-primary u-tx-white"&gt;Lorem ipsum sit&lt;/Button&gt;
          <br />
          &lt;Button styles="btn u-bg-secondary-green u-tx-white"&gt;Lorem ipsum sit&lt;/Button&gt;
          <br/>
          &lt;Button styles="btn u-tx-dark u-bd-light"&gt;Lorem ipsum sit&lt;/Button&gt;
        </code>
        <h1 className="u-my-24">Floating Button</h1>
        <div>
          <Button styles="btn btn__floating"><span className="i"></span></Button>
          <Button styles="btn btn__floating--txt">Lorem Ipsum Sit</Button>
          <Button styles="btn btn__floating--icon"><span className="i u-mr-8"></span>Lorem Ipsum Sit</Button>
          <Button styles="btn btn__floating--icon">Lorem Ipsum Sit<span className="i u-ml-8"></span></Button>
        </div>
        <code>
          &lt;Button styles="btn btn__floating"&gt;&lt;span className="i"&gt;&lt;/span&gt;&lt;/Button&gt;
          <br />
          &lt;Button styles="btn btn__floating--txt"&gt;Lorem Ipsum Sit&lt;/Button&gt;
          <br />
          &lt;Button styles="btn btn__floating--icon"&gt;&lt;span className="i u-mr-8"&gt;&lt;/span&gt;Lorem Ipsum Sit&lt;/Button&gt;
          <br />
          &lt;Button styles="btn btn__floating--icon"&gt;Lorem Ipsum Sit&lt;span className="i u-ml-8"&gt;&lt;/span&gt;&lt;/Button&gt;
        </code>
      </div>
    )
  }
}

export default ButtonPage;
