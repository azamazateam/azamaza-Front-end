import React, {useState} from 'react';
import s from './CalendarPopup.module.css';
import MyCalendar from '../MyCalendar.tsx';
import PopupHeadLeft from '../../Forms/SearchForm/popups/SearchLocationPopup/PopupHeadLeft.tsx';
import Button from '../../Buttons/ButtonYellow/Button.tsx';
import {useTranslation} from 'react-i18next';
import CalendarTypeSelector from '../CalendarTypeSelector/CalendarTypeSelector.tsx';
import FlexiblePlans from '../FlexiblePlans/FlexiblePlans.tsx';
type Props = {
	closeModal: () => void;
	fieldName: string;
};
const CalendarPopup: React.FC<Props> = ({fieldName, closeModal}) => {
	const {t} = useTranslation();
	const [typeCalendar, setTypeCalendar] = useState<'calendar' | 'flexible'>(
		'calendar',
	);
	return (
		<div className={s.container}>
			<PopupHeadLeft closeModal={closeModal} title={t('Date or period')} />
			<div className={s.calendarTypeSelector}>
				<CalendarTypeSelector
					setTypeCalendar={setTypeCalendar}
					type={typeCalendar}
				/>
			</div>
			{typeCalendar === 'calendar' && (
				<MyCalendar fieldName={fieldName} closeCalendar={closeModal} />
			)}
			{typeCalendar === 'flexible' && <FlexiblePlans />}
			<div className={s.buttonContainer}>
				<Button callback={closeModal} text={t('Apply')} type={'button'} />
			</div>
		</div>
	);
};

export default CalendarPopup;
