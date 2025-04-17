import React from 'react';
import s from './Logo.module.css';
import {Link} from 'react-router-dom';
import logo from '../../../../assets/images/Logo PNG.png';
import logoDesc from '../../../../assets/images/Logo Desc PNG.png';
import {useMediaQuery} from 'react-responsive';
const Logo: React.FC = () => {
	const isMobile = useMediaQuery({minWidth: 600});
	return (
		<div className={s.logoContainer}>
			<Link to={`/`}>
				<img src={!isMobile ? logo : logoDesc} alt="Azamaza.com" />
				Azamaza
			</Link>
		</div>
	);
};

export default Logo;
