import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export type QuickRowFilterType = {
	name: string;
	link: string | null;
	value: string | null;
};
type SliceType = {
	rowQuickFilters: QuickRowFilterType[] | null;
	iconsSliderFilter: IconSliderFilterType[] | null;
};
export type IconSliderFilterType = {
	id: string;
	icon: string;
	text: string;
};

const initialState: SliceType = {
	rowQuickFilters: null,
	iconsSliderFilter: null,
};
const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setRowQuickFilters: (
			state,
			action: PayloadAction<QuickRowFilterType[] | null>,
		) => {
			state.rowQuickFilters = action.payload;
		},
		setIconsSliderFilter: (
			state,
			action: PayloadAction<IconSliderFilterType[] | null>,
		) => {
			state.iconsSliderFilter = action.payload;
		},
	},
});

export const {setRowQuickFilters, setIconsSliderFilter} = filtersSlice.actions;
export default filtersSlice.reducer;
