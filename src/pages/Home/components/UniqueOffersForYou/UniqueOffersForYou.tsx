import React from 'react';
import s from './UniqueOffersForYou.module.css';
import {useTranslation} from 'react-i18next';
import {uniqueOffersSlideData} from './UniqueOffersSlider/uniqueOffersSlideData.ts';
import BlockHeader from '../BlockHeader/BlockHeader.tsx';
import HorizontalSlider from '../../../../components/Sliders/HorizontalSlider/HorizontalSlider.tsx';
import UniqueOffersCard from '../../../../components/Cards/UniqueOffersCard/UniqueOffersCard.tsx';
const UniqueOffersForYou: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div className={s.container}>
			<BlockHeader
				title={t('Unique offers for you')}
				description={t(
					'Promotions, discounts and special offers that you will receive only from us',
				)}
			/>
			<div className={s.slider}>
				<HorizontalSlider pagination>
					{uniqueOffersSlideData.map((item, index) => (
						<UniqueOffersCard key={`${index}UniqueOffersCard`} card={item} />
					))}
				</HorizontalSlider>
			</div>
		</div>
	);
};

export default UniqueOffersForYou;
