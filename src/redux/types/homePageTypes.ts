import {IconsBrandsDataType, ServicesType} from './commonTypes.ts';

export type HomePageState = {
	howItWorks: HowItWorksDataType[];
	mostPopularService: ServicesType[];
	advantage: AdvantagesDataType[];
	ourSubscriptions: OurSubscriptionsData[];
	popularPartnersIcons: IconsBrandsDataType[];
};
export type HowItWorksDataType = {
	image: string;
	description: string;
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
