import React from 'react';
import s from './FeedbackForm.module.css';
import {useTranslation} from 'react-i18next';
import {Field, Form, Formik, FormikHelpers, FormikValues} from 'formik';
import Button from '../../Buttons/ButtonYellow/Button.tsx';
import {validationFeedbackForm} from '../../../assets/utils/validationSchema.ts';

const FeedbackForm: React.FC = () => {
	const {t} = useTranslation();
	const initialValues = {
		name: '',
		email: '',
		message: '',
	};
	const handleSubmit = (values: FormikValues, helpers: FormikHelpers<any>) => {
		console.log(values);
		helpers.resetForm();
	};

	return (
		<div className={s.container}>
			<div className={s.title}>
				{t('If you have any questions or suggestions, email')}
				<br />
				{t('us')}!
			</div>
			<Formik
				enableReinitialize
				validationSchema={validationFeedbackForm}
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				{({values, handleSubmit, errors, touched, isValid, dirty}) => {
					return (
						<Form onSubmit={handleSubmit} className={s.formContainer}>
							<div className={s.fieldContainer}>
								<Field name={'name'} placeholder={t('Your name')} />
								{errors.name && touched.name ? (
									<div className={`${s.error} error`}>{errors.name ?? ''}</div>
								) : null}
							</div>
							<div className={s.fieldContainer}>
								<Field name={'email'} placeholder={t('Your email address')} />
								{errors.email && touched.email ? (
									<div className={`${s.error} error`}>{errors.email ?? ''}</div>
								) : null}
							</div>
							<div className={`${s.fieldContainer}`}>
								<Field
									name={'message'}
									as="textarea"
									maxLength={2500}
									placeholder={t('Enter your message ...')}
								/>
								<div className={s.textareaCounter}>
									{values.message.length} / 2500
								</div>
								{errors.message && touched.message ? (
									<div className={`${s.error} error`}>
										{errors.message ?? ''}
									</div>
								) : null}
							</div>
							<div className={s.buttonContainer}>
								<Button
									text={t('Send message')}
									type={'submit'}
									disabled={!isValid || !dirty}
								/>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default FeedbackForm;
