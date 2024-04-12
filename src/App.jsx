import Contact from "./components/Contact";
import Education from "./components/Education";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";

function App() {
	return (
		<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-gray-100 to-gray-50">
			<Sidenav />
			<Main />
			<Work />
			<Projects />
			<Contact />
			<Education />
		</div>
	);
}

export default App;
