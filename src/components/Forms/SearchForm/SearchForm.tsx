import React from 'react';
import s from './SearchForm.module.css';
import {Field, Form, Formik, FormikValues} from 'formik';
import {validationSearchForm} from '../../../assets/common/validationSchema.ts';
import {useTranslation} from 'react-i18next';
import ButtonYellow from '../../ButtonYellow/ButtonYellow.tsx';
import {BsCalendar3, BsClock, BsPeople} from 'react-icons/bs';
import ServiceSelect from './components/ServiceSelect/ServiceSelect.tsx';
import ResetButton from './components/ResetButton.tsx';
import SearchLocationField from './components/SearchLocationField/SearchLocationField.tsx';

type SearchFormProps = {
	showLocation?: boolean;
	showService?: boolean;
	showDate?: boolean;
	approximateTime?: boolean;
	numberOfPeople?: boolean;
	onSubmitFn?: (values: FormikValues) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({
	showLocation = false,
	showService = false,
	showDate = false,
	approximateTime = false,
	numberOfPeople = false,
	onSubmitFn,
}) => {
	const {t} = useTranslation();

	const initialValues = {
		location: '',
		service: '',
		date: '',
		approximateTime: '',
		numberOfPeople: '',
	};

	const handleSubmit = (values: FormikValues) => {
		if (onSubmitFn) {
			onSubmitFn(values);
		} else {
			console.log('error' + values);
		}
	};

	return (
		<div className={s.container}>
			<Formik
				enableReinitialize
				validationSchema={validationSearchForm}
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				{({handleSubmit, values}) => (
					<Form onSubmit={handleSubmit} className={s.formContainer}>
						{showLocation && <SearchLocationField value={values.location} />}
						{showService && (
							<div className={s.fieldContainer}>
								<ServiceSelect />
							</div>
						)}
						{showDate && (
							<div className={s.fieldContainer}>
								<div className={s.containerInput} role={'button'} tabIndex={0}>
									<div>
										<BsCalendar3 size={18} />
									</div>
									<div className={s.calendarValue}>
										{values.date
											? values.date
											: t('Date or period of service registration')}
									</div>
									<ResetButton fieldName={'date'} />
								</div>
							</div>
						)}
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
						<div className={s.buttonContainer}>
							<ButtonYellow text={t('Search')} type={'submit'} />
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SearchForm;
