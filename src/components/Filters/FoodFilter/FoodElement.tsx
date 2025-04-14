import React from 'react';
import {FoodFilterDataType} from './foodFilterData.tsx';
import s from './FoodFilter.module.css';
type Props = {
	data: FoodFilterDataType;
};
const FoodElement: React.FC<Props> = ({data}) => {
	return (
		<div className={s.elementContainer}>
			<div className={s.imageContainer}>
				<img src={data.icon} alt={data.text} />
			</div>
			<div className={s.textContainer}>{data.text}</div>
		</div>
	);
};

export default FoodElement;
