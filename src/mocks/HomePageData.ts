import {
	AdvantagesDataType,
	HowItWorksDataType,
	OurSubscriptionsData,
} from '../redux/types/homePageTypes.ts';
import qr from '../assets/images/HitW/qr.jpg';
import curt from '../assets/images/HitW/curt.png';
import settings from '../assets/images/HitW/settings.png';

import {CurrencyType} from '../redux/types/userTypes.ts';
import d1 from '../assets/images/baners/d1.png';
import d2 from '../assets/images/baners/d2.png';
import d3 from '../assets/images/baners/d3.png';
import d4 from '../assets/images/baners/d4.png';
import d5 from '../assets/images/baners/d5.png';
import d6 from '../assets/images/baners/d6.png';
import d7 from '../assets/images/baners/d7.png';
import d8 from '../assets/images/baners/d8.png';
import d9 from '../assets/images/baners/d9.png';

import m1 from '../assets/images/baners/m1.png';
import m2 from '../assets/images/baners/m2.png';
import m3 from '../assets/images/baners/m3.png';
import m4 from '../assets/images/baners/m4.png';
import m5 from '../assets/images/baners/m5.png';
import m6 from '../assets/images/baners/m6.png';
import m7 from '../assets/images/baners/m7.png';
import m8 from '../assets/images/baners/m8.png';
import m9 from '../assets/images/baners/m9.png';

export const howItWorksData: HowItWorksDataType[] = [
	{
		image: qr,
		description: 'Register and buy a subscription',
	},
	{
		image: curt,
		description: 'Choose the service that is right for you',
	},
	{
		image: settings,
		description: 'Get unique upsell offers',
	},
];

export const advantagesDataMobile: AdvantagesDataType[] = [
	{
		description:
			"The best price - only here! We've got the deal for you! Get discounts and bonuses that you can't get anywhere else",
		image: m1,
		title: 'Exclusive discounts and bonuses',
	},
	{
		description:
			'Book your perfect vacation. Unique deals on hotels, tours and activities',
		image: m2,
		title: 'The best vacations at the best prices!',
	},
	{
		description:
			'Make friends, travel, socialize, find fellow travelers and create better memories',
		image: m3,
		title: 'Find those who are on the same page with you!',
	},
	{
		description:
			'Find and order any services in seconds. Rent a car, yacht, equipment, photographers, guides and much more',
		image: m4,
		title: 'Everything you need is just a couple clicks away!',
	},
	{
		description:
			'Your favorite services - in one place! Choose, download and use the best services',
		image: m5,
		title: 'Download the partner app',
	},
	{
		description:
			'Shopping with maximum benefits. Buy exclusive products with the best conditions',
		image: m6,
		title: "Marketplace - it's got everything!",
	},
	{
		description:
			'Give the gift of experiences, not things! Discounts on restaurants, travel, entertainment and more',
		image: m7,
		title: 'Gift Certificates',
	},
	{
		description:
			'Prizes, bonuses, discounts, Enter the drawings and claim your rewards!',
		image: m8,
		title: 'Drawings and promotions',
	},
	{
		description:
			'We select proven options for you. No need to take risks anymore - only trusted partners and services',
		image: m9,
		title: 'Quality assurance of choice',
	},
];
export const advantagesData: AdvantagesDataType[] = [
	{
		description:
			"The best price - only here! We've got the deal for you! Get discounts and bonuses that you can't get anywhere else",
		image: d1,
		title: 'Exclusive discounts and bonuses',
	},
	{
		description:
			'Book your perfect vacation. Unique deals on hotels, tours and activities',
		image: d2,
		title: 'The best vacations at the best prices!',
	},
	{
		description:
			'Make friends, travel, socialize, find fellow travelers and create better memories',
		image: d3,
		title: 'Find those who are on the same page with you!',
	},
	{
		description: 'Everything you need is just a couple clicks away!',
		image: d4,
		title: 'Everything you need is just a couple clicks away!',
	},
	{
		description:
			'Your favorite services - in one place! Choose, download and use the best services',
		image: d5,
		title: 'Download the partner app',
	},
	{
		description:
			'Shopping with maximum benefits. Buy exclusive products with the best conditions',
		image: d6,
		title: "Marketplace - it's got everything!",
	},
	{
		description:
			'Give the gift of experiences, not things! Discounts on restaurants, travel, entertainment and more',
		image: d7,
		title: 'Gift Certificates',
	},
	{
		description:
			'Prizes, bonuses, discounts, Enter the drawings and claim your rewards!',
		image: d8,
		title: 'Drawings and promotions',
	},
	{
		description:
			'We select proven options for you. No need to take risks anymore - only trusted partners and services',
		image: d9,
		title: 'Quality assurance of choice',
	},
];
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
export const currencyData: CurrencyType[] = [
	{
		id: '4wer435dfhggfhtj',
		description: 'US dollar',
		icon: 'usd',
		name: 'USD',
	},
	{
		id: '443qw5dfqweqhggfhtj',
		description: 'Гривня',
		icon: 'grn',
		name: 'GRN',
	},
	{
		id: '4435dfhqweqggfhtj',
		description: 'Euro',
		icon: 'eur',
		name: 'EUR',
	},
	{
		id: '4435dfhggfhqwetj',
		description: 'Crypto',
		icon: 'btc',
		name: 'Bitcoin',
	},
];
