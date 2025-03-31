import * as Yup from 'yup';

export const validationFeedbackForm = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	email: Yup.string().email().required('Required'),
	message: Yup.string().min(2, 'Too Short!').max(2500, 'Too Long!'),
});
export const validationSearchForm = Yup.object().shape({
	location: Yup.string().min(2).max(50).required(),
	service: Yup.string(),
	date: Yup.string().min(2, 'Too Short!').max(2500, 'Too Long!'),
});
