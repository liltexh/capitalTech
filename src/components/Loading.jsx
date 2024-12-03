import loading from "../assets/images/loading.gif";
export default function Loading() {
	return (
		<img
			src={loading}
			alt="loading img"
			width="96rem"
			className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-65"
		/>
	);
}
