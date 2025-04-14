export type HomePageState = {
	howItWorks: HowItWorksDataType[];
	mostPopularService: PopularServicesType[];
	advantage: AdvantagesDataType[];
	ourSubscriptions: OurSubscriptionsData[];
};

export type HowItWorksDataType = {
	image: string;
	description: string;
};
export type ServiceOptionsType = {
	id: string;
	name: string;
	icon: string; // React.ReactNode;
};
export type PopularServicesType = {
	id: number;
	hot: 1 | 0;
	favorite: 1 | 0;
	image: string | string[];
	name: string;
	serviceName: string;
	rating: number;
	views: string;
	oldPrice: number;
	newPrice: number;
	description: string;
	serviceOptions: ServiceOptionsType[] | null;
};
export type AdvantagesDataType = {
	title: string | null;
	description: string;
	image: string;
};
export type CardType = 'Basic' | 'Premium' | 'Elite';
export type OurSubscriptionsData = {
	type: CardType;
	specialInfo: string | null;
	infoList: string[];
	mainPrice: string;
	actualPrice: string;
	quantityMonth: string;
};
