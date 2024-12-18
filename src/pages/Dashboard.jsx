import { NavLink } from "react-router-dom";
import barChart2 from "../assets/images/barChart2.jpg";
import firstSecImg from "../assets/images/Picsart_24-10-18_01-42-56-443.jpg";

import { HomeIcon } from "../Tools/icons.js";
import TransactionTable from "../components/TransactionTable.jsx";
import ChartMoneyinfo from "../components/ChartMoneyinfo.jsx";

export default function Dashboard() {
	return (
		<>
			<section
				style={{
					backgroundImage: `url('${firstSecImg}')`,
				}}
				className="back_background mb-20"
			>
				<div
					style={{ padding: "180px 20px 80px 20px" }}
					className="front_blur_background flex flex-col gap-4"
				>
					<span>
						<h2 className="text-3xl font-bold">Dashboard</h2>
					</span>
					<span className="flex justify-start items-center gap-1">
						<img
							src={HomeIcon}
							alt="Home img"
							width="24px"
						/>
						<NavLink to="/">
							<span className="font-semibold">Home</span>
						</NavLink>
						<h5 className="font-normal"> - Dashboard</h5>
					</span>
				</div>
			</section>
			<section className="flex flex-col justify-center items-center m-4 mb-10 sm:mb-20">
				<div className="flex flex-col sm:flex-row justify-between items-center w-full gap-y-6">
					<div className="flex-1 self-start">
						<span className="text-3xl sm:text-4xl lg:text-5xl">Hello,</span>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400">
							Investor
						</h1>
					</div>
					<div className="flex flex-1 justify-between md:justify-evenly items-center w-full">
						<div className="flex flex-col justify-center items-start aspect-video w-52 p-4 gap-3  border-b-2 border-amber-400 rounded-lg bg-[rgba(0,0,0,0.4)] backdrop-blur-sm">
							<p className="">Today profit</p>
							<h3 className="text-2xl sm:text-4xl font-bold text-amber-400">
								$13.20K
							</h3>
						</div>
						<div className="flex flex-col justify-center items-start aspect-video w-52 p-4 gap-3 border-b-2 border-amber-400 rounded-lg bg-[rgba(0,0,0,0.4)] backdrop-blur-sm">
							<p className="">Total profit</p>
							<h3 className="text-2xl sm:text-4xl font-bold text-amber-400">
								$17.20K
							</h3>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col lg:flex-row gap-y-12 gap-x-4 p-4 place-content-center mb-44 w-full">
				<div
					style={{
						backgroundImage: `url('${barChart2}')`,
					}}
					className="flex justify-center items-center bg-cover bg-center mb-20 flex-1 rounded-xl overflow-hidden m-auto mt-20 glowing_shadow  aspect-video sm:aspect-square max-w-[28rem] min-w-1"
				>
					<div className="front_blur_background p-6 flex flex-col gap-5 flex-1 m-auto justify-center">
						<h3 className="text-2xl font-semibold sm:text-3xl">
							Your PortFolio has been grown by :
						</h3>
						<span className="text-4xl font-bold text-amber-400 sm:text-5xl">
							$7.52K
						</span>
						<p className="font-semibold">In Last 7 days</p>
					</div>
				</div>
				<div className="front_blur_background flex-1 flex flex-col sm:flex-row gap-x-2 gap-y-10 glowing_shadow  rounded-xl min-w-1 m-auto p-4 ">
					<div className="flex flex-col flex-1 justify-start items-start h-[100%] w-full gap-3">
						<span className="font-semibold">Summary</span>

						<ChartMoneyinfo
							header="price"
							value="$4.28K"
						/>
						<ChartMoneyinfo
							header="value"
							value="$7.98K"
						/>
						<ChartMoneyinfo
							header="return"
							value="$2.98K"
						/>
					</div>
					<div className="flex-2 flex w-full overflow-hidden">
						<div className="flex w-full h-full items-end">
							<TransactionTable />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
