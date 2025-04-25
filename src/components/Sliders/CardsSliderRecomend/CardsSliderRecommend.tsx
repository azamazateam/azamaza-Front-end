import React from 'react';
import s from './CardsSliderRecommend.module.css';
import VerticalSlider from '../VerticalSlider/VerticalSlider.tsx';
import VerticalCard from '../../Cards/VerticalCard/VerticalCard.tsx';
import ContainerSubTitle from '../../../pages/OneServiceCard/components/ContainerSubTitle.tsx';
import {ProductType, ServicesType} from '../../../redux/types/commonTypes.ts';
import ProductCardVertical from '../../Cards/ProductCardVertical/ProductCardVertical.tsx';

type BaseProps = {
	title: string;
	isShowMore?: boolean;
	description?: string;
	maxWidth?: number;
};

type ProductProps = BaseProps & {
	isProduct: true;
	data: ProductType[];
};

type ServicesProps = BaseProps & {
	isProduct?: false;
	data: ServicesType[];
};

type Props = ProductProps | ServicesProps;

const CardsSliderRecommend: React.FC<Props> = ({
	title,
	data,
	isShowMore,
	description,
	maxWidth,
	isProduct = false,
}) => {
	return (
		<div className={s.container}>
			<ContainerSubTitle
				title={title}
				isShowMore={isShowMore}
				description={description}
			/>
			<div className={s.sliderContainer}>
				<VerticalSlider autoplay maxWidth={maxWidth}>
					{data?.map((item, index) => {
						if (isProduct) {
							return (
								<ProductCardVertical
									key={index}
									product={item as ProductType}
								/>
							);
						} else {
							return (
								<VerticalCard
									key={index + item.name}
									card={item as ServicesType}
								/>
							);
						}
					})}
				</VerticalSlider>
			</div>
		</div>
	);
};

export default CardsSliderRecommend;
