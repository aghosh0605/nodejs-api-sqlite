const express = require("express");
const boardsRouter = require("./boards");
const bodyParser = require("body-parser");
const app = express();
port = 3000;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Healthcheck Ok" });
});

app.use("/boards", boardsRouter);

app.listen(port, () => {
  console.log(`Webserver listening on port ${port}`);
});
