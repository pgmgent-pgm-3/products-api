const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

const apiRouter = require("./api");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", cors(), apiRouter);

app.listen(PORT, () => {
  console.log(`Server has started, listening to http://localhost:${PORT}`);
});
