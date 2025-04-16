import React from 'react';
import s from './RatingLines.module.css';
import RatingRow from './RatingRow.tsx';
import {ServicesType} from '../../../../../../redux/types/commonTypes.ts';
type Props = {
	service: ServicesType;
};
const RatingLines: React.FC<Props> = ({service}) => {
	return (
		<ul className={s.ratingContainer}>
			<li>
				<RatingRow service={service} ratingName={'Interesting excursion'} />
				<RatingRow service={service} ratingName={'Price/quality ratio'} />
				<RatingRow service={service} ratingName={'Guide rating'} />
				<RatingRow service={service} ratingName={'Location'} />
			</li>
		</ul>
	);
};

export default RatingLines;
