import React, { Component } from 'react';
import { FormGroup, InputGroup, Textfield, Icon } from '../Components/Atom';

class TextfieldPage extends Component {

    state = {
        value: "",
        focus: false
    }
    

    changeHandler = (event) => {
        this.setState({ value: event.target.value })
    }

    focusHandler = (event, params) => {
        if (params === 'focus' || event.target.value !== ''){
            this.setState({ focus: true})
        } else if (params === 'blur'){
            this.setState({ focus: false})
        }
        
    }

    render() {
        return (
            <div>
                <h1 className="title">Textfield</h1>
                <h1 className="u-mb-20">For Desktop</h1>
                <h2 className="u-mb-4">Basic</h2>
                <h3 className="u-mt-12 u-mb-4">Full width</h3>
                <div className="row">
                    <div className="col">
                        <FormGroup helptext="" styles="">
                            <InputGroup>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>

                <h3 className="u-mt-12 u-mb-4">Multiple Field Inline</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup helptext="" styles="">
                            <InputGroup>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup helptext="" styles="">
                            <InputGroup>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup helptext="" styles="">
                            <InputGroup>
                                <Textfield
                                    styles="input-control"
                                    type="text" name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h2 className="u-mt-20 u-mb-4">Label and Helptext</h2>
                <h3 className="u-mt-12 u-mb-4">Full width</h3>
                <div className="row">
                    <div className="col">
                        <FormGroup helptext="Helptext" styles="">
                            <FormGroup.Label>
                                Label
                            </FormGroup.Label>
                            <InputGroup>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h3 className="u-mt-12 u-mb-4">Multiple Field Inline</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup helptext="Helptext" styles="">
                            <FormGroup.Label>
                                Label 1
                            </FormGroup.Label>
                            <InputGroup>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles="">
                            <FormGroup.Label>
                                Label 2
                            </FormGroup.Label>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles="">
                            <FormGroup.Label>
                                Label 3
                            </FormGroup.Label>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <div className="row form-row u-mt-12">
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles="">
                            <FormGroup.Label>
                                One label for all
                            </FormGroup.Label>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            label=""
                            helptext=""
                            styles=""
                            inline>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            label=""
                            helptext=""
                            styles=""
                            inline>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h2 className="u-mt-20 u-mb-4">Logo Left</h2>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            label=""
                            helptext=""
                            styles=""
                            inline>
                            <InputGroup styles="icon-left">
                                <InputGroup.Prepend>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Prepend>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles="">
                            <FormGroup.Label>
                                With Label
                            </FormGroup.Label>
                            <InputGroup styles="icon-left">
                                <InputGroup.Prepend>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Prepend>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles="">
                            <FormGroup.Label>
                                With Label and Helptext
                            </FormGroup.Label>
                            <InputGroup styles="icon-left">
                                <InputGroup.Prepend>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Prepend>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h2 className="u-mt-20 u-mb-4">Logo Right</h2>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            inline>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                                <InputGroup.Append>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Append>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles="">
                            <FormGroup.Label>
                                With Label
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                                <InputGroup.Append>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Append>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles="">
                            <FormGroup.Label>
                                With Label and Helptext
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                                <InputGroup.Append>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Append>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h2 className="u-mt-20 u-mb-4">State</h2>
                <h3 className="u-mt-12 u-mb-4">Basic Condition</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles="">
                            <FormGroup.Label>
                                Default
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles="">
                            <FormGroup.Label>
                                With Helptext
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles="">
                            <FormGroup.Label>
                                Disabled
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={true} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h3 className="u-mt-12 u-mb-4">Success Condition</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            validation="success"
                            helptext=""
                            styles="">
                            <FormGroup.Label>
                                Default
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            validation="success"
                            helptext="Helptext"
                            styles="">
                            <FormGroup.Label>
                                With Helptext
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            validation="success"
                            helptext="Helptext"
                            styles="">
                            <FormGroup.Label>
                                Disabled
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={true} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h3 className="u-mt-12 u-mb-4">Error Condition</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            validation="error"
                            helptext=""
                            styles="">
                            <FormGroup.Label>
                                Default
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            validation="error"
                            helptext="Helptext"
                            styles="">
                            <FormGroup.Label>
                                With Helptext
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h3 className="u-mt-12 u-mb-4">Autocomplete Condition</h3>
                <div className="row form-row">
                    <div className="col">
                        <form autoComplete="on" action="">
                            <FormGroup
                                helptext=""
                                styles="u-mb-12">
                                <FormGroup.Label>
                                    Default
                                </FormGroup.Label>
                                <InputGroup styles="icon-right">
                                    <Textfield
                                        styles="input-control"
                                        type="text"
                                        name="autocomplete-1"
                                        placeholder='Input'
                                        value={this.state.value}
                                        autocomplete={true} disabled={false} readonly={false} required={false}
                                        change={this.changeHandler}
                                    >
                                    </Textfield>
                                </InputGroup>
                            </FormGroup>
                            <input className="btn u-bg-secondary-green u-tx-white" type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="col">
                        <form autoComplete="on" action="">
                            <FormGroup
                                helptext="Helptext"
                                styles="u-mb-12">
                                <FormGroup.Label>
                                    With Helptext
                                </FormGroup.Label>
                                <InputGroup styles="icon-right">
                                    <Textfield
                                        styles="input-control"
                                        type="text"
                                        name="autocomplete-2"
                                        placeholder='Input'
                                        value={this.state.value}
                                        autocomplete={true} disabled={false} readonly={false} required={false}
                                        change={this.changeHandler}
                                    >
                                    </Textfield>
                                </InputGroup>
                            </FormGroup>
                            <input className="btn u-bg-secondary-green u-tx-white" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>

                <h2 className="u-mt-40 u-mb-4">Small</h2>
                <h3 className="u-mt-12 u-mb-4">Full width</h3>
                <div className="row">
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            types="small">
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h3 className="u-mt-12 u-mb-4">Multiple Field Inline</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            types="small">
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            types="small">
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            types="small">
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text" name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h2 className="u-mt-20 u-mb-4">Label and Helptext</h2>
                <h3 className="u-mt-12 u-mb-4">Full width</h3>
                <div className="row">
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                Label
                            </FormGroup.Label>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h3 className="u-mt-12 u-mb-4">Multiple Field Inline</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                Label 1
                            </FormGroup.Label>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                Label 2
                            </FormGroup.Label>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                Label 3
                            </FormGroup.Label>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <div className="row form-row u-mt-12">
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                One label for all
                            </FormGroup.Label>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            label=""
                            helptext=""
                            styles=""
                            inline
                            types="small">
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            label=""
                            helptext=""
                            styles=""
                            inline
                            types="small">
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h2 className="u-mt-20 u-mb-4">Logo Left</h2>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            label=""
                            helptext=""
                            styles=""
                            inline
                            types="small">
                            <InputGroup styles="icon-left">
                                <InputGroup.Prepend>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Prepend>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                With Label
                            </FormGroup.Label>
                            <InputGroup styles="icon-left">
                                <InputGroup.Prepend>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Prepend>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                With Label and Helptext
                            </FormGroup.Label>
                            <InputGroup styles="icon-left">
                                <InputGroup.Prepend>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Prepend>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h2 className="u-mt-20 u-mb-4">Logo Right</h2>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            inline
                            types="small">
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                                <InputGroup.Append>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Append>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                With Label
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                                <InputGroup.Append>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Append>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                With Label and Helptext
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                                <InputGroup.Append>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Append>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>





                <h2 className="u-mt-20 u-mb-4">State</h2>
                <h3 className="u-mt-12 u-mb-4">Basic Condition</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                Default
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                With Helptext
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                Disabled
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={true} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h3 className="u-mt-12 u-mb-4">Success Condition</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            validation="success"
                            helptext=""
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                Default
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            validation="success"
                            helptext="Helptext"
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                With Helptext
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            validation="success"
                            helptext="Helptext"
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                Disabled
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={true} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h3 className="u-mt-12 u-mb-4">Error Condition</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            validation="error"
                            helptext=""
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                Default
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            validation="error"
                            helptext="Helptext"
                            styles=""
                            types="small">
                            <FormGroup.Label>
                                With Helptext
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h3 className="u-mt-12 u-mb-4">Autocomplete Condition</h3>
                <div className="row form-row">
                    <div className="col">
                        <form autoComplete="on" action="">
                            <FormGroup
                                helptext=""
                                styles="u-mb-12"
                                types="small">
                                <FormGroup.Label>
                                    Default
                                </FormGroup.Label>
                                <InputGroup styles="icon-right">
                                    <Textfield
                                        styles="input-control"
                                        type="text"
                                        name="autocomplete-1"
                                        placeholder='Input'
                                        value={this.state.value}
                                        autocomplete={true} disabled={false} readonly={false} required={false}
                                        change={this.changeHandler}
                                    >
                                    </Textfield>
                                </InputGroup>
                            </FormGroup>
                            <input className="btn u-bg-secondary-green u-tx-white" type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="col">
                        <form autoComplete="on" action="">
                            <FormGroup
                                helptext="Helptext"
                                styles="u-mb-12"
                                types="small">
                                <FormGroup.Label>
                                    With Helptext
                                </FormGroup.Label>
                                <InputGroup styles="icon-right">
                                    <Textfield
                                        styles="input-control"
                                        type="text"
                                        name="autocomplete-2"
                                        placeholder='Input'
                                        value={this.state.value}
                                        autocomplete={true} disabled={false} readonly={false} required={false}
                                        change={this.changeHandler}
                                    >
                                    </Textfield>
                                </InputGroup>
                            </FormGroup>
                            <input className="btn u-bg-secondary-green u-tx-white" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <h1 className="u-mt-40 u-mb-20">For Mobile</h1>
                <h2 className="u-mb-4">Basic</h2>
                <h3 className="u-mt-12 u-mb-12">Full width</h3>
                <div className="row">
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            types="line">
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h3 className="u-my-12">Multiple Field Inline</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            inline
                            types="line">
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            inline
                            types="line">
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            inline
                            types="line">
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text" name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h2 className="u-mt-20 u-mb-4">Label and Helptext</h2>
                <h3 className="u-my-12">Full width</h3>
                <div className="row">
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            inline
                            types="line">
                            <FormGroup.Label>
                                Label
                            </FormGroup.Label>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h3 className="u-mt-20 u-mb-12">Multiple Field Inline</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            inline
                            types="line">
                            <FormGroup.Label>
                                Label 1
                            </FormGroup.Label>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            inline
                            types="line">
                            <FormGroup.Label>
                                Label 2
                            </FormGroup.Label>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            inline
                            types="line">
                            <FormGroup.Label>
                                Label 3
                            </FormGroup.Label>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <div className="row form-row u-mt-20 u-mb-12">
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            inline
                            types="line">
                            <FormGroup.Label>
                                One label for all
                            </FormGroup.Label>
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            label=""
                            helptext=""
                            styles=""
                            inline
                            types="line">
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            label=""
                            helptext=""
                            styles=""
                            inline
                            types="line">
                            <InputGroup styles="">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h2 className="u-my-12">Logo Left</h2>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            label=""
                            helptext=""
                            styles=""
                            inline
                            types="line">
                            <InputGroup styles="icon-left">
                                <InputGroup.Prepend>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Prepend>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            inline
                            types="line">
                            <FormGroup.Label>
                                With Label
                            </FormGroup.Label>
                            <InputGroup styles="icon-left">
                                <InputGroup.Prepend>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Prepend>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            inline
                            types="line">
                            <FormGroup.Label>
                                With Label and Helptext
                            </FormGroup.Label>
                            <InputGroup styles="icon-left">
                                <InputGroup.Prepend>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Prepend>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h2 className="u-mt-20 u-mb-4">Logo Right</h2>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            inline
                            types="line">
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                                <InputGroup.Append>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Append>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles=""
                            inline
                            types="line">
                            <FormGroup.Label>
                                With Label
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                                <InputGroup.Append>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Append>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            inline
                            types="line">
                            <FormGroup.Label>
                                With Label and Helptext
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                                <InputGroup.Append>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Append>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h2 className="u-mt-20 u-mb-4">State</h2>
                <h3 className="u-mt-12 u-mb-4">Basic Condition</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles={this.state.value !== "" ? "form-group--label" : ""}
                            types="line">
                            <FormGroup.Label>
                                Default
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            types="line">
                            <FormGroup.Label>
                                With Helptext
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="Helptext"
                            styles=""
                            types="line">
                            <FormGroup.Label>
                                Disabled
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={true} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h3 className="u-mt-12 u-mb-4">Success Condition</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            validation="success"
                            helptext=""
                            styles=""
                            types="line">
                            {/* <FormGroup.Label>
                                Default
                            </FormGroup.Label> */}
                            <InputGroup>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            validation="success"
                            helptext="Helptext"
                            styles=""
                            types="line">
                            <FormGroup.Label>
                                With Helptext
                            </FormGroup.Label>
                            <InputGroup>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            validation="success"
                            helptext="Helptext"
                            styles=""
                            types="line">
                            <FormGroup.Label>
                                Disabled
                            </FormGroup.Label>
                            <InputGroup>
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={true} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h3 className="u-mt-12 u-mb-4">Error Condition</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            validation="error"
                            helptext=""
                            styles=""
                            types="line">
                            <FormGroup.Label>
                                Default
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            validation="error"
                            helptext="Helptext"
                            styles=""
                            types="line">
                            <FormGroup.Label>
                                With Helptext
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    placeholder='Input'
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <h3 className="u-mt-12 u-mb-4">Autocomplete Condition</h3>
                <div className="row form-row">
                    <div className="col">
                        <form autoComplete="on" action="">
                            <FormGroup
                                helptext=""
                                styles="u-mb-12"
                                types="line">
                                <FormGroup.Label>
                                    Default
                                </FormGroup.Label>
                                <InputGroup styles="icon-right">
                                    <Textfield
                                        styles="input-control"
                                        type="text"
                                        name="autocomplete-1"
                                        placeholder='Input'
                                        value={this.state.value}
                                        autocomplete={true} disabled={false} readonly={false} required={false}
                                        change={this.changeHandler}
                                    >
                                    </Textfield>
                                </InputGroup>
                            </FormGroup>
                            <input className="btn u-bg-secondary-green u-tx-white" type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="col">
                        <form autoComplete="on" action="">
                            <FormGroup
                                helptext="Helptext"
                                styles="u-mb-12"
                                types="line">
                                <FormGroup.Label>
                                    With Helptext
                                </FormGroup.Label>
                                <InputGroup styles="icon-right">
                                    <Textfield
                                        styles="input-control"
                                        type="text"
                                        name="autocomplete-2"
                                        placeholder='Input'
                                        value={this.state.value}
                                        autocomplete={true} disabled={false} readonly={false} required={false}
                                        change={this.changeHandler}
                                    >
                                    </Textfield>
                                </InputGroup>
                            </FormGroup>
                            <input className="btn u-bg-secondary-green u-tx-white" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <h2 className="u-mt-20 u-mb-4">State</h2>
                <h3 className="u-mt-12 u-mb-4">Animation Condition</h3>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup
                            helptext=""
                            styles={this.state.focus ? "active" : ""}
                            types="line-label">
                            <FormGroup.Label>
                                Label
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                    focus={(event) => this.focusHandler(event, 'focus')}
                                    blur={(event) => this.focusHandler(event, 'blur')}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="helptext"
                            styles={this.state.focus ? "active" : ""}
                            types="line-label">
                            <FormGroup.Label>
                                Default
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    value={this.state.value}
                                    autocomplete={true} disabled={false} readonly={false} required={false}
                                    change={this.changeHandler}
                                    focus={(event) => this.focusHandler(event, 'focus')}
                                    blur={(event) => this.focusHandler(event, 'blur')}
                                >
                                </Textfield>
                                <InputGroup.Append>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="profile" width="18" height="18" fill="#70727D" class="profile" />
                                    </div>
                                </InputGroup.Append>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup
                            helptext="helptext"
                            styles={this.state.focus ? "active" : ""}
                            types="line-label">
                            <FormGroup.Label>
                                Disabled
                            </FormGroup.Label>
                            <InputGroup styles="icon-right">
                                <Textfield
                                    styles="input-control"
                                    type="text"
                                    name=""
                                    value={this.state.value}
                                    autocomplete={true} disabled={true} readonly={false} required={false}
                                    change={this.changeHandler}
                                    focus={(event) => this.focusHandler(event, 'focus')}
                                    blur={(event) => this.focusHandler(event, 'blur')}
                                >
                                </Textfield>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default TextfieldPage;
