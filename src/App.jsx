import BgAnimation from "./Tools/BgAnimation.jsx";
import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css"; // Make sure to import the CSS file

// DropDown layout import
import NavBar from "./components/NavBar.jsx";
// import DropDown from "./layout/Drop-down.jsx";

const NavRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<NavBar />}
		>
			<Route
				index
				element={<Home />}
			/>
			<Route
				path="dashboard"
				element={<Dashboard />}
			/>
			<Route
				path="about"
				element={<About />}
			/>
			<Route
				path="contact"
				element={<Contact />}
			/>
		</Route>
	)
);

function App() {
	return (
		<>
			<BgAnimation />
			<div className="overflow-hidden">
				<RouterProvider router={NavRouter} />
			</div>
		</>
	);
}

export default App;
