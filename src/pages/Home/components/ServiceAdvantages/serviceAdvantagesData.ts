import ms1 from '../../../../assets/images/baners/ms1.png';
import ms2 from '../../../../assets/images/baners/ms2.png';
import ms3 from '../../../../assets/images/baners/ms3.png';
import ms4 from '../../../../assets/images/baners/ms4.png';
import ms5 from '../../../../assets/images/baners/ms5.png';
import ms6 from '../../../../assets/images/baners/ms6.png';
import ms7 from '../../../../assets/images/baners/ms7.png';

import ds1 from '../../../../assets/images/baners/ds1.png';
import ds2 from '../../../../assets/images/baners/ds2.png';
import ds3 from '../../../../assets/images/baners/ds3.png';
import ds4 from '../../../../assets/images/baners/ds4.png';
import ds5 from '../../../../assets/images/baners/ds5.png';
import ds6 from '../../../../assets/images/baners/ds6.png';
import ds7 from '../../../../assets/images/baners/ds7.png';

export type AdvantagesDataType = {
	title: string | null;
	description: string;
	image: string;
};
export const serviceAdvantagesDataMobile: AdvantagesDataType[] = [
	{
		description:
			'Exclusive offers only for our users. Get the best deals on everything you need!',
		image: ms1,
		title: null,
	},
	{
		description:
			'Book, vacation, shop, make friends and have an unforgettable experience - all in one service',
		image: ms2,
		title: null,
	},
	{
		description:
			'Only verified partners and the best terms and conditions, and their services are vetted before publication',
		image: ms3,
		title: null,
	},
	{
		description:
			'Get cashback and bonuses for shopping, inviting friends and being active on the platform',
		image: ms4,
		title: null,
	},
	{
		description:
			'Quick booking with no hidden fees, plan and pay for your vacation in minutes',
		image: ms5,
		title: null,
	},
	{
		description:
			'Premium access to unique discounts, events and services, special conditions for all services',
		image: ms6,
		title: null,
	},
	{
		description:
			'Bringing together people with common interests - recreation, sports, travel or business and more',
		image: ms7,
		title: null,
	},
];
export const serviceAdvantagesData: AdvantagesDataType[] = [
	{
		description:
			'Exclusive offers only for our users. Get the best deals on everything you need!',
		image: ds1,
		title: 'Exclusive offers from partners only for our users',
	},
	{
		description:
			'Book, vacation, shop, make friends and have an unforgettable experience - all in one service',
		image: ds2,
		title: 'Booking, vacations, shopping, friends',
	},
	{
		description:
			'Only verified partners and the best terms and conditions, and their services are vetted before publication',
		image: ds3,
		title: 'Only verified partners and the best terms',
	},
	{
		description:
			'Get cashback and bonuses for shopping, inviting friends and being active on the platform',
		image: ds4,
		title: 'Get cashback and bonuses for shopping',
	},
	{
		description:
			'Quick booking with no hidden fees, plan and pay for your vacation in minutes',
		image: ds5,
		title: 'Fast booking with no hidden fees',
	},
	{
		description:
			'Premium access to unique discounts, events and services, special conditions for all services',
		image: ds6,
		title: 'Fast booking with no hidden fees',
	},
	{
		description:
			'Bringing together people with common interests - recreation, sports, travel or business and more',
		image: ds7,
		title: 'Bringing together people with common interests',
	},
];
