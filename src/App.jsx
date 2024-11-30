import BgAnimation from "./Tools/BgAnimation.jsx";
import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import UserContextProvider from "./Tools/UserContextProvider.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import InvestmentPage from "./pages/InvestmentPage.jsx";
import Auth from "./pages/Auth.jsx";
import "./App.css"; // Make sure to import the CSS file

// DropDown layout import
import NavBar from "./routes/NavBar.jsx";
import Profile from "./pages/Profile.jsx";
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
				path="auth"
				element={<Auth />}
			/>

			<Route
				path="dashboard"
				element={<Dashboard />}
			/>
			<Route
				path="plans"
				element={<InvestmentPage />}
			/>
			<Route
				path="about"
				element={<About />}
			/>
			<Route
				path="contact"
				element={<Contact />}
			/>
			<Route
				path="profile"
				element={<Profile />}
			/>
		</Route>
	)
);

function App() {
	return (
		<>
			<BgAnimation />
			<UserContextProvider>
				<div className="overflow-hidden">
					<RouterProvider router={NavRouter} />
				</div>
			</UserContextProvider>
		</>
	);
}

export default App;
