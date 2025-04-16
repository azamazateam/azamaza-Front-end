import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ServicesType} from '../types/commonTypes.ts';

type SearchResultStateType = {
	searchResults: ServicesType[] | null;
};
const initialState: SearchResultStateType = {searchResults: null};
const searchResultSlice = createSlice({
	name: 'searchResults',
	initialState,
	reducers: {
		setSearchResults: (state, action: PayloadAction<ServicesType[]>) => {
			state.searchResults = action.payload;
		},
	},
});

export const {setSearchResults} = searchResultSlice.actions;
export default searchResultSlice.reducer;
