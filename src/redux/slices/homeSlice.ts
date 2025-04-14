import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
	HomePageState,
	HowItWorksDataType,
	PopularServicesType,
} from '../types/homePageTypes.ts';
import {
	advantagesData,
	howItWorksData,
	mostPopularServicesData,
	ourSubscriptionsData,
} from '../data/HomePageData.tsx';

const initialState: HomePageState = {
	howItWorks: howItWorksData,
	mostPopularService: mostPopularServicesData,
	advantage: advantagesData,
	ourSubscriptions: ourSubscriptionsData,
};

const homeSlice = createSlice({
	name: 'homePage',
	initialState,
	reducers: {
		setHowItWorks: (state, action: PayloadAction<HowItWorksDataType[]>) => {
			state.howItWorks = action.payload;
		},
		setMostPopularService: (
			state,
			action: PayloadAction<PopularServicesType[]>,
		) => {
			state.mostPopularService = action.payload;
		},
	},
});

export const {setHowItWorks, setMostPopularService} = homeSlice.actions;
export default homeSlice.reducer;
