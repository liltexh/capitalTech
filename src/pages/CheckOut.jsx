import { useState } from "react";
import PaymentPage1 from "../components/PaymentPage1";
import PaymentCard from "../components/PaymentCard";
import PaymentOther from "../components/PaymentOther";
import PaymentPage3 from "../components/PaymentPage3";

export default function CheckOut() {
	const [page, setPage] = useState(3);
	const [paymentMethod, setPaymentMethod] = useState("crypto");
	return (
		<main className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 pt-40 m-auto gap-10 ">
			<div className="flex gap-10 absolute top-24">
				<span
					className={`relative w-6 scale-[1.8] text-center rounded-full  ${
						page == 1 ? "bg-amber-400" : "bg-gray-700"
					}`}
				>
					1
				</span>
				<span
					className={`relative w-6 scale-[1.8] text-center rounded-full  ${
						page == 2 ? "bg-amber-400" : "bg-gray-700"
					}`}
				>
					2
				</span>
				<span
					className={`relative w-6 scale-[1.8] text-center rounded-full  ${
						page == 3 ? "bg-amber-400" : "bg-gray-700"
					}`}
				>
					3
				</span>
			</div>
			<div>
				{page === 1 && <PaymentPage1 />}
				{page === 2 && paymentMethod == "card" && <PaymentCard />}
				{page === 2 && paymentMethod == "bank" && (
					<PaymentOther process="Bank" />
				)}
				{page === 2 && paymentMethod == "crypto" && (
					<PaymentOther process="Crypto" />
				)}
				{page === 3 && <PaymentPage3 />}
			</div>
		</main>
	);
}
