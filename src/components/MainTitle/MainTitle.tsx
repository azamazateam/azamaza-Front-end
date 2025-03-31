import React from 'react';
import {useTranslation} from 'react-i18next';
import titleBackground from '../../assets/images/titleBackground.png';
import s from './MainTitle.module.css';

const MainTitle: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div className={s.container}>
			<div className={s.imageContainer}>
				<img src={titleBackground} alt={'azamaza.com'} />
				<h1 className={s.mainTitle}>
					{t(
						'Travel and meet, save and enjoy, rent, communicate, discover the world!',
					)}
				</h1>
			</div>
		</div>
	);
};

export default MainTitle;
