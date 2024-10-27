import legal_case from "../assets/Icons/legal-case.svg";
import organization_chart from "../assets/Icons/organization-chart.svg";
import padlock_check from "../assets/Icons/padlock-check.svg";
import user_shield from "../assets/Icons/user-shield.svg";
import time_fast from "../assets/Icons/time-fast.svg";
import head_set from "../assets/Icons/headset.svg";
import binary_lock from "../assets/Icons/binary-lock.svg";
import shield from "../assets/Icons/shield-keyhole.svg";

export default function ReasonsComponent() {
	const Reasons = [
		{
			icon: legal_case,
			heading: "Legal Company",
			context:
				"We take pride in our legal and transparent operations. As a certified	investment business, we prioritize your security and allow you to invest with confidence."
		},
		{
			icon: padlock_check,
			heading: "Solid reliability",
			context:
				"We are trusted by a huge number of people. We are working hard constantly to improve the level of our security system and minimize possible risks."
		},
		{
			icon: user_shield,
			heading: "Anonymity",
			context:
				"Our company prioritizes customer anonymity, ensuring that your identity remains confidential. We will never reveal or exploit your personal information."
		},
		{
			icon: time_fast,
			heading: "Fast Withdrawal",
			context:
				"All our withdrawal requests are processed instantly, and we take  pride in our fast, smooth, and effortless withdrawals, all with high maximum limits."
		},
		{
			icon: organization_chart,
			heading: "Referral Rewards System",
			context:
				"Boost your income with our referral program! Invite a few friends,and you’ll earn extra cash while sharing something you love. The more you refer, the more you make—watch your earnings soar!"
		},
		{
			icon: head_set,
			heading: "24/7 Customer Care",
			context:
				"We offer 24/7 customer support, with representatives available at	all times to assist you with any issues or questions you may have. "
		},
		{
			icon: binary_lock,
			heading: "SSL Secured",
			context:
				"Comodo Essential SSL Security encryption verifies that the content you see is real and trustworthy."
		},
		{
			icon: shield,
			heading: "DDOS Protected",
			context:
				"Our robust DDoS protection ensures that our services remain secure from harmful disruptions, guaranteeing that your savings are safe no matter the circumstances."
		}
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{Reasons.map(reason => {
				return (
					<div
						style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
						className="mb-8 p-5"
					>
						<h3 className="flex  items-center text-2xl mb-5">
							<img
								src={reason.icon}
								alt="icon"
								width="36px"
							/>
							<p className="text-amber-400 ml-4 font-semibold">
								{reason.heading}
							</p>
						</h3>
						<p>{reason.context}</p>
					</div>
				);
			})}
		</div>
	);
}
