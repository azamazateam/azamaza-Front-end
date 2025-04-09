import React from 'react';
import s from './CardsSliderRecommend.module.css';
import {useTranslation} from 'react-i18next';
import VerticalSlider from '../VerticalSlider/VerticalSlider.tsx';
import {
	mostPopularServicesData,
	MostPopularServicesType,
} from '../../../pages/Home/components/MostPopularServices/mostPopularServicesData.ts';
import VerticalCard from '../../Cards/VerticalCard/VerticalCard.tsx';
import image from '../../../assets/images/serviceBackgrounds/testCard.jpg';

type Props = {
	title: string;
};
const CardsSliderRecommend: React.FC<Props> = ({title}) => {
	const {t} = useTranslation();
	const photoCard: MostPopularServicesType = {
		hot: 1,
		favorite: 1,
		image: image,
		name: 'Photography, editing',
		serviceName: 'Photo video shooting',
		rating: 9.8,
		views: '11 649',
		oldPrice: 170,
		newPrice: 110,
	};

	return (
		<div className={s.container}>
			<div className={s.headPanel}>
				<div className={s.title}>{title}</div>
				<div className={s.button}>
					<button>{t('Show more')}</button>
				</div>
			</div>
			<div className={s.sliderContainer}>
				<VerticalSlider>
					{[...mostPopularServicesData, photoCard].map((service, index) => (
						<VerticalCard card={service} key={index + service.name} />
					))}
				</VerticalSlider>
			</div>
		</div>
	);
};

export default CardsSliderRecommend;
