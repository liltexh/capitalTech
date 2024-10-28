import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BgRepeat from "../assets/images/bgrepeat.png";
import IstockA from "../assets/images/istockphoto-1386479313-1024x1024.jpg";
import IstockB from "../assets/images/istockphoto-1388253782-1024x1024.jpg";
import IstockC from "../assets/images/istockphoto-1437816897-1024x1024.jpg";
import IstockD from "../assets/images/istockphoto-1476170969-1024x1024.jpg";

import { useState, useEffect } from "react";

import "../CustomStyles/ReviewStyles.css";
import "../index.css";

const ReviewData = [
	{
		context:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est deserunt omnisquidem qui debitis voluptate doloribus praesentium quos, sunt mollitia aaperiam. Unde impedit laboriosam, fugiat natus, molestiae dignissimos amet.",
		name: "Lorem ipsum dolor.",
		position: "Lorem ipsum dolor.",
		star: 4,
		img: IstockA,
	},
	{
		context:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est deserunt	omnisquidem qui debitis voluptate doloribus praesentium quos, atis natus delectus alias officia architecto, debitis accusantium. Quis, voluptatibus. amet.",
		name: "Lorem ipsum dolor.",
		position: "Lorem ipsum dolor.",
		star: 4,
		img: IstockB,
	},
	{
		context: "Lorem laboriosam, fugiat natus, molestiae dignissimos amet.",
		name: "Lorem ipsum dolor.",
		position: "Lorem ipsum dolor.",
		star: 4,
		img: IstockC,
	},
	{
		context:
			"Lorem ipsum dolor sit amet, consectetur adipisicing eli laboriosam, fugiat natus, molestiae dignissimos amet.",
		name: "Lorem ipsum dolor.",
		position: "Lorem ipsum dolor.",
		star: 4,
		img: IstockD,
	},
];

function ReviewSlide() {
	const mobileBreakpoint = 480; // Mobile view max width
	const tabletBreakpoint = 768; // Tablet view max width
	// Set initial state for the view (mobile, tablet, desktop)
	const [view, setView] = useState(1);

	useEffect(() => {
		// Function to check screen size and update view
		const handleResize = () => {
			const width = window.innerWidth;

			if (width <= mobileBreakpoint) {
				setView(1);
			} else if (width <= tabletBreakpoint) {
				setView(2);
			} else {
				setView(3);
			}
		};

		// Check initial screen size
		handleResize();

		// Add resize event listener
		window.addEventListener("resize", handleResize);

		// Cleanup listener on unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: view,
		slidesToScroll: 1,
		arrows: false, // Disables navigation arrows
		autoplay: true, // Enables auto-scrolling
		autoplaySpeed: 3000, // Time between scrolls (3 seconds)
		pauseOnHover: true, // Pauses auto-scroll on hover
		swipe: true, // Allows swiping on touch devices
		draggable: true, // Enables dragging on desktop devices
		customPaging: (i) => (
			<div className="slick-dots">
				<span className="bullet" />
			</div>
		),
		dotsClass: "slick-dots slick-thumb",
	};

	return (
		<section
			style={{
				backgroundImage: `url('${BgRepeat}')`,
			}}
			className="back_background"
		>
			<div
				style={{ padding: "80px 20px 80px 20px" }}
				className="front_blur_background flex flex-col justify-center items-center"
			>
				<h3 className="text-2xl  font-semibold mb-5">
					What Users Say{" "}
					<span className="text-amber-400 underline">About Us</span>
				</h3>
				<p className="mb-10">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
					voluptatum eaque earum quos quia? Id aspernatur ratione, voluptas
					nulla rerum laudantium neque ipsam eaque
				</p>

				<div className="review-slider-container w-full">
					<Slider {...settings}>
						{ReviewData.map((review, index) => (
							<div
								key={index}
								className="review-slide"
							>
								<div className="h-3/5">
									<p className="review-context">{review.context}</p>
								</div>
								<img
									src={review.img}
									alt={review.name}
									className="review-img"
								/>
								<div className="w-full h-full">
									<h4 className="review-name text-xl font-semibold">
										{review.name}
									</h4>
									<h4 className="review-position text-xl">{review.position}</h4>
									<span className="review-star">
										{"⭐".repeat(review.star)}
									</span>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
}

export default ReviewSlide;

// <section
// 				style={{
// 					backgroundImage: `url('${BgRepeat}')`,
// 					padding: "250px 20px 120px 20px"
// 				}}
// 				className=" home_card flex flex-col items-center justify-center"
// 			>
// 				<h3 className="text-3xl  font-semibold">
// 					What Users Say{" "}
// 					<span className="text-amber-400 underline">About Us</span>
// 				</h3>
// 				<p>
// 					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
// 					Esse voluptatum eaque earum quos quia? Id aspernatur
// 					ratione, voluptas nulla rerum laudantium neque ipsam eaque
// 				</p>
// 				<ReviewSlide />
// 			</section>
