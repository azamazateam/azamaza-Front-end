import React from 'react';
import s from './SubscriptionsCard.module.css';
import {OurSubscriptionsData} from '../../ourSubscriptionsData.ts';

type Props = {
	data: OurSubscriptionsData;
};
const SubscriptionsCard: React.FC<Props> = ({data}) => {
	return (
		<div className={s.container}>
			<div className={s.infoContainer}>
				<div className={s.topInfo}>
					<div className={s.topInfoTitle}>{data.type}</div>
					{data.specialInfo && (
						<div className={s.topInfoSpecial}>{data.specialInfo}</div>
					)}
				</div>
				<ul className={s.bottomInfo}>
					{data.infoList.map((item, i) => (
						<li key={i + item}>{item}</li>
					))}
				</ul>
			</div>
			<div className={s.priceContainer}>
				<div className={s.priceMain}>{data.mainPrice}</div>
				<div className={s.priceActual}>{data.actualPrice}</div>
				<div className={s.month}>{data.quantityMonth}</div>
			</div>
		</div>
	);
};

export default SubscriptionsCard;
