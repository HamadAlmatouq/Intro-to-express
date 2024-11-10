const express = require("express");
const { request } = require("http");
const app = express();

app.use("/name", (request, response) => {
  response.json({ message: "Hamad Almatouq" });
});

app.listen(8000, () => {
  console.log("This application is running on localhost:8000");
});
