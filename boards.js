const express = require("express");
const router = express.Router();
const db = require("./dbQueries/connectDb");
const writeData = require("./dbQueries/writeDb");
const readData = require("./dbQueries/readDb");

router.get("/", (req, res, next) => {
  try {
    db.all("SELECT * FROM boards", [], (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      readData(db);
      res.status(200).json(rows);
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    writeData(db, req.body.title);
    res.status(200).json({ message: "success" });
    next();
  } catch (error) {
    console.log(error);
  }
});

router.patch("/", (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
