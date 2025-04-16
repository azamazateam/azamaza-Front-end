import React from 'react';
import BlockHeader from '../../pages/Home/components/BlockHeader/BlockHeader.tsx';
import FilterOfferCard from '../Cards/FilterOfferCard/FilterOfferCard.tsx';
import s from '../../pages/Services/Service.module.css';
import {AzamazaSelection} from '../../redux/slices/azamazaSelectionsSlice.ts';
import ButtonYellow from '../Buttons/ButtonYellow/ButtonYellow.tsx';

type Props = {
	data: AzamazaSelection[] | null;
	title: string;
	description: string;
	buttonText?: string;
};
const AzamazaSelections: React.FC<Props> = ({
	data,
	title,
	description,
	buttonText,
}) => {
	return (
		<div>
			<BlockHeader title={title} description={description} />
			<div className={s.selectionCardsContainer}>
				{data?.map((selection) => (
					<FilterOfferCard key={selection.id} data={selection} />
				))}
			</div>
			{buttonText && (
				<div className={s.buttonContainer}>
					<ButtonYellow text={buttonText} type={'button'} />
				</div>
			)}
		</div>
	);
};

export default AzamazaSelections;
