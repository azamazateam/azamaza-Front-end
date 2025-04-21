import React from 'react';
import s from './Footer.module.css';
import {useTranslation} from 'react-i18next';
import BottomSection from './components/BottomSection.tsx';
import DomainTitle from './components/DomainTitle.tsx';
import SocialNetworkIconsPanel from './components/SocialNetworkIconsPanel.tsx';

const FooterCommon: React.FC = () => {
	const {t} = useTranslation();

	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer>
			<section className={s.section}>
				<DomainTitle />
				<div className={s.containerTitle}>
					<h3>{t('More information about the project')}</h3>
				</div>
				<SocialNetworkIconsPanel />
				<BottomSection />
				<div className={s.bottomContainer}>
					{`${t('Copyright')} ${year} - Azamaza.com. ${t('All right reserved')}`}
				</div>
			</section>
		</footer>
	);
};

export default FooterCommon;
