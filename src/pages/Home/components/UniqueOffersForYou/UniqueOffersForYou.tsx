import React from 'react';
import s from './UniqueOffersForYou.module.css';
import {useTranslation} from 'react-i18next';
import UniqueOffersSlider from './UniqueOffersSlider/UniqueOffersSlider.tsx';
import {uniqueOffersSlideData} from './UniqueOffersSlider/uniqueOffersSlideData.ts';
import BlockHeader from '../BlockHeader/BlockHeader.tsx';
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
				<UniqueOffersSlider data={uniqueOffersSlideData} />
			</div>
		</div>
	);
};

export default UniqueOffersForYou;
