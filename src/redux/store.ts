import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice.ts';
import locationsReducer from './slices/userSlice.ts';
import categoriesReducer from './slices/categoriesSlice.ts';
import homePageReducer from './slices/homeSlice.ts';
import excursionReducer from './slices/excursionSlice.ts';
import searchResultReducer from './slices/searchResultSlice.ts';
import filtersReducer from './slices/filtersSlice.ts';
import azamazaSelectionsReducer from './slices/azamazaSelectionsSlice.ts';
import proposeReducer from './slices/proposeSlice.ts';

import marketplacesReducer from './slices/marketplacesSlice.ts';
export const store = configureStore({
	reducer: {
		user: userReducer,
		locations: locationsReducer,
		categories: categoriesReducer,
		homePage: homePageReducer,
		excursionPage: excursionReducer,
		searchResults: searchResultReducer,
		filters: filtersReducer,
		azamazaSelectionsData: azamazaSelectionsReducer,
		proposeData: proposeReducer,
		marketplaces: marketplacesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
