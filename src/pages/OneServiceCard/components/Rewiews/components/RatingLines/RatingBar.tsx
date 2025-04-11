import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';

const RatingBar = ({rating, max}: {rating: any; max: number}) => {
	const numberOfSlides = max;
	const filledSlides = Math.floor((rating / max) * numberOfSlides);

	return (
		<Swiper spaceBetween={0} slidesPerView={max + 1} loop={false}>
			{[...Array(numberOfSlides)].map((_, index) => (
				<SwiperSlide
					key={index}
					style={{
						backgroundColor: index < filledSlides ? '#006CE4' : '#ddd',
						height: '8px',
						borderRadius:
							index === 0
								? '8px 0 0 8px'
								: index === numberOfSlides - 1
									? '0 8px 8px 0'
									: '0',
					}}
				/>
			))}
		</Swiper>
	);
};

export default RatingBar;
