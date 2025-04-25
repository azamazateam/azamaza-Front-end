import React from 'react';
import s from '../HowItWorkReferral.module.css';
import Button from '../../../../../../components/Buttons/Button/Button.tsx';

const HowItWorkCardReferral: React.FC = () => {
	return (
		<div className={s.cardContainer}>
			<div className={s.title}>Invite and get money</div>
			<div className={s.description}>
				Create your own communities, groups, teams, and earn money on it
			</div>
			<div className={s.button}>
				<Button type={'button'} text={'Copy link'} color={'yellow'} />
			</div>
		</div>
	);
};

export default HowItWorkCardReferral;
