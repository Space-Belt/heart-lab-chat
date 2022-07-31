import { getAuth } from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import * as firebase from "firebase/app";
// import 'firebase/database';

const firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
  authDomain: `${process.env.NEXT_PUBLIC_AUTH_DOMAIN}`,
  projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID}`,
  appId: `${process.env.NEXT_PUBLIC_APP_ID}`,
};

let app;
if (!firebase.getApps().length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}
export const dbService = getFirestore(app);
export const authService = getAuth(app);
export const firebaseInstance = firebase;
