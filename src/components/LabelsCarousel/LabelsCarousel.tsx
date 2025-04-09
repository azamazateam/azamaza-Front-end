import React from 'react';
import s from './LabelsCarousel.module.css';
import LabelCarousel from '../Sliders/LabelCarousel/LabelCarousel.tsx';
import {
	carouselData1,
	carouselData2,
} from '../Sliders/LabelCarousel/carouselData1.tsx';
type Props = {
	title?: string;
};
const LabelsCarousel: React.FC<Props> = ({title}) => {
	return (
		<div className={s.container}>
			{title && <div className={s.title}>{title}</div>}
			<LabelCarousel data={carouselData1} />
			<LabelCarousel data={carouselData2} revers />
		</div>
	);
};

export default LabelsCarousel;
