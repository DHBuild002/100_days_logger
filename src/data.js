import { Database } from 'sqlite3'

// This does not appear to be necessary:
  // const sqlite = require("sqlite3").verbose();

// Exported/Used in index.js
export const localDatabase = () => {
  // DB import
  const path = "../sqlite/logs.db";

  let db = new Database(path, (err) => {
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
