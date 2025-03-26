import "./App.css";
import { Desktop, Mobile } from "./assets/common/responsive.tsx";
import Header from "./components/Header/Header.tsx";

function App() {
	return (
		<>
			<Mobile>
				<Header />
				<main>Main</main>
				<footer>footer</footer>
			</Mobile>
			<Desktop>
				<h1>Desktop Info Page</h1>
			</Desktop>
		</>
	);
}

export default App;
