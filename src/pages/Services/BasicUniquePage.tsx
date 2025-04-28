import React from 'react';
import ServiceHead from './components/ServiceHead/ServiceHead.tsx';

import s from './Service.module.css';
import CategoriesSlider from '../../components/CategoriesSlider/CategoriesSlider.tsx';
import ServicePropose from './components/ServicePropose/ServicePropose.tsx';
import SearchForm, {
	SearchFormProps,
} from '../../components/Forms/SearchForm/SearchForm.tsx';
import LocationBlueButton from '../../components/Buttons/NextPositionButton/LocationBlueButton.tsx';
import IconSliderFilter from '../../components/Filters/IconSliderFilter/IconSliderFilter.tsx';
import AzamazaSelections from '../../components/AzamazaSelections/AzamazaSelections.tsx';
import UniqueOffersForYou from '../../components/UniqueOffersForYou/UniqueOffersForYou.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store.ts';

type Props = {
	mainTitle: string;
	locationButtonText: string;
	azaSelectionsDescription: string;
	searchFormSettings: SearchFormProps;
	background: string;
};
const BasicUniquePage: React.FC<Props> = ({
	mainTitle,
	locationButtonText,
	azaSelectionsDescription,
	searchFormSettings,
	background,
}) => {
	const azamazaSelections = useSelector(
		(state: RootState) => state.azamazaSelectionsData.azamazaSelections,
	);
	const uniqueOfferForYou = useSelector(
		(state: RootState) => state.user.uniqueOfferForYou,
	);
	const proposeList = useSelector(
		(state: RootState) => state.proposeData.proposeList,
	);
	return (
		<>
			<ServiceHead size={342} title={mainTitle} background={background} />
			<div className={s.container24}>
				<CategoriesSlider />
			</div>
			<div className={`${s.container24} ${s.padding}`}>
				<ServicePropose data={proposeList} />
			</div>
			<div className={`${s.container24} ${s.padding}`}>
				<SearchForm {...searchFormSettings} />
				<div className={s.container12}>
					<LocationBlueButton text={locationButtonText} />
				</div>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<IconSliderFilter />
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<AzamazaSelections
					data={azamazaSelections}
					description={azaSelectionsDescription}
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<UniqueOffersForYou data={uniqueOfferForYou} />
			</div>
		</>
	);
};

export default BasicUniquePage;
