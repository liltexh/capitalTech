import crownBg from "../assets/images/crown1.jpg";

import MainButton from "./MainButton.jsx";

import "../index.css";
export default function InvestmentPlan({ plan }) {
	console.log(plan);
	const PlanInfo = plan.info;
	return (
		<div
			style={{
				backgroundImage: `url('${crownBg}')`,
			}}
			className="Plan_card glowing_shadow  rounded-xl"
		>
			<div className="Plan_card_blur flex flex-col justify-around items-center">
				<h3 className="text-3xl text-amber-400 font-semibold">{plan.name}</h3>
				<div className="flex flex-col w-full">
					{PlanInfo.map((info, idx) => {
						return (
							<span
								key={idx}
								className=""
							>
								{info}
							</span>
						);
					})}
					<h4 className="self-center text-2xl text-amber-400 font-semibold p-0 mt-4 ">
						{"$" + " " + plan.amount}
					</h4>
				</div>
				<MainButton text="Invest Now" />
			</div>
		</div>
	);
}
