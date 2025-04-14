import React from 'react';
import BlockHeader from '../../../../Home/components/BlockHeader/BlockHeader.tsx';
import {useTranslation} from 'react-i18next';
import {selectionsData} from './SelectionsData.ts';
import FilterOfferCard from '../../../../../components/Cards/FilterOfferCard/FilterOfferCard.tsx';
import s from '../../../Service.module.css';
const AzamazaSelections: React.FC = () => {
	const {t} = useTranslation();

	return (
		<div>
			<BlockHeader
				title={t('Azamaza selections')}
				description={t('We have selected the best deals for you')}
			/>
			<div className={s.selectionCardsContainer}>
				{selectionsData.map((selection) => (
					<FilterOfferCard key={selection.id} data={selection} />
				))}
			</div>
		</div>
	);
};

export default AzamazaSelections;
