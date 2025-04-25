import {Options} from './ServiceSelect.tsx';
import {
	BsBackpack4,
	BsBicycle,
	BsBuilding,
	BsBusFront,
	BsCamera,
	BsCarFront,
	BsCupHot,
	BsFuelPump,
	BsPeople,
	BsPhone,
	BsRepeat,
	BsScooter,
	BsShopWindow,
	BsTaxiFront,
} from 'react-icons/bs';
import CategoriesIcons from '../../../../CategoriesSlider/CategoriesIcons.tsx';
import {PiMotorcycle, PiPersonSimpleSkiBold} from 'react-icons/pi';

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
		value: 'Hotels',
		label: 'Hotels',
		icon: <BsBuilding />,
	},
	{
		value: 'Restaurants',
		label: 'Restaurants',
		icon: <BsCupHot />,
	},
	{
		value: 'Marketplaces',
		label: 'Marketplaces',
		icon: <BsShopWindow />,
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
	{
		value: 'Meet',
		label: 'Meet',
		icon: <BsPeople />,
	},
	{
		value: 'Fueling',
		label: 'Fueling',
		icon: <BsFuelPump />,
	},
	{
		value: 'Coupon',
		label: 'Coupon',
		icon: <CategoriesIcons id={'coupon'} color={'black'} />,
	},
	{
		value: 'App Subscription',
		label: 'App Subscription',
		icon: <BsPhone />,
	},
	{
		value: 'Taxi',
		label: 'Taxi',
		icon: <BsTaxiFront />,
	},
	{
		value: 'Transfer',
		label: 'Transfer',
		icon: <BsBusFront />,
	},
];
export const rentOptions: Options = [
	{
		value: 'ski-equipment',
		label: 'Ski equipment',
		icon: <PiPersonSimpleSkiBold />,
	},
	{
		value: 'car-rental',
		label: 'Car rental',
		icon: <BsCarFront />,
	},
	{
		value: 'cycling-rental',
		label: 'Cycling rental',
		icon: <BsBicycle />,
	},
	{
		value: 'motorcycle-rental',
		label: 'Motorcycle rental',
		icon: <PiMotorcycle />,
	},
	{
		value: 'scooter-rental',
		label: 'Scooter rental',
		icon: <BsScooter />,
	},
];
