import card from '../assets/images/card/card.png';
import winter from '../assets/images/card/winter.png';
import summer from '../assets/images/card/summer.png';
import photography from '../assets/images/card/photography.jpg';
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
		image: photography,
		title: 'Special spring offer',
		link: '/',
		propose: '-50% Discount for a photo session',
		serviceName: 'photography',
	},
];
