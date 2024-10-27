import signUpimg from "../assets/images/bitcoin2.jpg";
import MainButton from "./MainButton.jsx";
import "../index.css";

export default function Dashboard() {
	return (
		<div className="w-full h-screen flex justify-center items-center mt-32 mb-56	md:mb-0 md:mt-0 lg:mt-0 lg:mb-0">
			<section
				style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
				className="glowing_shadow w-11/12 md:w-2/3 lg:w-2/3 flex flex-col
			justify-center rounded "
			>
				<div
					style={{
						backgroundImage: `url('${signUpimg}')`
					}}
					className="back_background "
				>
					<div
						className="front_blur_background flex flex-col items-center
					justify-center gap-4 p-10 pl-5 pr-5"
					>
						<h2 className="text-2xl font-semibold">
							Welcome To{" "}
							<span className="text-amber-400">Capital Tech</span>
						</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Blanditiis distinctio delectus repellendus
							totam obcaecati soluta dignissimos, reprehenderit
							nostrum quia hic.
						</p>
					</div>
				</div>
				<div
					className="flex flex-col justify-center p-8 pr-5 pl-5
				gap-4 "
				>
					<h3 className="text-xl font-semibold mb-2">
						Create An Account
					</h3>
					<label className="flex flex-col gap-2 font-medium">
						Full Name
						<input
							type="text"
							placeholder="Enter full name"
							className="bg-transparent w-full h-9 p-5 rounded border border-amber-400
						"
						/>
					</label>
					<label className="flex flex-col gap-2 font-medium">
						Email Address
						<input
							type="text"
							placeholder="Enter email address"
							className="bg-transparent w-full h-9 p-5 rounded border border-amber-400
						"
						/>
					</label>
					<label className="flex flex-col gap-3 font-medium">
						Password
						<input
							type="text"
							placeholder="Enter Password"
							className="bg-transparent w-full h-9 p-5 rounded border border-amber-400
						"
						/>
					</label>
					<label className="flex gap-2 font-medium">
						<input type="checkbox" />
						Remember Me
					</label>
					<h6>
						Have an account ?{" "}
						<span className="underline text-amber-400">Login</span>
					</h6>
					<div>
						<MainButton text="Sign Up" />
					</div>
				</div>
			</section>
		</div>
	);
}
