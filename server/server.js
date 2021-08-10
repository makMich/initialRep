const express = require("express");
const app = express();

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

app.get("/get", (req, res) => {
    console.log("get complited")
    res.send('GET request to the homepage');
    res.redirect("/");
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
