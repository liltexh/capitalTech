import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../config/Firebase";
export async function createUserInFireStore(
	authId,
	fullname,
	email,
	number,
	password
) {
	const CollectionName = "users";
	const userRef = doc(db, CollectionName, authId);
	const userInfo = {
		authId,
		fullname,
		email,
		number,
		password,
		isVerified: false,
		createdAt: serverTimestamp(),
	};

	try {
		await setDoc(userRef, userInfo);
	} catch (error) {
		throw error;
	}
}
