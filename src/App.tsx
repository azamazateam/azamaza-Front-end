import './App.css';
import {Desktop, Mobile} from './assets/common/responsive.tsx';
import AppRoutes from './routes/AppRoutes.tsx';

function App() {
	return (
		<>
			<Mobile>
				<AppRoutes />
			</Mobile>
			<Desktop>
				<h1>Desktop Version </h1>
			</Desktop>
		</>
	);
}

export default App;
