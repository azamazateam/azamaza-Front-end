import React from 'react';
import s from '../../../OneServiceCard.module.css';
import {useTranslation} from 'react-i18next';
import {PopularServicesType} from '../../../../../redux/types/homePageTypes.ts';
type Props = {
	service: PopularServicesType;
};
const ExcellentRating: React.FC<Props> = ({service}) => {
	const {t} = useTranslation();
	return (
		<div className={s.ratingPanel}>
			<div className={s.ratingContainer}>
				<div className={s.ratingNumber}>{service.rating}</div>
				<div className={s.ratingText}>{t('Excellent rating')}</div>
			</div>
			<div className={s.views}>
				{service.views + ' '}
				{t('reviews')}
			</div>
		</div>
	);
};

export default ExcellentRating;
