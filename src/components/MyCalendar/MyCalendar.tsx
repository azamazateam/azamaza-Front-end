import React, {useState} from 'react';
import 'react-calendar/dist/Calendar.css';

import './MyCalendar.css';
import s from './MyCalendar.module.css';
import Calendar from 'react-calendar';
import {useFormikContext} from 'formik';

export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

type Props = {
	fieldName: string;
	closeCalendar: () => void;
};
const MyCalendar: React.FC<Props> = ({fieldName, closeCalendar}) => {
	const [value, onChangeValue] = useState<Value>(new Date());
	const {setFieldValue} = useFormikContext();

	const handleChange = (newValue: any) => {
		const dateObject = new Date(newValue[0]);
		const year = dateObject.getFullYear();
		const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
		const day = dateObject.getDate().toString().padStart(2, '0');
		setFieldValue(fieldName, `${year}-${month}-${day}`);
		onChangeValue(newValue);
		closeCalendar();
	};

	return (
		<Calendar
			className={s.calendar}
			selectRange
			navigationLabel={({label}) => <div className={s.navigation}>{label}</div>}
			tileClassName={({date}) => {
				const classes = [s.tile];

				const isToday = date.toDateString() === new Date().toDateString();

				if (isToday) classes.push(s.today);
				// пример: если выбранная дата
				//if (date.getDate() === 15) classes.push(s.active);

				return classes.join(' ');
			}}
			onChange={handleChange}
			value={value}
		/>
	);
};

export default MyCalendar;
