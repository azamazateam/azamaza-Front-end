import card from '../assets/images/card/card.png';
import winter from '../assets/images/card/winter.png';
import summer from '../assets/images/card/summer.png';
import photography from '../assets/images/card/photography.png';
import marketplaces from '../assets/images/card/marketplaces.png';
import rent from '../assets/images/card/rent.png';
import family from '../assets/images/card/family1.png';
import {UniqueOffersSlideType} from '../redux/types/userTypes.ts';

export const uniqueOffers: UniqueOffersSlideType[] = [
	{
		image: summer,
		title: 'Special spring offer',
		link: '/',
		propose: '-50% Discount for a photo session',
		serviceName: null,
	},
	{
		image: winter,
		title: 'Special winter offer',
		link: '/',
		propose: 'Travel cheaply - 75% off your booking',
		serviceName: null,
	},
	{
		image: card,
		title: 'Special winter offer',
		link: '/',
		propose: 'Andorra ski resorts - 40% booking rate',
		serviceName: null,
	},
	{
		image: family,
		title: 'Special family offer',
		link: '/',
		propose: 'Andorra ski resorts - 40% booking rate',
		serviceName: null,
	},
	{
		image: photography,
		title: 'Special spring offer',
		link: '/',
		propose: '-50% Discount for a photo session',
		serviceName: 'photography',
	},
	{
		image: marketplaces,
		title: 'Black Friday',
		link: '/',
		propose: '-50% Discount for a photo session',
		serviceName: 'marketplaces',
	},
	{
		image: rent,
		title: 'Scooter for summer',
		link: '/',
		propose: '-30% on scooter rental and inventory',
		serviceName: 'rent',
	},
];
