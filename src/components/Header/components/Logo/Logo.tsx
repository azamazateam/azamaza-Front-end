import React from 'react';
import s from './Logo.module.css';
import {Link} from 'react-router-dom';
import logo from '../../../../assets/images/Logo PNG.png';
const Logo: React.FC = () => {
	return (
		<div className={s.logoContainer}>
			<Link to={`/`}>
				<img src={logo} alt="Azamaza.com" />
				Azamaza
			</Link>
		</div>
	);
};

export default Logo;
