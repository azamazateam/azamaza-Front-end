export interface UserState {
	id: number | null;
	uniqueOfferForYou: UniqueOffersSlideType[] | null;
}
export type UniqueOffersSlideType = {
	title: string;
	image: string;
	propose: string;
	link: string;
	serviceName: string | null;
};
