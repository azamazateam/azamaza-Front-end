import React from 'react';
import BottomSection from './components/BottomSection.tsx';
import s from './Footer.module.css';
import {useTranslation} from 'react-i18next';

const FooterSmallGrey: React.FC = () => {
	const date = new Date();
	const year = date.getFullYear();
	const {t} = useTranslation();
	return (
		<div className={s.grayFooterContainer}>
			<BottomSection grey />
			<div className={`${s.bottomContainer} ${s.grey}`}>
				{`${t('Copyright')} ${year} - Azamaza.com. ${t('All right reserved')}`}
			</div>
		</div>
	);
};

export default FooterSmallGrey;
