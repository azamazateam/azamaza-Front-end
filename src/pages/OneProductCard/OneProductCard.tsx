import React, {useEffect, useState} from 'react';
import s from './OneProductCard.module.css';
import {useParams} from 'react-router-dom';
import Header from '../../components/Header/Header.tsx';
import Main from '../../components/Main/Main.tsx';
import FooterSmallGrey from '../../components/Footers/FooterSmallGrey.tsx';
import {useTranslation} from 'react-i18next';
import Gallery from '../../components/Gallery/Gallery.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store.ts';
import {ProductType} from '../../redux/types/commonTypes.ts';
import {Form, Formik, FormikValues} from 'formik';
import SearchLocationField from '../../components/Forms/SearchForm/components/SearchLocationField/SearchLocationField.tsx';
import ViewSelector from './components/ViewSelector/ViewSelector.tsx';
import {BsChatText, BsStarFill} from 'react-icons/bs';
import {productsListData} from '../../mocks/ProductsListData.ts';
import {setProductCards} from '../../redux/slices/marketplacesSlice.ts';
import Button from '../../components/Buttons/Button/Button.tsx';

const OneProductCard: React.FC = () => {
	const {id} = useParams();
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const [product, setProduct] = useState<ProductType | null>(null);

	const productCards = useSelector(
		(state: RootState) => state.marketplaces.productCards,
	);
	const handleSubmit = (values: FormikValues) => {
		console.log(values);
	};
	const handleBuy = () => {
		console.log('buy product');
	};
	useEffect(() => {
		dispatch(setProductCards(productsListData));
	}, []);
	useEffect(() => {
		if (id) {
			const foundedService = productCards?.find((service) => service.id === id);
			setProduct(foundedService ?? null);
		}
	}, [id, productCards]);
	if (product) {
		return (
			<>
				<Header />
				<Main>
					<div className={s.container40}>
						<div className={s.inputContainer}>
							<Formik initialValues={{location: ''}} onSubmit={handleSubmit}>
								<Form>
									<SearchLocationField
										fieldName={'location'}
										border={'4px solid #F1D246'}
									/>
								</Form>
							</Formik>
						</div>
					</div>
					<div className={s.container32}>
						<ViewSelector />
					</div>
					<div className={s.galleryContainer}>
						<Gallery images={product.images} />
					</div>
					<div className={s.container32}>
						<h1>{product.name}</h1>
						<div className={s.info}>
							<div className={s.rating}>
								<span className={s.infoIcon}>
									<BsStarFill fill={'#FF671F'} />
									<BsStarFill fill={'#FF671F'} />
									<BsStarFill fill={'#FF671F'} />
									<BsStarFill fill={'#FF671F'} />
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
					</div>
					<div className={s.container24}>
						<div className={s.price}>
							<div className={s.oldPrice}>
								{product.currency}
								{product.oldPrice}
							</div>
							<div className={s.newPrice}>
								{product.currency}
								{product.newPrice}
							</div>
						</div>
					</div>
					<div className={s.container32}>
						<h2>{t('Product description')}</h2>
					</div>
					<div className={s.container24}>
						<div className={s.description}>{product.description}</div>
					</div>
					<div className={s.buttonContainer}>
						<Button type={'button'} text={t('Buy')} callback={handleBuy} />
					</div>
				</Main>
				<FooterSmallGrey />
			</>
		);
	} else return null;
};

export default OneProductCard;
