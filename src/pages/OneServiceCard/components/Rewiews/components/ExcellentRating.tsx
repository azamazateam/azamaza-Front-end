import React from 'react';
import s from '../../../OneServiceCard.module.css';
import {useTranslation} from 'react-i18next';
import {MostPopularServicesType} from '../../../../Home/components/MostPopularServices/mostPopularServicesData.tsx';
type Props = {
	service: MostPopularServicesType;
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
