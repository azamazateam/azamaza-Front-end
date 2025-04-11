import React from 'react';
import s from './CardsSliderRecommend.module.css';
import VerticalSlider from '../VerticalSlider/VerticalSlider.tsx';
import {
	mostPopularServicesData,
	MostPopularServicesType,
} from '../../../pages/Home/components/MostPopularServices/mostPopularServicesData.tsx';
import VerticalCard from '../../Cards/VerticalCard/VerticalCard.tsx';
import image from '../../../assets/images/serviceBackgrounds/testCard.jpg';
import ContainerSubTitle from '../../../pages/OneServiceCard/components/ContainerSubTitle.tsx';

type Props = {
	title: string;
};
const CardsSliderRecommend: React.FC<Props> = ({title}) => {
	const photoCard: MostPopularServicesType = {
		id: 11,
		description: 'Photography, editing Photo video shooting',
		hot: 1,
		favorite: 1,
		image: image,
		name: 'Photography, editing',
		serviceName: 'Photo video shooting',
		rating: 9.8,
		views: '11 649',
		oldPrice: 170,
		newPrice: 110,
		serviceOptions: null,
	};

	return (
		<div className={s.container}>
			<ContainerSubTitle title={title} isShowMore />
			<div className={s.sliderContainer}>
				<VerticalSlider autoplay>
					{[...mostPopularServicesData, photoCard].map((service, index) => (
						<VerticalCard card={service} key={index + service.name} />
					))}
				</VerticalSlider>
			</div>
		</div>
	);
};

export default CardsSliderRecommend;
