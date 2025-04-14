import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CategoriesStateTypes} from '../types/categoriesTypes.ts';

const initialState: CategoriesStateTypes = {isOpenPopup: false};
const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setIsOpenPopup: (state, action: PayloadAction<boolean>) => {
			state.isOpenPopup = action.payload;
		},
	},
});

export const {setIsOpenPopup} = categoriesSlice.actions;
export default categoriesSlice.reducer;
