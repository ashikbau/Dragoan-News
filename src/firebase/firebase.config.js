// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc5QoipMMRnYhZmgEXT0bo6pRzEtbAauY",
  authDomain: "dragoan-news-e5fd1.firebaseapp.com",
  projectId: "dragoan-news-e5fd1",
  storageBucket: "dragoan-news-e5fd1.firebasestorage.app",
  messagingSenderId: "499033149491",
  appId: "1:499033149491:web:11ff9f2910da2d1542d346"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default(app);