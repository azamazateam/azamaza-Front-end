import {CategoriesIconsType} from './CategoriesIcons.tsx';

export const categories: {
	name: string;
	icon: CategoriesIconsType;
	link: string | null;
}[] = [
	{
		name: 'all',
		icon: 'all',
		link: null,
	},
	{
		name: 'excursion',
		icon: 'excursion',
		link: '/excursion',
	},
	{
		name: 'photography',
		icon: 'photography',
		link: '/photography',
	},
	{
		name: 'meet',
		icon: 'meet',
		link: '/meet',
	},
	{
		name: 'app subscription',
		icon: 'appSubscription',
		link: '/app-subscription',
	},
	{
		name: 'fueling',
		icon: 'fueling',
		link: '/fueling',
	},
	{
		name: 'taxi',
		icon: 'taxi',
		link: '/categories/taxi',
	},
	{
		name: 'restaurants',
		icon: 'restaurants',
		link: '/categories/restaurants',
	},
	{
		name: 'transfer',
		icon: 'transfer',
		link: '/categories/transfer',
	},
	{
		name: 'hotels',
		icon: 'hotels',
		link: '/categories/hotels',
	},
	{
		name: 'marketplaces',
		icon: 'marketplaces',
		link: '/categories/marketplaces',
	},
	{
		name: 'coupon',
		icon: 'coupon',
		link: '/categories/coupon',
	},
	{
		name: 'rent',
		icon: 'rent',
		link: '/categories/rent',
	},
	{
		name: 'referral program',
		icon: 'referralProgram',
		link: '/categories/referral-program',
	},
];
