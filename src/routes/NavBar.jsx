import logo from "../assets/images/IMG-20241007-WA0033.jpg";
import profileImg from "../assets/Icons/person-circle-outline.svg";
import hamburger from "../assets/Icons/hamburger.svg";
import { useState, useRef, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../CustomStyles/Nav.css";
import "../index.css";
import { Auth } from "../config/Firebase";
import { useContext } from "react";
import { UserContext } from "../Tools/UserContextProvider";
import ValidateAccount from "../components/ValidateAccount";
import Loading from "../components/Loading";
export default function NavBar() {
	const { userInfo, handleUserInfo } = useContext(UserContext);
	const [isOpen, setIsOpen] = useState(false);
	const [isValidated, setIsValidated] = useState(userInfo.isValidated);
	const [isLoading, setIsLoading] = useState(userInfo.isLoading);
	const dropdownRef = useRef(null);
	const ToggleNav = () => {
		setIsOpen((o) => !isOpen);
	};
	const navigate = useNavigate();
	function displayProfile() {
		if (Auth.currentUser) {
			navigate("profile");
		} else {
			navigate("auth");
		}
	}
	useEffect(() => {
		setIsValidated(userInfo.isValidated);

		//   return () => {
		// 	 second
		//   }
	}, [userInfo]);

	useEffect(() => {
		setIsLoading(userInfo.isLoading);
	}, [userInfo]);
	return (
		<>
			<nav
				className="nav_background pl-6 pr-6 pt-2
			pb-2  z-10  fixed w-screen main-shadow backdrop-blur-md"
			>
				<div className="w-full flex items-center justify-between">
					<NavLink to={"/"}>
						<img
							src={logo}
							alt="logo"
							className="w-12 rounded-full self-start main-shadow"
						/>
					</NavLink>
					<div className="flex gap-6 md:gap-2">
						<button
							onClick={displayProfile}
							type="button"
						>
							<img
								src={profileImg}
								alt="profile"
								className="w-9"
							/>
						</button>

						<button onClick={ToggleNav}>
							<img
								src={hamburger}
								alt="menu"
								className="w-9 md:hidden md:scale-0"
							/>
						</button>

						<ul className="hidden scale-0  w-auto md:flex md:scale-100 gap-5 mr-10 mt-1">
							<li className="n">
								<NavLink to="/">Home</NavLink>
							</li>
							<li className="n">
								<NavLink to="about">About</NavLink>
							</li>
							<li className="n">
								<NavLink to="dashboard">Dashboard</NavLink>
							</li>
							<li className="n">
								<NavLink to="plans">Plans</NavLink>
							</li>
							<li className="n">
								<NavLink to="contact">Contact Us</NavLink>
							</li>
						</ul>
					</div>
				</div>

				<div
					ref={dropdownRef}
					className={`overflow-hidden pt-2 transition-all duration-300 
  ${isOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"}`}
				>
					<ul className="flex flex-col gap-5 ">
						<li className="n">
							<NavLink to="/">Home</NavLink>
						</li>
						<li className="n">
							<NavLink to="about">About</NavLink>
						</li>
						<li className="n">
							<NavLink to="dashboard">Dashboard</NavLink>
						</li>
						<li className="n">
							<NavLink to="plans">Plans</NavLink>
						</li>
						<li className="n">
							<NavLink to="contact">Contact Us</NavLink>
						</li>
					</ul>
				</div>
			</nav>
			<main>
				{!isValidated && (
					<div className="front_blur_background w-full h-screen fixed top-0 z-50 flex justify-center items-center">
						<ValidateAccount />
					</div>
				)}
				{isLoading && (
					<div
						className="z-[900] front_blur_background fixed top-0
"
					>
						<Loading />
					</div>
				)}
				<Outlet />
			</main>
		</>
	);
}

// className="scale-0";
