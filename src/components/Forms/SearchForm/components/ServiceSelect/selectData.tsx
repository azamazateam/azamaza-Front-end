import {Options} from './ServiceSelect.tsx';
import {
	BsBackpack4,
	BsBuilding,
	BsBusFront,
	BsCamera,
	BsCupHot,
	BsFuelPump,
	BsPeople,
	BsPhone,
	BsRepeat,
	BsShopWindow,
	BsTaxiFront,
} from 'react-icons/bs';
import CategoriesIcons from '../../../../CategoriesSlider/CategoriesIcons.tsx';

export const options: Options = [
	{
		value: 'Excursion',
		label: 'Excursion',
		icon: <BsBackpack4 />,
	},
	{
		value: 'Photography',
		label: 'Photography',
		icon: <BsCamera />,
	},
	{
		value: 'Meet',
		label: 'Meet',
		icon: <BsPeople />,
	},
	{
		value: 'App Subscription',
		label: 'App Subscription',
		icon: <BsPhone />,
	},
	{
		value: 'Fueling',
		label: 'Fueling',
		icon: <BsFuelPump />,
	},
	{
		value: 'Taxi',
		label: 'Taxi',
		icon: <BsTaxiFront />,
	},
	{
		value: 'Restaurants',
		label: 'Restaurants',
		icon: <BsCupHot />,
	},
	{
		value: 'Transfer',
		label: 'Transfer',
		icon: <BsBusFront />,
	},
	{
		value: 'Hotels',
		label: 'Hotels',
		icon: <BsBuilding />,
	},
	{
		value: 'Marketplaces',
		label: 'Marketplaces',
		icon: <BsShopWindow />,
	},
	{
		value: 'Coupon',
		label: 'Coupon',
		icon: <CategoriesIcons id={'coupon'} color={'black'} />,
	},
	{
		value: 'Rent',
		label: 'Rent',
		icon: <BsRepeat />,
	},
	{
		value: 'Referral program',
		label: 'Referral program',
		icon: <CategoriesIcons id={'referralProgram'} color={'black'} />,
	},
];
