import firstSecImg from "../assets/images/Picsart_24-10-18_01-42-56-443.jpg";
import HomeIcon from "../assets/Icons/home-outline.svg";

import callIcon from "../assets/Icons/phone-call.svg";

import messageIcon from "../assets/Icons/envelope.svg";

import mapIcon from "../assets/Icons/land-location.svg";

import { NavLink } from "react-router-dom";
import MainButton from "../components/MainButton.jsx";
import "../index.css";

export default function Contact() {
	const FilterContact = ContactDetails.filter(
		(contact) => contact.detail !== ""
	);
	return (
		<>
			<section
				style={{
					backgroundImage: `url('${firstSecImg}')`,
				}}
				className="back_background mb-20"
			>
				<div
					style={{ padding: "180px 20px 80px 20px" }}
					className="front_blur_background flex flex-col gap-4"
				>
					<span>
						<h2 className="text-3xl font-bold">Contact Us</h2>
					</span>
					<span className="flex justify-start items-center gap-1">
						<img
							src={HomeIcon}
							alt="Home img"
							width="24px"
						/>
						<NavLink to="/">
							<span className="font-semibold">Home</span>
						</NavLink>
						<h5 className="font-normal"> - Contact Us</h5>
					</span>
				</div>
			</section>
			<section
				style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
				className="flex flex-col justify-center glowing_shadow  mr-auto ml-auto
				mb-20 p-4 rounded-xl
				max-w-3xl"
			>
				<div className="mt-8 mb-8">
					<h4 className="text-3xl font-semibold mb-3">Contact</h4>
					<h5 className="text-2xl font-semibold text-amber-400 mb-2">
						Feel free to reach out!
					</h5>
					<h6 className="text-xl">Leave us a Message</h6>
				</div>
				<div>
					<input
						type="text"
						placeholder="FullName"
						className="bg-transparent w-full h-9 p-1 rounded border border-amber-400
						mb-4"
					/>
					<input
						type="email"
						placeholder="Email Address"
						className="bg-transparent w-full h-9 p-1 rounded border border-amber-400
						mb-4"
					/>
					<textarea
						name="Messenge"
						id="Message"
						cols="30"
						rows="3"
						placeholder="Message"
						className="bg-transparent w-full p-1 rounded border border-amber-400
						mb-4"
					></textarea>
				</div>
				<div className=" mt-5 mb-5">
					<MainButton text="Send Message" />
				</div>
			</section>
			<section className="">
				<div className="mb-10 ml-10">
					<h4 className="text-3xl font-semibold mb-2">
						Quick <span className="text-amber-400">Support.</span>
					</h4>
					<h6 className="font-semibold">Here is our Contact Details</h6>
				</div>
				<div className="grid gap-1 grid-cols-1 md:grid-cols-3 ">
					{FilterContact.map((contact, idx) => (
						<div
							key={idx}
							style={{ border: "2px solid black" }}
							className="bg-amber-400  flex flex-col gap-4 m-3 p-10 pl-8 rounded
							glowing_shadow "
						>
							<div className="flex flex-col gap-3">
								<img
									src={contact.icon}
									alt={contact.icon}
									width="24px"
								/>
								<h5 className="text-xl font-bold text-black">
									{contact.prompt}
								</h5>
							</div>
							<div className="flex flex-col gap-2">
								<p className="text-black">{contact.detail[0]}</p>
								<p className="text-black">
									{contact.detail[1] ? contact.detail[1] : null}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

const ContactDetails = [
	{
		icon: callIcon,
		prompt: "Call Us",
		detail: ["0902727726", "6282828829262"],
	},
	{
		icon: messageIcon,
		prompt: "Mail Us",
		detail: ["when@gmail.com", "wikend@when.com"],
	},
	{
		icon: mapIcon,
		prompt: "Visit Us",
		detail: ["dang"],
	},
];
