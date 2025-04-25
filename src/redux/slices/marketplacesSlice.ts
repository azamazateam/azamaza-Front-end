import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductType} from '../types/commonTypes.ts';

type Slice = {
	productCards: ProductType[] | null;
};
const initialState: Slice = {
	productCards: null,
};
const marketplacesSlice = createSlice({
	name: 'marketplaces',
	initialState,
	reducers: {
		setProductCards: (state, action: PayloadAction<ProductType[] | null>) => {
			state.productCards = action.payload;
		},
	},
});

export const {setProductCards} = marketplacesSlice.actions;
export default marketplacesSlice.reducer;
