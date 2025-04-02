export type TopFAQdataType = {
	value: string;
	description: string;
	list: string[] | null;
};
export const topFAQdata = [
	{
		value: 'How do you become one of the “Founders” of the platform?',
		description:
			'To become one of the “Founders” of the Platform - you need to be among the first 10 000 who will subscribe to our project. After that you will get access to unique opportunities',
		list: null,
	},
	{
		value: 'On what principle the referral program and group creation works',
		description:
			'To become a referral of our platform you need to make any of the subscriptions to our platform, after that you will receive your referral link on which you can invite users to our platform. Each user who followed your link will be included in your “Referral Group” and for each subscription you will receive Azapoints - which can be exchanged for unique offers, discounts, services',
		list: null,
	},
	{
		value: 'What does pre-subscribing to the platform get me?',
		description:
			'Pre-subscription to the platform gives you very favorable conditions for further use of our platform! Depending on the subscription you get more or less privileges for the preferential subscription term',
		list: null,
	},
	{
		value: 'Can I not subscribe? What services will be available to me?',
		description:
			'Standard services will be available to you, subject to your registration on the platform',
		list: null,
	},
	{
		list: [
			'Name of the company, and the range of services you provide',
			'Describe the services you want to present to users on our platform',
			'Approximate number of clients your company serves',
			'Actual address of your central office',
			'Exactly what services do you want from our platform?',
		],
		value:
			'How to become one of the “Platinum Partners” and get unique opportunities?',
		description:
			'To become one of the first partners and get unique opportunities that will be fixed for all the time you use our platform, you need to write us an e-mail request, where you need to specify:',
	},
];
