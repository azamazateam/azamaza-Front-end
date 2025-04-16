import React from 'react';
import s from './UniqueOffersForYou.module.css';
import {useTranslation} from 'react-i18next';
import BlockHeader from '../../pages/Home/components/BlockHeader/BlockHeader.tsx';
import HorizontalSlider from '../Sliders/HorizontalSlider/HorizontalSlider.tsx';
import UniqueOffersCard from '../Cards/UniqueOffersCard/UniqueOffersCard.tsx';
import {UniqueOffersSlideType} from '../../redux/types/userTypes.ts';

type Props = {
	data: UniqueOffersSlideType[] | null;
};
const UniqueOffersForYou: React.FC<Props> = ({data}) => {
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
				<HorizontalSlider pagination loop={false}>
					{data?.map((item, index) => (
						<UniqueOffersCard key={`${index}UniqueOffersCard`} card={item} />
					))}
				</HorizontalSlider>
			</div>
		</div>
	);
};

export default UniqueOffersForYou;
