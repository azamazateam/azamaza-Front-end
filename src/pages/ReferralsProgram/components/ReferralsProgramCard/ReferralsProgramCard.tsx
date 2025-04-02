import React from 'react';
import s from './ReferralsProgramCard.module.css';
import {useTranslation} from 'react-i18next';
import ButtonYellow from '../../../../components/ButtonYellow/ButtonYellow.tsx';
import {Link} from 'react-router-dom';

const ReferralsProgramCard: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<div className={s.title}>
					<h3>{t('Referrals program')}</h3>
				</div>
				<div className={s.description}>
					{t(
						'Create your own communities, groups, teams, and earn money on it',
					)}
				</div>
				<div className={s.button}>
					<Link to={'referral-program'}>
						<ButtonYellow type={'button'} text={t('Invite friends')} />
					</Link>
				</div>

				{/*<img src={background} alt="" />*/}
			</div>
		</div>
	);
};

export default ReferralsProgramCard;
