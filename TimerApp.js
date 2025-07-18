const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/pomodoro.html");
})

app.get("/pomodoro-styles.css", (req, res) => {
    res.sendFile(__dirname + "/public/pomodoro-styles.css");
})

app.listen(port, () =>{
    console.log('App listening on port ' + port);
})
