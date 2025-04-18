export interface UserState {
	id: number | null;
	uniqueOfferForYou: UniqueOffersSlideType[] | null;
	currency: string | null;
	currencyList: CurrencyType[] | null;
	avatar: string | null;
}
export type UniqueOffersSlideType = {
	title: string;
	image: string;
	propose: string;
	link: string;
	serviceName: string | null;
};
export type CurrencyType = {
	id: string;
	name: string;
	description: string;
	icon: string;
};
