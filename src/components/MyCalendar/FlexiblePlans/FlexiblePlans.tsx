import React from 'react';
import s from '../CalendarPopup/CalendarPopup.module.css';
import {useTranslation} from 'react-i18next';
const FlexiblePlans: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div className={s.flexiblePlansContainer}>
			<div className={s.flexiblePlansTitle}>
				{t('For how long do you want to sign up for the service?')}
			</div>
			<ul className={s.flexibleCheckboxList}>
				<li className={s.flexibleCheckbox}></li>
			</ul>
			<div className={s.whenContainer}>
				<div className={s.whenTitle}>
					{t('When do you want to order the service?')}
				</div>
				<ul className={s.whenMonthList}></ul>
			</div>
		</div>
	);
};

export default FlexiblePlans;
