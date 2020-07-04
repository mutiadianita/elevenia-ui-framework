import React, { Component } from 'react';
import { FormGroup } from '../Components/Atoms';
import { Stepper } from '../Components/Molecules';

class StepperPage extends Component {

    state = {
        quantity: 0,
        limit: 10
    }

    updateQuantity = (tempQuantity) => {
        this.setState({ quantity: tempQuantity });
    }

    render() {

        const { quantity, limit } = this.state;

        return (
            <div>
                <h1 className="title">Stepper</h1>
                <h2 className="u-mb-8">Enable</h2>
                <FormGroup
                    label="With Label"
                    formStyles="custom-form-styles">
                    <Stepper
                        currentQty={quantity}
                        change={this.updateQuantity}
                        limitQty={limit}
                        label="With Label"
                        formStyles="custom-form-styles"
                    />
                </FormGroup>
                
                <code>
                    state = &#123;<br />
                    &nbsp;quantity: 0,<br />
                    &nbsp;limit: 10<br />
                    &#125;
                    <br /><br />
                    updateQuantity = (tempQuantity) => &#123;<br />
                    &nbsp;this.setState(&#123; quantity: tempQuantity &#125;);<br />
                    &#123;
                    <br /><br />

                    render() &#123;<br />

                    const &#123; quantity, limit &#125; = this.state;<br />

                    return (<br />
                    &nbsp;&lt;div&gt;<br />
                    &nbsp;&nbsp;&lt;Stepper<br />
                    &nbsp;&nbsp;&nbsp;currentQty= &#123;quantity&#125;<br />
                    &nbsp;&nbsp;&nbsp;change= &#123;this.updateQuantity&#125;<br />
                    &nbsp;&nbsp;&nbsp;limitQty= &#123;limit&#125;<br />
                    &nbsp;&nbsp;&nbsp;isLimit= &#123;this.warnLimit&#125;<br />
                    &nbsp;&nbsp;/&gt;<br />
                    &nbsp;&lt;/div&gt;<br />
                    )<br />
                    &#125;<br />
                </code>
                <h2 className="u-mb-8">Disabled</h2>
                <FormGroup
                    label="With Label"
                    formStyles="custom-form-styles">
                    <Stepper
                        currentQty={quantity}
                        change={this.updateQuantity}
                        limitQty={limit}
                        disabled
                    />
                </FormGroup>
                
                <code>
                    state = &#123;<br />
                    &nbsp;quantity: 0,<br />
                    &nbsp;limit: 10<br />
                    &#125;
                    <br /><br />
                    updateQuantity = (tempQuantity) => &#123;<br />
                    &nbsp;this.setState(&#123; quantity: tempQuantity &#125;);<br />
                    &#123;
                    <br /><br />

                    render() &#123;<br />

                    const &#123; quantity, limit &#125; = this.state;<br />

                    return (<br />
                    &nbsp;&lt;div&gt;<br />
                    &nbsp;&nbsp;&lt;Stepper<br />
                    &nbsp;&nbsp;&nbsp;currentQty= &#123;quantity&#125;<br />
                    &nbsp;&nbsp;&nbsp;change= &#123;this.updateQuantity&#125;<br />
                    &nbsp;&nbsp;&nbsp;limitQty= &#123;limit&#125;<br />
                    &nbsp;&nbsp;&nbsp;isLimit= &#123;this.warnLimit&#125;<br />
                    &nbsp;&nbsp;&nbsp;disabled<br />
                    &nbsp;&nbsp;/&gt;<br />
                    &nbsp;&lt;/div&gt;<br />
                    )<br />
                    &#125;<br />
                </code>
            </div>
        );
    }
}

export default StepperPage;