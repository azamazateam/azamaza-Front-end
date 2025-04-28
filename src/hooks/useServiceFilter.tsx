import {useSelector} from 'react-redux';
import {RootState} from '../redux/store.ts';

export const useServiceFilter = () => {
	const popularCards = useSelector(
		(state: RootState) => state.homePage.mostPopularService,
	);
	const serviceFilter = (serviceName?: string, categoryName?: string) => {
		if (!serviceName) return popularCards;
		const filteredCards = popularCards.filter(
			(c) => c.serviceName === serviceName,
		);
		if (!categoryName) return filteredCards;
		return filteredCards.filter((c) => c.categoryName === categoryName);
	};
	return {serviceFilter};
};
export default useServiceFilter;
