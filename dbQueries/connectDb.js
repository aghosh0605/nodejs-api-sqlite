var sqlite3 = require("sqlite3").verbose();
const db_name = "boards.db";
const insertRows = require("./writeDb");

function createDatabase() {
  var newdb = new sqlite3.Database(db_name, (err) => {
    if (err) {
      console.log("Error in Database Create:  " + err);
      return;
    }
    console.log("Database Created. Creating New Table...");
    createTables(newdb);
  });
}

function createTables(newdb) {
  newdb.run(
    `CREATE TABLE boards(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        stage INTEGER NOT NULL DEFAULT 1,
        title INTEGER NOT NULL
    );`,
    (err) => {
      if (err) {
        console.log("Error in Table Creation:  " + err);
        return;
      }
      insertRows(newdb, "Test");
    }
  );
  console.log("Table Created");
}

const db = new sqlite3.Database(db_name, sqlite3.OPEN_READWRITE, (err) => {
  if (err && err.code == "SQLITE_CANTOPEN") {
    console.log("No database found. Creating one with the provided name...");
    createDatabase(db_name);
    return;
  } else if (err) {
    console.log("Error in Database Connect:  " + err);
    return;
  }
  //runQueries(db);
});

module.exports = db;
