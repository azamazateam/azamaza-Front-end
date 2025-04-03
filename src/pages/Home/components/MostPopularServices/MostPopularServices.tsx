import React from 'react';
import BlockHeader from '../BlockHeader/BlockHeader.tsx';
import {useTranslation} from 'react-i18next';
import s from './MostPopularServices.module.css';
import VerticalCard from '../../../../components/Cards/VerticalCard/VerticalCard.tsx';
import VerticalSlider from '../../../../components/Sliders/VerticalSlider/VerticalSlider.tsx';
import {mostPopularServicesData} from './mostPopularServicesData.ts';

const MostPopularServices: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div className={s.container}>
			<BlockHeader
				title={t('The most popular services')}
				description={t(
					'Plan your trip easily and quickly, with the best and unique offers',
				)}
			/>
			<div className={s.cardsContainer}>
				<VerticalSlider>
					{mostPopularServicesData.map((service, index) => (
						<VerticalCard card={service} key={index + service.name} />
					))}
				</VerticalSlider>
			</div>
		</div>
	);
};

export default MostPopularServices;
