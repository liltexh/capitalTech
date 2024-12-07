import { useState } from "react";
import PayWithButton from "../components/PaywithButton";
import { infoIcon, bankIcon, cardIcon, cryptoIcon } from "../Tools/icons";

export default function CheckOut() {
	const [page, setPage] = useState(1);
	return (
		<main className="w-full min-h-screen flex flex-col justify-center items-center px-6 pt-24 m-auto gap-10 ">
			<div className="flex gap-10">
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
				{page == 1 && (
					<div className="front_blur_background flex flex-col justify-center items-center gap-6 px-4 py-6 glowing_shadow rounded-md max-w-[40rem]">
						<h1 className="text-2xl font-bold text-amber-400 text-center">
							Your Financial Journey Begins Here
						</h1>
						<h3 className="text-2xl font-semibold opacity-90">Lions Share</h3>
						<div className="flex flex-col gap-10">
							<label className="flex flex-col justify-center text-gray-300 gap-1">
								Select Amount :
								<input
									type="number"
									className="w-3/4 min-w-1 bg-transparent h-9 p-2 rounded border border-amber-400 appearance-none focus:outline-none [appearance-textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
								/>
							</label>
							<div className="flex justify-between">
								<div className="flex flex-col justify-center  rounded border-r-2 border-amber-400 w-28 h-12 p-2">
									<span className="text-xs font-semibold text-amber-400 self-start">
										parcent Intrest :
									</span>
									<div className="relative flex w-full justify-between">
										<span className="text-xl ml-2">5</span>
										<span className="absolute right-2 text-amber-400 opacity-65">
											%
										</span>
									</div>
								</div>
								<div className="flex flex-col justify-center border-r-2  border-amber-400 w-28 rounded h-12 p-2">
									<span className="text-xs font-semibold text-amber-400 ">
										Frequncy :
									</span>
									<span className="font-semibold ml-2">weekly</span>
								</div>
								{/* <div className="flex flex-col justify-center items-center shadow shadow-amber-400 w-28 rounded">
									<span>RoR</span>
									<span>12834.49%</span>
								</div> */}
							</div>
							<div className="flex flex-col gap-2 opacity-60 hover:opacity-100 transition-opacity duration-700 ">
								<span className="ml-1">
									<img
										src={infoIcon}
										alt="info icon"
										width="28px"
									/>
								</span>
								<p className="text-lg">
									The basic growth ivestment plan is the best plan for money
									with an excellent return rate , this will in no time give you
									back uor capital and even more
								</p>
							</div>
						</div>
						<div className="inline-flex justify-center items-center gap-10 mt-8">
							<PayWithButton
								icon={cardIcon}
								info="Card"
								width="30px"
							/>
							<PayWithButton
								icon={bankIcon}
								info="Bank"
								width="25px"
							/>
							<PayWithButton
								icon={cryptoIcon}
								info="Crypto"
								width="28px"
							/>
						</div>
					</div>
				)}
			</div>
		</main>
	);
}
