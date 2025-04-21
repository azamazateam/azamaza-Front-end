import React from 'react';
import s from '../Footer.module.css';
import SocialNetworkIcon from '../../../assets/common/SocialNetworkIcon.tsx';

const SocialNetworkIconsPanel: React.FC = () => {
	const socialNetworkIcons = [
		'instagram',
		'telegram',
		'viber',
		'facebook',
		'tiktok',
	];
	const renderMenuItem = (id: string, path?: string) => (
		<li className={s.socialIcon} key={id}>
			<a href={path ?? '#'} target="_blank" rel="noopener noreferrer">
				<SocialNetworkIcon id={id} />
			</a>
		</li>
	);
	return (
		<div className={s.socialIconContainer}>
			<ul className={s.socialIconsList}>
				{socialNetworkIcons.map((icon) => renderMenuItem(icon))}
			</ul>
		</div>
	);
};

export default SocialNetworkIconsPanel;
