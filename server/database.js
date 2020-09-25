const Datastore = require('nedb');
const database = new Datastore('log.db');

export { database };