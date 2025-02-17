// Firebase configuration copied from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyBvJCpvsnHDQqV6oW4XHXTp11AETXdpyv8",
  authDomain: "loginsignup-35ead.firebaseapp.com",
  projectId: "loginsignup-35ead",
  storageBucket: "loginsignup-35ead.appspot.com", // Note: You had 'firebasestorage.app', which is incorrect
  messagingSenderId: "954072223066",
  appId: "1:954072223066:web:49bf37c0f179166f9cb763",
  measurementId: "G-DJLKX31V66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
