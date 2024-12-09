import React from "react";
import MainButton from "./MainButton";
import { NavLink } from "react-router-dom";

function PaymentPage3(props) {
	return (
		<section className="front_blur_background flex flex-col justify-center items-center gap-6 px-4 py-6 glowing_shadow rounded-md max-w-[40rem]">
			<p className="text-2xl font-semibold text-amber-400 text-center">
				What Next After Payment ?
			</p>
			<p className="text-xl font-semibold">
				Payments are processed within 32 hours. Once completed, visit your
				dashboard to track your investment progress in real-time.
			</p>

			<NavLink to="/dashboard">
				<MainButton text="Dashboard" />
			</NavLink>
		</section>
	);
}

export default PaymentPage3;
