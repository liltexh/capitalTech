import crownBg from "../assets/images/crown1.jpg";

import MainButton from "./MainButton.jsx";

import "../index.css";
export default function InvestmentPlan() {
	const PlanInfo = [
		"Return 0.2%",
		"Every Day",
		"For Lifetime",
		"Lifetime Earning",
	];
	return (
		<div
			style={{
				backgroundImage: `url('${crownBg}')`,
			}}
			className="Plan_card glowing_shadow  rounded-xl"
		>
			<div className="Plan_card_blur flex flex-col justify-around items-center">
				<h3 className="text-3xl text-amber-400 font-semibold">Black Horse</h3>
				<div className="flex flex-col w-full">
					{PlanInfo.map((info) => {
						return <span className="">{info}</span>;
					})}
					<h4 className="self-center text-2xl text-amber-400 font-semibold p-0 mt-4 ">
						$100 - $200
					</h4>
				</div>
				<MainButton text="Invest Now" />
			</div>
		</div>
	);
}
