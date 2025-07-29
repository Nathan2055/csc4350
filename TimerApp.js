const express = require("express");
const app = express();
const port = 3000;

// Serve all static files in /public (HTML, CSS, JS, MP3, etc.)
app.use(express.static(__dirname + "/public"));

// Serve the main HTML page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/pomodoro.html");
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});
