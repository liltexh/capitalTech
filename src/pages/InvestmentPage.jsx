import React, { useEffect } from "react";
import InvestPlans from "../data/plans";
import InvestmentPlan from "../components/InvestmentPlan";

export default function InvestmentPage() {
	useEffect(() => {
		// console.log(InvestPlans);
	}, []);
	return (
		<section className="flex flex-col justify-center items-center gap-10 mt-32 mb-24">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto place-items-center">
				{InvestPlans.map((plan, idx) => {
					return (
						<InvestmentPlan
							key={idx}
							plan={plan}
						/>
					);
				})}
			</div>
		</section>
	);
}
