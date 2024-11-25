import hero from "../assets/images/bitcoin1.jpg";
import AboutPrevImg from "../assets/images/barchart1.jpg";
import coinImgBg from "../assets/images/coinCap1.jpg";

import "../index.css";
import InvestmentPlan from "../components/InvestmentPlan.jsx";
import MainButton from "../components/MainButton.jsx";
import ReasonsComponent from "../data/InvestReasons.jsx";
import ProfitCalculator from "../components/ProfitCalculator.jsx";
import ReviewSlide from "../components/CustomerReview.jsx";
import FAQ from "../components/FAQ.jsx";
import { goldUSD } from "../Tools/getGoldUSD.js";
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function Home() {
	const StockList = [
		["GOLD IN USD ZONE", "2738.62 USD"],
		["GOLD IN THE EURO ZONE", "6828.62 EUR"],
		["24-HOUR TRADING VOLUME", "7283.627"],
		["OUR ACTIVE TRADERS", "5622.62"],
	];

	return (
		<>
			<section
				style={{
					backgroundImage: `url('${hero}')`,
				}}
				className="back_background"
			>
				<div
					style={{ padding: "250px 20px 120px 20px" }}
					className="front_blur_background flex flex-col justify-center items-center"
				>
					<h2 className="text-4xl mb-6 font-semibold">
						Secure Your Future with a Reliable Platform{" "}
						<span className="text-amber-400 ">
							and Accelerate Your Earnings.
						</span>
					</h2>
					<p>
						Invest in a Trusted Industry Leader. We prioritize professionalism
						and reliability, offering essential features to enhance your
						experience. Count on us for swift returns on your investments while
						ensuring the security of your capital. Your trust is our top
						priority, and we are dedicated to maintaining the highest standards
						of integrity in everything we do.
					</p>
					<br />
					<div>
						<NavLink to="auth">
							{" "}
							<MainButton text="Sign Up" />
						</NavLink>
					</div>
				</div>
			</section>

			<div
				className="flex flex-col justify-center items-center p-16 gap-4
			border-b-2 border-b-amber-400"
			>
				{StockList.map((list, idx) => {
					return (
						<div
							key={idx}
							className="flex flex-col items-center justify-center mb-4"
						>
							<p className="font-medium">{list[0]}</p>
							<p className="text-amber-400 text-3xl font-bold">{list[1]}</p>
						</div>
					);
				})}
			</div>

			<section
				style={{
					backgroundImage: `url('${AboutPrevImg}')`,
				}}
				className="back_background "
			>
				<div
					style={{ padding: "100px 20px 80px 20px" }}
					className="front_blur_background flex flex-col items-center justify-center"
				>
					<h3 className="text-3xl mb-6 font-semibold">
						About{" "}
						<span className="text-amber-400 underline">
							<NavLink to="about">Us</NavLink>
						</span>
					</h3>
					<p>
						We are a global financial firm specializing in investment
						activities, focusing on trading in financial markets and
						cryptocurrency exchanges, conducted by experienced and qualified
						professional traders.
					</p>
					<br />
					<p>
						Our mission is to deliver a dependable source of high returns for
						our investors while minimizing risk and ensuring top-tier service.
						By streamlining and automating the relationship between investors
						and trustees, we focus on maximizing profitability through strategic
						investments. We look forward to welcoming you to our community.
					</p>
					<br />
					<br />
					<div>
						<NavLink to="about">
							<MainButton text="More Info" />
						</NavLink>
					</div>
				</div>
			</section>
			<section className="flex flex-col justify-center items-center gap-10 mt-32 mb-24">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto">
					<InvestmentPlan />
					<InvestmentPlan />
					<InvestmentPlan />
					<InvestmentPlan />
					<InvestmentPlan />
					<InvestmentPlan />
				</div>
				<MainButton text="View More Package" />
			</section>

			<div
				style={{
					backgroundImage: `url('${coinImgBg}')`,
				}}
				className="back_background"
			>
				<div
					style={{ padding: "100px 20px 80px 20px" }}
					className="front_blur_background flex flex-col"
				>
					<section className="flex flex-col mb-7 ">
						<h3 className="self-center text-3xl m-6 font-semibold">
							Why Choose{" "}
							<span className="text-amber-400 underline">CapitalTech</span>
						</h3>
						<p className="text-center">
							Our goal is to help our investors earn a steady income while
							keeping their risks low. We are dedicated to providing
							high-quality service that meets their needs and supports their
							dreams.
						</p>
					</section>
					<ReasonsComponent />
				</div>
			</div>
			<section className="flex flex-col justify-center items-center mr-auto ml-auto mt-20 mb-20">
				<ProfitCalculator />
			</section>
			<ReviewSlide />
			<div className="mb-20">
				<FAQ />
			</div>
		</>
	);
}

// 	<footer
// 		style={{
// 			backgroundColor: "rgb(0, 8, 20)",
// 			padding: "100px 20px 80px 20px"
// 		}}
// 		className="home_card"
// 	></footer>
