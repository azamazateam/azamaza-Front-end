import React from 'react';
import LabelsCarousel from '../LabelsCarousel/LabelsCarousel.tsx';
import {IconsBrandsDataType} from '../../redux/types/commonTypes.ts';
type Props = {
	title?: string;
	data: IconsBrandsDataType[] | null;
};
const PopularPartnersBrands: React.FC<Props> = ({data, title}) => {
	if (data) {
		const middleIndex = Math.ceil(data.length / 2);
		const heightRow = data.slice(0, middleIndex);
		const bottomRow = data.slice(middleIndex);

		return (
			<div>
				<LabelsCarousel
					heightRow={heightRow}
					bottomRow={bottomRow}
					title={title}
				/>
			</div>
		);
	} else return null;
};

export default PopularPartnersBrands;
