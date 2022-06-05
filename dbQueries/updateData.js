const runQueries = require("./readDb");

function updateRows(newdb, id, stage) {
  newdb.run(`UPDATE boards SET stage=? WHERE id=?`, [stage, id], (err) => {
    if (err) {
      return console.log("Error in Database edit:  " + err.message);
    }
    console.log(`Row was edited to the table`);
    //runQueries(newdb);
  });
}
module.exports = updateRows;
