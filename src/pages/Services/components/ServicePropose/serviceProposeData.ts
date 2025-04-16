import image from '../../../../assets/images/serviceBackgrounds/image.jpg';
export type ServiceProposeData = {
	title: string;
	image: string;
	price: string;
	discount: string;
	link: string;
	serviceName: string | null;
};

export const serviceProposeData: ServiceProposeData[] = [
	{
		image: image,
		discount: '-35%',
		price: '69 €',
		title: 'Tour of La Vella ski resorts',
		link: '#',
		serviceName: 'photography',
	},
];
