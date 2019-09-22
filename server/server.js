const express = require("express");
const server = express();
const cors = require("cors");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/server-test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

server.listen(4000, () => console.log("Server is ready on port 4000"));
server.use(express.json());
server.use(cors());
server.set("json spaces", 2);

server.use("/cards", require("./routes/cards"));
