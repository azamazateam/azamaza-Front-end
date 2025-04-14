import React from 'react';
import s from './CardsSliderRecommend.module.css';
import VerticalSlider from '../VerticalSlider/VerticalSlider.tsx';
import VerticalCard from '../../Cards/VerticalCard/VerticalCard.tsx';
import ContainerSubTitle from '../../../pages/OneServiceCard/components/ContainerSubTitle.tsx';
import {PopularServicesType} from '../../../redux/types/homePageTypes.ts';

type Props = {
	title: string;
	data: PopularServicesType[] | null;
	isShowMore: boolean;
	description?: string;
};
const CardsSliderRecommend: React.FC<Props> = ({
	title,
	data,
	isShowMore,
	description,
}) => {
	return (
		<div className={s.container}>
			<ContainerSubTitle
				title={title}
				isShowMore={isShowMore}
				description={description}
			/>
			<div className={s.sliderContainer}>
				<VerticalSlider autoplay>
					{data?.map((service, index) => (
						<VerticalCard card={service} key={index + service.name} />
					))}
				</VerticalSlider>
			</div>
		</div>
	);
};

export default CardsSliderRecommend;
