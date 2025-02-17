// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvJCpvsnHDQqV6oW4XHXTp11AETXdpyv8",
  authDomain: "loginsignup-35ead.firebaseapp.com",
  projectId: "loginsignup-35ead",
  storageBucket: "loginsignup-35ead.firebasestorage.app",
  messagingSenderId: "954072223066",
  appId: "1:954072223066:web:49bf37c0f179166f9cb763",
  measurementId: "G-DJLKX31V66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle signup
async function signup() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const messageDiv = document.getElementById("signupMessage");

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        messageDiv.style.color = "green";
        messageDiv.innerText = "Signup successful!";
    } catch (error) {
        messageDiv.style.color = "red";
        messageDiv.innerText = error.message;
    }
}

// Handle login
async function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const messageDiv = document.getElementById("loginMessage");

    try {
        await signInWithEmailAndPassword(auth, email, password);
        messageDiv.style.color = "green";
        messageDiv.innerText = "Login successful!";
    } catch (error) {
        messageDiv.style.color = "red";
        messageDiv.innerText = error.message;
    }
}

// Detect auth state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is logged in
        console.log("User logged in:", user.email);
    } else {
        // User is logged out
        console.log("User logged out");
    }
});
