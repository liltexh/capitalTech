import axios from "axios";

export async function goldUSD(argument) {
	try {
		const response = await axios.get(`https://api.gold-api.com/price/XAU`);
		const price = Math.round(response.data.price);
		return price;
	} catch (error) {
		console.error("Error fetching gold price:", error);
		throw error; // Rethrow the error after logging
	}
}
