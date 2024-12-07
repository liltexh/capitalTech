export default function PayWithButton(props) {
	return (
		<span className="flex flex-col justify-center items-center relative z-10 group">
			<span className=" flex h-14 w-14 bg-gray-700 group-hover:bg-amber-400 group-hover:shadow-box-shadow rounded-full text-center justify-center items-center cursor-pointer relative z-10">
				<img
					src={props.icon}
					alt={`${props.info} icon`}
					width={props.width}
					className=""
				/>
			</span>
			<p
				className="text-amber-400 px-2 font-semibold absolute top-0 rounded border-b-[3px] border-b-amber-400 opacity-0 group-hover:opacity-100 group-hover:-top-10 pointer-events-none group-hover:pointer-events-auto before:absolute before:content-['']
								before:w-3 before:h-3 before:left-[50%] before:bg-amber-400 before:-bottom-2 before:transform before:-translate-x-[50%] before:rotate-[135deg] before:clip-path-diagonal-slice  transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
			>
				{props.info}
			</p>
		</span>
	);
}
