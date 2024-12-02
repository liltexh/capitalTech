import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

export default function LoadingAnimation() {
	const { userInfo, handleUserInfo } = useContext(UserContext);

	function startLoading() {
		handleUserInfo((info) => ({ ...info, isLoading: true }));
	}
	function stopLoading() {
		handleUserInfo((info) => ({ ...info, isLoading: false }));
	}

	return { startLoading, stopLoading };
}
