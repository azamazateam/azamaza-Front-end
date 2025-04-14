import inTown from '../../../../../assets/images/AzaSelections/inTown.jpg';
import newSel from '../../../../../assets/images/AzaSelections/new.jpg';
import top100 from '../../../../../assets/images/AzaSelections/top100.jpg';

export interface SelectionsData {
	id: string;
	title: string;
	description: string;
	image: string;
}
export const selectionsData: SelectionsData[] = [
	{
		id: '/l;jhkghjtyui',
		image: inTown,
		title: 'The best deals in town',
		description:
			'We have selected for you the best offers in your city, have time to take advantage of unique offers and services from our partners',
	},
	{
		id: 'sdfsdhjkuiok,dbvbre',
		image: newSel,
		title: 'New offers on Azamaza',
		description:
			'We have picked up new offers from our partners, this opens up a new gastronomic challenge for you with unique offers',
	},
	{
		id: 'sdfsdf87y978455432',
		image: top100,
		title: 'Top 100 restaurants by users',
		description:
			'A selection of restaurants that have been voted by our users, visit these establishments and leave your feedback',
	},
];
