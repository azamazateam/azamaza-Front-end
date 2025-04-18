export type IconsBrandsDataType = {
	id: string;
	name: string;
	img: string;
};
export type ServiceOptionsType = {
	id: string;
	name: string;
	icon: string; // React.ReactNode;
};
export type ServicesType = {
	id: number;
	hot: 1 | 0;
	favorite: 1 | 0;
	specialStatus: number | null;
	image: string | string[];
	name: string;
	serviceName: string;
	rating: number;
	views: string;
	oldPrice: number;
	newPrice: number;
	description: string;
	serviceOptions: ServiceOptionsType[] | null;
	location: string;
	specialOpportunity: ServiceOptionsType[] | null;
};
