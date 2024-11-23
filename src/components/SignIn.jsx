import signUpimg from "../assets/images/bitcoin2.jpg";
import MainButton from "./MainButton.jsx";
import { useState, useRef } from "react";
import {
	verifyEmailInput,
	RemoveInputError,
	addInputError,
} from "../Tools/userValidation.js";
import "../index.css";
import PasswordInput from "./PasswordInput.jsx";

export default function SignIn({ state }) {
	const [passwordType, setPasswordType] = useState("password");
	const { setHasAccount } = state;
	const [loading, setLoading] = useState(false);
	const emailRef = useRef("yes");
	const passwordRef = useRef(null);
	function logUserIn() {
		event.preventDefault();
		const email = emailRef;
		const password = passwordRef;

		const UserInputs = checkUserInputs();
	}

	function checkUserInputs() {
		let checker = true;
		const email = emailRef.current.value;
		console.log(passwordRef.current.value);
		if (!verifyEmailInput(email)) {
			addInputError(emailRef.current);
			checker = false;
		} else {
			RemoveInputError(emailRef.current);
		}

		if (!passwordRef.current.value) {
			addInputError(passwordRef.current.parentElement);

			checker = false;
		} else {
			RemoveInputError(passwordRef.current.parentElement);
		}
	}
	return (
		<div className="w-full h-screen flex justify-center items-center mt-32 mb-56	md:mb-0 md:mt-0 lg:mt-0 lg:mb-0">
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
						<p>
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
