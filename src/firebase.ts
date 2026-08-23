import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCEeW_tLz0Jwpzdf-CMQBGPZUubXxU4Ejk",
  authDomain: "aion-ims.firebaseapp.com",
  projectId: "aion-ims",
  storageBucket: "aion-ims.firebasestorage.app",
  messagingSenderId: "104721340823",
  appId: "1:104721340823:web:8ebdf90580bbeaf80fccd2"
};

const app = initializeApp(firebaseConfig);

export { app };
