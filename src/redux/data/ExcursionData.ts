import image from '../../assets/images/SkyResortImages/maksym03644_A_father_and_a_child_at_a_ski_resort_wearing_ski__c447fbc1-58b8-4923-a120-e367c1b946a3_2 1.png';
import i1 from '../../assets/images/SkyResortImages/maksym03644_A_father_and_a_child_at_a_ski_resort_wearing_ski__c447fbc1-58b8-4923-a120-e367c1b946a3_2 1.png';
import i2 from '../../assets/images/SkyResortImages/maksym03644_A_group_of_friends_at_a_ski_resort_are_relaxing_i_39981216-f85d-418a-a9dc-86a50d20964d_3 1.png';
import i3 from '../../assets/images/SkyResortImages/maksym03644_A_group_of_friends_at_a_ski_resort_are_relaxing_i_39981216-f85d-418a-a9dc-86a50d20964d_2 1.png';
import i4 from '../../assets/images/SkyResortImages/maksym03644_A_young_and_beautiful_guy_and_girl_skiers_riding__88c26573-e083-45a4-a29a-c267ccdf39cd_0 1.png';
import i5 from '../../assets/images/SkyResortImages/maksym03644_An_action_shot_of_skiers_coming_down_the_slope_fr_15057a73-221c-4801-80a2-9dbc96b5b22b_3 1.png';
import i6 from '../../assets/images/SkyResortImages/maksym03644_Two_skiers_standing_on_a_hill_of_snow_at_sunset_-_961b8cc0-9978-440a-a2e0-60b45da3fac1_3 1.png';
import i7 from '../../assets/images/SkyResortImages/maksym03644_Ski_tourist_base_in_the_sunshine_walk_tourists_dr_d642cab5-3311-43ff-82ac-5197bfcd19be_0 2.png';
import {PopularServicesType} from '../types/homePageTypes.ts';

export const excursionData: PopularServicesType[] = [
	{
		id: 1,
		hot: 1,
		favorite: 1,
		image: [image, i2, i1, i3, i4, i5, i6, i7],
		name: 'Vallnord Ski Resort',
		serviceName: 'Excursion',
		rating: 9.8,
		views: '1649',
		oldPrice: 170,
		newPrice: 110,
		description: "Carretera de L'Aldosa, 25, AD400 La Massana, Andorra",
		serviceOptions: [
			{
				id: '1',
				name: 'Free parking',
				icon: 'BsCarFront',
			},
		],
	},
];
