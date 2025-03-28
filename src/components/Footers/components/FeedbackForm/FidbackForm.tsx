import React, {useState} from 'react';
import s from './FeedbackForm.module.css';
import {useTranslation} from 'react-i18next';
import {Field, Form, Formik, FormikHelpers, FormikValues} from 'formik';
import ButtonYellow from '../../../ButtonYellow/ButtonYellow.tsx';

const FeedbackForm: React.FC = () => {
	const {t} = useTranslation();

	const [count, setCount] = useState(0);
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
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				{({values, handleSubmit, status, setFieldValue}) => {
					return (
						<Form onSubmit={handleSubmit} className={s.formContainer}>
							<div className={s.fieldContainer}>
								<Field name={'name'} placeholder={t('Your name')} />
							</div>
							<div className={s.fieldContainer}>
								<Field name={'email'} placeholder={t('Your email address')} />
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
							</div>
							<div className={s.buttonContainer}>
								<ButtonYellow text={t('Send message')} type={'submit'} />
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default FeedbackForm;
