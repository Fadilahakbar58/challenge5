const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// PORT with the default 8000
const PORT = process.env.PORT || 8000;

// Path in PUBLIC Directory
app.use(express.static(path.join(__dirname, "public")));
// Set View Engine
app.set("view engine", "ejs");

// import controller
const carsController = require("./controllers/carsController");
const carsService = require("./services/carsService");
const req = require("express/lib/request");
const res = require("express/lib/response");

// endpoint crud
app.post("/cars", carsController.createCars);
app.post("/cars/:id", carsController.updateCarsById);
app.post("/deleteCars/:id", carsController.deleteCarsById);

// define endpoint ejs
app.get("/", async (req, res) => {
  const getCars = await carsController.getCars();
  res.render("index", {
    cars: getCars,
  });
});

app.get("/cars", (req, res) => {
  res.render("create");
});

app.get("/update/:id", carsController.renderCarById);

// Listening to PORT
app.listen(PORT, () => {
  console.log(`Server nyala di http://localhost:${PORT}`);
});
