import image from '../../../../assets/images/productImages/image.jpg';
import image1 from '../../../../assets/images/productImages/image1.jpg';
import image3 from '../../../../assets/images/productImages/image3.jpg';
import image4 from '../../../../assets/images/productImages/image4.jpg';
import image5 from '../../../../assets/images/productImages/image5.jpg';
import image6 from '../../../../assets/images/productImages/image6.jpg';
import image7 from '../../../../assets/images/productImages/image7.jpg';

import React from 'react';
import {
	BsCamera,
	BsCarFront,
	BsCloudSun,
	BsCompass,
	BsCupHot,
	BsEvStation,
	BsFillEyeFill,
	BsFillPeopleFill,
	BsFillVolumeUpFill,
	BsFuelPump,
	BsLightbulb,
	BsPaintBucket,
	BsPeople,
	BsPeopleFill,
	BsPersonCheck,
	BsPhone,
	BsTruck,
	BsWifi,
} from 'react-icons/bs';
import {FaFish, FaHiking} from 'react-icons/fa';
import {TbSeeding} from 'react-icons/tb';
//import test from '../../../../assets/images/productImages/13.jpg';
export type ServiceOptionsType = {
	id: string;
	name: string;
	icon: React.ReactNode;
};

export type MostPopularServicesType = {
	id: number;
	hot: 1 | 0;
	favorite: 1 | 0;
	image: string;
	name: string;
	serviceName: string;
	rating: number;
	views: string;
	oldPrice: number;
	newPrice: number;
	description: string;
	serviceOptions: ServiceOptionsType[] | null;
};
export const mostPopularServicesData: MostPopularServicesType[] = [
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
				icon: <BsCarFront size={20} />,
			},
			{
				id: '2',
				name: 'Refueling on site',
				icon: <BsFuelPump size={20} />,
			},
			{
				id: '3',
				name: 'Power supply on site',
				icon: <BsEvStation size={20} />,
			},
			{
				id: '4',
				name: 'Unique excursion route',
				icon: <BsCompass size={20} />,
			},
			{
				id: '5',
				name: 'Free warm drinks',
				icon: <BsCupHot size={20} />,
			},
			{
				id: '6',
				name: 'Free photo session',
				icon: <BsCamera size={20} />,
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
				icon: <BsLightbulb size={20} />,
			},
			{
				id: '8',
				name: 'Free editing',
				icon: <BsPaintBucket size={20} />,
			},
			{
				id: '9',
				name: 'On-site shooting',
				icon: <BsCamera size={20} />,
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
				icon: <BsWifi size={20} />,
			},
			{
				id: '11',
				name: 'Drive-thru',
				icon: <BsCarFront size={20} />,
			},
			{
				id: '12',
				name: 'Kids meal available',
				icon: <BsFillPeopleFill size={20} />,
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
				icon: <BsTruck size={20} />,
			},
			{
				id: '14',
				name: 'Family meal deal',
				icon: <BsPeople size={20} />,
			},
			{
				id: '15',
				name: 'Mobile app order',
				icon: <BsPhone size={20} />,
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
				icon: <BsPersonCheck size={20} />,
			},
			{
				id: '17',
				name: 'Wildlife watching',
				icon: <BsFillEyeFill size={20} />,
			},
			{
				id: '18',
				name: 'Hiking route',
				icon: <FaHiking size={20} />,
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
				icon: <BsFillVolumeUpFill size={20} />,
			},
			{
				id: '20',
				name: 'Group discounts',
				icon: <BsPeopleFill size={20} />,
			},
			{
				id: '21',
				name: 'Photography allowed',
				icon: <BsCamera size={20} />,
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
				icon: <FaFish size={20} />,
			},
			{
				id: '23',
				name: 'Open air seating',
				icon: <BsCloudSun size={20} />,
			},
			{
				id: '24',
				name: 'Vegetarian options',
				icon: <TbSeeding size={20} />,
			},
		],
	},
];
