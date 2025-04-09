import React from 'react';
import {serviceAdvantagesData} from './serviceAdvantagesData.ts';
import HorizontalSlider from '../../../../components/Sliders/HorizontalSlider/HorizontalSlider.tsx';
import AdvantagesCard from '../../../../components/Cards/AdvantagesCard/AdvantagesCard.tsx';

const ServiceAdvantages: React.FC = () => {
	return (
		<div>
			<HorizontalSlider pagination>
				{serviceAdvantagesData.map((item, index) => (
					<AdvantagesCard
						key={`ServiceAdvantages${index} + ${item.image}`}
						card={item}
					/>
				))}
			</HorizontalSlider>
		</div>
	);
};

export default ServiceAdvantages;
