import React, { Component } from "react";
import { FormGroup, InputGroup, DatePicker, Icon } from "../../Components/Atoms";

class DatePickerPage extends Component {

    state = {
        data: {},
        openCalendar: false
    }

    onChange = (name, value) => {
        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        })
    }

    toggleCalendar = () => {
        this.setState({ openCalendar: true })
    }

    render() {
        console.log(this.state);
        const { data } = this.state;
        return (

            <>
                <h1 className="title">Date Picker</h1>
                <h2 className="u-mb-4">Date Picker Basic</h2>
                <div className="row">
                    <div className="col">
                        <FormGroup helptext="" styles="">
                            <FormGroup.Label>
                                With Label and Helptext
                            </FormGroup.Label>
                            <InputGroup IconLeft>
                                <InputGroup.Prepend>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="date" width="24" height="24" fill="#70727D" class="date" />
                                    </div>
                                </InputGroup.Prepend>
                                <DatePicker
                                    dateFormat="iii, dd MMM yyyy"
                                    className={'input-control'}
                                    placeholderText="Masukkan tanggal"
                                    selected={data.singleDate}
                                    shouldCloseOnSelect={false}
                                    onChange={data => this.onChange('singleDate', data)}
                                    onChangeRaw={event => console.log(event)}
                                />
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <code>
                    &lt;FormGroup helptext="" styles=""&gt; <br />
                    &nbsp;&lt;FormGroup.Label&gt; <br />
                    &nbsp;&nbsp;With Label and Helptext <br />
                    &nbsp;&nbsp;&lt;/FormGroup.Label&gt; <br />
                    &nbsp;&lt;InputGroup IconLeft&gt; <br />
                    &nbsp;&nbsp;&lt;InputGroup.Prepend&gt; <br />
                    &nbsp;&nbsp;&nbsp;&lt;div className='u-fx-column u-js-center u-al-items-center'&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon iwidth="i--large" name="date" width="24" height="24" fill="#70727D" class="date" /&gt; <br />
                    &nbsp;&nbsp;&nbsp;&lt;/div&gt; <br />
                    &nbsp;&nbsp;&lt;/InputGroup.Prepend&gt; <br />
                    &nbsp;&nbsp;&lt;DatePicker <br />
                    &nbsp;&nbsp;&nbsp;dateFormat="iii, dd MMM yyyy" <br />
                    &nbsp;&nbsp;&nbsp;className=&#123;'input-control'&#125; <br />
                    &nbsp;&nbsp;&nbsp;placeholderText="Masukkan tanggal" <br />
                    &nbsp;&nbsp;&nbsp;selected=&#123;data.singleDate&#125; <br />
                    &nbsp;&nbsp;&nbsp;shouldCloseOnSelect=&#123;false&#125; <br />
                    &nbsp;&nbsp;&nbsp;onChange=&#123;data =&gt; this.onChange('singleDate', data)&#125; <br />
                    &nbsp;&nbsp;&nbsp;onChangeRaw=&#123;event =&gt; console.log(event)&#125; <br />
                    &nbsp;&nbsp;/&gt; <br />
                    &nbsp;&lt;/InputGroup&gt; <br />
                    &lt;/FormGroup&gt; <br />
                </code>
                <h2 className="u-mb-4 u-mt-12">Date Picker Range</h2>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup helptext="" styles="">
                            <FormGroup.Label>
                                Tanggal
                            </FormGroup.Label>
                            <InputGroup IconLeft>
                                <InputGroup.Prepend>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="date" width="24" height="24" fill="#70727D" class="date" />
                                    </div>
                                </InputGroup.Prepend>
                                <DatePicker
                                    dateFormat="iii, dd MMM yyyy"
                                    className={'input-control'}
                                    placeholderText="Masukkan tanggal"
                                    selected={data.startDate}
                                    startDate={data.startDate}
                                    endDate={data.endDate}
                                    shouldCloseOnSelect={false}
                                    onChange={data => this.onChange("startDate", data)}
                                />
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup helptext="" styles="">
                            <FormGroup.Label></FormGroup.Label>
                            <InputGroup IconLeft>
                                <InputGroup.Prepend>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="date" width="24" height="24" fill="#70727D" class="date" />
                                    </div>
                                </InputGroup.Prepend>
                                <DatePicker
                                    dateFormat="iii, dd MMM yyyy"
                                    className={'input-control'}
                                    placeholderText="Masukkan tanggal"
                                    selected={data.endDate}
                                    startDate={data.startDate}
                                    endDate={data.endDate}
                                    shouldCloseOnSelect={false}
                                    onChange={data => this.onChange("endDate", data)}
                                />
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
                <code>
                    &lt;div className="row form-row"&gt; <br/>
                    &nbsp;&lt;div className="col"&gt; <br/>
                    &nbsp;&nbsp;&lt;FormGroup helptext="" styles=""&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&lt;FormGroup.Label&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Tanggal <br/>
                    &nbsp;&nbsp;&lt;/FormGroup.Label&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&lt;InputGroup IconLeft&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;InputGroup.Prepend&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className='u-fx-column u-js-center u-al-items-center'&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon iwidth="i--large" name="date" width="24" height="24" fill="#70727D" class="date" /&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/InputGroup.Prepend&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;DatePicker <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dateFormat="iii, dd MMM yyyy" <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&#123;'input-control'&#125; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placeholderText="Masukkan tanggal" <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selected=&#123;data.startDate&#125; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startDate=&#123;data.startDate&#125; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endDate=&#123;data.endDate&#125; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shouldCloseOnSelect=&#123;false&#125; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onChange=&#123;data =&gt; this.onChange("startDate", data)&#125; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;/&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&lt;/InputGroup&gt; <br/>
                    &nbsp;&nbsp;&lt;/FormGroup&gt; <br/>
                    &nbsp;&lt;/div&gt; <br/>
                    &nbsp;&lt;div className="col"&gt; <br/>
                    &nbsp;&nbsp;&lt;FormGroup helptext="" styles=""&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&lt;FormGroup.Label&gt;&lt;/FormGroup.Label&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&lt;InputGroup IconLeft&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;InputGroup.Prepend&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className='u-fx-column u-js-center u-al-items-center'&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon iwidth="i--large" name="date" width="24" height="24" fill="#70727D" class="date" /&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/InputGroup.Prepend&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;DatePicker <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dateFormat="iii, dd MMM yyyy" <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&#123;'input-control'&#125; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placeholderText="Masukkan tanggal" <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selected=&#123;data.endDate&#125; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startDate=&#123;data.startDate&#125; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endDate=&#123;data.endDate&#125; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shouldCloseOnSelect=&#123;false&#125; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onChange=&#123;data =&gt; this.onChange("endDate", data)&#125; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;/&gt; <br/>
                    &nbsp;&nbsp;&nbsp;&lt;/InputGroup&gt; <br/>
                    &nbsp;&nbsp;&lt;/FormGroup&gt; <br/>
                    &nbsp;&lt;/div&gt; <br/>
                    &lt;/div&gt; <br/>
                </code>
                <h2 className="u-mb-4 u-mt-12">Date Picker with Time Picker</h2>
                <div className="row form-row">
                    <div className="col">
                        <FormGroup helptext="" styles="">
                            <FormGroup.Label>
                                Tanggal
                            </FormGroup.Label>
                            <InputGroup IconLeft>
                                <InputGroup.Prepend>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="date" width="24" height="24" fill="#70727D" class="date" />
                                    </div>
                                </InputGroup.Prepend>
                                <DatePicker
                                    dateFormat="iii, dd MMM yyyy"
                                    className={'input-control'}
                                    placeholderText="Masukkan tanggal"
                                    selected={data.selectedDate}
                                    shouldCloseOnSelect={false}
                                    onChange={data => this.onChange("selectedDate", data)}
                                />
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup helptext="" styles="">
                            <FormGroup.Label>
                                Waktu
                            </FormGroup.Label>
                            <InputGroup IconLeft>
                                <InputGroup.Prepend>
                                    <div className='u-fx-column u-js-center u-al-items-center'>
                                        <Icon iwidth="i--large" name="date" width="24" height="24" fill="#70727D" class="date" />
                                    </div>
                                </InputGroup.Prepend>
                                <DatePicker
                                    dateFormat="h:mm aa"
                                    className={'input-control'}
                                    placeholderText="Masukkan waktu"
                                    selected={data.selectedDate}
                                    onChange={data => this.onChange("selectedDate", data)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    shouldCloseOnSelect={false}
                                />
                            </InputGroup>
                        </FormGroup>
                    </div>

                </div>
            </>

        )
    }
}

export default DatePickerPage;
