import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice.ts';
import locationsReducer from './slices/userSlice.ts';
export const store = configureStore({
	reducer: {
		user: userReducer,
		locations: locationsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
