import {CategoriesIconsType} from './CategoriesIcons.tsx';

export const categories: {
	name: string;
	icon: CategoriesIconsType;
	link: string | null;
	disabled: 1 | 0;
}[] = [
	{
		name: 'excursion',
		icon: 'excursion',
		link: '/excursion',
		disabled: 0,
	},
	{
		name: 'photography',
		icon: 'photography',
		link: '/photography',
		disabled: 0,
	},
	{
		name: 'hotels',
		icon: 'hotels',
		link: '/hotels',
		disabled: 0,
	},
	{
		name: 'restaurants',
		icon: 'restaurants',
		link: '/restaurants',
		disabled: 0,
	},
	{
		name: 'marketplaces',
		icon: 'marketplaces',
		link: '/marketplaces',
		disabled: 0,
	},
	{
		name: 'rent',
		icon: 'rent',
		link: '/rent',
		disabled: 0,
	},
	{
		name: 'referral program',
		icon: 'referralProgram',
		link: '/referral-program',
		disabled: 0,
	},
	{
		name: 'meet',
		icon: 'meet',
		link: '/meet',
		disabled: 1,
	},
	{
		name: 'fueling',
		icon: 'fueling',
		link: '/fueling',
		disabled: 1,
	},
	{
		name: 'coupon',
		icon: 'coupon',
		link: '/coupon',
		disabled: 1,
	},
	{
		name: 'app subscription',
		icon: 'appSubscription',
		link: '/app-subscription',
		disabled: 1,
	},
	{
		name: 'taxi',
		icon: 'taxi',
		link: '/taxi',
		disabled: 1,
	},
	{
		name: 'transfer',
		icon: 'transfer',
		link: '/transfer',
		disabled: 1,
	},
];
