export const localDatabase = () => {
  // DB import
  const path = "../sqlite/logs.db";
  const sqlite = require("sqlite3").verbose();

  let db = new sqlite.Database(path, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the logs database.");
  });

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Close the database connection.");
  });

  console.log(db);
};
