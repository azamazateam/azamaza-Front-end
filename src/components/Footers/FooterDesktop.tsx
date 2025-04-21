import React from 'react';
import s from './Footer.module.css';
import Logo from '../Header/components/Logo/Logo.tsx';
import SocialNetworkIconsPanel from './components/SocialNetworkIconsPanel.tsx';
import {useTranslation} from 'react-i18next';
const FooterDesktop: React.FC = () => {
	const {t} = useTranslation();

	const date = new Date();
	const year = date.getFullYear();
	return (
		<div className={s.wrapper}>
			<div className={`${s.desktopContainer} __container`}>
				<div className={s.column}>
					<div className={s.row}>
						<Logo />
					</div>
					<div className={s.row}>Barcelona, España</div>
					<div className={s.row}>
						<a href="tel:+380998002000">+38 (099) 800 20 00</a>
					</div>
					<div className={s.row}>
						<SocialNetworkIconsPanel />
					</div>
				</div>
				<div className={s.column}>
					<ul className={s.listTitle}>
						Sections
						<li className={s.row}>Referrals program</li>
						<li className={s.row}>How it works</li>
						<li className={s.row}>Our subscriptions</li>
						<li className={s.row}>Affiliate Program</li>
						<li className={s.row}>Top FAQ</li>
					</ul>
				</div>
				<div className={s.column}>
					<ul className={s.listTitle}>
						Rules
						<li className={s.row}>Privacy policy</li>
						<li className={s.row}>Terms of service</li>
						<li className={s.row}>Cookies files</li>
						<li className={s.row}>Rules and devices</li>
					</ul>
				</div>
				<div className={s.column}>
					<ul className={s.listTitle}>
						Partners
						<li className={s.row}>Partner support center</li>
						<li className={s.row}>Register your property</li>
						<li className={s.row}>Affiliate program</li>
					</ul>
				</div>
				<div className={s.column}>
					<ul className={s.listTitle}>
						Social media
						<li className={s.row}>Instagram</li>
						<li className={s.row}>Telegram</li>
						<li className={s.row}>Facebook</li>
						<li className={s.row}>WhatsApp</li>
					</ul>
				</div>
				<div className={s.column}>
					<ul className={s.listTitle}>
						Contacts
						<li className={s.row}>Azam@aza.com</li>
						<li className={s.row}>support@aza.com</li>
					</ul>
				</div>
			</div>
			<div className={s.bottomContainer}>
				{`${t('Copyright')} ${year} - Azamaza.com. ${t('All right reserved')}`}
			</div>
		</div>
	);
};

export default FooterDesktop;
