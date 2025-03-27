import React from 'react';
import s from './Logo.module.css';
import {Link} from 'react-router-dom';

const Logo: React.FC = () => {
	return (
		<div className={s.logoContainer}>
			<Link to={`/`}>Azamaza.com </Link>
		</div>
	);
};

export default Logo;
