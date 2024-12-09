import React from "react";
import MainButton from "./MainButton";

function PaymentOther(props) {
	return (
		<section className="front_blur_background flex flex-col justify-center items-center gap-6 px-4 py-6 glowing_shadow rounded-md max-w-[40rem]">
			<p className="text-2xl font-semibold text-amber-400 text-center">
				To Priotize anonymity for our users, payments are processed off-site.
			</p>
			<p className="text-xl font-semibold">
				Please Check Your Email for further instruction to complete the{" "}
				{props.process} payment procedure
			</p>
			<p>After Payment process have been completed click on continue..</p>

			<MainButton text="continue" />
		</section>
	);
}

export default PaymentOther;
