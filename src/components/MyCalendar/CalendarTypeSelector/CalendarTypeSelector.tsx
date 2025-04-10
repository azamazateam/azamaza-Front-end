import s from './CalendarTypeSelector.module.css';
import {useTranslation} from 'react-i18next';
import React from 'react';
type Props = {
	setTypeCalendar: (typeCalendar: 'calendar' | 'flexible') => void;
	type: 'calendar' | 'flexible';
};
const CalendarTypeSelector: React.FC<Props> = ({type, setTypeCalendar}) => {
	const {t} = useTranslation();

	const handleClick = () => {
		setTypeCalendar(type === 'flexible' ? 'calendar' : 'flexible');
	};
	return (
		<div className={s.container}>
			<div className={s.buttonContainer}>
				<button
					onClick={handleClick}
					className={`${s.button} ${type === 'calendar' ? s.active : ''}`}
				>
					{t('Calendar')}
				</button>
			</div>
			<div className={s.buttonContainer}>
				<button
					onClick={handleClick}
					className={`${s.button} ${type === 'flexible' ? s.active : ''}`}
				>
					{t('Flexible plans')}
				</button>
			</div>
		</div>
	);
};

export default CalendarTypeSelector;
