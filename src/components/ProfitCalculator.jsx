export default function ProfitCalculator() {
	return (
		<section className=" flex flex-col gap-5 justify-center items-center md:w-2/3 lg:w-2/4">
			<h3 className="text-3xl font-semibold">
				Profit <span className="text-amber-400">Calculator</span>
			</h3>
			<p className="pl-4 pr-4 mb-10">
				Before investing in any plan, it’s always smart to know the numbers!
				Just check our calculator, and you’ll be all set—no surprises, only
				confidence!
			</p>
			<div className="glowing_shadow flex flex-col justify-center items-center gap-7 bg-black w-10/12 rounded pt-10 pb-10">
				<div className="flex flex-col gap-2 w-10/12">
					<span className="font-medium">Choose Plan</span>
					<button className="bg-amber-400 text-yellow-50 text-start font-medium p-4	rounded h-1/6">
						Silver
					</button>
				</div>
				<div className="flex flex-col gap-2 w-10/12">
					<label
						htmlfor="invest_amount"
						className="font-medium"
					>
						Investment Amount
					</label>
					<input
						type="text"
						placeHolder="0.00 <input amount>"
						id="invest_amount"
						className="bg-amber-400 text-white text-start font-medium p-4	rounded
						h-1/6 outline-none"
					/>
				</div>
				<div className="flex flex-col gap-2 w-10/12">
					<span className="font-medium">Profit Amount</span>
					<span
						className="bg-amber-400 text-yellow-50 text-start font-medium p-4
					rounded h-1/6"
					>
						0.00
					</span>
				</div>
			</div>
		</section>
	);
}
