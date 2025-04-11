import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type LocationStateType = {
	locations: any;
};
const initialState: LocationStateType = {locations: null};
const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		setLocations: (state, action: PayloadAction<any>) => {
			state.locations = action.payload;
		},
	},
});

export const {setLocations} = locationSlice.actions;
export default locationSlice.reducer;
