import React from 'react';
import s from './MainSearchForm.module.css';
import {Field, Form, Formik, FormikValues} from 'formik';
import {validationSearchForm} from '../../../assets/common/validationSchema.ts';
import {useTranslation} from 'react-i18next';
import ButtonYellow from '../../ButtonYellow/ButtonYellow.tsx';
import {
	BsCalendar3,
	BsCaretDown,
	BsGeoAlt,
	BsSearch,
	BsX,
} from 'react-icons/bs';

const MainSearchForm: React.FC = () => {
	const {t} = useTranslation();
	const initialValues = {
		location: '',
		service: '',
		date: '',
	};
	const handleSubmit = (values: FormikValues) => {
		console.log(values);
	};
	return (
		<div className={s.container}>
			<Formik
				enableReinitialize
				validationSchema={validationSearchForm}
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				{({handleSubmit}) => {
					return (
						<Form onSubmit={handleSubmit} className={s.formContainer}>
							<div className={s.fieldContainer}>
								<BsGeoAlt size={18} className={s.fieldIconLeft} />
								<button className={s.fieldIconRight}>
									<BsX size={18} />
								</button>

								<Field
									name={'location'}
									placeholder={t('Destination, city, address')}
								/>
								{/*{errors.location && touched.location ? (
									<div className={`${s.error} error`}>
										{errors.location ?? ''}
									</div>
								) : null}*/}
							</div>
							<div className={s.fieldContainer}>
								{/*<ServiceSelect />*/}
								<BsSearch size={18} className={s.fieldIconLeft} />
								<button className={s.fieldIconRight}>
									<BsCaretDown size={18} />
								</button>
								<Field
									name={'service'}
									placeholder={t('A service, a meeting, an offer')}
								/>

								{/*	{errors.service && touched.service ? (
									<div className={`${s.error} error`}>
										{errors.service ?? ''}
									</div>
								) : null}*/}
							</div>
							<div className={s.fieldContainer}>
								<BsCalendar3 size={18} className={s.fieldIconLeft} />
								<Field
									name={'date'}
									placeholder={t('Date or period of service registration')}
								/>
								{/*{errors.date && touched.date ? (*/}
								{/*	<div className={`${s.error} error`}>{errors.date ?? ''}</div>*/}
								{/*) : null}*/}
							</div>
							<div className={s.buttonContainer}>
								<ButtonYellow text={t('Search')} type={'submit'} />
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default MainSearchForm;
