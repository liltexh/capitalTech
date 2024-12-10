function NormInput(props) {
	return (
		<label className="flex flex-col gap-2 text-sm font-medium min-w-1 w-full self-end">
			{props.info}
			<input
				type="text"
				className="bg-transparent w-full h-9 p-5 rounded border border-amber-400 min-w-1 self-end
						"
			/>
		</label>
	);
}

export default NormInput;
