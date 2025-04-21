// store/swiperSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type SwiperState = {
	instance: any | null;
};

const initialState: SwiperState = {
	instance: null,
};

const swiperSlice = createSlice({
	name: 'swiper',
	initialState,
	reducers: {
		setSwiperInstance(state, action: PayloadAction<any>) {
			state.instance = action.payload;
		},
		slideNext(state, action: PayloadAction<number | undefined>) {
			const speed = action.payload ?? 300; // по умолчанию 300 мс
			state.instance?.slideNext(speed);
		},
		slidePrev(state, action: PayloadAction<number | undefined>) {
			const speed = action.payload ?? 300;
			state.instance?.slidePrev(speed);
		},
	},
});

export const {setSwiperInstance, slideNext, slidePrev} = swiperSlice.actions;
export default swiperSlice.reducer;
