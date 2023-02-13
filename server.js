const express = require("express");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movie-routes");

const PORT = 3000;
// const URL = "mongodb://localhost:27017/moviebox";
const URL =
  "mongodb+srv://Yaroslav:ncOAMZFvpbpaqGBm@cluster0.i8bbrng.mongodb.net/moviebox?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use(movieRoutes);

mongoose.set("strictQuery", true);

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(`DB connection error: ${err}`);
  });

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});
