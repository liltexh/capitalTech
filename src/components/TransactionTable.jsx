import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const TransactionTable = () => {
	const data = {
		labels: ["1", "2", "3", "4", "5", "6", "7"],
		datasets: [
			{
				label: "Wave Line",
				data: [10, 20, 15, 30, 25, 40, 35],
				borderColor: "#fbbf24", // Amber-400 in Tailwind (hex: #fbbf24)
				borderWidth: 2,
				tension: 0.4,
				pointBackgroundColor: "#000", // Black points
				pointBorderWidth: 2,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: { display: false }, // Hide legend if unnecessary
		},
		scales: {
			x: {
				grid: { color: "rgba(255, 255, 255, 0.1)" }, // X-axis grid lines (faint white)
				title: { display: true, text: "X-Axis", color: "#fff" }, // White axis label
				ticks: { color: "#fff" }, // White X-axis labels
			},
			y: {
				grid: { color: "rgba(255, 255, 255, 0.1)" }, // Y-axis grid lines
				title: { display: true, text: "Y-Axis", color: "#fff" }, // White axis label
				ticks: { color: "#fff" }, // White Y-axis labels
				beginAtZero: true,
			},
		},
	};

	return (
		<div className="min-w-1 w-full aspect-video rounded-xl flex justify-start items-end">
			<Line
				className="min-w-1"
				data={data}
				options={options}
			/>
		</div>
	);
};

export default TransactionTable;
