import React from 'react';
import s from './SearchForm.module.css';
import {Field, Form, Formik, FormikValues} from 'formik';
import {useTranslation} from 'react-i18next';
import Button from '../../Buttons/Button/Button.tsx';
import {BsClock, BsPeople, BsSearch} from 'react-icons/bs';
import ServiceSelect from './components/ServiceSelect/ServiceSelect.tsx';
import ResetButton from './components/ResetButton.tsx';
import SearchLocationField from './components/SearchLocationField/SearchLocationField.tsx';
import ChangeDateField from './components/ChangeDateField/ChangeDateField.tsx';
import {useMediaQuery} from 'react-responsive';

export type SearchFormProps = {
	title?: string;
	showLocation?: boolean;
	showService?: boolean;
	showRentService?: boolean;
	showDate?: boolean;
	approximateTime?: boolean;
	numberOfPeople?: boolean;
	searchByName?: boolean;
	onSubmitFn?: (values: FormikValues) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({
	showLocation = false,
	showService = false,
	showRentService = false,
	showDate = false,
	approximateTime = false,
	numberOfPeople = false,
	onSubmitFn,
	title,
	searchByName = false,
}) => {
	const {t} = useTranslation();
	const isMobile = useMediaQuery({maxWidth: 600});
	const initialValues = {
		location: '',
		service: '',
		date: '',
		approximateTime: '',
		numberOfPeople: '',
		searchText: '',
		rentService: '',
	};

	const handleSubmit = (values: FormikValues) => {
		if (onSubmitFn) {
			onSubmitFn(values);
		} else {
			console.log('error' + values);
		}
	};

	return (
		<div className={`${s.container}`}>
			{title && <div className={s.title}>{title}</div>}
			<Formik
				enableReinitialize
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				{({handleSubmit}) => (
					<Form onSubmit={handleSubmit} className={s.formContainer}>
						{showLocation && <SearchLocationField fieldName={'location'} />}
						{(showService || showRentService) && (
							<div className={s.fieldContainer}>
								<ServiceSelect
									fieldName={showService ? 'service' : 'rentService'}
								/>
							</div>
						)}
						{showDate && <ChangeDateField fieldName={'date'} />}
						{approximateTime && (
							<div className={s.fieldContainer}>
								<BsClock size={18} className={s.fieldIconLeft} />
								<ResetButton fieldName={'approximateTime'} />
								<Field
									name={'approximateTime'}
									placeholder={t('Approximate time')}
								/>
							</div>
						)}
						{numberOfPeople && (
							<div className={s.fieldContainer}>
								<BsPeople size={18} className={s.fieldIconLeft} />
								<ResetButton fieldName={'numberOfPeople'} />
								<Field
									name={'numberOfPeople'}
									placeholder={t('Number of people')}
								/>
							</div>
						)}
						{searchByName && (
							<div className={s.fieldContainer}>
								<BsSearch size={18} className={s.fieldIconLeft} />
								<ResetButton fieldName={'searchText'} />
								<Field
									name={'searchText'}
									placeholder={t('Name of product or store')}
								/>
							</div>
						)}
						<div className={s.buttonContainer}>
							<Button
								text={'Search'}
								type={'submit'}
								color={isMobile ? 'yellow' : 'blue'}
							/>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SearchForm;
