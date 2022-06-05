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
    db.all(
      "SELECT * FROM boards WHERE title=?",
      [req.body.title],
      (err, row) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }

        res.status(201).json(row);
        next();
      }
    );
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    let inStage = req.body.stage;
    if (inStage != 1 && inStage != 2 && inStage != 3) {
      res
        .status(400)
        .json({ error: "Please enter valid stage value as payload" });
      return;
    }

    //console.log(req.params.id, req.body.stage);
    updateData(db, req.params.id, req.body.stage);
    db.get("SELECT * FROM boards WHERE id=?", [req.params.id], (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.status(201).json(row);
      next();
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
