import React, { useContext, useState } from "react";
import MainButton from "./MainButton";
import { sendEmailVerification } from "firebase/auth";
import { Auth } from "../config/Firebase";
import { UserContext } from "../Tools/UserContextProvider";
export default function ValidateAccount() {
	const [verifyUser, setVerifyUser] = useState(false);
	const { userInfo, handleUserInfo } = useContext(UserContext);
	function ValidateEmail() {
		try {
			sendEmailVerification(Auth.currentUser);
			setVerifyUser(true);
		} catch (error) {}
	}
	function UpdateValidateUser() {
		handleUserInfo((info) => ({ ...info, isValidated: true }));
	}
	return (
		<div
			className={` glowing_shadow flex flex-col justify-center items-center gap-6 max-w-96 p-4 m-3 rounded-md transition-all duration-200 ${
				verifyUser ? "h-1/5" : "h-4/5"
			}`}
		>
			{!verifyUser && (
				<>
					<h1 className="text-3xl text-amber-400 font-bold">Capital Tech</h1>
					<h2 className="text-2xl font-semibold text-red-700 text-center">
						Verify Your Email Address
					</h2>
					<p className="opacity-70">
						To ensure the security of your account and provide you with seamless
						access to our service, we need to verify your email address, this
						helps to confirm your identity and keep your account protected..
					</p>
					<p className="font-semibold">
						Please verify your email to complete your registration and unlock
						all features of your investment account...
					</p>
					<MainButton
						text="Verify my email"
						clickEvent={ValidateEmail}
					/>
				</>
			)}

			{verifyUser && (
				<div
					onMouseLeave={UpdateValidateUser}
					onTouchCancel={UpdateValidateUser}
				>
					<h1>Check your email for a verification Message</h1>
				</div>
			)}
		</div>
	);
}
