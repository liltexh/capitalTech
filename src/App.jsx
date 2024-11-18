import BgAnimation from "./Tools/BgAnimation.jsx";
import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css"; // Make sure to import the CSS file

// DropDown layout import
import NavBar from "./routes/NavBar.jsx";
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
