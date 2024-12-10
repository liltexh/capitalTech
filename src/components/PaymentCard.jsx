import MainButton from "./MainButton";
import NormInput from "./NormInput";

export default function PaymentCard() {
	return (
		<section className="front_blur_background flex flex-col justify-center items-center gap-6 px-4 py-6 glowing_shadow rounded-md max-w-[30rem]">
			<div className="flex flex-col gap-6">
				<div>visa master discover</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-6 w-full">
					<NormInput info="Card Number" />
					<NormInput info="Name on card" />
				</div>
				<div className="flex justify-between gap-6">
					<NormInput info="Expiry Date" />
					<NormInput info="CVV/CVC" />
					<NormInput info="ZIP Code" />
					{/* <label className="flex flex-col gap-2 font-medium">
						Expires on
						<input
							type="text"
							className="bg-transparent h-9 p-5 rounded border border-amber-400 max-w-32 min-w-1"
						/>
					</label> */}
				</div>
				<div className="grid grid-cols-1  sm:grid-cols-2 justify-items-center gap-6 w-full">
					<NormInput info="Address" />
					<NormInput info="City" />
					<NormInput info="Country" />
					<NormInput info="State / Region" />

					{/* <label className="flex flex-col gap-2 font-medium w-full">
						State / Region
						<input
							type="text"
							className="bg-transparent h-9 p-5 rounded border border-amber-400
						"
						/>
					</label> */}
				</div>
				<div className="mx-auto mt-10 ">
					<MainButton text="Continue" />{" "}
				</div>
				<div>
					<img
						src=""
						alt=""
					/>
					<p></p>
					<p></p>
				</div>
			</div>
			<div></div>
		</section>
	);
}
