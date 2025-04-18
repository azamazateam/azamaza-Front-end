import React from 'react';
import s from './Header.module.css';
import Logo from './components/Logo/Logo.tsx';
import {Link} from 'react-router-dom';
import {BsBell} from 'react-icons/bs';
import {BsEnvelope} from 'react-icons/bs';
import {BsJustifyLeft} from 'react-icons/bs';
import AuthAvatar from './components/AuthAvatar/AuthAvatar.tsx';
import {useMediaQuery} from 'react-responsive';
import {useTranslation} from 'react-i18next';
import CurrencySelector from './components/HeaderSelectors/CurrencySelector/CurrencySelector.tsx';
import LanguageSelector from './components/HeaderSelectors/LanguageSelector/LanguageSelector.tsx';

const Header: React.FC = () => {
	const isDesktop = useMediaQuery({minWidth: 600});
	const {t} = useTranslation();

	return (
		<header>
			<section className={s.section}>
				<nav className={`${s.container} __container`}>
					<div className={s.logoContainer}>
						<Logo />
					</div>
					<ul className={s.buttonsList}>
						{isDesktop && (
							<>
								<li className={s.selectButton}>
									<CurrencySelector />
								</li>
								<li className={s.selectButton}>
									<LanguageSelector />
								</li>
								<li className={`${s.buttonYellow}`}>
									<Link to={`#`}>{t('Register your property')}</Link>
								</li>
							</>
						)}
						<li className={s.button}>
							<Link to={`/notification`}>
								<BsBell className={s.icon} size={24} />
							</Link>
						</li>
						<li className={s.button}>
							<Link to={`/messages`}>
								<BsEnvelope className={s.icon} size={24} />
							</Link>
						</li>
						<li>
							<AuthAvatar />
						</li>
						{!isDesktop && (
							<li className={s.button}>
								<Link to={`/menu`}>
									<BsJustifyLeft className={s.icon} size={24} />
								</Link>
							</li>
						)}
					</ul>
				</nav>
			</section>
		</header>
	);
};

export default Header;
