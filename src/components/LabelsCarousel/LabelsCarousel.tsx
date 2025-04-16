import React from 'react';
import s from './LabelsCarousel.module.css';
import LabelCarousel from '../Sliders/LabelCarousel/LabelCarousel.tsx';
import {IconsBrandsDataType} from '../../redux/types/commonTypes.ts';

type Props = {
	title?: string;
	heightRow: IconsBrandsDataType[];
	bottomRow: IconsBrandsDataType[];
};
const LabelsCarousel: React.FC<Props> = ({title, heightRow, bottomRow}) => {
	return (
		<div className={s.container}>
			{title && <div className={s.title}>{title}</div>}
			<LabelCarousel data={heightRow} />
			<LabelCarousel data={bottomRow} revers />
		</div>
	);
};

export default LabelsCarousel;
