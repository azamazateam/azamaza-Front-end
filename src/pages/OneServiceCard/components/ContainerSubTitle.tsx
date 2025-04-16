import React from 'react';
import s from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.module.css';
import {useTranslation} from 'react-i18next';
type Props = {
	title: string;
	isShowMore?: boolean;
	description?: string;
};
const ContainerSubTitle: React.FC<Props> = ({
	title,
	isShowMore,
	description,
}) => {
	const {t} = useTranslation();
	return (
		<div className={s.headPanel}>
			<div className={s.titleContainer}>
				<div className={s.title}> {title}</div>
				<div className={s.description}>{description ?? ''}</div>
			</div>
			{isShowMore && (
				<div className={s.button}>
					<button>{t('Show more')}</button>
				</div>
			)}
		</div>
	);
};

export default ContainerSubTitle;
