import React from 'react';
import s from './AdvantagesCard.module.css';
import {AdvantagesDataType} from '../../../redux/types/homePageTypes.ts';
type Props = {
	card: AdvantagesDataType;
};
const AdvantagesCard: React.FC<Props> = ({card}) => {
	return (
		<div
			style={{backgroundImage: `url(${card.image})`}}
			className={s.bannerContainer}
		>
			<h4 className={s.title}>{card.title ?? ''}</h4>
			<p
				className={`${s.description} ${card.title ? '' : s.noTitleDescription}`}
			>
				{card.description}
			</p>
		</div>
	);
};

export default AdvantagesCard;
