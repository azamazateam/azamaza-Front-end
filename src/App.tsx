import './App.css';
//import {Desktop, Mobile} from './assets/common/responsive.tsx';
import AppRoutes from './routes/AppRoutes.tsx';
import {setIsOpenPopup} from './redux/slices/categoriesSlice.ts';
import AllServicePopup from './pages/Services/AllServicePopup/AllServicePopup.tsx';
import Modal from './components/Modal/Modal.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './redux/store.ts';

function App() {
	const dispatch = useDispatch();
	const isOpenCategoriesPopup = useSelector(
		(state: RootState) => state.categories.isOpenPopup,
	);
	const handleCloseCategoriesPopup = () => {
		dispatch(setIsOpenPopup(false));
	};
	return (
		<>
			<AppRoutes />
			<Modal
				fullScreen
				isOpen={isOpenCategoriesPopup}
				onClose={handleCloseCategoriesPopup}
			>
				<AllServicePopup />
			</Modal>
		</>
	);
}

export default App;
