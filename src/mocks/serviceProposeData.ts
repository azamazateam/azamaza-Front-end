import image from '../assets/images/Mock/Propose/image.jpg';
import i1 from '../assets/images/Mock/Propose/i1.jpg';
import i2 from '../assets/images/Mock/Propose/i2.jpg';
import {ServiceProposeType} from '../redux/slices/proposeSlice.ts';
import marketplaces from '../assets/images/Mock/Propose/marketplaces.png';
import rent from '../assets/images/Mock/Propose/rent.png';
export const serviceProposeData: ServiceProposeType[] = [
	{
		image: image,
		discount: '-35%',
		price: '69 €',
		title: 'Winter photoshoot',
		link: '#',
		serviceName: 'photography',
	},
	{
		image: i1,
		discount: '-35%',
		price: '69 €',
		title: 'Gallery of paintings',
		link: '#',
		serviceName: 'excursion',
	},
	{
		image: i2,
		discount: '-50%',
		price: '96 €',
		title: 'Mountain tour',
		link: '#',
		serviceName: 'excursion',
	},
	{
		image: marketplaces,
		discount: '-50%',
		price: '170 €',
		title: 'Tefal Aerogrill with 8 built-in modes',
		link: '#',
		serviceName: 'marketplaces',
	},
	{
		image: rent,
		discount: '-25%',
		price: '17 €',
		title: 'Any car at any time of the year',
		link: '#',
		serviceName: 'rent',
	},
];
