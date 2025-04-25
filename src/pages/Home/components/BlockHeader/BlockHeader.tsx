import React from 'react';
import s from './BlockHeader.module.css';
import SwiperControls from '../../../../components/Sliders/SwiperControls/SwiperControls.tsx';
import {useTranslation} from 'react-i18next';

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
	const {t} = useTranslation();
	return (
		<>
			<div className={s.topRow}>
				<div className={s.title}>{title}</div>
				<div className={s.buttonsPanel}>
					{showMore && <div className={s.showMore}>{t('Show More')}</div>}
					{navigateButtons && <SwiperControls />}
				</div>
			</div>
			<div className={s.description}>{description}</div>
		</>
	);
};

export default BlockHeader;
