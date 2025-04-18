import React from 'react';
import {useTranslation} from 'react-i18next';

import s from './MainTitle.module.css';
import {useMediaQuery} from 'react-responsive';

const MainTitle: React.FC = () => {
	const {t} = useTranslation();
	const isMobile = useMediaQuery({maxWidth: 600});
	return (
		<div className={s.container}>
			<div className={s.titleContainer}>
				<h1 className={s.mainTitle}>{t('Discover the world in comfort!')}</h1>
				{!isMobile && (
					<div className={s.description}>
						{t(
							'Explore, meet, rent, travel and enjoy with unique offers and discounts',
						)}
					</div>
				)}
			</div>
			<div className={s.imageContainer}></div>
		</div>
	);
};

export default MainTitle;
