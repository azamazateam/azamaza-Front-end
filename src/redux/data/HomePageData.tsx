import {
	AdvantagesDataType,
	HowItWorksDataType,
	PopularServicesType,
	OurSubscriptionsData,
} from '../types/homePageTypes.ts';
import image from '../../assets/images/productImages/image.jpg';
import image1 from '../../assets/images/productImages/image1.jpg';
import image3 from '../../assets/images/productImages/image3.jpg';
import image4 from '../../assets/images/productImages/image4.jpg';
import image5 from '../../assets/images/productImages/image5.jpg';

import image6 from '../../assets/images/productImages/image6.jpg';
import image7 from '../../assets/images/productImages/image7.jpg';
import qr from '../../assets/images/HitW/qr.jpg';
import curt from '../../assets/images/HitW/curt.png';
import settings from '../../assets/images/HitW/settings.png';
import specialOffer from '../../assets/images/baners/specialOffer.png';
import fly from '../../assets/images/baners/fly.png';
import family from '../../assets/images/baners/family.png';
import mobilePhone from '../../assets/images/baners/mobilePhone.png';
import mediaPhone from '../../assets/images/baners/mediaPhone.png';
import presents from '../../assets/images/baners/presents.png';
import onePresent from '../../assets/images/baners/onePresent.png';
import buls from '../../assets/images/baners/buls.png';
import approved from '../../assets/images/baners/approved.png';

export const mostPopularServicesData: PopularServicesType[] = [
	{
		id: 1,
		hot: 1,
		favorite: 1,
		image: image,
		name: 'Vallnord Ski Resort',
		serviceName: 'Excursion',
		rating: 9.8,
		views: '1649',
		oldPrice: 170,
		newPrice: 110,
		description: "Carretera de L'Aldosa, 25, AD400 La Massana, Andorra",
		serviceOptions: [
			{
				id: '1',
				name: 'Free parking',
				icon: 'BsCarFront',
			},
			{
				id: '2',
				name: 'Refueling on site',
				icon: 'BsFuelPump',
			},
			{
				id: '3',
				name: 'Power supply on site',
				icon: 'BsEvStation',
			},
			{
				id: '4',
				name: 'Unique excursion route',
				icon: 'BsCompass',
			},
			{
				id: '5',
				name: 'Free warm drinks',
				icon: 'BsCupHot',
			},
			{
				id: '6',
				name: 'Free photo session',
				icon: 'BsCamera',
			},
		],
	},
	{
		id: 2,
		hot: 1,
		favorite: 1,
		image: image1,
		name: 'Professional photo',
		serviceName: 'Photo and video shooting',
		rating: 9.6,
		views: '11 649',
		oldPrice: 200,
		newPrice: 100,
		description: 'description',
		serviceOptions: [
			{
				id: '7',
				name: 'Studio lighting',
				icon: 'BsLightbulb',
			},
			{
				id: '8',
				name: 'Free editing',
				icon: 'BsPaintBucket',
			},
			{
				id: '9',
				name: 'On-site shooting',
				icon: 'BsCamera',
			},
		],
	},
	{
		id: 3,
		hot: 1,
		favorite: 0,
		image: image3,
		name: "McDonald's",
		serviceName: 'Restaurant',
		rating: 9.2,
		views: '39 567',
		oldPrice: 35,
		newPrice: 20,
		description: 'description',
		serviceOptions: [
			{
				id: '10',
				name: 'Free Wi-Fi',
				icon: 'BsWifi',
			},
			{
				id: '11',
				name: 'Drive-thru',
				icon: 'BsCarFront',
			},
			{
				id: '12',
				name: 'Kids meal available',
				icon: 'BsFillPeopleFill',
			},
		],
	},
	{
		id: 4,
		hot: 1,
		favorite: 1,
		image: image4,
		name: 'KFC restaurant',
		serviceName: 'Restaurant',
		rating: 9.4,
		views: '22 567',
		oldPrice: 25,
		newPrice: 15,
		description: 'description',
		serviceOptions: [
			{
				id: '13',
				name: 'Free delivery',
				icon: 'BsTruck',
			},
			{
				id: '14',
				name: 'Family meal deal',
				icon: 'BsPeople',
			},
			{
				id: '15',
				name: 'Mobile app order',
				icon: 'BsPhone',
			},
		],
	},
	{
		id: 5,
		hot: 1,
		favorite: 1,
		image: image5,
		name: 'Roc del Quer',
		serviceName: 'Excursion',
		rating: 9.7,
		views: '2 649',
		oldPrice: 180,
		newPrice: 100,
		description: 'description',
		serviceOptions: [
			{
				id: '16',
				name: 'Guided tour',
				icon: 'BsPersonCheck',
			},
			{
				id: '17',
				name: 'Wildlife watching',
				icon: 'BsFillEyeFill ',
			},
			{
				id: '18',
				name: 'Hiking route',
				icon: 'FaHiking',
			},
		],
	},
	{
		id: 6,
		hot: 1,
		favorite: 1,
		image: image6,
		name: 'Church tour',
		serviceName: 'Excursion',
		rating: 9.5,
		views: '12 569',
		oldPrice: 175,
		newPrice: 115,
		description: 'description',
		serviceOptions: [
			{
				id: '19',
				name: 'Audio guide',
				icon: 'BsFillVolumeUpFill',
			},
			{
				id: '20',
				name: 'Group discounts',
				icon: 'BsPeopleFill',
			},
			{
				id: '21',
				name: 'Photography allowed',
				icon: 'BsCamera',
			},
		],
	},
	{
		id: 7,
		hot: 1,
		favorite: 1,
		image: image7,
		name: 'Sea food',
		serviceName: 'Restaurant',
		rating: 8.8,
		views: '1 567',
		oldPrice: 26,
		newPrice: 12,
		description: 'description',
		serviceOptions: [
			{
				id: '22',
				name: 'Fresh catch of the day',
				icon: 'FaFish',
			},
			{
				id: '23',
				name: 'Open air seating',
				icon: 'BsCloudSun',
			},
			{
				id: '24',
				name: 'Vegetarian options',
				icon: 'TbSeeding',
			},
		],
	},
];
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
