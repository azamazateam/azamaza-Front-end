import {
	AdvantagesDataType,
	HowItWorksDataType,
	OurSubscriptionsData,
} from '../redux/types/homePageTypes.ts';
import qr from '../assets/images/HitW/qr.jpg';
import curt from '../assets/images/HitW/curt.png';
import settings from '../assets/images/HitW/settings.png';
import specialOffer from '../assets/images/baners/specialOffer.png';
import fly from '../assets/images/baners/fly.png';
import family from '../assets/images/baners/family.png';
import mobilePhone from '../assets/images/baners/mobilePhone.png';
import mediaPhone from '../assets/images/baners/mediaPhone.png';
import presents from '../assets/images/baners/presents.png';
import onePresent from '../assets/images/baners/onePresent.png';
import buls from '../assets/images/baners/buls.png';
import approved from '../assets/images/baners/approved.png';
import {CurrencyType} from '../redux/types/userTypes.ts';

export const howItWorksData: HowItWorksDataType[] = [
	{
		image: qr,
		description:
			'Sign up for the subscription that suits you in the "Our Subscriptions" section',
	},
	{
		image: curt,
		description: 'Choose a service that suits you in all respects',
	},
	{
		image: settings,
		description:
			'Get unique promotions, discounts and offers that no one else has',
	},
];
export const advantagesData: AdvantagesDataType[] = [
	{
		description:
			"The best price - only here! We've got the deal for you! Get discounts and bonuses that you can't get anywhere else",
		image: specialOffer,
		title: 'Exclusive discounts and bonuses',
	},
	{
		description:
			'Book your perfect vacation. Unique deals on hotels, tours and activities',
		image: fly,
		title: 'The best vacations at the best prices!',
	},
	{
		description:
			'Make friends, travel, socialize, find fellow travelers and create better memories',
		image: family,
		title: 'Find those who are on the same page with you!',
	},
	{
		description:
			'Find and order any services in seconds. Rent a car, yacht, equipment, photographers, guides and much more',
		image: mobilePhone,
		title: 'Everything you need is just a couple clicks away!',
	},
	{
		description:
			'Your favorite services - in one place! Choose, download and use the best services',
		image: mediaPhone,
		title: 'Download the partner app',
	},
	{
		description:
			'Shopping with maximum benefits. Buy exclusive products with the best conditions',
		image: presents,
		title: "Marketplace - it's got everything!",
	},
	{
		description:
			'Give the gift of experiences, not things! Discounts on restaurants, travel, entertainment and more',
		image: onePresent,
		title: 'Gift Certificates',
	},
	{
		description:
			'Prizes, bonuses, discounts, Enter the drawings and claim your rewards!',
		image: buls,
		title: 'Drawings and promotions',
	},
	{
		description:
			'We select proven options for you. No need to take risks anymore - only trusted partners and services',
		image: approved,
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
