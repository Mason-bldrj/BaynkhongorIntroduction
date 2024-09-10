// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK-HIS3CEwGp8WRI403UrI-27YebovknE",
  authDomain: "app-demo-554df.firebaseapp.com",
  projectId: "app-demo-554df",
  storageBucket: "app-demo-554df.appspot.com",
  messagingSenderId: "327926026641",
  appId: "1:327926026641:web:b08928505e1fc97b64ca30",
  measurementId: "G-BQTTG1HD3K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
