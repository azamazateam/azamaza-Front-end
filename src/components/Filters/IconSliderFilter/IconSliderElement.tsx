import React from 'react';
import s from './IconSliderFilter.module.css';
import {IconSliderFilterType} from '../../../redux/slices/filtersSlice.ts';
type Props = {
	data: IconSliderFilterType;
};
const IconSliderElement: React.FC<Props> = ({data}) => {
	return (
		<div className={s.elementContainer}>
			<div className={s.imageContainer}>
				<img src={data.icon} alt={data.text} />
			</div>
			<div className={s.textContainer}>{data.text}</div>
		</div>
	);
};

export default IconSliderElement;
