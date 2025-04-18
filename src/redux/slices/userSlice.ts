import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
	CurrencyType,
	UniqueOffersSlideType,
	UserState,
} from '../types/userTypes.ts';

const initialState: UserState = {
	id: null,
	uniqueOfferForYou: null,
	currency: 'usd',
	avatar: null,
	currencyList: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setId: (state, action: PayloadAction<number>) => {
			state.id = action.payload;
		},
		setUniqueOfferForYou: (
			state,
			action: PayloadAction<UniqueOffersSlideType[] | null>,
		) => {
			state.uniqueOfferForYou = action.payload;
		},
		setUserAvatar: (state, action: PayloadAction<string | null>) => {
			state.avatar = action.payload;
		},
		setCurrency: (state, action: PayloadAction<string | null>) => {
			state.currency = action.payload;
		},
		setCurrencyList: (state, action: PayloadAction<CurrencyType[] | null>) => {
			state.currencyList = action.payload;
		},
	},
});

export const {
	setId,
	setUniqueOfferForYou,
	setUserAvatar,
	setCurrencyList,
	setCurrency,
} = userSlice.actions;
export default userSlice.reducer;
