import express from "express";

let app = express();

app.listen("3000", () => {
  console.log("Server runnning");
});

app.get("/", (req, res) => {
  res.status(200);
  res.set("Content-Type", "text/plain");
  res.write("Hey there");
  res.send();
});

console.log("test");
