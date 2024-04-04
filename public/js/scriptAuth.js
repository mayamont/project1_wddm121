// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyA4_6V_As_tAIblAB5ayqLn2rM6prI8nd4",
    authDomain: "project2-wddm121.firebaseapp.com",
    projectId: "project2-wddm121",
    storageBucket: "project2-wddm121.appspot.com",
    messagingSenderId: "518598888270",
    appId: "1:518598888270:web:55e09985d82d5fdfe96c1f",
    measurementId: "G-KN889DJYG3"
});

//Authentication
//Init authentication from Firebase console
const auth = firebaseApp.auth()

const signUp = () => {
    //Allow us to sign up
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
        //If successfully created user 
        document.write("You are Signed Up")
        console.log(result)
    })
    .catch((error) => {
        //If unsuccessfully created user 
        console.log(error.code)
        console.log(error.message)
    })
}

const signIn = () => {
    //Allow us to sign in
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
        //Signed IN
        document.write("You are Signed In")
        setTimeout(() => window.location.href = "/", 1500)
    })
    .catch((error) => {
        console.log(error.code)
        console.log(error.message)
    })
}

