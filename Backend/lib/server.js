const express = require("express");
const core = require("cors");

// data
const homeData = require("../data/homeData");
const app = express();
// for send data
app.use(express.json());
app.use(core());

app.get("/", (req, res) => {
  res.send(homeData);
});

app.listen("6600", () => {
  console.log("app run");
});
