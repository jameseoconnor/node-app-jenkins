const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

let PORT = 5000;

// Setup the app object
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// Load our routes object
const routes = require("./routes/routes.js")(app, fs);

app.listen(PORT, () => {
  console.log("Started server on port %s", PORT);
});
