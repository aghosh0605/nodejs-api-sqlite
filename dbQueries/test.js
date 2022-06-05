const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(
  "./boards.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
      console.log("No database of that name :(");
      //createDatabase();
      return;
    } else if (err) {
      console.log("Getting error " + err);
      exit(1);
    }
    console.log(db);
    //runQueries(db);
  }
);
//Retrieving All Rows
db.all("SELECT * FROM boards", (error, rows) => {
  rows.forEach((row) => {
    console.log(row.id + " " + row.stage + row.title);
  });
});
