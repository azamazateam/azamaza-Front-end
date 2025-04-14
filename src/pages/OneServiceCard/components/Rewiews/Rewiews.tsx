import React from 'react';
import ContainerSubTitle from '../ContainerSubTitle.tsx';
import {useTranslation} from 'react-i18next';
import ExcellentRating from './components/ExcellentRating.tsx';
import RatingLines from './components/RatingLines/RatingLines.tsx';
import {PopularServicesType} from '../../../../redux/types/homePageTypes.ts';
type Props = {
	service: PopularServicesType;
};
const Reviews: React.FC<Props> = ({service}) => {
	const {t} = useTranslation();
	return (
		<div>
			<ContainerSubTitle title={t('Reviews')} isShowMore={false} />
			<ExcellentRating service={service} />
			<RatingLines service={service} />
		</div>
	);
};

export default Reviews;
