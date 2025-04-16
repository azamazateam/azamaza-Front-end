import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {HomePageState, HowItWorksDataType} from '../types/homePageTypes.ts';
import {
	advantagesData,
	howItWorksData,
	ourSubscriptionsData,
} from '../../mocks/HomePageData.ts';
import {allBrandsIconData} from '../../mocks/iconsBrandsData.ts';
import {servicesListData} from '../../mocks/ServicesListData.ts';
import {ServicesType} from '../types/commonTypes.ts';

const initialState: HomePageState = {
	howItWorks: howItWorksData,
	mostPopularService: servicesListData,
	advantage: advantagesData,
	ourSubscriptions: ourSubscriptionsData,
	popularPartnersIcons: allBrandsIconData,
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
	},
});

export const {setHowItWorks, setMostPopularService} = homeSlice.actions;
export default homeSlice.reducer;
