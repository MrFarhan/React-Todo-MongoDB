require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: "*",
};

// to redirect frontend
app.use(express.static(path.join(__dirname, "/Web/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/Web/build/index.html"));
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(require("./routes/todoRoute.js"));
const mongo = require("./db");

const connectToMongoDB = async () => {
  await mongo().then(() => {
    try {
      console.log("connect to mongodb! :) ");
    } catch (error) {
      console.log("error is", error);
    } finally {
      console.log("finally");
      //   mongoose.connection.close();
    }
  });
};

app.listen(PORT, () => {
  connectToMongoDB();
  console.log("server is running on ", PORT);
});
