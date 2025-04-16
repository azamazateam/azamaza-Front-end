import React, {useEffect} from 'react';
import Main from '../../components/Main/Main.tsx';
import Header from '../../components/Header/Header.tsx';
import FooterSmallGrey from '../../components/Footers/FooterSmallGrey.tsx';
import s from './SearchResult.module.css';
import SearchLocationField from '../../components/Forms/SearchForm/components/SearchLocationField/SearchLocationField.tsx';
import {Form, Formik, FormikValues} from 'formik';
import SortFilterPanel from './components/SortFilterPanel/SortFilterPanel.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store.ts';
import SearchResultCard from '../../components/Cards/SearchResultCard/SearchResultCard.tsx';
import {setSearchResults} from '../../redux/slices/searchResultSlice.ts';
import {servicesListData} from '../../mocks/ServicesListData.ts';

import {useQuery} from '../../hooks/useQuery.tsx';
import {ServicesType} from '../../redux/types/commonTypes.ts';
import RowQuickFilter from '../../components/Filters/RowQuickFilter/RowQuickFilter.tsx';

const SearchResult: React.FC = () => {
	const query = useQuery();
	const service = query.get('service');
	const dispatch = useDispatch();
	const searchResults = useSelector(
		(state: RootState) => state.searchResults.searchResults,
	);
	const handleSubmit = (values: FormikValues) => {
		console.log(values);
	};
	useEffect(() => {
		if (service) {
			const serviceItems = servicesListData.filter(
				(s: ServicesType) => s.serviceName === service,
			);
			dispatch(setSearchResults(serviceItems));
		} else {
			dispatch(setSearchResults(servicesListData));
		}
	}, []);
	return (
		<>
			<Header />
			<Main>
				<div className={s.container}>
					<div className={s.inputContainer}>
						<Formik initialValues={{location: ''}} onSubmit={handleSubmit}>
							<Form>
								<SearchLocationField
									fieldName={'location'}
									border={'4px solid #F1D246'}
								/>
								<div className={s.date}>San, 01 November, 2024</div>
							</Form>
						</Formik>
					</div>
					<div className={s.container24}>
						<SortFilterPanel />
					</div>
					<div className={s.container32}>
						<RowQuickFilter />
					</div>
					<div className={s.container32}>
						<div className={s.resultContainer}>
							{searchResults?.map((service) => (
								<SearchResultCard service={service} key={service.id} />
							))}
						</div>
					</div>
				</div>
			</Main>
			<FooterSmallGrey />
		</>
	);
};

export default SearchResult;
