// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4_6V_As_tAIblAB5ayqLn2rM6prI8nd4",
    authDomain: "project2-wddm121.firebaseapp.com",
    projectId: "project2-wddm121",
    storageBucket: "project2-wddm121.appspot.com",
    messagingSenderId: "518598888270",
    appId: "1:518598888270:web:55e09985d82d5fdfe96c1f",
    measurementId: "G-KN889DJYG3"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebaseApp.auth();

const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Attempting to sign up with:", email, password);

    // Create a new user with email and password
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Sign-up successful.
        console.log("Sign-up successful:", userCredential.user);
        document.write("You are Signed Up");
        setTimeout(() => {
            window.location.href = "/signIn"; // Assuming you have a signIn page to redirect to
        }, 1400);
    })
    .catch((error) => {
        // Handle sign-up errors.
        console.error("Sign-up error:", error.code, error.message);
    });
}

const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Attempting to sign in with:", email, password);

    // Sign in an existing user
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Sign-in successful.
        console.log("Sign-in successful:", userCredential.user);
        document.write("You are Signed In");
        setTimeout(() => window.location.href = "/", 1400); // Assuming the root page is the target after sign-in
    })
    .catch((error) => {
        // Handle sign-in errors.
        console.error("Sign-in error:", error.code, error.message);
    });
}

// Check for and handle the auth state at the load of every page
onAuthStateChanged(auth, user => {
    if (user) {
        console.log("User is signed in as:", user.email);
        // Additional user info or redirect can be handled here if needed
    } else {
        console.log("No user is signed in.");
       
    }
});