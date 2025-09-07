const {drizzle}  = require('drizzle-orm/node-postgres');


// postgres://username:password@localhost:5432/mydb
const db = drizzle("postgres://postgres:admin@localhost:5432/mydb");

module.exports = db;