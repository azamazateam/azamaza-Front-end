import React from 'react';
import s from './IconSliderFilter.module.css';
import IconSliderElement from './IconSliderElement.tsx';
import VerticalSlider from '../../Sliders/VerticalSlider/VerticalSlider.tsx';

import {IconSliderFilterType} from '../../../redux/slices/filtersSlice.ts';

type Props = {
	filterData: IconSliderFilterType[] | null;
	loop?: boolean;
};
const IconSliderFilter: React.FC<Props> = ({filterData, loop}) => {
	return (
		<div className={s.container}>
			<VerticalSlider maxWidth={83} loop={loop}>
				{filterData?.map((foodData) => (
					<IconSliderElement data={foodData} key={foodData.id} />
				))}{' '}
			</VerticalSlider>
		</div>
	);
};

export default IconSliderFilter;
