import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_PUBLIC_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
	appId: process.env.REACT_APP_APP_ID,
};

debugger;

let instance = null;

export default function getFirebase() {
	if (instance) {
		return instance;
	}

	instance = initializeApp(firebaseConfig);
	return instance;
}
