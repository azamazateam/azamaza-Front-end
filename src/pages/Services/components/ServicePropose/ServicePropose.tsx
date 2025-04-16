import React from 'react';
import HorizontalSlider from '../../../../components/Sliders/HorizontalSlider/HorizontalSlider.tsx';
import ServiceProposeCard from '../../../../components/Cards/TopServicePropose/ServiceProposeCard.tsx';
import {ServiceProposeType} from '../../../../redux/slices/proposeSlice.ts';

type Props = {
	data: ServiceProposeType[] | null;
};
const ServicePropose: React.FC<Props> = ({data}) => {
	return (
		<div>
			<HorizontalSlider pagination>
				{data?.map((item, index) => (
					<ServiceProposeCard key={`${index}${item.title}`} card={item} />
				))}
			</HorizontalSlider>
		</div>
	);
};

export default ServicePropose;
