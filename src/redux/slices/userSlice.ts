import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UniqueOffersSlideType, UserState} from '../types/userTypes.ts';

const initialState: UserState = {id: null, uniqueOfferForYou: null};

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
	},
});

export const {setId, setUniqueOfferForYou} = userSlice.actions;
export default userSlice.reducer;
