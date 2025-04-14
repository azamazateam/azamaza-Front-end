import React from 'react';
import HorizontalSlider from '../../../../components/Sliders/HorizontalSlider/HorizontalSlider.tsx';
import AdvantagesCard from '../../../../components/Cards/AdvantagesCard/AdvantagesCard.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store.ts';

const Advantages: React.FC = () => {
	const advantagesData = useSelector(
		(state: RootState) => state.homePage.advantage,
	);
	return (
		<div>
			<HorizontalSlider pagination>
				{advantagesData.map((advantage, index) => (
					<AdvantagesCard card={advantage} key={`${index}Advantages`} />
				))}
			</HorizontalSlider>
		</div>
	);
};

export default Advantages;
