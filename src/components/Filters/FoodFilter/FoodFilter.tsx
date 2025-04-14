import React from 'react';
import s from './FoodFilter.module.css';
import {foodFilterData} from './foodFilterData.tsx';
import FoodElement from './FoodElement.tsx';
import VerticalSlider from '../../Sliders/VerticalSlider/VerticalSlider.tsx';
const FoodFilter: React.FC = () => {
	return (
		<div className={s.container}>
			<VerticalSlider maxWidth={83}>
				{foodFilterData.map((foodData) => (
					<FoodElement data={foodData} key={foodData.id} />
				))}{' '}
			</VerticalSlider>
		</div>
	);
};

export default FoodFilter;
