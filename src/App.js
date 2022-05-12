import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HireMeSection from "./components/HireMeSection/HireMeSection";
import Projects from "./components/Projects/Projects";
import Promo from "./components/Promo/Promo";
import Skills from "./components/Skills/Skills";

function App() {
	return (
		<div className="App">
			<div className="container">
				<Header />
				<Promo />
				<Skills />
				<Projects />
				<HireMeSection />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;
