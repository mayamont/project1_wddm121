const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = 8080;

app.use(express.static(__dirname));
app.use(express.static('assets'));

app.use(express.static(__dirname + "/public"));
app.set("views", "./views");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");
app.set("view engine", "ejs");


//ROUTES HERE

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get("/", async function (req, res) {
    res.render('signin', {
        title: 'Sign In',
        page: 'signin'
    });
});

app.get("/fitnessTracker", async function (req, res) {
    res.render('fitnessTracker', {
        title: 'Fitness Tracker',
        page: 'fitnesstracker'
    });
});

app.get("/profile", async function (req, res) {
    res.render('profile', {
        title: 'Profile',
        page: 'profile'
        // other data
    });
});

app.get("/activities", async function (req, res) {
    res.render('activities', {
        title: 'Activities',
        page: 'activities'
    });
});

app.get("/workoutGraph", async function (req, res) {
    res.render('workoutGraph', {
        title: 'Workout Graph',
        page: 'workout-graph'
    });
});

app.get("/signIn", async function (req, res) {
    res.render('signin', {
        title: 'Sign In',
        page: 'signin'
    });
});

app.get("/signUp", async function (req, res) {
    res.render('signup', {
        title: 'Sign Up',
        page: 'signup'
    });

});


