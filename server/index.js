const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://user123:password486@cluster0.jaeyb.mongodb.net/merntutorial?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY");
});
