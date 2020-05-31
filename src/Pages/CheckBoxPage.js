import React from 'react'
import { CheckBox } from '../Components/Atom'

class CheckBoxPage extends React.Component {
  render () {
    return (
        <div>
            <h1 className="title">Checkbox</h1>
            <div className="u-fx-column u-js-around">
                <div>
                    <h2 className="subtitle u-my-24">Vertical Align</h2>
                    <div>
                        <CheckBox styles="checkbox checkbox__group interdeterminate" id="checkboxGroup">Indeterminate</CheckBox>
                        <CheckBox styles="checkbox" id="checkbox1" value=""> Default</CheckBox>
                        <CheckBox styles="checkbox" id="checkbox2" value="" checked>Checked</CheckBox>
                        <CheckBox styles="checkbox" id="checkbox3" value="" disabled>Disabled</CheckBox>
                        <CheckBox styles="checkbox" id="checkbox4" value="" checked disabled>Checked Disabled</CheckBox>
                    </div>
                    <code>
                    &lt;div&gt;<br/>
                        &lt;CheckBox styles="checkbox checkbox__group interdeterminate" id="checkboxGroup"&gt;Indeterminate&lt;/CheckBox&gt;<br/>
                        &lt;CheckBox styles="checkbox" id="checkbox1" value=""&gt; Default&lt;/CheckBox&gt;<br/>
                        &lt;CheckBox styles="checkbox" id="checkbox2" value="" checked&gt;Checked&lt;/CheckBox&gt;<br/>
                        &lt;CheckBox styles="checkbox" id="checkbox3" value="" disabled&gt;Disabled&lt;/CheckBox&gt;<br/>
                        &lt;CheckBox styles="checkbox" id="checkbox4" value="" checked disabled&gt;Checked Disabled&lt;/CheckBox&gt;<br/>
                    &lt;/div&gt;
                    </code>
                </div>
                <div className="col-6">
                    <h2 className="subtitle u-my-24">Horizontal-Align</h2>
                    <div className="u-fx-row">
                        <CheckBox styles="checkbox" id="checkboxH1" value=""> Default</CheckBox>
                        <CheckBox styles="checkbox" id="checkboxH2" value="" checked>Checked</CheckBox>
                        <CheckBox styles="checkbox" id="checkboxH3" value="" disabled>Disabled</CheckBox>
                        <CheckBox styles="checkbox" id="checkboxH4" value="" checked disabled>Checked Disabled</CheckBox>
                    </div>
                    <code>
                    &lt;div className="u-fx-row"&gt;<br/>
                        &lt;CheckBox styles="checkbox" id="checkboxH1" value=""> Default&lt;/CheckBox&gt;<br/>
                        &lt;CheckBox styles="checkbox" id="checkboxH2" value="" checked>Checked&lt;/CheckBox&gt;<br/>
                        &lt;CheckBox styles="checkbox" id="checkboxH3" value="" disabled>Disabled&lt;/CheckBox&gt;<br/>
                        &lt;CheckBox styles="checkbox" id="checkboxH4" value="" checked disabled>Checked Disabled&lt;/CheckBox&gt;<br/>
                    &lt;/div&gt;
                    </code>
                </div>
            </div>
        </div>
    )
  }
}

export default CheckBoxPage;
