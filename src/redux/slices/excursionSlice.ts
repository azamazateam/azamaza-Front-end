import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ExcursionStateType} from '../types/excursionTypes.ts';
import {servicesListData} from '../../mocks/ServicesListData.ts';
import {excursionBrandsIconData} from '../../mocks/iconsBrandsData.ts';
import {ServicesType} from '../types/commonTypes.ts';

const initialState: ExcursionStateType = {
	alsoOrderWith: servicesListData,
	popularPartnersIcons: excursionBrandsIconData,
};
const excursionSlice = createSlice({
	name: 'excursion',
	initialState,
	reducers: {
		setAlsoOrderWith: (state, action: PayloadAction<ServicesType[]>) => {
			state.alsoOrderWith = action.payload;
		},
	},
});

export const {setAlsoOrderWith} = excursionSlice.actions;
export default excursionSlice.reducer;
