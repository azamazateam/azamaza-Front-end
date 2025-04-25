import React from 'react';
import s from './ProductCardVertical.module.css';
import {ProductType} from '../../../redux/types/commonTypes.ts';
import FavoriteHeart from '../../FavoriteHeart/FavoriteHeart.tsx';
import {BsCart4, BsChatText, BsStarFill} from 'react-icons/bs';
import {Link, useNavigate} from 'react-router-dom';

type Props = {
	product: ProductType;
};
const ProductCardVertical: React.FC<Props> = ({product}) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/product-card/${product.id}`);
	};
	return (
		<div className={s.container} role={'button'} onClick={handleClick}>
			<div className={s.imageContainer}>
				<img src={product.images[0]} alt={product.name} />

				<FavoriteHeart
					active={product.favorite === 1}
					side={'right'}
					background={'#D7D7D9'}
				/>
			</div>
			<div className={s.infoContainer}>
				<div className={s.name}>{product.name}</div>
				<div className={s.info}>
					<div className={s.rating}>
						<span className={s.infoIcon}>
							<BsStarFill fill={'#FF671F'} />
						</span>
						{product.rating}
					</div>
					<div className={s.views}>
						<span className={s.infoIcon}>
							<BsChatText />
						</span>
						{product.views}
					</div>
				</div>
				<div className={s.bottom}>
					<div className={s.bottomColumn}>
						<div className={s.priceTop}>
							<div className={s.old}>
								{product.oldPrice}
								{product.currency}
							</div>
							<div className={s.discount}>-{product.discount}%</div>
						</div>
						<div className={s.priceBottom}>
							{product.newPrice} <span>{product.currency}</span>
						</div>
					</div>
					<div className={s.bottomColumn}>
						<div className={s.cartButton}>
							<Link to={`/cart/${product.id}`}>
								<BsCart4 size={18} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCardVertical;
