import React, { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { eye, eyeCrossed } from "../Tools/icons";
function Auth() {
	const [hasAccount, setHasAccount] = useState(false);
	const [loading, setLoading] = useState(false);
	const [passwordType, setPasswordType] = useState("password");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	if (hasAccount) {
		return <SignIn />;
	} else {
		return <SignUp />;
	}
}

export default Auth;
