import React from 'react';
import s from './RatingLines.module.css';
import RatingRow from './RatingRow.tsx';
import {PopularServicesType} from '../../../../../../redux/types/homePageTypes.ts';
type Props = {
	service: PopularServicesType;
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
