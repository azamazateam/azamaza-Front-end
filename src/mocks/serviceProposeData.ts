import image from '../assets/images/Mock/Propose/image.jpg';
import i1 from '../assets/images/Mock/Propose/i1.jpg';
import i2 from '../assets/images/Mock/Propose/i2.jpg';
import {ServiceProposeType} from '../redux/slices/proposeSlice.ts';

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
];
