import React, {useState} from 'react';
import s from './SubscriptionsCard.module.css';
import DropDownInfo from '../DropDownInfo/DropDownInfo.tsx';
import {AnimatePresence} from 'framer-motion';
import {backgroundsMap} from './backgroundsMap.ts';
import {OurSubscriptionsData} from '../../../../../../redux/types/homePageTypes.ts';

type Props = {
	data: OurSubscriptionsData;
};

const SubscriptionsCard: React.FC<Props> = ({data}) => {
	const [open, setOpen] = useState<boolean>(false);
	const onOpenMenu = () => {
		setOpen(!open);
	};
	const backgroundFounder = () => {
		const background = backgroundsMap.find((b) => b.type === data.type);
		return background?.background;
	};

	return (
		<>
			<div
				className={`${s.container}`}
				style={{background: open ? backgroundFounder() : 'none'}}
				onClick={onOpenMenu}
				role="button"
				tabIndex={0}
			>
				<div className={s.infoContainer}>
					<div className={`${s.topInfo} `}>
						<div className={`${s.topInfoTitle} ${open ? s.active : ''}`}>
							{data.type}
						</div>
						{data.specialInfo && (
							<div className={s.topInfoSpecial}>{data.specialInfo}</div>
						)}
					</div>
					<ul className={`${s.bottomInfo} ${open ? s.active : ''}`}>
						{data.infoList.map((item, i) => (
							<li key={i + item}>{item}</li>
						))}
					</ul>
				</div>
				<div className={s.priceContainer}>
					<div className={`${s.priceMain} ${open ? s.active : ''}`}>
						{data.mainPrice}
					</div>
					<div className={`${s.priceActual} ${open ? s.active : ''}`}>
						{data.actualPrice}
					</div>
					<div className={`${s.month} ${open ? s.active : ''}`}>
						{data.quantityMonth}
					</div>
				</div>
			</div>
			<AnimatePresence>
				{open && <DropDownInfo type={data.type} />}
			</AnimatePresence>
		</>
	);
};

export default SubscriptionsCard;
