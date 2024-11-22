import { useRef, useState } from "react";
import signUpimg from "../assets/images/bitcoin2.jpg";
import MainButton from "./MainButton.jsx";
import "../index.css";
import { eye, eyeCrossed } from "../Tools/icons.js";

export default function SignUp({ state }) {
	const { setHasAccount } = state;
	const [loading, setLoading] = useState(false);
	const [passwordType, setPasswordType] = useState("password");
	const fullNameRef = useRef(null);
	const phoneNumberRef = useRef(null);
	const emailRef = useRef("yes");
	const passwordRef = useRef(null);

	function createUser(event) {
		event.preventDefault();
		const fullName = fullNameRef;
		const phoneNumber = phoneNumberRef;
		const email = emailRef;
		const password = passwordRef;

		const UserInputs = checkUserInputs();
	}

	function checkUserInputs() {
		let checker = true;
		console.log("first");
		// fullNameRef.current.classList.remove("error-input");
		// emailRef.current.classList.remove("error-input");
		// phoneNumberRef.current.classList.remove("error-input");
		// passwordRef.current.parentElement.classList.remove("error-input");

		if (!fullNameRef.current.value) {
			addInputError(fullNameRef.current);
			console.log("seccond");
			checker = false;
		} else {
			RemoveInputError(fullNameRef.current);
		}
		const email = emailRef.current.value;
		if (!verifyEmailInput(email)) {
			addInputError(emailRef.current);
			checker = false;
		} else {
			RemoveInputError(emailRef.current);
		}

		if (!phoneNumberRef.current.value) {
			addInputError(phoneNumberRef.current);
			checker = false;
		} else {
			RemoveInputError(phoneNumberRef.current);
		}

		if (!passwordRef.current.value) {
			addInputError(passwordRef.current.parentElement);

			checker = false;
		} else {
			RemoveInputError(passwordRef.current.parentElement);
		}
	}

	function verifyEmailInput(email) {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	}

	function RemoveInputError(input) {
		input.classList.remove("error-input");
	}

	function addInputError(input) {
		input.classList.remove("error-input");
		void input.offsetWidth;
		input.classList.add("error-input");
	}

	return (
		<div className="w-full h-screen flex justify-center items-center mt-32 mb-56">
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
					<h3 className="text-xl font-semibold mb-2">Create An Account</h3>

					<form
						onSubmit={createUser}
						className="flex flex-col gap-5 justify-center"
					>
						<label className="flex flex-col gap-2 font-medium">
							Full Name
							<input
								type="text"
								placeholder="Enter full name"
								ref={fullNameRef}
								className="bg-transparent w-full h-9 p-5 rounded border border-amber-400
						"
							/>
						</label>

						<label className="flex flex-col gap-2 font-medium">
							Email Address
							<input
								type="text"
								placeholder="Enter email address"
								ref={emailRef}
								className="bg-transparent w-full h-9 p-5 rounded border border-amber-400
						"
							/>
						</label>

						<label className="flex flex-col gap-2 font-medium">
							PhoneNumber
							<input
								type="text"
								placeholder="Enter Phone Number"
								ref={phoneNumberRef}
								maxLength="12"
								pattern="[\d]{3}-[\d]{4}-[\d]{4}"
								className="bg-transparent w-full h-9 p-5 rounded border border-amber-400 
						"
							/>
						</label>

						<label className="flex flex-col gap-3 font-medium">
							Password
							<span
								className="flex justify-between items-center bg-transparent w-full h-9  rounded border border-amber-400 pt-5 pb-5 pr-3  focus-within:border-white focus-within:ring focus:ring-white
						"
							>
								<input
									type={passwordType}
									placeholder="Enter Password"
									ref={passwordRef}
									className="bg-transparent h-9 p-5 flex-1 mr-2 outline-none	"
								/>
								<button
									type="button"
									onClick={() => {
										passwordType == "password"
											? setPasswordType("text")
											: setPasswordType("password");
									}}
								>
									{passwordType == "password" ? (
										<img
											src={eye}
											alt="password visible"
											width="26px"
										/>
									) : (
										<img
											src={eyeCrossed}
											alt="password invisible"
											width="26px"
										/>
									)}
								</button>
							</span>
						</label>
						<label className="flex gap-2 font-medium">
							<input type="checkbox" />
							Remember Me
						</label>

						<div>
							<MainButton text="Sign Up" />
						</div>
					</form>
					<h6>
						Have an account ?{" "}
						<button
							className="underline text-amber-400"
							onClick={() => {
								setHasAccount(true);
							}}
						>
							Login
						</button>
					</h6>
				</div>
			</section>
		</div>
	);
}
