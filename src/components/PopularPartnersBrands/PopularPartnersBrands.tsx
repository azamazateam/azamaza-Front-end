import React from 'react';
import LabelsCarousel from '../LabelsCarousel/LabelsCarousel.tsx';
import {IconsBrandsDataType} from '../../redux/types/commonTypes.ts';
import {Desktop, Mobile} from '../../assets/utils/responsive.tsx';
import s from './PopularPartnersBrands.module.css';
type Props = {
	title?: string;
	description?: string;
	data: IconsBrandsDataType[] | null;
};
const PopularPartnersBrands: React.FC<Props> = ({data, title, description}) => {
	if (data) {
		const middleIndex = Math.ceil(data.length / 2);
		const heightRow = data.slice(0, middleIndex);
		const bottomRow = data.slice(middleIndex);

		return (
			<div>
				<Mobile>
					<LabelsCarousel
						heightRow={heightRow}
						bottomRow={bottomRow}
						title={title}
						description={description}
					/>
				</Mobile>
				<Desktop>
					<div className={s.brandsContainer}>
						{title && <div className={s.title}>{title}</div>}
						{description && <div className={s.description}>{description}</div>}
						<ul className={s.brandsRow}>
							{heightRow.map((item, index) => (
								<li className={s.brandsItem} key={item.name + index}>
									<img src={item.img} alt={item.name} />
								</li>
							))}
						</ul>
						<ul className={s.brandsRow}>
							{bottomRow.map((item, index) => (
								<li className={s.brandsItem} key={item.name + index}>
									<img src={item.img} alt={item.name} />
								</li>
							))}
						</ul>
					</div>
				</Desktop>
			</div>
		);
	} else return null;
};

export default PopularPartnersBrands;
