/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			clipPath: {
				"diagonal-slice": "polygon(0 0,100% 0 ,100% 100%)",
			},
			boxShadow: {
				"box-shadow": "0 0 16px rgba(240, 203, 70, 0.7)",
			},
		},
	},
	plugins: [require("tailwind-clip-path")],
};
