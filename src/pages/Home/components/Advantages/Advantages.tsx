import React from 'react';
import SliderWithPagination from '../../../../components/Sliders/SliderWithPagination/SliderWithPagination.tsx';
import {advantagesData} from './advantagesData.ts';

const Advantages: React.FC = () => {
	return (
		<div>
			<SliderWithPagination data={advantagesData} />
		</div>
	);
};

export default Advantages;
