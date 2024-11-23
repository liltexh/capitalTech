import { useState } from "react";
import { eye, eyeCrossed } from "../Tools/icons.js";

function PasswordInput({ state }) {
	const { passwordRef } = state;
	const [passwordType, setPasswordType] = useState("password");

	return (
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
	);
}

export default PasswordInput;