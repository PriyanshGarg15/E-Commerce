import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBDdgZkm1R1Sd2z8BulwZoPq_QcOID5V1M",
  authDomain: "shop-3a302.firebaseapp.com",
  projectId: "shop-3a302",
  storageBucket: "shop-3a302.appspot.com",
  messagingSenderId: "155676264218",
  appId: "1:155676264218:web:6d9d5b75cdc7d9da21cea3",
  measurementId: "G-EMDZV6BJNK"
};


const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig;