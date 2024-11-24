// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD3p2Y_ds2auUrxi85BNHtYdRsnMsqMRnU",
	authDomain: "capitaltech-01.firebaseapp.com",
	projectId: "capitaltech-01",
	storageBucket: "capitaltech-01.firebasestorage.app",
	messagingSenderId: "307396172593",
	appId: "1:307396172593:web:8507fb35aa11eaa334ee10",
	measurementId: "G-YGXT1J5X3E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth(app);
export const db = getFirestore(app);
const appCheck = initializeAppCheck(app, {
	provider: new ReCaptchaV3Provider("6LcH-IgqAAAAANQaGUC7RtrtkG81sD2ZdoO14JUY"),
	isTokenAutoRefreshEnabled: true,
});
