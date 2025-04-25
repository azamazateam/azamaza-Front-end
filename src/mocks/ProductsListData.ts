import {ProductType} from '../redux/types/commonTypes.ts';
import wm1 from '../assets/images/productCards/wm1.jpg';
import wm2 from '../assets/images/productCards/wm2.jpg';
import wm3 from '../assets/images/productCards/wm3.jpg';

import vac1 from '../assets/images/productCards/vac1.jpg';
import vac2 from '../assets/images/productCards/vac2.jpg';
import vac3 from '../assets/images/productCards/vac3.jpg';

import bag1 from '../assets/images/productCards/bag1.jpg';
import bag2 from '../assets/images/productCards/bag2.jpg';
import bag3 from '../assets/images/productCards/bag3.jpg';

import dw1 from '../assets/images/productCards/dw1.jpg';
import dw2 from '../assets/images/productCards/dw2.jpg';
import dw3 from '../assets/images/productCards/dw3.jpg';

import hp1 from '../assets/images/productCards/hp1.jpg';
import hp2 from '../assets/images/productCards/hp2.jpg';
import hp3 from '../assets/images/productCards/hp3.jpg';

import wt1 from '../assets/images/productCards/wt1.jpg';
import wt2 from '../assets/images/productCards/wt2.jpg';
import wt3 from '../assets/images/productCards/wt3.jpg';

import mw1 from '../assets/images/productCards/mw1.jpg';
import mw2 from '../assets/images/productCards/mw2.jpg';
import mw3 from '../assets/images/productCards/mw3.jpg';

import ip1 from '../assets/images/productCards/ip1.jpg';
import ip2 from '../assets/images/productCards/ip2.jpg';
import ip3 from '../assets/images/productCards/ip3.jpg';

import tv1 from '../assets/images/productCards/tv1.jpg';
import tv2 from '../assets/images/productCards/tv2.jpg';
import tv3 from '../assets/images/productCards/tv3.jpg';

import nb1 from '../assets/images/productCards/nb1.jpg';
import nb2 from '../assets/images/productCards/nb2.jpg';
import nb3 from '../assets/images/productCards/nb3.jpg';

import dt1 from '../assets/images/productCards/dt1.jpg';
import dt2 from '../assets/images/productCards/dt2.jpg';
import dt3 from '../assets/images/productCards/dt3.jpg';

import cs1 from '../assets/images/productCards/cs1.jpg';
import cs2 from '../assets/images/productCards/cs2.jpg';
import cs3 from '../assets/images/productCards/cs3.jpg';

export const productsListData: ProductType[] = [
	{
		id: '9000000000001',
		favorite: 1,
		images: [wm1, wm2, wm3],
		name: 'Samsung EcoBubble Washing Machine',
		categoryName: 'marketplaces',
		rating: 4.9,
		views: '1 753',
		oldPrice: '699',
		newPrice: '549',
		description:
			'This washing machine from Samsung features EcoBubble™ technology that ensures effective cleaning even at low temperatures. With a 9kg drum capacity and AI Control, it automatically adjusts washing cycles based on user habits. The Digital Inverter Motor guarantees quieter and more energy-efficient operation. Other highlights include hygiene steam, drum clean reminder, and SmartThings app support.',
		currency: '€',
		discount: '21',
		features: null,
		reviews: null,
	},
	{
		id: '9000000000002',
		favorite: 0,
		images: [vac1, vac2, vac3],
		name: 'Dreame L10s Ultra Robot Vacuum',
		categoryName: 'marketplaces',
		rating: 4.7,
		views: '2 345',
		oldPrice: '799',
		newPrice: '679',
		description:
			'An advanced robot vacuum cleaner with LiDAR navigation and AI-powered obstacle recognition. It performs both vacuuming and mopping simultaneously, supports multi-floor mapping, and automatically empties its dustbin into the docking station. Controlled via app or voice commands, it’s ideal for smart home integration.',
		currency: '€',
		discount: '15',
		features: null,
		reviews: null,
	},
	{
		id: '9000000000003',
		favorite: 1,
		images: [bag1, bag2, bag3],
		name: 'Nort hFace Urban Travel Backpack',
		categoryName: 'marketplaces',
		rating: 4.6,
		views: '985',
		oldPrice: '89',
		newPrice: '69',
		description:
			'A sleek and durable 45L backpack designed for travelers and students. Features include a padded laptop compartment, water-resistant zippers, breathable mesh back panel, and anti-theft hidden pockets. Perfect for both daily commutes and outdoor adventures.',
		currency: '€',
		discount: '22',
		features: null,
		reviews: null,
	},
	{
		id: '9000000000004',
		favorite: 0,
		images: [dw1, dw2, dw3],
		name: 'Bosch SilencePlus Dishwasher',
		categoryName: 'marketplaces',
		rating: 4.8,
		views: '1 132',
		oldPrice: '579',
		newPrice: '459',
		description:
			'Bosch’s built-in dishwasher offers whisper-quiet operation at just 42 dB, with 6 washing programs and a capacity for 13 place settings. Features include AquaStop, glass protection technology, and VarioSpeed Plus for faster results. Energy class A+++ makes it efficient and environmentally friendly.',
		currency: '€',
		discount: '21',
		features: null,
		reviews: null,
	},
	{
		id: '9000000000005',
		favorite: 1,
		images: [hp1, hp2, hp3],
		name: 'Sony WH-1000XM5 Headphones',
		categoryName: 'marketplaces',
		rating: 4.9,
		views: '3 874',
		oldPrice: '429',
		newPrice: '369',
		description:
			'Top-tier over-ear headphones with industry-leading noise cancellation, adaptive sound control, and up to 30 hours of battery life. They offer a lightweight design, touch controls, and superb sound clarity. Seamlessly switch between devices via Bluetooth multipoint.',
		currency: '€',
		discount: '14',
		features: null,
		reviews: null,
	},
	{
		id: '9000000000006',
		favorite: 0,
		images: [wt1, wt2, wt3],
		name: 'Apple Watch Series 9',
		categoryName: 'marketplaces',
		rating: 4.9,
		views: '2 148',
		oldPrice: '459',
		newPrice: '419',
		description:
			'The newest Apple Watch features an always-on Retina display, advanced health sensors, and precision GPS. It includes ECG, blood oxygen monitoring, crash detection, and seamless iPhone integration. The S9 chip boosts performance while maintaining all-day battery life.',
		currency: '€',
		discount: '9',
		features: null,
		reviews: null,
	},
	{
		id: '9000000000007',
		favorite: 1,
		images: [mw1, mw2, mw3],
		name: 'LG NeoChef Microwave Oven',
		categoryName: 'marketplaces',
		rating: 4.7,
		views: '643',
		oldPrice: '239',
		newPrice: '199',
		description:
			'This compact 25L microwave oven features Smart Inverter technology for even cooking and defrosting. With multiple auto-cook programs, child lock, LED interior lighting, and sleek touch controls, it’s perfect for modern kitchens.',
		currency: '€',
		discount: '17',
		features: null,
		reviews: null,
	},
	{
		id: '9000000000008',
		favorite: 0,
		images: [ip1, ip2, ip3],
		name: 'Apple iPhone 15 Pro Max',
		categoryName: 'marketplaces',
		rating: 4.9,
		views: '8 124',
		oldPrice: '1 299',
		newPrice: '1 149',
		description:
			'iPhone 15 Pro Max delivers unmatched performance with the new A17 Pro chip, titanium body, and improved battery life. Its triple-camera system features a 5x telephoto lens, ProRAW/ProRes support, and cinematic video modes. The USB-C port and iOS 17 enhance usability.',
		currency: '€',
		discount: '12',
		features: null,
		reviews: null,
	},
	{
		id: '9000000000009',
		favorite: 1,
		images: [tv1, tv2, tv3],
		name: 'LG OLED C3 55-inch 4K TV',
		categoryName: 'marketplaces',
		rating: 4.9,
		views: '4 671',
		oldPrice: '1 299',
		newPrice: '1 049',
		description:
			'Experience true black and infinite contrast with LG’s 55” OLED TV. Supports Dolby Vision, HDMI 2.1, NVIDIA G-SYNC, and webOS Smart TV features. Perfect for movies, gaming, and sports, delivering exceptional picture quality and responsive controls.',
		currency: '€',
		discount: '19',
		features: null,
		reviews: null,
	},
	{
		id: '9000000000010',
		favorite: 0,
		images: [nb1, nb2, nb3],
		name: 'Dell XPS 15 9530 Laptop',
		categoryName: 'marketplaces',
		rating: 4.8,
		views: '1 933',
		oldPrice: '2 199',
		newPrice: '1 899',
		description:
			'High-end laptop with a 15.6” 4K OLED display, Intel Core i9 processor, NVIDIA RTX 4070 GPU, and 32GB RAM. Ideal for creators, it features a premium aluminum chassis, long battery life, and Thunderbolt 4 connectivity.',
		currency: '€',
		discount: '14',
		features: null,
		reviews: null,
	},
	{
		id: '9000000000011',
		favorite: 1,
		images: [dt1, dt2, dt3],
		name: 'IKEA Bekant Office Desk',
		categoryName: 'marketplaces',
		rating: 4.6,
		views: '678',
		oldPrice: '249',
		newPrice: '199',
		description:
			'Minimalist and functional office desk with adjustable height. The spacious tabletop offers plenty of room for your workspace setup. Easy to assemble and made with sustainable materials. Ideal for home or office environments.',
		currency: '€',
		discount: '20',
		features: null,
		reviews: null,
	},
	{
		id: '9000000000012',
		favorite: 0,
		images: [cs1, cs2, cs3],
		name: 'Leather Travel Makeup Bag',
		categoryName: 'marketplaces',
		rating: 4.5,
		views: '512',
		oldPrice: '45',
		newPrice: '35',
		description:
			'Compact and elegant cosmetic case made of vegan leather. Multiple compartments with brush holders, waterproof lining, and zippered pockets. Great for travel or everyday use to keep your makeup organized.',
		currency: '€',
		discount: '22',
		features: null,
		reviews: null,
	},
];
