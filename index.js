const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3002;
const fs = require("fs");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

fs.readdirSync("./src/routes").map((route) => {
  app.use("/api", require(`./src/routes/${route}`));
});

app.get("/", (req, res) => {
  res.json({ info: "request Succeed" });
});

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
