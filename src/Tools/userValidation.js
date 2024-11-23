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
