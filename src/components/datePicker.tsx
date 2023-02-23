import React, { ChangeEventHandler } from 'react'
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment, { Moment } from "moment";
import 'moment/locale/fr';

type DatePickerProps = {
    className: string;
    locale: string;
    inputProps: React.HTMLProps<HTMLInputElement>;
    onChange: (value: any | Moment) => void;
    value : Date | string | Moment
}


function DatePicker(props: DatePickerProps) {
    const yesterday = moment().subtract(1, "day");
    let { inputProps, className, locale, onChange, value } = props;

    function valid(current: moment.Moment) {
        return current.isAfter(yesterday);
    }

    return (
        <Datetime
            value={value}
            isValidDate={valid}
            onChange={onChange}
            className={className}
            locale={locale}
            inputProps={inputProps}
        />
    )
}

export default DatePicker