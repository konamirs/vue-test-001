require("dotenv").config({
  path: "./config/config.env",
});
const express = require("express");
const { Authentication } = require("./routes");
const { ConnectDB } = require("./config/db");
const morgan = require("morgan");
const { errorConverter, errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");
const httpStatus = require("http-status");
const cors = require("cors");
const app = express();
const path = require("path");
var Mongoclient = require("mongodb").MongoClient;
// middlewares
app.use(cors());
app.use("/static/", express.static(path.join(__dirname, "./uploads/")));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
console.log({ poer: process.env.PORT });
const port = process.env.PORT || 3001;
ConnectDB();
const jobs = require("./models/jobs.models");
const degrees = require("./models/Degrees.models");
const spotlights = require("./models/spotlight.models");
const accordion = require("./models/accordion.models");

app.get("/", (req, res) => {
  res.send("Hi this working");
});

app.get("/api/jobs", (req, res) => {
  jobs.find().then((data) => {
    res.send(data);
  });
});

app.get(`/api/jobs/id`, (req, res) => {
  jobs.find().then((data) => {
    res.send(data);
  });
});

app.get("/api/accordion", (req, res) => {
  accordion.find().then((data) => {
    res.send(data);
  });
});

app.get("/api/degrees", (req, res) => {
  degrees.find().then((data) => {
    res.send(data);
  });
});

app.get("/api/spotlights", (req, res) => {
  spotlights.find().then((data) => {
    res.send(data);
  });
});
// routes
app.use("/api/v1", Authentication);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

app.listen(port, () => {
  console.log(`this is working on localhost:${port}`);
});
