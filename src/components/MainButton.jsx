import "../index.css";
export default function MainButton(props) {
	return (
		<button
			onClick={props.clickEvent}
			className="main_button"
		>
			{props.text}
		</button>
	);
}
