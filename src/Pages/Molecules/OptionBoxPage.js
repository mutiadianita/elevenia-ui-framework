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
        this.setState({ [input] : event.target.value })
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
            </div>
        );
    }
}

export default OptionBoxPage;