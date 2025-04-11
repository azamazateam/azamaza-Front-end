import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import '../src/locales/i18n.ts';
import App from './App.tsx';
import {Provider} from 'react-redux';
import {store} from './redux/store.ts';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from './assets/utils/ScrollToTop.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</StrictMode>,
);
