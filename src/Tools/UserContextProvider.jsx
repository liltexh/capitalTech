import { createContext, useEffect, useState } from "react";
import { Auth } from "../config/Firebase";

export const UserContext = createContext();

export function userContextValue() {
	// const userDetails = {
	// 	UserName: "",
	// 	email: "",
	// 	isValidated: true,
	// };
	const [userInfo, handleUserInfo] = useState({
		UserName: "",
		email: "",
		isValidated: true,
		isLoading: false,
	});

	useEffect(() => {
		handleUserInfo((info) => ({
			...info,
			email: Auth.currentUser?.email || "",
		}));
	}, []);
	return { userInfo, handleUserInfo };
}

export default function UserContextProvider({ children }) {
	const UserInfo = userContextValue();
	return (
		<UserContext.Provider value={UserInfo}>{children}</UserContext.Provider>
	);
}
