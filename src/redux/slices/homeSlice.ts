import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
	AdvantagesDataType,
	HomePageState,
	HowItWorksDataType,
} from '../types/homePageTypes.ts';
import {
	howItWorksData,
	ourSubscriptionsData,
} from '../../mocks/HomePageData.ts';
import {allBrandsIconData} from '../../mocks/iconsBrandsData.ts';
import {servicesListData} from '../../mocks/ServicesListData.ts';
import {ServicesType} from '../types/commonTypes.ts';

const initialState: HomePageState = {
	howItWorks: howItWorksData,
	mostPopularService: servicesListData,
	advantage: null,
	ourSubscriptions: ourSubscriptionsData,
	popularPartnersIcons: allBrandsIconData,
	serviceAdvantages: null,
};

const homeSlice = createSlice({
	name: 'homePage',
	initialState,
	reducers: {
		setHowItWorks: (state, action: PayloadAction<HowItWorksDataType[]>) => {
			state.howItWorks = action.payload;
		},
		setMostPopularService: (state, action: PayloadAction<ServicesType[]>) => {
			state.mostPopularService = action.payload;
		},
		setAdvantage: (
			state,
			action: PayloadAction<AdvantagesDataType[] | null>,
		) => {
			state.advantage = action.payload;
		},
		setServiceAdvantage: (
			state,
			action: PayloadAction<AdvantagesDataType[] | null>,
		) => {
			state.serviceAdvantages = action.payload;
		},
	},
});

export const {
	setHowItWorks,
	setMostPopularService,
	setAdvantage,
	setServiceAdvantage,
} = homeSlice.actions;
export default homeSlice.reducer;
