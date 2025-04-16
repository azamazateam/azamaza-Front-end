import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type SliceType = {
	azamazaSelections: AzamazaSelection[] | null;
};
export interface AzamazaSelection {
	id: string;
	title: string;
	description: string;
	image: string;
	serviceName: string;
	actionOffers: string | null;
	price: string | null;
	periodOffers: 'weekend' | 'all' | 'azamazaSelected' | null;
	location: string | null;
}

const initialState: SliceType = {azamazaSelections: null};
const azamazaSelectionsSlice = createSlice({
	name: 'azamazaSelections',
	initialState,
	reducers: {
		setAzamazaSelection: (
			state,
			action: PayloadAction<AzamazaSelection[] | null>,
		) => {
			state.azamazaSelections = action.payload;
		},
	},
});

export const {setAzamazaSelection} = azamazaSelectionsSlice.actions;
export default azamazaSelectionsSlice.reducer;
