import image from '../../../../assets/images/serviceBackgrounds/cardImage.jpg';
import testImage from '../../../../assets/images/serviceBackgrounds/testCard.jpg';
export type ServiceProposeData = {
	title: string;
	image: string;
	price: string;
	discount: string;
	link: string;
};

export const serviceProposeData: ServiceProposeData[] = [
	{
		image: image,
		discount: '-35%',
		price: '69 €',
		title: 'Tour of La Vella ski resorts',
		link: '#',
	},
	{
		image: testImage,
		discount: '-315%',
		price: '69999 €',
		title: 'Test test test test',
		link: '#',
	},
];
