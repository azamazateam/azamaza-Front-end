export type OurSubscriptionsData = {
	type: 'Basic' | 'Premium' | 'Elite';
	specialInfo: string | null;
	infoList: string[];
	mainPrice: string;
	actualPrice: string;
	quantityMonth: string;
};
export const ourSubscriptionsData: OurSubscriptionsData[] = [
	{
		type: 'Basic',
		specialInfo: 'affordable options',
		actualPrice: '€ 1.99',
		infoList: ['Free until January 31, 2025', 'Subscription is for 2026'],
		mainPrice: '€ 99',
		quantityMonth: '12 month',
	},
	{
		type: 'Premium',
		specialInfo: 'most popular',
		actualPrice: '€ 4.99',
		infoList: ['Free until January 31, 2025', 'Subscription is for 2026'],
		mainPrice: '€ 499',
		quantityMonth: '12 month',
	},
	{
		type: 'Elite',
		specialInfo: null,
		actualPrice: '€ 9.99',
		infoList: ['Free until January 31, 2025', 'Subscription is for 2026'],
		mainPrice: '€ 999',
		quantityMonth: '12 month',
	},
];
