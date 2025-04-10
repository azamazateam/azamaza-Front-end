import image from '../../../../assets/images/productImages/image.jpg';
import image1 from '../../../../assets/images/productImages/image1.jpg';
import image3 from '../../../../assets/images/productImages/image3.jpg';
import image4 from '../../../../assets/images/productImages/image4.jpg';
import image5 from '../../../../assets/images/productImages/image5.jpg';
import image6 from '../../../../assets/images/productImages/image6.jpg';
import image7 from '../../../../assets/images/productImages/image7.jpg';
import image8 from '../../../../assets/images/productImages/image8.jpg';
//import test from '../../../../assets/images/productImages/13.jpg';
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
	} /*
	{
		hot: 0,
		favorite: 0,
		image: image2,
		name: 'Premium taxi',
		serviceName: 'Transportation',
		rating: 9.0,
		views: '26 478',
		oldPrice: 10,
		newPrice: 5,
	},*/,
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
	},

	{
		id: 8,
		hot: 1,
		favorite: 1,
		image: image8,
		name: 'Burger Forever',
		serviceName: 'Restaurant',
		rating: 9.1,
		views: '3 433',
		oldPrice: 33,
		newPrice: 190,
		description: 'description',
	} /*
	{
		hot: 1,
		favorite: 1,
		image: image9,
		name: 'Excursion to the lakes',
		serviceName: 'Excursion',
		rating: 9.1,
		views: '2 675',
		oldPrice: 190,
		newPrice: 110,
	},*/,
];
