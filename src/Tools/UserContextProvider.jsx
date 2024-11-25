import { createContext, useState } from "react";

export const UserContext = createContext();

export function userContextValue() {
	const userDetails = {
		UserName: "",
		email: "",
	};
	const [userInfo, handleUserInfo] = useState(userDetails);
	return { userInfo, handleUserInfo };
}

export default function UserContextProvider({ children }) {
	const UserInfo = userContextValue();
	return (
		<UserContext.Provider value={UserInfo}>{children}</UserContext.Provider>
	);
}
