import React, { Component } from 'react';
import DatePickerBase from 'react-datepicker';
import { format } from 'date-fns'
import { Icon } from "./";

class DatePicker extends Component {

  render() {
    return (
      <DatePickerBase
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
            <div className={'u-px-16 u-pt-20 u-pb-8 u-fx-row u-al-center u-js-between'}>
              <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                <Icon iwidth="i--large" name="chevron-left" width="18" height="18" fill="#70727D" class="chevron-left" />
              </button>
              <h1 className={'u-m-0'}>{format(date, 'MMMM')}</h1>
              <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled} >
                <Icon iwidth="i--large" name="chevron-right" width="18" height="18" fill="#70727D" class="chevron-left" />
              </button>
            </div>
          )
        } 
        disabledKeyboardNavigation
        {...this.props}
      />
    );
  }
}

export default DatePicker;
