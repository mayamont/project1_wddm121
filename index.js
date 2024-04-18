const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files like CSS, JavaScript, images, etc.

// Define routes
// For example:
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/signin.html'); // Serve the login page
});

app.get('/singup', (req, res) => {
    res.sendFile(__dirname + '/public/singup.html'); // Serve the login page
  });

  
app.get('/fitness', (req, res) => {
  res.sendFile(__dirname + '/public/fitnesstracker.html'); // Serve the fitness tracker page
});

app.get('/activities', (req, res) => {
  res.sendFile(__dirname + '/public/activities.html'); // Serve the activities page
});

app.get('/profile', (req, res) => {
  res.sendFile(__dirname + '/public/profile.html'); // Serve the profile page
});
app.get('/workout-graph', (req, res) => {
    res.sendFile(__dirname + '/public/workout-graph.html'); // Serve the profile page
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
