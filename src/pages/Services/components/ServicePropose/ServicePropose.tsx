import React from 'react';
import HorizontalSlider from '../../../../components/Sliders/HorizontalSlider/HorizontalSlider.tsx';
import ServiceProposeCard from '../../../../components/Cards/TopServicePropose/ServiceProposeCard.tsx';
import {serviceProposeData} from './serviceProposeData.ts';

const ServicePropose: React.FC = () => {
	return (
		<div>
			<HorizontalSlider pagination>
				{serviceProposeData.map((item, index) => (
					<ServiceProposeCard key={`${index}${item.title}`} card={item} />
				))}
			</HorizontalSlider>
		</div>
	);
};

export default ServicePropose;
