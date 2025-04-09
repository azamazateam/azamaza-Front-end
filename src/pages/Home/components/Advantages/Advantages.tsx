import React from 'react';
import {advantagesData, AdvantagesDataType} from './advantagesData.ts';
import HorizontalSlider from '../../../../components/Sliders/HorizontalSlider/HorizontalSlider.tsx';
import AdvantagesCard from '../../../../components/Cards/AdvantagesCard/AdvantagesCard.tsx';

const Advantages: React.FC = () => {
	return (
		<div>
			<HorizontalSlider pagination>
				{advantagesData.map((advantage: AdvantagesDataType, index) => (
					<AdvantagesCard card={advantage} key={`${index}Advantages`} />
				))}
			</HorizontalSlider>
		</div>
	);
};

export default Advantages;
