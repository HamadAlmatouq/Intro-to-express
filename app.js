const express = require("express");
const { request } = require("http");
const app = express();

app.use("/name", (request, response) => {
  response.json({ message: "Hamad Almatouq" });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`This application is running on localhost:${PORT}`);
});
