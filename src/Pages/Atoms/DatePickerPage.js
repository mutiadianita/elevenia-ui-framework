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
