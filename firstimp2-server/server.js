const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();
const path = require("path");

// app
const app = express();

// db
mongoose
  .connect((process.env.DATABASE), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());
console.log("cors enabled")

app.disable('etag');

// routes middleware

readdirSync("./routes/").map((r) => app.use("/api", require("./routes/" + r)));


// port
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "production") {

  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

app.listen(port, () => console.log(`Server is running on port ${port}`));
