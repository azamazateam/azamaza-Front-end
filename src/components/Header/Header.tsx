import React from 'react';
import s from './Header.module.css';
import Logo from './components/Logo/Logo.tsx';
import {Link} from 'react-router-dom';
import {BsBell} from 'react-icons/bs';
import {BsEnvelope} from 'react-icons/bs';
import {BsJustifyLeft} from 'react-icons/bs';
import AuthAvatar from './components/AuthAvatar/AuthAvatar.tsx';

const Header: React.FC = () => {
	return (
		<header>
			<section>
				<nav className={s.container}>
					<div className={s.logoContainer}>
						<Logo />
					</div>
					<ul className={s.buttonsList}>
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
						<li className={s.button}>
							<Link to={`/menu`}>
								<BsJustifyLeft className={s.icon} size={24} />
							</Link>
						</li>
					</ul>
				</nav>
			</section>
		</header>
	);
};

export default Header;
