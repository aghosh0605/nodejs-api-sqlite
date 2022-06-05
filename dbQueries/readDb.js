function runQueries(db) {
  db.all("SELECT * FROM boards", (err, rows) => {
    if (err) {
      console.log("Error in Database Read:  " + err);
      return;
    }
    console.log("id" + " " + "stage" + " " + "title");
    rows.forEach((row) => {
      console.log(row.id + "  " + row.stage + "     " + row.title);
    });
  });
}
module.exports = runQueries;
