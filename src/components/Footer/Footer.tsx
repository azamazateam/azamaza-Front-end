import React from 'react';
import s from './Footer.module.css';
import {useTranslation} from 'react-i18next';
import SocialNetworkIcon from '../../assets/common/SocialNetworkIcon/SocialNetworkIcon.tsx';

const Footer: React.FC = () => {
	const date = new Date();
	const year = date.getFullYear();
	const {t} = useTranslation();
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
		<footer>
			<section className={s.sectionInformation}>
				<div className={s.containerTitle}>
					<h3>{t('More information about the project')}</h3>
				</div>
				<div className={s.socialIconContainer}>
					<ul className={s.socialIconsList}>
						{socialNetworkIcons.map((icon) => renderMenuItem(icon))}
					</ul>
				</div>
				<div className={s.infoContainer}>
					<ul className={s.row}>
						<li className={s.column}>
							<a href="#" target="_blank" rel="noopener noreferrer">
								{t('About')} Azamaza.com
							</a>
						</li>
						<li className={s.column}>
							<a href="#" target="_blank" rel="noopener noreferrer">
								{t('Privacy Statement and Cookies')}
							</a>
						</li>
					</ul>
					<ul className={s.row}>
						<li className={s.column}>
							<a href="#" target="_blank" rel="noopener noreferrer">
								{t('Terms and Conditions')}
							</a>
						</li>
						<li className={s.column}>
							<a href="#" target="_blank" rel="noopener noreferrer">
								{t('How we work')}
							</a>
						</li>
						<li className={s.column}>
							<a href="#" target="_blank" rel="noopener noreferrer">
								{t('Support center')}
							</a>
						</li>
					</ul>
				</div>
				<div className={s.bottomContainer}>
					{`${t('Copyright')} ${year} - Azamaza.com. ${t('All right reserved')}`}
				</div>
			</section>
		</footer>
	);
};

export default Footer;
