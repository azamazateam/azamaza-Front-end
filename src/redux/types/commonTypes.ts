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
	categoryName?: string;
	rating: number;
	views: string;
	oldPrice: number;
	newPrice: number;
	description: string;
	serviceOptions: ServiceOptionsType[] | null;
	location: string;
	specialOpportunity: ServiceOptionsType[] | null;
};
export type ProductType = {
	id: string;
	favorite: 1 | 0;
	images: string[];
	categoryName: string;
	name: string;
	description: string;
	rating: number;
	views: string;
	oldPrice: string;
	newPrice: string;
	currency: string;
	discount: string;
	features: ProductFeaturesType[] | null;
	reviews: ProductReviewsType | null;
};
export type ProductFeaturesType = {
	id: string;
	name: string;
	options: ProductFeaturesOptionsType[];
};
export type ProductFeaturesOptionsType = {
	id: string;
	value: string;
	label: string;
};
export type ProductReviewsType = {
	id: string;
};
