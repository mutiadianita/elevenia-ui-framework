import React from 'react'
import { RadioButton } from '../Components/Atom'

class RadioButtonPage extends React.Component {
  render () {
    return (
    <div>
        <h1 className="title">Radio Button</h1>
        <h1>Default</h1>
        <div className="u-fx-column">
            <RadioButton styles="radiobutton u-mb-24" name="radioVer" label="Default"/>
            <RadioButton styles="radiobutton  u-mb-24" name="radioVer" label="Checked" checked/>
            <h1>Disabled</h1>
            <RadioButton styles="radiobutton  u-mb-24" name="radioVer" label="Disabled" disabled/>
            <RadioButton styles="radiobutton  u-mb-24" name="radioVerDis" label="Disabled Checked" checked disabled/>
        </div>
        <code>
        &lt;div className="u-fx-column"&gt;<br/>
            &lt;RadioButton styles="radiobutton" name="radioVer" label="Default"/&gt;<br/>
            &lt;RadioButton styles="radiobutton" name="radioVer" label="Checked" checked/&gt;<br/>
            &lt;h1&gt;Disabled&lt;/h1&gt;<br/>
            &lt;RadioButton styles="radiobutton" name="radioVer" label="Disabled" disabled/&gt;<br/>
            &lt;RadioButton styles="radiobutton" name="radioVerDis" label="Disabled Checked" checked disabled/&gt;<br/>
        &lt;/div&gt;
        </code>
        <h1>Horizontal</h1>
        <div className="u-fx-row">
            <RadioButton styles="radiobutton" name="radio" label="Default"/>
            <RadioButton styles="radiobutton" name="radio" label="Checked" checked/>
            <RadioButton styles="radiobutton" name="radio" label="Disabled" disabled/>
            <RadioButton styles="radiobutton" name="radioDis" label="Disabled Checked" checked disabled/>
        </div>
        <code>
        &lt;div className="u-fx-row"&gt;<br/>
            &lt;RadioButton styles="radiobutton" name="radio" label="Default"/&gt;<br/>
            &lt;RadioButton styles="radiobutton" name="radio" label="Checked" checked/&gt;<br/>
            &lt;RadioButton styles="radiobutton" name="radio" label="Disabled" disabled/&gt;<br/>
            &lt;RadioButton styles="radiobutton" name="radioDis" label="Disabled Checked" checked disabled/&gt;<br/>
        &lt;/div&gt;
        </code>
    </div>
    )
  }
}

export default RadioButtonPage;
