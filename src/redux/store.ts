import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice.ts';
import locationsReducer from './slices/userSlice.ts';
import categoriesReducer from './slices/categoriesSlice.ts';
import homePageReducer from './slices/homeSlice.ts';
import excursionReducer from './slices/excursionSlice.ts';
export const store = configureStore({
	reducer: {
		user: userReducer,
		locations: locationsReducer,
		categories: categoriesReducer,
		homePage: homePageReducer,
		excursionPage: excursionReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
