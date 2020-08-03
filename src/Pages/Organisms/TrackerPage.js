import React, { Component } from 'react';
import { ProgressTracker, Tracker } from '../../Components/Atoms';

const steps = [
  {
    label: 'Step 1',
    description: 'Lorem ipsum dolor sit amet consecteteur adipicising'
  },
  {
    label: 'Step 2',
    description: 'Lorem ipsum dolor sit amet consecteteur adipicising sit amet consecteteur adipicising'
  },
  {
    label: 'Step 3',
    description: 'Lorem ipsum dolor sit amet consecteteur adipicising'
  },
  {
    label: 'Step 4',
    description: 'Lorem ipsum dolor sit amet consecteteur adipicising'
  },
]

class TrackerPage extends Component {
  state = {
    step: 0
  }

  increastStep = () => {
    if (this.state.step < steps.length)
      this.setState(state => ({ step: state.step + 1 }))
    else
      this.submit()
  }

  decreastStep = () => {
    if (this.state.step > 0)
      this.setState(state => ({ step: state.step - 1 }))
    if (this.state.step === steps.length)
      this.reset()
  }

  reset = () => {
    this.setState({ step: 0 })
  }

  submit = () => {
    alert('Oke')
  }

  render() {
    return (
      <div>
        <h1 className="title">Progress tracker</h1>
        <h1 className="u-my-24">Progress tracker Horizontal</h1>

        <ProgressTracker step={this.state.step} inline style={{ marginBottom: 88, width: 900 }}>
          {steps.map((step, i) => (
            <Tracker key={i} label={step.label}>
              {step.description}
            </Tracker>
          ))}
        </ProgressTracker>

        <div style={{ marginBottom: 40 }}>
          <button
            className="btn u-bg-secondary-green u-tx-white"
            onClick={this.decreastStep}
          >
            {this.state.step === steps.length ? 'Reset' : 'Back'}
          </button>
          <button
            className="btn u-bg-primary u-tx-white"
            onClick={this.increastStep}
          >
            {this.state.step === steps.length ? 'Finish' : 'Next'}
          </button>
        </div>

        <ProgressTracker step={this.state.step}>
          {steps.map((step, i) => <Tracker key={i} label={step.label}>{step.description}</Tracker>)}
        </ProgressTracker>

        <div className="u-mt-24">
          <h1>Notes:</h1>
          For Inline Tracker please add marginBottom style to ProgressTracker Component according to the description's height.
        </div>

        <pre>
          <code>
            import &#123; ProgressTracker, Tracker &#125; from &apos;../Components/Atom&apos;;<br/>
            <br/>
            const steps = [<br/>
            &nbsp;&#123;<br/>
            &nbsp;&nbsp;label: &apos;Step 1&apos;,<br/>
            &nbsp;&nbsp;description: &apos;Lorem ipsum dolor sit amet consecteteur adipicising&apos;<br/>
            &nbsp;&#125;,<br/>
            &nbsp;&#123;<br/>
            &nbsp;&nbsp;label: &apos;Step 2&apos;,<br/>
            &nbsp;&nbsp;description: &apos;Lorem ipsum dolor sit amet consecteteur adipicising sit amet consecteteur adipicising&apos;<br/>
            &nbsp;&#125;,<br/>
            &nbsp;&#123;<br/>
            &nbsp;&nbsp;label: &apos;Step 3&apos;,<br/>
            &nbsp;&nbsp;description: &apos;Lorem ipsum dolor sit amet consecteteur adipicising&apos;<br/>
            &nbsp;&#125;,<br/>
            &nbsp;&#123;<br/>
            &nbsp;&nbsp;label: &apos;Step 4&apos;,<br/>
            &nbsp;&nbsp;description: &apos;Lorem ipsum dolor sit amet consecteteur adipicising&apos;<br/>
            &nbsp;&#125;,<br/>
            ]
            
            class TrackerPage extends Component &#123;<br/>
            &nbsp;state = &#123;<br/>
            &nbsp;step: 0<br/>
            &nbsp;&#125;<br/>
            
            &nbsp;increastStep = () =&gt; &#123;<br/>
            &nbsp;if (this.state.step &lt; steps.length)<br/>
            &nbsp;&nbsp;&nbsp;this.setState(state =&gt; (&#123;step: state.step + 1&#125;))<br/>
            &nbsp;else<br/>
            &nbsp;&nbsp;&nbsp;this.submit()<br/>
            &nbsp;&#125;<br/>
            
            &nbsp;decreastStep = () =&gt; &#123;<br/>
            &nbsp;&nbsp;if (this.state.step &gt; 0)<br/>
            &nbsp;&nbsp;&nbsp;this.setState(state =&gt; (&#123;step: state.step - 1&#125;))<br/>
            &nbsp;&nbsp;if (this.state.step === steps.length)<br/>
            &nbsp;&nbsp;&nbsp;this.reset()<br/>
            &nbsp;&#125;<br/>
            
            &nbsp;reset = () =&gt; &#123;<br/>
            &nbsp;&nbsp;this.setState(&#123; step: 0 &#125;)<br/>
            &nbsp;&#125;<br/>
            
            &nbsp;submit = () =&gt; &#123;<br/>
            &nbsp;&nbsp;alert(&apos;Oke&apos;)<br/>
            &nbsp;&#125;<br/>
            
            &nbsp;render() &#123;<br/>
            &nbsp;&nbsp;return (<br/>
            &nbsp;&nbsp;&nbsp;&lt;div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1 className=&quot;title&quot;&gt;Progress tracker&lt;/h1&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1 className=&quot;u-my-24&quot;&gt;Progress tracker Horizontal&lt;/h1&gt;<br/>
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;ProgressTracker step=&#123;this.state.step&#125; inline style=&#123;&#123; marginBottom: 88, width: 900 &#125;&#125;&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;steps.map((step, i) =&gt; (<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Tracker key=&#123;i&#125; label=&#123;step.label&#125;&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;step.description&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Tracker&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ProgressTracker&gt;<br/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div style=&#123;&#123; marginBottom: 40 &#125;&#125;&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&quot;btn u-bg-secondary-green u-tx-white&quot;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;this.decreastStep&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.state.step === steps.length ? &apos;Reset&apos; : &apos;Back&apos;&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&quot;btn u-bg-primary u-tx-white&quot;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;this.increastStep&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.state.step === steps.length ? &apos;Finish&apos; : &apos;Next&apos;&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;ProgressTracker step=&#123;this.state.step&#125;&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;steps.map((step, i) =&gt; &lt;Tracker key=&#123;i&#125; label=&#123;step.label&#125;&gt;&#123;step.description&#125;&lt;/Tracker&gt;)&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ProgressTracker&gt;<br/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className=&quot;u-mt-24&quot;&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Notes:&lt;/h1&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For Inline Tracker please add marginBottom style to ProgressTracker Component according to the description&apos;s height.<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
            &nbsp;&nbsp;);<br/>
            &nbsp;&#125;<br/>
            &#125;<br/>
          </code>
        </pre>
      </div>
    );
  }
}

export default TrackerPage;
