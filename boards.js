const express = require("express");
const router = express.Router();
const db = require("./dbQueries/connectDb");
const writeData = require("./dbQueries/writeDb");
const updateData = require("./dbQueries/updateData");

router.get("/", (req, res, next) => {
  try {
    db.all("SELECT * FROM boards", [], (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.status(200).json(rows);
      next();
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    //console.log(req.body);
    writeData(db, req.body.title);
    db.all("SELECT * FROM boards", (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      let last = rows[rows.length - 1];
      res.status(201).json({ id: last.id, stage: 1, title: req.body.title });
      next();
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    console.log(req.params.id, req.body.stage);
    updateData(db, req.params.id, req.body.stage);
    res.status(200).json({ message: "success" });
    next();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
