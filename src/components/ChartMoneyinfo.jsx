import React from "react";

function ChartMoneyinfo(props) {
	return (
		<div className="flex flex-col justify-center items-start  h-[7.36rem] w-full  p-4 gap-3 border-b-2 border-black rounded-lg bg-gray-700">
			<p className="">{props.header}</p>
			<h3 className="text-2xl sm:text-4xl font-bold text-amber-400">
				{props.value}
			</h3>
		</div>
	);
}

export default ChartMoneyinfo;
