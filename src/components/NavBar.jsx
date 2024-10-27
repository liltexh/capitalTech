import logo from "../assets/images/IMG-20241007-WA0033.jpg";
import profileImg from "../assets/Icons/person-circle-outline.svg";
import hamburger from "../assets/Icons/hamburger.svg";
import { useState, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../CustomStyles/Nav.css";
import "../index.css";
export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);
	const ToggleNav = () => {
		setIsOpen(o => !isOpen);
	};
	console.log("first");
	return (
		<>
			<nav
				className="nav_background pl-6 pr-6 pt-2
			pb-2  z-10  fixed w-screen main-shadow backdrop-blur-md"
			>
				<div className="w-full flex items-center justify-between ">
					<img
						src={logo}
						alt="logo"
						className="w-12 rounded-full self-start main-shadow"
					/>
					<div className="flex justify-between gap-6">
						<img
							src={profileImg}
							alt="profile"
							className="w-9"
						/>
						<button onClick={ToggleNav}>
							<img
								src={hamburger}
								alt="menu"
								className="w-9"
							/>
						</button>
					</div>
				</div>
				<div
					ref={dropdownRef}
					className={`overflow-scroll pt-2 transition-all duration-300 
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
						<li className="n">Plans</li>
						<li className="n">
							<NavLink to="contact">Contact Us</NavLink>
						</li>
					</ul>
				</div>
			</nav>
			<main>
				<Outlet />
			</main>
		</>
	);
}

// className="scale-0";
