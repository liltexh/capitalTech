import React from "react";
import MainButton from "./MainButton";
export default function ValidateAccount() {
	return (
		<div className=" glowing_shadow flex flex-col justify-center items-center gap-8 max-w-96 p-4 m-3   rounded-md">
			<h1 className="text-3xl text-amber-400 font-bold">Capital Tech</h1>
			<h2 className="text-2xl font-semibold text-red-700 text-center">
				Verify Your Email Address
			</h2>
			<p className="opacity-70">
				To ensure the security of your account and provide you with seamless
				access to our service, we need to verify your email address, this helps
				to confirm your identity and keep your account protected..
			</p>
			<p>
				Please verify your email to complete your registration and unlock all
				features of your investment account...
			</p>
			<MainButton text="Verify my email" />
		</div>
	);
}
