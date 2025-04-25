import inTown from '../assets/images/AzaSelections/inTown.jpg';
import newSel from '../assets/images/AzaSelections/new.jpg';
import top100 from '../assets/images/AzaSelections/top100.jpg';
import {AzamazaSelection} from '../redux/slices/azamazaSelectionsSlice.ts';
/*=======Photographer================*/
import p1 from '../assets/images/AzaSelections/1.jpg';
import p2 from '../assets/images/AzaSelections/2.jpg';
import p3 from '../assets/images/AzaSelections/3.jpg';
/*============ Hotels ===============*/
import h1 from '../assets/images/AzaSelections/h1.png';
import h2 from '../assets/images/AzaSelections/h2.jpg';
import h3 from '../assets/images/AzaSelections/h3.jpg';
import h4 from '../assets/images/AzaSelections/h4.jpg';
import h5 from '../assets/images/AzaSelections/h5.jpg';
import h6 from '../assets/images/AzaSelections/h6.jpg';

/*============ Rent  ===============*/
import r1 from '../assets/images/AzaSelections/r1.png';
import r2 from '../assets/images/AzaSelections/r2.png';
import r3 from '../assets/images/AzaSelections/r3.png';
export const azamazaSelectionsData: AzamazaSelection[] = [
	{
		id: '/l;jhkghjtyui',
		image: inTown,
		title: 'The best deals in town',
		serviceName: 'restaurants',
		actionOffers: null,
		price: null,
		periodOffers: null,
		location: null,
		description:
			'We have selected for you the best offers in your city, have time to take advantage of unique offers and services from our partners',
	},

	{
		id: 'sdfsdhjkuiok,dbvbre',
		image: newSel,
		title: 'New offers on Azamaza',
		serviceName: 'restaurants',
		actionOffers: null,
		price: null,
		periodOffers: null,
		location: null,
		description:
			'We have picked up new offers from our partners, this opens up a new gastronomic challenge for you with unique offers',
	},
	{
		id: 'sdfsdf87y978455432',
		image: top100,
		title: 'Top 100 restaurants by users',
		serviceName: 'restaurants',
		actionOffers: null,
		price: null,
		periodOffers: null,
		location: null,
		description:
			'We have selected the best and proven offers for you, take advantage of unique offers and services from our partners',
	},
	{
		id: 'sdfsdf87y97845qewewqe543qwq2qw2',
		image: p1,
		title: 'Best and verified offers for you',
		serviceName: 'photography',
		actionOffers: null,
		price: null,
		periodOffers: null,
		location: null,
		description:
			'A selection of restaurants that have been voted by our users, visit these establishments and leave your feedback',
	},
	{
		id: 'dasdasdf87y978455432asdas',
		image: p2,
		title: 'New offers on Azamaza',
		serviceName: 'photography',
		actionOffers: null,
		price: null,
		periodOffers: null,
		location: null,
		description:
			"We've put together a new offering for you on our platform! Don't miss your chance to take advantage of them",
	},
	{
		id: 'sdfsdasdrtyrt8455432',
		image: p3,
		title: '100 best by reviews and ratings',
		serviceName: 'photography',
		actionOffers: null,
		price: null,
		periodOffers: null,
		location: null,
		description:
			'A selection of photographers and photo studios voted for by our users, this is an independent seal of quality',
	},
	{
		id: 'sartytyrtdasdasd78455432',
		image: h1,
		title: 'Istanbul (Turkey)',
		serviceName: 'hotels',
		actionOffers: '1131',
		price: '55',
		periodOffers: 'all',
		location: null,
		description:
			'The best deals at the best prices in the beautiful ancient city of Istanbul',
	},
	{
		id: 'srtyrtmil;[p3424346dasdasd78455432',
		image: h2,
		title: 'Paris (France)',
		serviceName: 'hotels',
		actionOffers: '341',
		price: '5678',
		periodOffers: 'all',
		location: null,
		description:
			'A city of love, art and exquisite gastronomy, where every street breathes history',
	},
	{
		id: 'sp[putye23424346dasdasd78455432',
		image: h3,
		title: 'Barcelona (Spain)',
		serviceName: 'hotels',
		actionOffers: '1',
		price: '5',
		periodOffers: 'all',
		location: null,
		description:
			'The capital of Catalonia on the shores of the Bolear Sea is a great option for your vacation',
	},
	{
		id: 'sas2',
		image: h4,
		title: 'Barcelona (Spain)',
		serviceName: 'hotels',
		actionOffers: '1',
		price: '5',
		periodOffers: 'weekend',
		location: 'Sant Julia de Lòria, Andorra',
		description:
			'The capital of Catalonia on the shores of the Bolear Sea is a great option for your vacation',
	},
	{
		id: 'asd78455432',
		image: h5,
		title: 'Barcelona (Spain)',
		serviceName: 'hotels',
		actionOffers: '1',
		price: '5',
		periodOffers: 'weekend',
		location: 'Av. Meritxell, 65, Andorra la Vella',
		description:
			'The capital of Catalonia on the shores of the Bolear Sea is a great option for your vacation',
	},
	{
		id: 'sa23424346da784554io32',
		image: h6,
		title: 'Barcelona (Spain)',
		serviceName: 'hotels',
		actionOffers: '1',
		location: 'Carretera de la Serra, 14, Escaldes-Engordany',
		price: '5',
		periodOffers: 'weekend',
		description:
			'The capital of Catalonia on the shores of the Bolear Sea is a great option for your vacation',
	},
	{
		id: '12344563424346da784554io32',
		image: r1,
		title: 'Best and verified offers for you',
		serviceName: 'rent',
		actionOffers: null,
		price: null,
		periodOffers: null,
		location: null,
		description:
			'We have selected the best and proven offers for you, take advantage of unique offers and services from our partners',
	},
	{
		id: '12344563424346da78455a4io32',
		image: r2,
		title: 'New offers on Azamaza',
		serviceName: 'rent',
		actionOffers: null,
		price: null,
		periodOffers: null,
		location: null,
		description:
			"We've put together a new offering for you on our platform! Don't miss your chance to take advantage of them",
	},
	{
		id: '1asd2344563424346da78455a4io32',
		image: r3,
		title: '100 best by reviews and ratings',
		serviceName: 'rent',
		actionOffers: null,
		price: null,
		periodOffers: null,
		location: null,
		description:
			'A selection of photographers and photo studios voted for by our users, this is an independent seal of quality',
	},
];
