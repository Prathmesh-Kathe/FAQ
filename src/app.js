const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require("path");
const connectDB = require("./config/db");
const faqRoutes = require("./routes/faqRoutes");
const faqRoutes2 = require('./routes/adminRoute')

const app = express();
// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Set up static files
// const rootDir = path.resolve(__dirname); // Use __dirname for stability
// app.use(express.static(path.join(rootDir, "public")));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Ensure correct path

// API Routes
app.use("/api", faqRoutes);
app.use("/admin" , faqRoutes2)


module.exports = app;
