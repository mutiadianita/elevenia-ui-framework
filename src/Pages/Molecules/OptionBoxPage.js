import React, { Component } from 'react';
import { FormGroup } from '../../Components/Atoms';
import { OptionBox } from '../../Components/Molecules';

class OptionBoxPage extends Component {

    state = {
        options: [
            {
                id: 0,
                value: 'New York',
                zipcode: "1100",
                selected: false,
                key: 'location'
            },
            {
                id: 1,
                value: 'Dublin',
                zipcode: "1200",
                selected: false,
                key: 'location'
            },
            {
                id: 2,
                value: 'California',
                zipcode: "1300",
                selected: false,
                key: 'location'
            },
            {
                id: 3,
                value: 'Istanbul',
                zipcode: "1400",
                selected: false,
                key: 'location'
            },
            {
                id: 4,
                value: 'Izmir',
                zipcode: "1500",
                selected: false,
                key: 'location'
            },
            {
                id: 5,
                value: 'Oslo',
                zipcode: "1600",
                selected: false,
                key: 'location'
            }
        ],
        option1: "",
        option2: ""
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }


    render() {

        const { option1, option2 } = this.state;
        const value = { option1, option2 };

        return (
            <div >
                <h1 className="title">Option Box</h1>
                <h2>Basic</h2>
                <FormGroup
                    helptext="Help Text"
                    styles=""
                >
                    <FormGroup.Label>
                        Read-Only / Unsearchable
                    </FormGroup.Label>
                    <OptionBox
                        styles="icon-right"
                        name="option1"
                        placeholder='Input'
                        value={value.option1}
                        autocomplete={true} disabled={false} readonly={true}
                        options={this.state.options}
                        optionsText="value"
                        change={this.handleChange('option1')}
                    >
                    </OptionBox>
                </FormGroup>
                <FormGroup
                    helptext="Help Text"
                    styles=""
                >
                    <FormGroup.Label>
                        Searchable
                    </FormGroup.Label>
                    <OptionBox
                        styles="icon-right"
                        name="option2"
                        placeholder='Input'
                        value={value.option2}
                        autocomplete={true} disabled={false} readonly={false}
                        options={this.state.options}
                        optionsText="value"
                        change={this.handleChange('option2')}
                    >
                    </OptionBox>
                </FormGroup>
                <FormGroup
                    helptext="Help Text"
                    styles=""
                    types="line"
                >
                    <FormGroup.Label>
                        Searchable
                    </FormGroup.Label>
                    <OptionBox
                        mobile
                        styles="icon-right"
                        name="option2"
                        placeholder='Input'
                        value={value.option2}
                        autocomplete={true} disabled={false} readonly={false}
                        options={this.state.options}
                        optionsText="value"
                        change={this.handleChange('option2')}
                    >
                    </OptionBox>
                </FormGroup>
                <code>
                    state = &#123; <br/>
                    &nbsp;options: [ <br/>
                    &nbsp;&#123; <br/>
                    &nbsp;&nbsp;id: 0, <br/>
                    &nbsp;&nbsp;value: 'New York', <br/>
                    &nbsp;&nbsp;zipcode: "1100", <br/>
                    &nbsp;&nbsp;selected: false, <br/>
                    &nbsp;&nbsp;key: 'location' <br/>
                    &nbsp;&#125;, <br/>
                    &nbsp;&#123; <br/>
                    &nbsp;&nbsp;id: 1, <br/>
                    &nbsp;&nbsp;value: 'Dublin', <br/>
                    &nbsp;&nbsp;zipcode: "1200", <br/>
                    &nbsp;&nbsp;selected: false, <br/>
                    &nbsp;&nbsp;key: 'location' <br/>
                    &nbsp;&#125;, <br/>
                    &nbsp;&#123; <br/>
                    &nbsp;&nbsp;id: 2, <br/>
                    &nbsp;&nbsp;value: 'California', <br/>
                    &nbsp;&nbsp;zipcode: "1300", <br/>
                    &nbsp;&nbsp;selected: false, <br/>
                    &nbsp;&nbsp;key: 'location' <br/>
                    &nbsp;&#125;,<br/>
                    &nbsp;&#123;<br/>
                    &nbsp;&nbsp;id: 3,<br/>
                    &nbsp;&nbsp;value: 'Istanbul',<br/>
                    &nbsp;&nbsp;zipcode: "1400",<br/>
                    &nbsp;&nbsp;selected: false,<br/>
                    &nbsp;&nbsp;key: 'location'<br/>
                    &nbsp;&#125;,<br/>
                    &nbsp;&#123;<br/>
                    &nbsp;id: 4,<br/>
                    &nbsp;&nbsp;value: 'Izmir',<br/>
                    &nbsp;&nbsp;zipcode: "1500",<br/>
                    &nbsp;&nbsp;selected: false,<br/>
                    &nbsp;&nbsp;key: 'location'<br/>
                    &nbsp;&#125;,<br/>
                    &nbsp;&#123;<br/>
                    &nbsp;&nbsp;id: 5,<br/>
                    &nbsp;&nbsp;value: 'Oslo',<br/>
                    &nbsp;&nbsp;zipcode: "1600",<br/>
                    &nbsp;&nbsp;selected: false,<br/>
                    &nbsp;&nbsp;key: 'location'<br/>
                    &nbsp;&#125;<br/>
                    ],<br/>
                    option1: "",<br/>
                    option2: ""<br/>
                    &#125;<br/>
                    <br/>
                    handleChange = input =&gt; event =&gt; &#123;<br/>
                    &nbsp;this.setState(&#123; [input]: event.target.value &#125;)<br/>
                    &#125;<br/>
                    render() &#123;<br/>
                    <br/>
                    const &#123;option1, option2&#125; = this.state;<br/>
                    const value = &#123;option1, option2&#125;;<br/>
                    <br/>
                    return ( <br/>
                    &nbsp;&lt;div &gt; <br/>
                    &nbsp;&lt;h1 className="title"&gt;Option Box&lt;/h1&gt; <br/>
                    &nbsp;&lt;h2&gt;Basic&lt;/h2&gt; <br/>
                    &nbsp;&lt;FormGroup <br/>
                    &nbsp;&nbsp;helptext="Help Text" <br/>
                    &nbsp;&nbsp;styles="" <br/>
                    &nbsp;&gt; <br/>
                    &nbsp;&nbsp; &lt;FormGroup.Label&gt; <br/>
                    &nbsp;&nbsp;&nbsp;Read-Only / Unsearchable <br/>
                    &nbsp;&nbsp;&lt;/FormGroup.Label&gt; <br/>
                    &nbsp;&nbsp;&lt;OptionBox <br/>
                    &nbsp;&nbsp;&nbsp;styles="icon-right" <br/>
                    &nbsp;&nbsp;&nbsp;name="option1" <br/>
                    &nbsp;&nbsp;&nbsp;placeholder='Input' <br/>
                    &nbsp;&nbsp;&nbsp;value=&#123;value.option1&#125; <br/>
                    &nbsp;&nbsp;&nbsp;autocomplete=&#123;true&#125; disabled=&#123;false&#125; readonly=&#123;true&#125; <br/>
                    &nbsp;&nbsp;&nbsp;options=&#123;this.state.options&#125; <br/>
                    &nbsp;&nbsp;&nbsp;optionsText="value" <br/>
                    &nbsp;&nbsp;&nbsp;change=&#123;this.handleChange('option1')&#125; <br/>
                    &nbsp;&nbsp;&gt; <br/>
                    &nbsp;&nbsp;&lt;/OptionBox&gt; <br/>
                    &nbsp;&lt;/FormGroup&gt; <br/>
                    &nbsp;&lt;FormGroup <br/>
                    &nbsp;&nbsp;helptext="Help Text" <br/>
                    &nbsp;&nbsp;styles="" <br/>
                    &nbsp;&gt; <br/>
                    &nbsp;&nbsp;&lt;FormGroup.Label&gt; <br/>   
                    &nbsp;&nbsp;&nbsp;Searchable <br/>    
                    &nbsp;&nbsp;&lt;/FormGroup.Label&gt; <br/>  
                    &nbsp;&nbsp;&lt;OptionBox <br/> 
                    &nbsp;&nbsp;&nbsp;styles="icon-right" <br/>   
                    &nbsp;&nbsp;&nbsp;name="option2" <br/>    
                    &nbsp;&nbsp;&nbsp;placeholder='Input' <br/>   
                    &nbsp;&nbsp;&nbsp;value=&#123;value.option2&#125; <br/>   
                    &nbsp;&nbsp;&nbsp;autocomplete=&#123;true&#125; disabled=&#123;false&#125; readonly=&#123;false&#125; <br/>   
                    &nbsp;&nbsp;&nbsp;options=&#123;this.state.options&#125; <br/>    
                    &nbsp;&nbsp;&nbsp;optionsText="value" <br/>   
                    &nbsp;&nbsp;&nbsp;change=&#123;this.handleChange('option2')&#125; <br/>   
                    &nbsp;&nbsp;&gt; <br/>  
                    &nbsp;&nbsp;&lt;/OptionBox&gt; <br/>    
                    &nbsp;&lt;/FormGroup&gt; <br/>    
                    &nbsp;&lt;FormGroup <br/> 
                    &nbsp;&nbsp;helptext="Help Text" <br/>  
                    &nbsp;&nbsp;styles="" <br/> 
                    &nbsp;&nbsp;types="line" <br/>  
                    &nbsp;&gt; <br/>  
                    &nbsp;&nbsp;&lt;FormGroup.Label&gt; <br/>   
                    &nbsp;&nbsp;&nbsp;Searchable <br/>    
                    &nbsp;&nbsp;&lt;/FormGroup.Label&gt; <br/>  
                    &nbsp;&nbsp;&lt;OptionBox <br/> 
                    &nbsp;&nbsp;&nbsp;mobile <br/>    
                    &nbsp;&nbsp;&nbsp;styles="icon-right" <br/>   
                    &nbsp;&nbsp;&nbsp;name="option2" <br/>    
                    &nbsp;&nbsp;&nbsp;placeholder='Input' <br/>   
                    &nbsp;&nbsp;&nbsp;value=&#123;value.option2&#125; <br/>   
                    &nbsp;&nbsp;&nbsp;autocomplete=&#123;true&#125; disabled=&#123;false&#125; readonly=&#123;false&#125; <br/>   
                    &nbsp;&nbsp;&nbsp;options=&#123;this.state.options&#125; <br/>    
                    &nbsp;&nbsp;&nbsp;optionsText="value" <br/>   
                    &nbsp;&nbsp;&nbsp;change=&#123;this.handleChange('option2')&#125; <br/>   
                    &nbsp;&nbsp; &gt; <br/>  
                    &nbsp;&nbsp;&lt;/OptionBox&gt; <br/>    
                    &nbsp;&lt;/FormGroup&gt; <br/>    
                    &lt;/div&gt; <br/>  
                    ); <br/>    
                &#125;
                </code>
            </div>
        );
    }
}

export default OptionBoxPage;