// Packages
const express = require("express")
const path = require("path")
const app = express();

// API starts here.
app.get("/status", (req, res, next) => {
 res.status(200).send(200);
});

app.listen(80, () => {
 console.log("Server running on port 80");
});
