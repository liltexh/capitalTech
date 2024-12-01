import crownBg from "../assets/images/crown1.jpg";

import MainButton from "./MainButton.jsx";

import { useContext, useEffect, useState } from "react";
import { Auth } from "../config/Firebase.js";
import { UserContext } from "../Tools/UserContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import "../index.css";
export default function InvestmentPlan({ plan }) {
	// console.log(plan);
	const [currentUser, setCurrentUser] = useState(null);
	const { userInfo, handleUserInfo } = useContext(UserContext);
	const PlanInfo = plan.info;
	const navigate = useNavigate();
	function CheckUser() {
		console.log(Auth);

		if (!currentUser?.email) {
			navigate("/auth");
			// console.log(Auth);

			return;
		}

		if (!currentUser?.emailVerified) {
			handleUserInfo((prev) => ({ ...prev, isValidated: false }));
			return;
		}
	}
	useEffect(() => {
		onAuthStateChanged(Auth, (user) => {
			if (user) {
				setCurrentUser(user || null);
			}
		});
	}, []);
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
				<MainButton
					text="Invest Now"
					clickEvent={CheckUser}
				/>
			</div>
		</div>
	);
}
