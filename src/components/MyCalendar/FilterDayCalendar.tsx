import React, {useState} from 'react';
import Calendar from 'react-calendar';
import './MyCalendar.css';
// @ts-ignore
import s from './MyCalendar.module.css';
import {format} from 'date-fns';
import {uk} from 'date-fns/locale';
import {Value} from './MyCalendar.tsx';
import {FormikSetFieldValue} from '../../types/CommonTypes';

type Props = {
	close: (b: boolean) => void;
	setCurrentDayName: (value: string) => void;
	setFieldValue: FormikSetFieldValue;
	fieldName: string;
};
const FilterDayCalendar: React.FC<Props> = ({
	close,
	setFieldValue,
	fieldName,
	setCurrentDayName,
}) => {
	const [value, onChangeValue] = useState<Value>(new Date());

	const handleChange = (newValue: any) => {
		const dateObject = new Date(newValue);
		const year = dateObject.getFullYear();
		const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
		const day = dateObject.getDate().toString().padStart(2, '0');
		setCurrentDayName(`${year}-${month}-${day}`);
		setFieldValue(fieldName, `${year}-${month}-${day}`);
		onChangeValue(newValue);
		close(false);
	};
	const formatMonthYear = (date: any) => {
		return format(date, 'LLLL yyyy', {locale: uk});
	};
	return (
		<div className={s.dayCalendarContainer}>
			<Calendar
				view={'month'}
				tileClassName={s.calendarTile}
				locale="uk-UA"
				formatMonthYear={(locale, date) => formatMonthYear(date)}
				className={s.calendarContainer}
				onClickMonth={handleChange}
				onChange={handleChange}
				value={value}
			/>{' '}
		</div>
	);
};

export default FilterDayCalendar;
