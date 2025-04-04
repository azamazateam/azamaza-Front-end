import React from 'react';
import s from './Footer.module.css';
import {useTranslation} from 'react-i18next';
import SocialNetworkIcon from '../../assets/images/SocialNetworkIcon/SocialNetworkIcon.tsx';
import BottomSection from './components/BottomSection.tsx';
import DomainTitle from './components/DomainTitle.tsx';

const FooterCommon: React.FC = () => {
	const {t} = useTranslation();
	const socialNetworkIcons = [
		'instagram',
		'telegram',
		'viber',
		'facebook',
		'tiktok',
	];
	const date = new Date();
	const year = date.getFullYear();
	const renderMenuItem = (id: string, path?: string) => (
		<li className={s.socialIcon} key={id}>
			<a href={path ?? '#'} target="_blank" rel="noopener noreferrer">
				<SocialNetworkIcon id={id} />
			</a>
		</li>
	);

	return (
		<footer>
			<section className={s.section}>
				<DomainTitle />
				<div className={s.containerTitle}>
					<h3>{t('More information about the project')}</h3>
				</div>
				<div className={s.socialIconContainer}>
					<ul className={s.socialIconsList}>
						{socialNetworkIcons.map((icon) => renderMenuItem(icon))}
					</ul>
				</div>
				<BottomSection />
				<div className={s.bottomContainer}>
					{`${t('Copyright')} ${year} - Azamaza.com. ${t('All right reserved')}`}
				</div>
			</section>
		</footer>
	);
};

export default FooterCommon;
