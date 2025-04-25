import React from 'react';
import s from '../ShareYouLink.module.css';
import Button from '../../Buttons/Button/Button.tsx';

import {
	BsEnvelope,
	BsFacebook,
	BsInstagram,
	BsTelegram,
	BsTwitterX,
	BsUpload,
	BsWhatsapp,
} from 'react-icons/bs';

const LinkCopier: React.FC = () => {
	const socialNetworkIcons = [
		{name: 'message', icon: <BsEnvelope size={18} />},
		{name: 'upload', icon: <BsUpload size={18} />},
		{name: 'facebook', icon: <BsFacebook size={18} />},
		{name: 'instagram', icon: <BsInstagram size={18} />},
		{name: 'whatsapp', icon: <BsWhatsapp size={18} />},
		{name: 'telegram', icon: <BsTelegram size={18} />},
		{name: 'twitter', icon: <BsTwitterX size={18} />},
	];
	const renderMenuItem = (name: string, icon: React.ReactNode) => {
		return (
			<li key={name} className={s.socialIcon}>
				<a href="#" title={name}>
					{icon}
				</a>
			</li>
		);
	};
	return (
		<div className={s.linkCopierContainer}>
			<div className={s.row}>
				<div className={s.input}>
					<input type="text" value={'http://azamaza.com/referral...'} />
				</div>
				<div className={s.button}>
					<Button color={'yellow'} type={'button'} text={'Copy'} />
				</div>
			</div>
			<div className={s.row}>
				<ul className={s.socialLinks}>
					{socialNetworkIcons.map(({name, icon}) => renderMenuItem(name, icon))}
				</ul>
			</div>
		</div>
	);
};

export default LinkCopier;
