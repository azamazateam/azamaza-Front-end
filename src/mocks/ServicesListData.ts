import i1 from '../assets/images/SkyResortImages/maksym03644_A_father_and_a_child_at_a_ski_resort_wearing_ski__c447fbc1-58b8-4923-a120-e367c1b946a3_2 1.png';
import i2 from '../assets/images/SkyResortImages/maksym03644_A_group_of_friends_at_a_ski_resort_are_relaxing_i_39981216-f85d-418a-a9dc-86a50d20964d_3 1.png';
import i3 from '../assets/images/SkyResortImages/maksym03644_A_group_of_friends_at_a_ski_resort_are_relaxing_i_39981216-f85d-418a-a9dc-86a50d20964d_2 1.png';
import i4 from '../assets/images/SkyResortImages/maksym03644_A_young_and_beautiful_guy_and_girl_skiers_riding__88c26573-e083-45a4-a29a-c267ccdf39cd_0 1.png';
import i5 from '../assets/images/SkyResortImages/maksym03644_An_action_shot_of_skiers_coming_down_the_slope_fr_15057a73-221c-4801-80a2-9dbc96b5b22b_3 1.png';
import i6 from '../assets/images/SkyResortImages/maksym03644_Two_skiers_standing_on_a_hill_of_snow_at_sunset_-_961b8cc0-9978-440a-a2e0-60b45da3fac1_3 1.png';
import i7 from '../assets/images/SkyResortImages/maksym03644_Ski_tourist_base_in_the_sunshine_walk_tourists_dr_d642cab5-3311-43ff-82ac-5197bfcd19be_0 2.png';

/*🏔️ Excursion   start*/
import e1 from '../assets/images/Mock/Excursion/1.jpg';
import e2 from '../assets/images/Mock/Excursion/2.jpg';
import e3 from '../assets/images/Mock/Excursion/3.jpg';
import e4 from '../assets/images/Mock/Excursion/4.jpg';
import e5 from '../assets/images/Mock/Excursion/5.jpg';
/*====================*/
import e6 from '../assets/images/Mock/Excursion/6.jpg';
import e7 from '../assets/images/Mock/Excursion/7.jpg';
import e8 from '../assets/images/Mock/Excursion/8.jpg';
import e9 from '../assets/images/Mock/Excursion/9.jpg';
import e10 from '../assets/images/Mock/Excursion/10.jpg';
/*===============*/
import e11 from '../assets/images/Mock/Excursion/11.jpg';
import e12 from '../assets/images/Mock/Excursion/12.png';
import e13 from '../assets/images/Mock/Excursion/13.png';
import e14 from '../assets/images/Mock/Excursion/14.png';
import e15 from '../assets/images/Mock/Excursion/15.png';
/*==================*/
import e16 from '../assets/images/Mock/Excursion/16.jpg';
import e17 from '../assets/images/Mock/Excursion/17.jpg';
import e18 from '../assets/images/Mock/Excursion/18.jpg';
import e19 from '../assets/images/Mock/Excursion/19.jpg';
import e20 from '../assets/images/Mock/Excursion/20.jpg';
/*========	// 📷 Photography ===========*/
import p1 from '../assets/images/Mock/Photography/1.jpg';
import p2 from '../assets/images/Mock/Photography/2.jpg';
import p3 from '../assets/images/Mock/Photography/3.jpg';
import p4 from '../assets/images/Mock/Photography/4.jpg';
import p5 from '../assets/images/Mock/Photography/5.jpg';
import p6 from '../assets/images/Mock/Photography/6.jpg';
import p7 from '../assets/images/Mock/Photography/7.jpg';
import p8 from '../assets/images/Mock/Photography/8.jpg';
import p9 from '../assets/images/Mock/Photography/9.jpg';
import p10 from '../assets/images/Mock/Photography/10.jpg';
import p11 from '../assets/images/Mock/Photography/11.jpg';
import p12 from '../assets/images/Mock/Photography/12.jpg';
import p13 from '../assets/images/Mock/Photography/13.jpg';
import p14 from '../assets/images/Mock/Photography/14.jpg';
import p15 from '../assets/images/Mock/Photography/15.jpg';
import p16 from '../assets/images/Mock/Photography/16.jpg';
import p17 from '../assets/images/Mock/Photography/17.jpg';
import p18 from '../assets/images/Mock/Photography/18.jpg';
import p19 from '../assets/images/Mock/Photography/19.jpg';
import p20 from '../assets/images/Mock/Photography/20.jpg';
import p21 from '../assets/images/Mock/Photography/21.jpg';
import p22 from '../assets/images/Mock/Photography/22.jpg';
import p23 from '../assets/images/Mock/Photography/23.jpg';
import p24 from '../assets/images/Mock/Photography/24.jpg';
import p25 from '../assets/images/Mock/Photography/25.jpg';
import {ServicesType} from '../redux/types/commonTypes.ts';
export const servicesListData: ServicesType[] = [
	// 🏔️ Excursion
	{
		id: 1,
		hot: 1,
		favorite: 1,
		image: [i7, i2, i1, i3, i4, i5, i6],
		name: 'Tour Vallnord Ski Resort',
		serviceName: 'excursion',
		rating: 9.8,
		views: '1649',
		oldPrice: 170,
		newPrice: 110,
		location: 'La Massana, Andorra',
		description: "Carretera de L'Aldosa, 25, AD400 La Massana, Andorra",
		serviceOptions: [
			{
				id: '1',
				name: 'Free parking',
				icon: 'BsCarFront',
			},
		],
		specialOpportunity: [
			{
				id: '1fghtygkyutb12313',
				name: 'Free cancellation',
				icon: 'BsCarFront',
			},
			{
				id: '1fghtygkyutbaedqw',
				name: 'Verified by Azamaza',
				icon: 'BsCarFront',
			},
			{
				id: '1fghtygkyutb234324',
				name: 'No prepayment required',
				icon: 'BsCarFront',
			},
		],
	},
	{
		id: 101,
		hot: 1,
		favorite: 0,
		image: [e1, e2, e3, e4, e5],
		name: 'Lake Engolasters',
		serviceName: 'excursion',
		rating: 9.5,
		views: '1243',
		oldPrice: 140,
		newPrice: 99,
		location: 'Innsbruck, Austria',
		description:
			'Explore the breathtaking Alpine trails around Tyrol with an expert guide.',
		serviceOptions: [{id: 'opt1', name: 'Hotel pickup', icon: 'BsHouseDoor'}],
		specialOpportunity: [
			{id: 'sp1', name: 'Free cancellation', icon: 'BsCalendarX'},
			{id: 'sp2', name: 'Instant confirmation', icon: 'BsClock'},
		],
	},
	{
		id: 102,
		hot: 0,
		favorite: 1,
		image: [e6, e7, e8, e9, e10],
		name: 'Tobacco Museum',
		serviceName: 'excursion',
		rating: 9.1,
		views: '2987',
		oldPrice: 80,
		newPrice: 55,
		location: 'Rome, Italy',
		description:
			'A guided walking tour through Rome’s iconic landmarks and hidden alleys.',
		serviceOptions: [
			{id: 'opt2', name: 'Headset included', icon: 'BsHeadphones'},
		],
		specialOpportunity: [
			{id: 'sp3', name: 'Verified by Azamaza', icon: 'BsShieldCheck'},
		],
	},
	{
		id: 103,
		hot: 1,
		favorite: 0,
		image: [e11, e12, e13, e14, e15],
		name: 'Wax animal museum',
		serviceName: 'excursion',
		rating: 9.9,
		views: '981',
		oldPrice: 200,
		newPrice: 160,
		location: 'Tromsø, Norway',
		description: 'Chase the magical Aurora Borealis in the Arctic wilderness.',
		serviceOptions: [
			{id: 'opt3', name: 'Thermal suits provided', icon: 'BsSnow'},
		],
		specialOpportunity: [
			{id: 'sp4', name: 'No prepayment required', icon: 'BsCreditCard'},
		],
	},
	{
		id: 104,
		hot: 0,
		favorite: 1,
		image: [e16, e17, e18, e19, e20],
		name: 'Retro car show',
		serviceName: 'excursion',
		rating: 8.7,
		views: '1450',
		oldPrice: 120,
		newPrice: 85,
		location: 'Dubai, UAE',
		description:
			'Dune bashing, camel rides, and traditional dinner in the desert.',
		serviceOptions: [{id: 'opt4', name: 'Meals included', icon: 'BsCupHot'}],
		specialOpportunity: [
			{id: 'sp5', name: 'Free cancellation', icon: 'BsCalendarX'},
		],
	},

	// 📷 Photography
	{
		id: 201,
		hot: 1,
		favorite: 0,
		image: [p1, p2, p3, p4, p5],
		name: 'Professional photo',
		serviceName: 'photography',
		rating: 9.6,
		views: '1120',
		oldPrice: 180,
		newPrice: 130,
		location: 'Maui, Hawaii',
		description:
			'Capture golden hour moments with professional beachside portraits.',
		serviceOptions: [{id: 'opt6', name: '30 edited photos', icon: 'BsImage'}],
		specialOpportunity: [
			{id: 'sp8', name: 'Free rescheduling', icon: 'BsArrowRepeat'},
		],
	},
	{
		id: 202,
		hot: 0,
		favorite: 1,
		image: [p6, p7, p8, p9, p10],
		name: 'Photo and video',
		serviceName: 'photography',
		rating: 8.9,
		views: '980',
		oldPrice: 150,
		newPrice: 100,
		location: 'Berlin, Germany',
		description: 'Stylized portraits in unique urban locations of Berlin.',
		serviceOptions: [
			{id: 'opt7', name: '1 hour session', icon: 'BsClockHistory'},
		],
		specialOpportunity: [
			{id: 'sp9', name: 'No prepayment required', icon: 'BsCreditCard'},
		],
	},
	{
		id: 203,
		hot: 1,
		favorite: 0,
		image: [p11, p12, p13, p14, p15],
		name: 'Family photography',
		serviceName: 'photography',
		rating: 9.8,
		views: '560',
		oldPrice: 400,
		newPrice: 350,
		location: 'Banff, Canada',
		description:
			'Scenic photography for elopements and engagements in the Rockies.',
		serviceOptions: [
			{id: 'opt8', name: 'Drone shots included', icon: 'BsCameraVideo'},
		],
		specialOpportunity: [
			{id: 'sp10', name: 'Verified by Azamaza', icon: 'BsShieldCheck'},
		],
	},
	{
		id: 204,
		hot: 0,
		favorite: 0,
		image: [p16, p17, p18, p19, p20],
		name: 'Photos in the mountains',
		serviceName: 'photography',
		rating: 9.2,
		views: '1430',
		oldPrice: 120,
		newPrice: 95,
		location: 'Warsaw, Poland',
		description: 'Professional family portraits in a cozy indoor studio.',
		serviceOptions: [{id: 'opt9', name: 'Props included', icon: 'BsGift'}],
		specialOpportunity: [
			{id: 'sp11', name: 'Free cancellation', icon: 'BsCalendarX'},
		],
	},
	{
		id: 205,
		hot: 1,
		favorite: 1,
		image: [p21, p22, p23, p24, p25],
		name: 'Photos in the mountains',
		serviceName: 'photography',
		rating: 9.7,
		views: '759',
		oldPrice: 320,
		newPrice: 275,
		location: 'Paris, France',
		description: 'High-end editorial photography for models and influencers.',
		serviceOptions: [{id: 'opt10', name: 'Makeup included', icon: 'BsBrush'}],
		specialOpportunity: [
			{id: 'sp12', name: 'Free rescheduling', icon: 'BsArrowRepeat'},
			{id: 'sp13', name: 'No prepayment required', icon: 'BsCreditCard'},
		],
	},
];
