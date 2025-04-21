import React from 'react';
import s from './BlockHeader.module.css';
import SwiperControls from '../../../../components/Sliders/SwiperControls/SwiperControls.tsx';

type Props = {
	title: string;
	description: string;
	showMore?: boolean;
	navigateButtons?: boolean;
};
const BlockHeader: React.FC<Props> = ({
	title,
	description,
	showMore,
	navigateButtons,
}) => {
	return (
		<>
			<div className={s.topRow}>
				<div className={s.title}>{title}</div>
				<div className={s.buttonsPanel}>
					{showMore && <div className={s.showMore}>Show More</div>}
					{navigateButtons && <SwiperControls />}
				</div>
			</div>
			<div className={s.description}>{description}</div>
		</>
	);
};

export default BlockHeader;
