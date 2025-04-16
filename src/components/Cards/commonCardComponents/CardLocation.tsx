import React from 'react';
import s from '../SearchResultCard/SearchResultCard.module.css';
import {BsGeoAlt} from 'react-icons/bs';

const CardLocation: React.FC<{location: string; size?: number}> = ({
	location,
	size,
}) => {
	return (
		<div className={s.locationContainer}>
			<div className={s.locationIcon}>
				<BsGeoAlt size={size} />
			</div>
			<div className={s.locationName}>{location}</div>
		</div>
	);
};

export default CardLocation;
