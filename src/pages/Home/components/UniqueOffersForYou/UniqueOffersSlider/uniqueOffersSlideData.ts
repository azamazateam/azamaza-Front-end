import {UniqueOffersSlideType} from './UniqueOffersSlider.tsx';
import card from '../../../../../assets/images/card/card.png';
import winter from '../../../../../assets/images/card/winter.png';
import summer from '../../../../../assets/images/card/summer.png';

export const uniqueOffersSlideData: UniqueOffersSlideType[] = [
	{
		image: summer,
		title: 'Special spring offer',
		link: '/',
		propose: '-50% Discount for a photo session',
	},
	{
		image: winter,
		title: 'Special winter offer',
		link: '/',
		propose: 'Travel cheaply - 75% off your booking',
	},
	{
		image: card,
		title: 'Special winter offer',
		link: '/',
		propose: 'Andorra ski resorts - 40% booking rate',
	},
];
