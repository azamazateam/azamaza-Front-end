import './App.css';
import {Desktop, Mobile} from './assets/common/responsive.tsx';
import Header from './components/Header/Header.tsx';
import Main from './components/Main/Main.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {
	return (
		<>
			<Mobile>
				<Header />
				<main>
					<Main />
				</main>
				<Footer />
			</Mobile>
			<Desktop>
				<h1>Desktop Version </h1>
			</Desktop>
		</>
	);
}

export default App;
