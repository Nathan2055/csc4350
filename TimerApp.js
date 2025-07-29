const express = require("express");
const app = express();
const port = 3000;

// Serve all static files in /public (HTML, CSS, JS, MP3, etc.)
app.use(express.static(__dirname + "/public"));

// Serve the main HTML page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/pomodoro.html");
});

// Serve the CSS file
app.get("/pomodoro-styles.css", (req, res) => {
    res.sendFile(__dirname + "/public/pomodoro-styles.css");
})

// Serve the Tailwind script
app.get("/tailwindcss-3.4.14.js", (req, res) => {
    res.sendFile(__dirname + "/public/tailwindcss-3.4.14.js");
})

// Serve the background image
app.get("/background.png", (req, res) => {
    res.sendFile(__dirname + "/public/background.png");
})

// Serve the alarm sound
app.get("/alarm.mp3", (req, res) => {
    res.sendFile(__dirname + "/public/alarm.mp3");
})

// Start the server
app.listen(port, () =>{
    console.log('App listening on port ' + port);
})
