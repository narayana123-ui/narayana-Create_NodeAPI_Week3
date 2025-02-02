const express = require("express");
const app = express();
const port = 3000;

const mongoose = require('mongoose')

/*
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Example app listening on port ${port}");
});
*/
const playerRoutes = require("./routes/players");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/players", playerRoutes);

mongoose
  .connect("mongodb://localhost:27017/MyFirstCollectionWeek2")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Example app listening on port" + port);
    });
  })
  .catch((err) => console.error("Failed to connect", err));