import React from 'react';

import s from './SearchResultCard.module.css';
import FavoriteHeart from '../../FavoriteHeart/FavoriteHeart.tsx';
import {useTranslation} from 'react-i18next';
import {BsCheck} from 'react-icons/bs';
import useChangeProduct from '../../../hooks/useChangeProduct.tsx';
import {ServicesType} from '../../../redux/types/commonTypes.ts';
import CardLocation from '../commonCardComponents/CardLocation.tsx';

type Props = {
	service: ServicesType;
};

const SearchResultCard: React.FC<Props> = ({service}) => {
	const {t} = useTranslation();
	const {handleClick} = useChangeProduct(service.id);
	return (
		<div className={s.container} role={'button'} onClick={handleClick}>
			<div className={s.imageContainer}>
				<img src={service.image[0] ?? service.image} alt={service.name} />
				<FavoriteHeart active={service.favorite === 1} side={'left'} />
				<div className={s.shevron}></div>
			</div>
			<div className={s.infoContainer}>
				<div className={s.head}>
					<div className={s.title}>{service.name}</div>
					<div className={s.description}>{service.serviceName}</div>
				</div>
				<div className={s.ratingContainer}>
					<div className={s.rating}>{service.rating}</div>
					<div className={s.views}>{`${service.views} ${t('Review')}`}</div>
				</div>
				<CardLocation location={service.location} size={16} />
				<ul className={s.specialInfoContainer}>
					{service.specialOpportunity?.map((item) => (
						<li className={s.specialInfoElement} key={item.id}>
							<div className={s.specialIcon}>
								<BsCheck color={'#36B715'} size={16} />
							</div>
							<div className={s.specialText}>{item.name}</div>
						</li>
					))}
				</ul>
				<div className={s.priceContainer}>
					<div className={s.priceOld}>{service.oldPrice} €</div>
					<div className={s.priceNew}>{service.newPrice} €</div>
				</div>
			</div>
		</div>
	);
};

export default SearchResultCard;
