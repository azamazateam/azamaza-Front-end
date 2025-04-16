import React from 'react';
import s from './SearchForm.module.css';
import {Field, Form, Formik, FormikValues} from 'formik';
import {useTranslation} from 'react-i18next';
import ButtonYellow from '../../Buttons/ButtonYellow/ButtonYellow.tsx';
import {BsClock, BsPeople} from 'react-icons/bs';
import ServiceSelect from './components/ServiceSelect/ServiceSelect.tsx';
import ResetButton from './components/ResetButton.tsx';
import SearchLocationField from './components/SearchLocationField/SearchLocationField.tsx';
import ChangeDateField from './components/ChangeDateField/ChangeDateField.tsx';

type SearchFormProps = {
	title?: string;
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
	title,
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
			<div className={s.title}>{title ?? ''}</div>
			<Formik
				enableReinitialize
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				{({handleSubmit}) => (
					<Form onSubmit={handleSubmit} className={s.formContainer}>
						{showLocation && <SearchLocationField fieldName={'location'} />}
						{showService && (
							<div className={s.fieldContainer}>
								<ServiceSelect fieldName={'service'} />
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
