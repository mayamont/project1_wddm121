// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAwMd2QtlJi9A8i-ay-szs7meUk6s-m08s",

    authDomain: "project-3-7b269.firebaseapp.com",
  
    databaseURL: "https://project-3-7b269-default-rtdb.firebaseio.com",
  
    projectId: "project-3-7b269",
  
    storageBucket: "project-3-7b269.appspot.com",
  
    messagingSenderId: "21869913357",
  
    appId: "1:21869913357:web:3808fb9892357efa897c44"
  
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
        setTimeout(() => {
            window.location.href = "/signIn"
        }, 1400)
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
        setTimeout(() => window.location.href = "/fitnessTracker", 1400)
    })
    .catch((error) => {
        console.log(error.code)
        console.log(error.message)
    })
}

const signOut = () => {
    firebase.auth().signOut()
    .then(() => {
        // Sign-out successful.

        document.write("You are Signed Out")
        setTimeout(() => window.location.href = "/signIn", 1400)
    })
    .catch((error) => {
        // An error happened.
        console.log(error.code);
        console.log(error.message);
    });
}