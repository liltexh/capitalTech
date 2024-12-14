import firstSecImg from "../assets/images/Picsart_24-10-18_01-42-56-443.jpg";
import { HomeIcon } from "../Tools/icons.js";
import { NavLink } from "react-router-dom";

import AboutPrevImg from "../assets/images/barchart1.jpg";

import MainButton from "../components/MainButton.jsx";

import FAQ from "../components/FAQ.jsx";

import userIcon from "../assets/Icons/clipboard-user.svg";

import hands_usd from "../assets/Icons/hands-usd.svg";

import walletIcon from "../assets/Icons/wallet.svg";

import callIcon from "../assets/Icons/call-history.svg";

import CusCare3img from "../assets/images/cusCare3.jpg";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";
import "../index.css";
import { useState } from "react";

export default function About() {
	const [moreAbout, isMoreAbout] = useState(false);

	function ShowMoreAboutContent() {
		isMoreAbout((moreAbout) => !moreAbout);
	}
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
						<h2 className="text-3xl font-bold">About Us</h2>
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
						<h5 className="font-normal"> - About</h5>
					</span>
				</div>
			</section>

			<section className="flex flex-col justify-center items-center mb-20">
				<div className="flex flex-col justify-center items-center gap-2">
					<h3 className="text-2xl font-semibold ">
						How <span className="text-amber-400">CapitalTech</span> Works
					</h3>
					<p className="m-4">
						Join our wonderful platform and start investing with us! We’ll put
						your money to work for you, and you can watch your profits grow
						automatically in your wallet. We're excited to help you on this
						journey!
					</p>
				</div>
				<div className="reason_display_container grid grid-cols-1 sm:grid-cols-2 grid-rows-auto ">
					{ExplainProcess.map((process, idx) => (
						<div
							key={idx}
							className={`flex flex-col justify-center items-center gap-8 m-10 ${
								idx !== 2 ? "col-span-1" : "col-span-1 sm:col-span-2"
							} sm:col-span-1`}
						>
							<div className="reason_display ">
								<img
									src={process.icon}
									alt="user icon"
								/>
							</div>
							<p className="font-semibold text-amber-400">{process.context}</p>
						</div>
					))}
				</div>
			</section>

			<section
				style={{ backgroundImage: `url('${AboutPrevImg}')` }}
				className="back_background"
			>
				<div
					style={{
						padding: "100px 20px 80px 20px",
					}}
					className="
			front_blur_background flex flex-col items-center justify-center"
				>
					<h3 className="text-3xl mb-6 font-semibold">
						About <span className="text-amber-400">Us</span>
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
					<div
						className={`flex flex-col justify-center items-center overflow-hidden h-0 mb-10 ${
							moreAbout && "h-auto"
						}`}
					>
						<h4 className="text-2xl mb-2 font-semibold text-amber-400 underline">
							A Journey Through Time
						</h4>
						<p>
							Our story began over a decade ago in a vibrant financial
							metropolis, where visionary traders united to empower others
							through investment. With limited resources, they aimed to redefine
							opportunities in finance. Facing challenges like market
							volatility, they dedicated long nights to analyzing trends and
							developing strategies that established our reputation. As we grew,
							we embraced innovation, integrating advanced trading algorithms
							and data analytics to seize opportunities. This led us to expand
							into cryptocurrency exchanges, positioning our investors to
							benefit from the booming digital currency market.
						</p>
						<p>
							In those early days, navigating the complexities of the financial
							world was akin to sailing uncharted waters. Our founders faced
							countless challenges, from market volatility to economic
							downturns. However, their resilience and dedication propelled them
							forward. They spent long nights analyzing trends, studying market
							behavior, and developing strategies that would later become the
							cornerstone of our operations. With each passing year, they
							transformed their small venture into a respected name in the
							financial industry.
						</p>
						<p>
							As our firm grew, so did our commitment to innovation. We were
							among the first to embrace technology, integrating advanced
							trading algorithms and data analytics into our processes. This
							forward-thinking approach allowed us to make informed decisions
							swiftly and capitalize on opportunities that others might
							overlook. It wasn't long before we expanded our focus to include
							cryptocurrency exchanges, recognizing the disruptive potential of
							digital currencies. Our team became adept at navigating this new
							frontier, positioning our investors to benefit from the explosive
							growth in the crypto market.
						</p>
						<br />
						<h4 className="text-2xl mb-2 font-semibold text-amber-400 underline">
							Empowering Investors
						</h4>
						<p>
							At the core of our philosophy is the belief that everyone should
							have access to investment opportunities that were once reserved
							for the elite. We’ve worked tirelessly to democratize investing,
							breaking down barriers and providing education to help our
							investors make informed decisions. Our user-friendly platform and
							comprehensive resources ensure that even those new to investing
							can navigate the complexities of the financial landscape with
							confidence.
						</p>
						<p>
							We understand that investing can be daunting, especially in a
							world where markets can change in an instant. That’s why our team
							of seasoned traders is dedicated to guiding you every step of the
							way. Our commitment to transparency means you’ll always know where
							your money is going and how it’s being managed. We believe that
							trust is paramount, and we strive to build lasting relationships
							with our investors based on integrity and open communication.
						</p>
						<br />
						<h4 className="text-2xl mb-2 font-semibold text-amber-400 underline">
							Looking Ahead
						</h4>
						<p>
							As we look to the future, our vision remains clear: to continue
							providing exceptional investment opportunities while maintaining
							our commitment to minimizing risk. We are excited about the
							possibilities that lie ahead, and we are constantly exploring new
							avenues for growth. Our team is always researching emerging
							markets and innovative investment strategies, ensuring that we
							remain at the forefront of the financial industry.
						</p>
						<p>
							In this ever-evolving landscape, we invite you to join us on this
							journey. Together, we can navigate the world of finance, achieve
							remarkable returns, and secure a prosperous future. We are more
							than just a financial firm; we are a community of like-minded
							individuals dedicated to success and growth. Welcome to our
							family, where your financial aspirations become our mission.
						</p>
					</div>

					<MainButton
						text={moreAbout ? "Show Less" : "Show More"}
						clickEvent={ShowMoreAboutContent}
					/>
				</div>
			</section>

			<section>
				<ExpertTeamComp />
			</section>
			<section
				style={{
					backgroundImage: `url('${CusCare3img}')`,
				}}
				className="back_background "
			>
				<div
					style={{ padding: "100px 20px 80px 20px" }}
					className="front_blur_background flex flex-col items-center justify-center"
				>
					<h3 className="text-3xl mb-6 font-semibold">
						Need
						<span className="text-amber-400"> Assistance ?</span>
					</h3>
					<div className="flex gap-2 self-start mb-3">
						<img
							src={callIcon}
							alt="call icon"
							width="30px"
						/>
						<h4 className="text-2xl text-amber-400 font-medium underline">
							<NavLink to="/contact">Reach Out To Us </NavLink>
						</h4>
					</div>
					<p className="font-medium mb-10">
						"We love hearing from you! Whether you have a question, need help
						with something, or just want to share your thoughts, we're here for
						you. You can easily reach us via email or phone, and our team is
						always ready to provide the guidance you need. Your experience
						matters to us, and we look forward to supporting you on your
						investment journey."
					</p>
					<NavLink to="/contact">
						<MainButton text="Contact Us" />
					</NavLink>
				</div>
			</section>
			<section>
				<FAQ />
			</section>
		</>
	);
}

function ExpertTeamComp() {
	return (
		<div
			style={{
				padding: "100px 20px 80px 20px",
			}}
			className="flex flex-col justify-center items-center "
		>
			<div className="flex flex-col justify-center items-center mb-20">
				<h3 className="text-3xl font-semibold mb-6">
					Our Dedicated <span className="text-amber-400">Team Members</span>
				</h3>
				<p>
					Our team is a group of highly skilled professionals with deep
					knowledge and intelligence in the market. Their expertise in
					leadership, marketing, and analysis drives smart, profitable
					decisions. With a focus on wealth creation and financial success, they
					ensure our strategies are both innovative and effective, keeping us
					competitive and ahead in the industry.
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
				{TeamMembers.map((member, idx) => {
					return (
						<div
							key={idx}
							className="flex flex-col justify-center gap-5 mb-12 bg-gray-800 hover:bg-amber-400 hover:shadow-box-shadow p-3 hover:scale-[1.03] transition-all duration-300
							rounded-xl md:ml-10 md:mr-10 lg:ml-10 lg:mr-10"
						>
							<img
								src={member.img}
								alt="profile photo"
								width="340px"
								className="rounded-xl"
							/>
							<h5 className="font-semibold text-xl">{member.name}</h5>
							<h6>{member.position}</h6>
						</div>
					);
				})}
			</div>
		</div>
	);
}

const ExplainProcess = [
	{
		icon: userIcon,
		context: "You Register, Fund, Invest.",
	},
	{
		icon: hands_usd,
		context: "We Trade And Earn Profit",
	},
	{
		icon: walletIcon,
		context: "You Withdraw and Enjoy Profits.",
	},
];

const TeamMembers = [
	{ img: img1, name: "Lorem ipsum.", position: "lorem parry" },
	{ img: img2, name: "Lorem ipsum.", position: "lorem parry" },
	{ img: img3, name: "Lorem ipsum.", position: "lorem parry" },
	{ img: img4, name: "Lorem ipsum.", position: "lorem parry" },
	{ img: img5, name: "Lorem ipsum.", position: "lorem parry" },
	{ img: img6, name: "Lorem ipsum.", position: "lorem parry" },
	{ img: img7, name: "Lorem ipsum.", position: "lorem parry" },
	{ img: img8, name: "Lorem ipsum.", position: "lorem parry" },
];
