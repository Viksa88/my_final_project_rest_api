const express = require("express");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");
require("dotenv").config();
const users = require("./routes/users");
const auth = require("./routes/auth");
const cards = require("./routes/cards");


mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/cards", cards);


const port = 3000;
http.listen(port, () => console.log(`Listening on port ${port}...`));
