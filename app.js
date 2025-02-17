// Import the necessary functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvJCpvsnHDQqV6oW4XHXTp11AETXdpyv8",
  authDomain: "loginsignup-35ead.firebaseapp.com",
  projectId: "loginsignup-35ead",
  storageBucket: "loginsignup-35ead.appspot.com",
  messagingSenderId: "954072223066",
  appId: "1:954072223066:web:49bf37c0f179166f9cb763",
  measurementId: "G-DJLKX31V66"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);  // This should be initialized AFTER app

// Signup function
async function signup() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const messageDiv = document.getElementById("signupMessage");

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        messageDiv.style.color = "green";
        messageDiv.innerText = "Signup successful! User: " + userCredential.user.email;
        console.log(userCredential.user); // Log user details for debugging
    } catch (error) {
        messageDiv.style.color = "red";
        messageDiv.innerText = "Error: " + error.message;
        console.error(error); // Log error details to the console
    }
}

// Login function
async function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const messageDiv = document.getElementById("loginMessage");

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        messageDiv.style.color = "green";
        messageDiv.innerText = "Login successful! Welcome, " + userCredential.user.email;
        console.log(userCredential.user); // Log user details for debugging
    } catch (error) {
        messageDiv.style.color = "red";
        messageDiv.innerText = "Error: " + error.message;
        console.error(error); // Log error details to the console
    }
}

// Ensure the functions are accessible to the HTML
document.getElementById("signupBtn").onclick = signup;
document.getElementById("loginBtn").onclick = login;
