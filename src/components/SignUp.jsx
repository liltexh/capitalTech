import { useState } from "react";
import signUpimg from "../assets/images/bitcoin2.jpg";
import MainButton from "./MainButton.jsx";
import "../index.css";
import { eye, eyeCrossed } from "../Tools/icons.js";

export default function SignUp({ state }) {
	const { setHasAccount } = state;
	const [loading, setLoading] = useState(false);
	const [passwordType, setPasswordType] = useState("password");
	const [fullName, setFullName] = useState("");
	// const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");

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
					<form className="flex flex-col gap-5 justify-center">
						<label className="flex flex-col gap-2 font-medium">
							Full Name
							<input
								type="text"
								placeholder="Enter full name"
								onChange={(e) => {
									setFullName(e.target.value);
								}}
								value={fullName}
								className="bg-transparent w-full h-9 p-5 rounded border border-amber-400
						"
							/>
						</label>

						<label className="flex flex-col gap-2 font-medium">
							Email Address
							<input
								type="text"
								placeholder="Enter email address"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								value={email}
								className="bg-transparent w-full h-9 p-5 rounded border border-amber-400
						"
							/>
						</label>

						<label className="flex flex-col gap-2 font-medium">
							PhoneNumber
							<input
								type="tel"
								placeholder="Enter email address"
								onChange={(e) => {
									setPhoneNumber(e.target.value);
								}}
								value={phoneNumber}
								className="bg-transparent w-full h-9 p-5 rounded border border-amber-400 
						"
							/>
						</label>

						<label className="flex flex-col gap-3 font-medium">
							Password
							<span
								className="flex justify-between items-center bg-transparent w-full h-9  rounded border border-amber-400 pt-5 pb-5 pr-3  focus-within:border-white focus-within:ring focus:ring-white
						"
								contentEditable="true"
							>
								<input
									type={passwordType}
									placeholder="Enter Password"
									onChange={(e) => {
										setPassword(e.target.value);
									}}
									value={password}
									className="bg-transparent h-9 p-5 flex-1 mr-2 outline-none	"
								/>
								<button
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
