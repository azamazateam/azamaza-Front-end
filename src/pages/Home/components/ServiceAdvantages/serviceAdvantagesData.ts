import bag from '../../../../assets/images/baners/bag.png';
import bagMob from '../../../../assets/images/baners/bagMob.png';
import mulimediaCub from '../../../../assets/images/baners/mulimediaCub.png';
import mulimediaCubMob from '../../../../assets/images/baners/mulimediaCubMob.png';
import guard from '../../../../assets/images/baners/guard.png';
import guardMob from '../../../../assets/images/baners/guardMob.png';
import moneyPhone from '../../../../assets/images/baners/moneyPhone.png';
import moneyPhoneMob from '../../../../assets/images/baners/moneyPhoneMob.png';
import phoneSearch from '../../../../assets/images/baners/phoneSearch.png';
import phoneSearchMob from '../../../../assets/images/baners/phoneSearchMob.png';
import greenGood from '../../../../assets/images/baners/greenGood.png';
import greenGoodMob from '../../../../assets/images/baners/greenGoodMob.png';
import campWood from '../../../../assets/images/baners/campWood.png';
import campWoodMob from '../../../../assets/images/baners/campWoodMob.png';

export type AdvantagesDataType = {
	title: string | null;
	description: string;
	image: string;
};
export const serviceAdvantagesData: AdvantagesDataType[] = [
	{
		description:
			'Exclusive offers only for our users. Get the best deals on everything you need!',
		image: bag,
		title: null,
	},
	{
		description:
			'Book, vacation, shop, make friends and have an unforgettable experience - all in one service',
		image: mulimediaCub,
		title: null,
	},
	{
		description:
			'Only verified partners and the best terms and conditions, and their services are vetted before publication',
		image: guard,
		title: null,
	},
	{
		description:
			'Get cashback and bonuses for shopping, inviting friends and being active on the platform',
		image: moneyPhone,
		title: null,
	},
	{
		description:
			'Quick booking with no hidden fees, plan and pay for your vacation in minutes',
		image: phoneSearch,
		title: null,
	},
	{
		description:
			'Premium access to unique discounts, events and services, special conditions for all services',
		image: greenGood,
		title: null,
	},
	{
		description:
			'Bringing together people with common interests - recreation, sports, travel or business and more',
		image: campWood,
		title: null,
	},
];
export const serviceAdvantagesDataMobile: AdvantagesDataType[] = [
	{
		description:
			'Exclusive offers only for our users. Get the best deals on everything you need!',
		image: bagMob,
		title: null,
	},
	{
		description:
			'Book, vacation, shop, make friends and have an unforgettable experience - all in one service',
		image: mulimediaCubMob,
		title: null,
	},
	{
		description:
			'Only verified partners and the best terms and conditions, and their services are vetted before publication',
		image: guardMob,
		title: null,
	},
	{
		description:
			'Get cashback and bonuses for shopping, inviting friends and being active on the platform',
		image: moneyPhoneMob,
		title: null,
	},
	{
		description:
			'Quick booking with no hidden fees, plan and pay for your vacation in minutes',
		image: phoneSearchMob,
		title: null,
	},
	{
		description:
			'Premium access to unique discounts, events and services, special conditions for all services',
		image: greenGoodMob,
		title: null,
	},
	{
		description:
			'Bringing together people with common interests - recreation, sports, travel or business and more',
		image: campWoodMob,
		title: null,
	},
];
