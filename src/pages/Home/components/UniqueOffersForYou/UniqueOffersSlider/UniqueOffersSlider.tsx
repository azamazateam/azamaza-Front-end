import React from 'react';
import {Autoplay, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import s from '../UniqueOffersForYou.module.css';
import ButtonYellow from '../../../../../components/ButtonYellow/ButtonYellow.tsx';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

export type UniqueOffersSlideType = {
	title: string;
	image: string;
	propose: string;
	link: string;
};

type Props = {
	data: UniqueOffersSlideType[];
};

const UniqueOffersSlider: React.FC<Props> = ({data}) => {
	const {t} = useTranslation();
	return (
		<Swiper
			loop={true}
			spaceBetween={0}
			slidesPerView={1}
			modules={[Autoplay, Pagination]}
			watchOverflow={true}
			className={'sliderWithPagination'}
			pagination={{
				clickable: true,
			}}
		>
			{data.map((item, index) => (
				<SwiperSlide key={index + item.title} style={{width: 'auto'}}>
					<div
						style={{backgroundImage: `url(${item.image})`}}
						className={s.slideImg}
					>
						<div className={s.cardTitle}>{item.title}</div>
						<div className={s.cardPropose}>{item.propose}</div>
						<div className={s.cardButton}>
							<Link to={item.link}>
								<ButtonYellow type={'button'} text={t('Book now')} />
							</Link>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default UniqueOffersSlider;
