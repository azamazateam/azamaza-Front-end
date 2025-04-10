import React from 'react';
import s from './SearchLocationPopup.module.css';
import {searchLocationData} from './searchLocationData.ts';
import {BsGeoAlt} from 'react-icons/bs';

const SearchLocationRecommendList: React.FC = () => {
	return (
		<ul className={s.popularOffers}>
			{searchLocationData.map((location) => (
				<li key={location.id} className={s.popularOfferEl}>
					<button>
						<div className={s.icon}>
							<BsGeoAlt size={20} />
						</div>
						<div className={s.nameContainer}>
							<div className={s.name}>{location.serviceName}</div>
							<div className={s.location}>{location.location}</div>
						</div>
					</button>
				</li>
			))}
		</ul>
	);
};

export default SearchLocationRecommendList;
