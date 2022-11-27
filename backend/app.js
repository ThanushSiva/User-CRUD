require("dotenv").config()
const express = require("express")
const connectToDB = require("./Config/db")
const userRoutes = require("./Routes/userRoutes")
const app = express();
const cors = require("cors");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

connectToDB();
app.use("/", userRoutes);

module.exports = app;