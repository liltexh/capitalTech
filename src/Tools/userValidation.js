export function verifyEmailInput(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

export function RemoveInputError(input) {
	input.classList.remove("error-input");
}

export function addInputError(input) {
	input.classList.remove("error-input");
	void input.offsetWidth;
	input.classList.add("error-input");
}

export function verifyFullnameInput(fullName) {
	const parts = fullName.trim().split(" ");
	return parts.length >= 2 && parts.every((part) => part.length > 1);
}

export function verifyPhoneNumber(number) {
	return number.length <= 20 && number.length >= 5;
}

export function verifyPassword(password) {
	// Define the pattern: Minimum 6 characters, at least one uppercase, one lowercase, one number, and one special character
	const passwordPattern =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&#])[A-Za-z\d@$!%?&#]{6,}$/;

	return passwordPattern.test(password);
}

// // Example usage
// const password = "Passw0rd@";
// if (validatePassword(password)) {
//     console.log("Password is valid!");
// } else {
//     console.log("Password is invalid.");
// }
