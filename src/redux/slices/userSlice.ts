import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UniqueOffersSlideType, UserState} from '../types/userTypes.ts';

const initialState: UserState = {
	id: null,
	uniqueOfferForYou: null,
	currency: 'USD',
	avatar: null,
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
	},
});

export const {setId, setUniqueOfferForYou, setUserAvatar} = userSlice.actions;
export default userSlice.reducer;
