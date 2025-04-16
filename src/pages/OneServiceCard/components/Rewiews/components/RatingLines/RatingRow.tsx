import React from 'react';
import s from './RatingLines.module.css';
import RatingBar from './RatingBar.tsx';
import {ServicesType} from '../../../../../../redux/types/commonTypes.ts';

type Props = {
	service: ServicesType;
	ratingName: string;
};
const RatingRow: React.FC<Props> = ({service, ratingName}) => {
	return (
		<div className={s.lineContainer}>
			<div className={s.headPanel}>
				<div className={s.name}>{ratingName}</div>
				<div className={s.ratingNumber}>{service.rating}</div>
			</div>
			<div className={s.rowContainer}>
				<RatingBar rating={service.rating} max={10} />
			</div>
		</div>
	);
};

export default RatingRow;
