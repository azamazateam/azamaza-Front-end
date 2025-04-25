import React from 'react';
import s from '../ShareYouLink.module.css';
import avatar from '../../../assets/images/avatar.jpg';
import {BsPeople, BsQrCode} from 'react-icons/bs';
const PersonalInfoPanel: React.FC = () => {
	return (
		<div className={s.personalInfoContainer}>
			<div className={s.userInfo}>
				<div className={s.avatar}>
					<img src={avatar} alt="avatar" />
				</div>
				<div className={s.info}>
					<div className={s.name}>Albert Wolfz</div>
					<div className={s.referals}>134 referrals</div>
					<div className={s.level}>2nd level</div>
				</div>
			</div>
			<div className={s.buttons}>
				<div className={s.button}>
					<BsPeople size={24} color={'#006CE4'} />
				</div>
				<div className={s.button}>
					<BsQrCode size={24} color={'#006CE4'} />
				</div>
			</div>
		</div>
	);
};

export default PersonalInfoPanel;
