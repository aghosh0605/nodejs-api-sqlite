const runQueries = require("./readDb");

function insertRows(newdb, title) {
  newdb.run("INSERT INTO boards(title) VALUES(?)", [title], (err) => {
    if (err) {
      return console.log("Error in Database Write:  " + err.message);
    }
    console.log(`Row was added to the table`);
    //runQueries(newdb);
  });
}
module.exports = insertRows;
