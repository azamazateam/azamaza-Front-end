import React, {useEffect} from 'react';
import {
	serviceAdvantagesData,
	serviceAdvantagesDataMobile,
} from './serviceAdvantagesData.ts';
import HorizontalSlider from '../../../../components/Sliders/HorizontalSlider/HorizontalSlider.tsx';
import AdvantagesCard from '../../../../components/Cards/AdvantagesCard/AdvantagesCard.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store.ts';
import {setServiceAdvantage} from '../../../../redux/slices/homeSlice.ts';
import {useMediaQuery} from 'react-responsive';

const ServiceAdvantages: React.FC = () => {
	const dispatch = useDispatch();
	const isMobile = useMediaQuery({maxWidth: 600});
	const serviceAdvantages = useSelector(
		(state: RootState) => state.homePage.serviceAdvantages,
	);

	useEffect(() => {
		dispatch(
			setServiceAdvantage(
				isMobile ? serviceAdvantagesData : serviceAdvantagesDataMobile,
			),
		);
	}, [dispatch]);

	return (
		<div>
			<HorizontalSlider pagination>
				{serviceAdvantages?.map((item, index) => (
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
