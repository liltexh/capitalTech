import { signOut } from "firebase/auth";
import React from "react";
import { Auth } from "../config/Firebase";
import { useNavigate } from "react-router-dom";

export default function Profile() {
	const navigate = useNavigate();
	async function LogUserOut() {
		try {
			const userOut = await signOut(Auth);
			navigate("/");
		} catch (error) {
			alert(error.message);
		}
	}
	return (
		<div className="flex flex-col w-full h-screen justify-center items-center gap-6">
			<h1 className="text-2xl text-amber-400">Hello this is profile</h1>{" "}
			<button
				onClick={LogUserOut}
				className="bg-red-700 p-2 rounded font-semibold"
				type="button"
			>
				Log Out
			</button>
		</div>
	);
}
