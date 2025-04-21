import React from 'react';
import s from './ReferralsProgramBanner.module.css';
import {useTranslation} from 'react-i18next';
const ReferralsProgramBanner: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div className={s.container}>
			<div className={s.title}>{t('Referrals Made Easy For Everyone')}</div>
			<div className={s.description}>
				{t(
					'Send an invitation to friends, colleagues, share it on social media and get a cash reward. Create groups and get bonuses for each user',
				)}
			</div>
		</div>
	);
};

export default ReferralsProgramBanner;
