// server.js
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes.js");
const cors = require("cors");


const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

console.log('MongoDB URI:', process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

app.use(express.json());

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
