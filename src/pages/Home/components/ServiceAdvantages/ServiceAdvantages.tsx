import React from 'react';
import SliderWithPagination from '../../../../components/Sliders/SliderWithPagination/SliderWithPagination.tsx';
import {serviceAdvantagesData} from './serviceAdvantagesData.ts';

const ServiceAdvantages: React.FC = () => {
	return (
		<div>
			<SliderWithPagination data={serviceAdvantagesData} />
		</div>
	);
};

export default ServiceAdvantages;
