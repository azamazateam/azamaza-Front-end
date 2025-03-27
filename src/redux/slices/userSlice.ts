import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState} from '../types/userTypes.ts';

const initialState: UserState = {id: null};
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setId: (state, action: PayloadAction<number>) => {
			state.id = action.payload;
		},
	},
});

export const {setId} = userSlice.actions;
export default userSlice.reducer;
