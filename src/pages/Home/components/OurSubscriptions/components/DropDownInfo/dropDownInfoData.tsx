import {
	BsAlarm,
	BsBarChartLine,
	BsCartCheck,
	BsDisplay,
	BsFire,
	BsGem,
	BsGift,
	BsHeadset,
	BsLaptop,
	BsLightbulb,
	BsReceipt,
} from 'react-icons/bs';
import {ReactNode} from 'react';
import {CardType} from '../../../../../../redux/types/homePageTypes.ts';
export type DropDownInfoData = {
	icon: ReactNode;
	description: string;
	type: CardType;
};
export const dropDownInfoData: DropDownInfoData[] = [
	{
		icon: <BsFire size={24} />,
		description: 'Discount: 50% off on subsequent subscription periods',
		type: 'Basic',
	},
	{
		icon: <BsLaptop size={24} />,
		type: 'Basic',
		description:
			'Ability to test the service before the official launch without limitation on the number of orders',
	},
	{
		icon: <BsLightbulb size={24} />,
		type: 'Basic',
		description:
			'Participation in project development (users will be able to propose ideas and influence the functionality of the service)',
	},
	{
		icon: <BsBarChartLine size={24} />,
		type: 'Basic',
		description:
			'Free activation of the 5th level of the loyalty program without fulfilling any requirements',
	},
	{
		icon: <BsCartCheck size={24} />,
		type: 'Basic',
		description: 'Maximum discounts on goods and services',
	},
	{
		icon: <BsDisplay size={24} />,
		type: 'Basic',
		description: 'Interface: with personalized recommendations',
	},
	{
		icon: <BsReceipt size={24} />,
		type: 'Basic',
		description:
			'Possibility to carry out an unlimited number per month (after the official launch of the project)',
	},
	{
		icon: <BsAlarm size={24} />,
		type: 'Premium',
		description:
			'Early access to promotions, sales, including closeouts and limited offers',
	},
	{
		icon: <BsHeadset size={24} />,
		type: 'Premium',
		description:
			'Personal manager for individual inquiries and recommendations',
	},
	{
		icon: <BsGift size={24} />,
		type: 'Elite',
		description: 'Gifts, certificates from partners',
	},
	{
		icon: <BsGem size={24} />,
		type: 'Basic',
		description: 'Special status of the unique user “Premium Founder”',
	},
];
