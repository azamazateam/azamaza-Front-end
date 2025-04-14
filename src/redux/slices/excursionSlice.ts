import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ExcursionStateType} from '../types/excursionTypes.ts';
import {excursionData} from '../data/ExcursionData.ts';
import {PopularServicesType} from '../types/homePageTypes.ts';

const initialState: ExcursionStateType = {
	alsoOrderWith: excursionData,
};
const excursionSlice = createSlice({
	name: 'excursion',
	initialState,
	reducers: {
		setAlsoOrderWith: (state, action: PayloadAction<PopularServicesType[]>) => {
			state.alsoOrderWith = action.payload;
		},
	},
});

export const {setAlsoOrderWith} = excursionSlice.actions;
export default excursionSlice.reducer;
