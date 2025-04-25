import React, {createContext, useContext, useState} from 'react';
import type {Swiper} from 'swiper';

type SwiperContextType = {
	swiper: Swiper | null;
	setSwiper: (swiper: Swiper) => void;
};

const SwiperContext = createContext<SwiperContextType | undefined>(undefined);

export const SwiperProvider = ({children}: {children: React.ReactNode}) => {
	const [swiper, setSwiper] = useState<Swiper | null>(null);

	return (
		<SwiperContext.Provider value={{swiper, setSwiper}}>
			{children}
		</SwiperContext.Provider>
	);
};

export const useSwiperContext = () => {
	const context = useContext(SwiperContext);
	if (!context) {
		throw new Error('useSwiperContext must be used within a SwiperProvider');
	}
	return context;
};
