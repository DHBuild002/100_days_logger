const Datastore = require('nedb');
const database = new Datastore({ filename: 'log.db', autoload: true })

database.insert({testEntry: "Just a test from database.js"});

export { database };
