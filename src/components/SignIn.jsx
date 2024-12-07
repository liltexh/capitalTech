import signUpimg from "../assets/images/bitcoin2.jpg";
import MainButton from "./MainButton.jsx";
import { useState, useRef, useEffect, useContext } from "react";
import {
	verifyEmailInput,
	RemoveInputError,
	addInputError,
	verifyPassword,
} from "../Tools/userValidation.js";
import { TypeAnimation } from "react-type-animation";

import PasswordInput from "./PasswordInput.jsx";
// import Loading from "./Loading.jsx";

import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../config/Firebase.js";
import { useNavigate } from "react-router-dom";
import "../index.css";
import LoadingAnimation from "../Tools/LoadingAnimation.js";
import { UserContext } from "../Tools/UserContextProvider.jsx";

export default function SignIn({ state }) {
	const { setHasAccount } = state;
	const [passwordType, setPasswordType] = useState("password");
	const [invalidForm, handleInvalidForm] = useState(false);

	const { startLoading, stopLoading } = LoadingAnimation();

	const emailRef = useRef("");
	const passwordRef = useRef(null);
	const navigate = useNavigate();
	async function logUserIn() {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		const UserInputs = checkUserInputs();

		if (!UserInputs) {
			console.log("invalid form");
			return;
		}

		// setLoading(true);
		try {
			startLoading();

			console.log("ist starting");
			const userCredentials = await signInWithEmailAndPassword(
				Auth,
				email,
				password
			);

			if (userCredentials.user) {
				stopLoading();
				alert("user has sign in succefully");
				navigate("/");
			}
		} catch (error) {
			stopLoading();
			alert(error.message);
			console.error(error);
		}
	}

	function checkUserInputs() {
		let checker = true;
		const email = emailRef.current.value;
		console.log(passwordRef.current.value);
		if (!verifyEmailInput(email)) {
			addInputError(emailRef.current);
			handleInvalidForm(true);
			checker = false;
		} else {
			RemoveInputError(emailRef.current);
			handleInvalidForm(false);
		}

		if (!verifyPassword(passwordRef.current.value)) {
			addInputError(passwordRef.current.parentElement);
			handleInvalidForm(true);

			checker = false;
		} else {
			RemoveInputError(passwordRef.current.parentElement);
			handleInvalidForm(false);
		}

		if (
			!verifyEmailInput(email) ||
			!verifyPassword(passwordRef.current.value)
		) {
			handleInvalidForm(true);
			checker = false;
		} else {
			handleInvalidForm(false);
			console.log("inputa are correct");
		}
		return checker;
	}

	const { userInfo, handleUserInfo } = useContext(UserContext);
	useEffect(() => {
		console.log(userInfo.isloading);
	}, []);
	return (
		<div className="w-full h-screen flex justify-center items-center mt-36 mb-32">
			{invalidForm && (
				<span
					style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
					className="z-50 fixed top-[40%]  bg-black w-auto h-auto  border border-red-700 p-2 rounded backdrop-blur-sm"
				>
					<TypeAnimation
						sequence={[
							"Invalid Input or .",
							100,
							"Invalid Input or ..",
							100,
							"Invalid Input or ...",
							1000,
							"Invalid Input or ..",
							100,
							"Invalid Input or .",
							300,
							"Invalid Input or ",
							1000,
							"Invalid Input or Incomplete Credentials... ",
						]}
						speed={90}
						className="text-red-700 font-semibold text-xl"
					/>
				</span>
			)}
			<section
				style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
				className="glowing_shadow w-11/12 md:w-2/3 lg:w-2/3 flex flex-col
			justify-center rounded "
			>
				<div
					style={{
						backgroundImage: `url('${signUpimg}')`,
					}}
					className="back_background "
				>
					<div
						className="front_blur_background flex flex-col items-center
					justify-center gap-4 p-10 pl-5 pr-5"
					>
						<h2 className="text-2xl font-semibold">
							Welcome To <span className="text-amber-400">Capital Tech</span>
						</h2>
						<p className="opacity-70 hover:opacity-100 transition-opacity duration-300">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Blanditiis distinctio delectus repellendus totam obcaecati soluta
							dignissimos, reprehenderit nostrum quia hic.
						</p>
					</div>
				</div>
				<div
					className="flex flex-col justify-center p-8 pr-5 pl-5
				gap-4 "
				>
					<h3 className="text-xl font-semibold mb-2">Login</h3>
					<form
						onSubmit={logUserIn}
						className="flex flex-col gap-5 justify-center"
					>
						<label className="flex flex-col gap-2 font-medium">
							Email Address
							<input
								type="text"
								ref={emailRef}
								placeholder="Enter email address"
								className="bg-transparent w-full h-9 p-5 rounded border border-amber-400
						"
							/>
						</label>

						<label className="flex flex-col gap-3 font-medium">
							Password
							<PasswordInput state={{ passwordRef }} />
						</label>
						<label className="flex gap-2 font-medium">
							<input type="checkbox" />
							Remember Me
						</label>

						<div>
							<MainButton text="Login" />
						</div>
					</form>
					<h6>
						Don't have an account ?{" "}
						<button
							className="underline text-amber-400"
							onClick={() => {
								setHasAccount(false);
							}}
						>
							Sign Up
						</button>
						{/* <span className="underline text-amber-400">Sign Up</span> */}
					</h6>
				</div>
			</section>
		</div>
	);
}
